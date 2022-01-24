import { HookNextFunction, Model, model, Schema } from 'mongoose';
import bcrypt from 'bcrypt';

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    validatePassword(password: string): boolean;
}

const userSchema: Schema<IUser> = new Schema<IUser>({
    name: { type: String, required: true },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

userSchema.pre('save', async function (next: HookNextFunction) {
    const thisObj = this as IUser;

    if (!this.isModified('password')) {
        return next();
    }

    try {
        thisObj.password = await bcrypt.hash(thisObj.password, 10);
        return next();
    } catch (e: any) {
        return next(e);
    }
});

userSchema.methods.validatePassword = async function (pass: string) {
    return bcrypt.compare(pass, this.password);
};

export const User: Model<IUser> = model<IUser>('User', userSchema);

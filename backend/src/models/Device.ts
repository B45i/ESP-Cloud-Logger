import { Document, Model, model, Schema, Types } from 'mongoose';
import { IUser } from './User';

export interface IDevice extends Document {
    title: string;
    description: string;
    image: string;
    location: string;
    user: IUser;
}

const deviceSchema: Schema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    location: {
        type: String,
    },
    user: { type: Types.ObjectId, ref: 'User', required: true },
    createdAt: {
        type: Date,
        default: Date.now,
        immutable: true,
    },
});

export const Device: Model<IDevice> = model<IDevice>('Device', deviceSchema);

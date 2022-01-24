import { Document, Model, model, Schema } from 'mongoose';

export interface IDevice extends Document {
    title: string;
    description: string;
    image: string;
    location: string;
}

const deviceSchema: Schema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    location: {
        type: String,
    },
    // creator: { type: Types.ObjectId, ref: 'User' },
    createdAt: {
        type: Date,
        default: Date.now,
        immutable: true,
    },
});

export const Device: Model<IDevice> = model<IDevice>('Device', deviceSchema);

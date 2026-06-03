import { Schema, model } from 'mongoose';

export interface UserDocument {
  username: string;
  email: string;
  displayName: string;
  teamName: string;
  fitnessGoal: string;
  joinedAt: Date;
}

const userSchema = new Schema<UserDocument>(
  {
    username: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    displayName: { type: String, required: true, trim: true },
    teamName: { type: String, required: true, trim: true },
    fitnessGoal: { type: String, required: true, trim: true },
    joinedAt: { type: Date, required: true },
  },
  { timestamps: true }
);

export const User = model<UserDocument>('User', userSchema);
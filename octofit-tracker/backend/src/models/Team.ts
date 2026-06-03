import { Schema, model } from 'mongoose';

export interface TeamDocument {
  name: string;
  captain: string;
  memberCount: number;
  weeklyGoalMinutes: number;
  motto: string;
}

const teamSchema = new Schema<TeamDocument>(
  {
    name: { type: String, required: true, unique: true, trim: true },
    captain: { type: String, required: true, trim: true },
    memberCount: { type: Number, required: true, min: 1 },
    weeklyGoalMinutes: { type: Number, required: true, min: 0 },
    motto: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

export const Team = model<TeamDocument>('Team', teamSchema);
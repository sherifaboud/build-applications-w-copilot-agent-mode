import { Schema, model } from 'mongoose';

export interface LeaderboardEntryDocument {
  username: string;
  teamName: string;
  rank: number;
  totalPoints: number;
  weeklyMinutes: number;
}

const leaderboardEntrySchema = new Schema<LeaderboardEntryDocument>(
  {
    username: { type: String, required: true, trim: true },
    teamName: { type: String, required: true, trim: true },
    rank: { type: Number, required: true, min: 1 },
    totalPoints: { type: Number, required: true, min: 0 },
    weeklyMinutes: { type: Number, required: true, min: 0 },
  },
  { timestamps: true }
);

export const LeaderboardEntry = model<LeaderboardEntryDocument>('LeaderboardEntry', leaderboardEntrySchema);
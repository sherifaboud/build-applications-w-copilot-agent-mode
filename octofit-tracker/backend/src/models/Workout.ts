import { Schema, model } from 'mongoose';

export interface WorkoutDocument {
  title: string;
  focusArea: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  durationMinutes: number;
  suggestedForGoal: string;
  exercises: string[];
}

const workoutSchema = new Schema<WorkoutDocument>(
  {
    title: { type: String, required: true, trim: true },
    focusArea: { type: String, required: true, trim: true },
    difficulty: { type: String, required: true, enum: ['Beginner', 'Intermediate', 'Advanced'] },
    durationMinutes: { type: Number, required: true, min: 1 },
    suggestedForGoal: { type: String, required: true, trim: true },
    exercises: [{ type: String, required: true, trim: true }],
  },
  { timestamps: true }
);

export const Workout = model<WorkoutDocument>('Workout', workoutSchema);
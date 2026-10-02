import { Schema, model } from 'mongoose';

const workoutSchema = new Schema(
  {
    name: { type: String, required: true },
    focus: { type: String, default: 'general' },
    durationMinutes: { type: Number, default: 0 },
  },
  { timestamps: true },
);

export default model('Workout', workoutSchema);

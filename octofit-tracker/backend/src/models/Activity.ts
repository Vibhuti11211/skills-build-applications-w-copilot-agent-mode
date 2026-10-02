import { Schema, model } from 'mongoose';

const activitySchema = new Schema(
  {
    type: { type: String, required: true },
    durationMinutes: { type: Number, default: 0 },
    distanceKm: { type: Number, default: 0 },
    calories: { type: Number, default: 0 },
  },
  { timestamps: true },
);

export default model('Activity', activitySchema);

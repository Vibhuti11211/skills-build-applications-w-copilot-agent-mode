import { Schema, model } from 'mongoose';

const leaderboardSchema = new Schema(
  {
    name: { type: String, required: true },
    score: { type: Number, default: 0 },
    position: { type: Number, default: 0 },
  },
  { timestamps: true },
);

export default model('Leaderboard', leaderboardSchema);

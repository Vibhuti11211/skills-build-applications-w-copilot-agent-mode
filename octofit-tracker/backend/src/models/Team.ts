import { Schema, model } from 'mongoose';

const teamSchema = new Schema(
  {
    name: { type: String, required: true },
    captain: { type: String },
    members: { type: Number, default: 0 },
  },
  { timestamps: true },
);

export default model('Team', teamSchema);

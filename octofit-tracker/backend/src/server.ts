import express from 'express';
import type { Model } from 'mongoose';
import Activity from './models/Activity.js';
import Leaderboard from './models/Leaderboard.js';
import Team from './models/Team.js';
import User from './models/User.js';
import Workout from './models/Workout.js';

const app = express();
const port = 8000;
const baseUrl = process.env.CODESPACE_NAME
  ? `https://${process.env.CODESPACE_NAME}-8000.app.github.dev`
  : 'http://localhost:8000';

app.use(express.json());

function listHandler<T>(model: Model<T>) {
  return async (_request: express.Request, response: express.Response) => {
    try {
      response.json(await model.find().lean());
    } catch (error) {
      console.error('Failed to fetch collection:', error);
      response.status(500).json({ error: 'Failed to fetch collection' });
    }
  };
}

app.get('/api/users/', listHandler(User));
app.get('/api/teams/', listHandler(Team));
app.get('/api/activities/', listHandler(Activity));
app.get('/api/leaderboard/', listHandler(Leaderboard));
app.get('/api/workouts/', listHandler(Workout));

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok', baseUrl });
});

export { app, baseUrl, port };

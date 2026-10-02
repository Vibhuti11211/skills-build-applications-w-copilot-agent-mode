import mongoose from 'mongoose';
import User from '../models/User.js';
import Team from '../models/Team.js';
import Activity from '../models/Activity.js';
import Leaderboard from '../models/Leaderboard.js';
import Workout from '../models/Workout.js';
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';
/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
    try {
        await mongoose.connect(connectionString);
        console.log('Connected to octofit_db');
        await User.deleteMany({});
        await Team.deleteMany({});
        await Activity.deleteMany({});
        await Leaderboard.deleteMany({});
        await Workout.deleteMany({});
        await User.insertMany([
            { name: 'Mona', email: 'mona@example.com', role: 'coach' },
            { name: 'Aiden', email: 'aiden@example.com', role: 'member' },
        ]);
        await Team.insertMany([
            { name: 'Octocats', captain: 'Mona', members: 12 },
            { name: 'Trail Blazers', captain: 'Aiden', members: 9 },
        ]);
        await Activity.insertMany([
            { type: 'Run', durationMinutes: 30, distanceKm: 5.2, calories: 320 },
            { type: 'Strength', durationMinutes: 45, distanceKm: 0, calories: 420 },
        ]);
        await Leaderboard.insertMany([
            { name: 'Mona', score: 980, position: 1 },
            { name: 'Aiden', score: 870, position: 2 },
        ]);
        await Workout.insertMany([
            { name: 'Intervals', focus: 'cardio', durationMinutes: 25 },
            { name: 'Mobility', focus: 'recovery', durationMinutes: 20 },
        ]);
        console.log('Database seeding complete');
        await mongoose.disconnect();
    }
    catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
}
await seedDatabase();

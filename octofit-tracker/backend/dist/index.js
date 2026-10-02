import { app, port } from './server.js';
import { connectDatabase } from './config/database.js';
await connectDatabase();
app.listen(port, () => {
    console.log(`Octofit API listening on port ${port}`);
});

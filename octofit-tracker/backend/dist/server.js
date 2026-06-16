import express from 'express';
import { connectDatabase } from './config/database.js';
const app = express();
const port = Number(process.env.PORT ?? 8000);
app.use(express.json());
app.get('/api/health', (_request, response) => {
    response.json({ ok: true, service: 'octofit-tracker-backend' });
});
async function start() {
    await connectDatabase();
    app.listen(port, () => {
        console.log(`Backend running on port ${port}`);
    });
}
void start();

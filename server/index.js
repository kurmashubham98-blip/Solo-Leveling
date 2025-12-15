const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require('http');
const { Server } = require('socket.io');
const db = require('./config/db');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

app.use(cors());
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
    res.send('Shadow Monarch API System Online');
});

// Auth / User
app.post('/api/auth/login', async (req, res) => {
    const { username } = req.body;
    try {
        const [users] = await db.query('SELECT * FROM users WHERE username = ?', [username]);
        if (users.length > 0) {
            return res.json(users[0]);
        } else {
            const stats = JSON.stringify({ strength: 10, agility: 10, intelligence: 10, vitality: 10, sense: 10 });
            const [result] = await db.query('INSERT INTO users (username, stats) VALUES (?, ?)', [username, stats]);
            const [newUser] = await db.query('SELECT * FROM users WHERE id = ?', [result.insertId]);
            return res.json(newUser[0]);
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'System Error' });
    }
});

app.get('/api/user/:id', async (req, res) => {
    try {
        const [users] = await db.query('SELECT * FROM users WHERE id = ?', [req.params.id]);
        res.json(users[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

// Quests
app.get('/api/quests/:userId', async (req, res) => {
    try {
        const [quests] = await db.query('SELECT * FROM quests WHERE user_id = ? AND status = "ACTIVE"', [req.params.userId]);
        res.json(quests);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/quests', async (req, res) => {
    const { userId, title, description, rewardXp, type } = req.body;
    try {
        await db.query('INSERT INTO quests (user_id, title, description, reward_xp, type) VALUES (?, ?, ?, ?, ?)',
            [userId, title, description, rewardXp, type]);
        const [quests] = await db.query('SELECT * FROM quests WHERE user_id = ? AND status = "ACTIVE"', [userId]);
        res.json(quests);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/quests/:id/complete', async (req, res) => {
    const questId = req.params.id;
    const { userId } = req.body;

    try {
        // 1. Get Quest Info
        const [quest] = await db.query('SELECT * FROM quests WHERE id = ?', [questId]);
        if (quest.length === 0) return res.status(404).json({ error: 'Quest not found' });

        // 2. Update Quest Status
        await db.query('UPDATE quests SET status = "COMPLETED" WHERE id = ?', [questId]);

        // 3. Update User Stats (XP + Level Up logic)
        const xpGain = quest[0].reward_xp;
        await db.query('UPDATE users SET xp = xp + ? WHERE id = ?', [xpGain, userId]);

        // 4. Emit socket event
        io.emit('quest_completed', { userId, questId, xpGain });

        res.json({ success: true, xpGain });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

// Socket.io
io.on('connection', (socket) => {
    console.log('Hunter connected:', socket.id);
    socket.on('disconnect', () => {
        console.log('Hunter disconnected');
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`System Online on port ${PORT}`);
});

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
// Demo in-memory data (replace with DB or Minecraft server queries in production)
let playerStats = { onlinePlayers: 53, uptime: 99.8 };
let newsArray = [
  { date: '2025-09-01', title: 'New Mini Games Released!' },
  { date: '2025-08-25', title: 'Lifesteal SMP Tournament Announced' },
  { date: '2025-08-20', title: 'Server Upgraded: Faster, Smoother Gameplay' }
];
let leaderboard = [
  { name: 'SteveTheMiner', points: 1200, wins: 22 },
  { name: 'CreeperQueen', points: 1120, wins: 19 },
  { name: 'EnderLord', points: 1085, wins: 18 }
];
let stats = { registeredUsers: 1250, activeGamemodes: 6, uptime: 99.8 };
let users = [{ username: 'SteveTheMiner', password: 'demo', name: 'Steve', avatar: 'default-avatar.png' }];
app.get('/api/server-status', (req, res) => res.json(playerStats));
app.get('/api/news', (req, res) => res.json(newsArray));
app.get('/api/leaderboard', (req, res) => res.json(leaderboard));
app.get('/api/stats', (req, res) => res.json(stats));
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    res.json({ success: true, user: { name: user.name, avatar: user.avatar } });
  } else {
    res.json({ success: false });
  }
});
app.listen(3000, () => console.log('BreezeMC API running on http://localhost:3000'));
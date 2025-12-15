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
    console.error(eIÈ¤ì(€€€É•Ì¹ÍÑ…ÑÕÌ ÔÀÀ¤¹©Í½¸¡ì•ÉÉ½Èè€MåÍÑ•´ÉÉ½Èœô¤ì(€ô)ô¤ì()…ÁÀ¹•Ð œ½…Á¤½ÕÍ•È¼é¥œ°…Íå¹Œ€¡É•Ä°½Ì¤€ôøì(€ÑÉäì(€€€½¹ÍÐmÕÍ•ÉÍt€ô…Ý…¥Ð‘ˆ¹ÅÕ•Éä M1P€¨I=4ÕÍ•ÉÌ]!I¥€ô€üœ°mÉ•Ä¹Á…É…µÌ¹¥‘t¤ì(€€€É•Ì¹©Í½¸¡ÕÍ•ÉÍlÁt¤ì(€ô…Ñ €¡•ÉÈ¤ì(€€€É•Ì¹ÍÑ…ÑÕÌ ÔÀÀ¤¹©Í½¸¡ì•ÉÉ½Èè•ÉÈ¹µ•ÍÍ…”ô¤ì(€ô)ô¤ì((¼¼EÕ•ÍÑÌ)…ÁÀ¹•Ð œ½…Á¤½ÅÕ•ÍÑÌ¼éÕÍ•É%œ°…Íå¹Œ€¡É•Ä°É•Ì¤€ôøì(€ÑÉäì(€€€½¹ÍÐmÅÕ•ÍÑÍt€ô…Ý…¥Ð‘ˆ¹ÅÕ•Éä M1P€¨I=4ÅÕ•ÍÑÌ]!IÕÍ•É}¥€ô€ü9ÍÑ…ÑÕÌ€ô€‰Q%Yˆœ°mÉ•Ä¹Á…É…µÌ¹ÕÍ•É%‘t¤ì(€€€É•Ì¹©Í½¸¡ÅÕ•ÍÑÌ¤ì(€ô…Ñ €¡•ÉÈ¤ì(€€€É•Ì¹ÍÑ…ÑÕÌ ÔÀÀ¤¹©Í½¸¡ì•ÉÉ½Èè•ÉÈ¹µ•ÍÍ…”ô¤ì(€ô)ô¤ì()…ÁÀ¹Á½ÍÐ œ½…Á¤½ÅÕ•ÍÑÌœ°…Íå¹Œ€¡É•Ä°É•Ì¤€ôøì(€½¹ÍÐìÕÍ•É%°Ñ¥Ñ±”°‘•ÍÉ¥ÁÑ¥½¸°É•Ý…É‘aÀ°ÑåÁ”ô€ôÉ•Ä¹‰½‘äì(€ÑÉäì(€€€…Ý…¥Ð‘ˆ¹ÅÕ•Éä %9MIP%9Q<ÅÕ•ÍÑÌ€¡ÕÍ•É}¥°Ñ¥Ñ±”°‘•ÍÉ¥ÁÑ¥½¸°É•Ý…É‘}áÀ°ÑåÁ”¤Y1UL€ ü°€ü°€ü°€ü°€ü¤œ°€(€€€€€mÕÍ•É%°Ñ¥Ñ±”°‘•ÍÉ¥ÁÑ¥½¸°É•Ý…É‘aÀ°ÑåÁ•t¤ì(€€€½¹ÍÐmÅÕ•ÍÑÍt€ô…Ý…¥Ð‘ˆ¹ÅÕ•Éä M1P€¨I=4ÅÕ•ÍÑÌ]!IÕÍ•É}¥€ô€ü9ÍÑ…ÑÕÌ€ô€‰Q%Yˆœ°mÕÍ•É%‘t¤ì(€€€É•Ì¹©Í½¸¡ÅÕ•ÍÑÌ¤ì(€ô…Ñ €¡•ÉÈ¤ì(€€€É•Ì¹ÍÑ…ÑÕÌ ÔÀÀ¤¹©Í½¸¡ì•ÉÉ½Èè•ÉÈ¹µ•ÍÍ…”ô¤ì(€ô)ô¤ì()…ÁÀ¹Á½ÍÐ œ½aÁ¤½…ÅÕ•ÍÑÌ¼é¥½½µÁ±•Ñ”œ°…Íå¹Œ€¡É•Ä°É•Ì¤€ôøì(€½¹ÍÐÅÕ•ÍÑ%€ôÉ•Ä¹Á…É…µÌ¹¥ì(€½¹ÍÐìÕÍ•É%ô€ôÉ•Ä¹‰½‘äì(€€(€ÑÉäì(€€€€¼¼€Ä¸•ÐEÕ•ÍÐ%¹™¼(€€€½¹ÍÐmÅÕ•ÍÑt€ô…Ý…¥Ð‘ˆ¹ÅÕ•Éä M1P€¨I=4ÅÕ•ÍÑÌ]!I¥€ô€üœ°mÅÕ•ÍÑ%‘t¤ì(€€€¥˜€¡ÅÕ•ÍÐ¹±•¹Ñ €ôôô€À¤É•ÑÕÉ¸É•Ì¹ÍÑ…ÑÕÌ ÐÀÐ¤¹©Í½¸¡ì•ÉÉ½Èè€EÕ•ÍÐ¹½Ð™½Õ¹œô¤ì(€€€€(€€€€¼¼€È¸UÁ‘…Ñ”EÕ•ÍÐMÑ…ÑÕÌ(€€€…Ý…¥Ð‘ˆ¹ÅÕ•Éä UAQÅÕ•ÍÑÌMPÍÑ…ÑÕÌ€ô€‰=5A1Qˆ]!I¥€ô€üœ°mÅÕ•ÍÑ%‘t¤ì(€€€€(€€€€¼¼€Ì¸UÁ‘…Ñ”UÍ•ÈMÑ…ÑÌ€¡a@€¬1•Ù•°UÀ±½¥Œ¤(€€€½¹ÍÐáÁ…¥¸€ôÅÕ•ÍÑlÁt¹É•Ý…É‘}áÀì(€€€…Ý…¥Ð‘ˆ¹ÅÕ•Éä UAQÕÍ•ÉÌMPáÀ€ôáÀ€¬€ü]!I¥€ô€üœ°máÁ…¥¸°ÕÍ•É%‘t¤ì(€€€€(€€€€¼¼€Ð¸µ¥ÐÍ½­•Ð•Ù•¹Ð(€€€¥¼¹•µ¥Ð ÅÕ•ÍÑ}½µÁ±•Ñ•œ°ìÕÍ•É%°ÅÕ•ÍÑ%°áÁ…¥¸ô¤ì(€€€€(€€€É•Ì¹©Í½¸¡ìÍÕ•ÍÌèÑÉÕ”°áÁ…¥¸ô¤ì(€ô…Ñ €¡•ÉÈ¤ì(€€€É•Ì¹ÍÑ…ÑÕÌ ÔÀÀ¤¹©Í½¸¡ì•ÉÉ½Èè•ÉÈ¹µ•ÍÍ…”ô¤ì(€ô)ô¤ì((¼¼M½­•Ð¹¥¼)¥¼¹½¸ ½¹¹•Ñ¥½¸œ°€¡Í½­•Ð¤€ôøì(€½¹Í½±”¹±½œ !Õ¹Ñ•È½¹¹•Ñ•èœ°Í½­•Ð¹¥¤ì(€Í½­•Ð¹½¸ ‘¥Í½¹¹•Ðœ°€ ¤€ôøì(€€€½¹Íý±”¹±½œ !Õ¹Ñ•È‘¥Í½¹¹•Ñ•œ¤ì(€ô¤ì)ô¤ì()½¹ÍÐA=IP€ôÁÉ½•ÍÌ¹•¹Ø¹A=IPñð€ÌÀÀÀì)Í•ÉÙ•È¹±¥ÍÑ•¸¡A=IP°€ ¤€ôøì(€½¹Í½±”¹±½œ¡MåÍÑ•´=¹±¥¹”½¸Á½ÉÐ€‘íA=IQõ€¤ì)ô¤
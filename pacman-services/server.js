const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

const events = [];

app.use(express.json());
app.use(express.static(path.join(__dirname)));

app.post('/event', (req, res) => {
  const event = req.body;
  events.push({ ...event, receivedAt: new Date().toISOString() });
  res.status(200).json({ ok: true });
});

app.get('/events', (req, res) => {
  res.json(events);
});

app.listen(PORT, () => {
  console.log(`pacman-services running on http://localhost:${PORT}`);
});

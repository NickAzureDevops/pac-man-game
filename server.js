const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const events = [];
const dashboardHtml = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');

app.use(express.json());

app.post('/event', (req, res) => {
  events.push(req.body);
  res.status(201).json({ ok: true });
});

app.get('/events', (_req, res) => {
  res.json(events);
});

app.get('/', (_req, res) => {
  res.type('html').send(dashboardHtml);
});

app.listen(3001, () => {
  console.log('pacman-services listening on http://localhost:3001');
});

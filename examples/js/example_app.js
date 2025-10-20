// Kleines Express-Beispiel (siehe auch solutions/02-workflow.md)
const express = require('express');
const app = express();
app.use(express.json());

let items = [];

app.get('/items', (req, res) => res.json(items));
app.post('/items', (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: 'name required' });
  const item = { id: items.length + 1, name };
  items.push(item);
  res.status(201).json(item);
});

if (require.main === module) {
  app.listen(3000, () => console.log('Listening on http://localhost:3000'));
}

module.exports = app;
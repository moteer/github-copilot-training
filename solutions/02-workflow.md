# Lösungen & Hinweise — Übung 02

Beispiel-Lösung (Express REST Endpoint):
```js
// users.js - minimaler Express Endpoint
const express = require('express');
const router = express.Router();

let users = [];

router.get('/', (req, res) => res.json(users));
router.post('/', (req, res) => {
  const { name, email } = req.body;
  if (!email) return res.status(400).json({ error: 'email required' });
  const user = { id: users.length + 1, name, email };
  users.push(user);
  res.status(201).json(user);
});

module.exports = router;
```
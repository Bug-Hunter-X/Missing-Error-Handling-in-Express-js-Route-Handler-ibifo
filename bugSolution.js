const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  db.getUserById(userId, (err, user) => {
    if (err) {
      console.error('Error fetching user:', err);
      res.status(500).json({ error: 'Failed to fetch user' });
    } else if (!user) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.json(user);
    }
  });
});

app.listen(3000, () => console.log('Server started on port 3000'));
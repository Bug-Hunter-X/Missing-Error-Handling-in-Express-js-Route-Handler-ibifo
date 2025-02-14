const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid userId
  db.getUserById(userId, (err, user) => {
    if (err) {
      //No error handling
      res.status(500).send('Error fetching user');
    } else {
      res.json(user);
    }
  });
});

app.listen(3000, () => console.log('Server started on port 3000'));
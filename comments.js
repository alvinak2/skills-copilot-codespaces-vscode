// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const comments = require('./comments');

app.use(bodyParser.json());

// Get all comments
app.get('/comments', (req, res) => {
  res.json(comments.getComments());
});

// Post a comment
app.post('/comments', (req, res) => {
  const { comment } = req.body;
  comments.addComment(comment);
  res.status(201).json(comment);
});

// Start web server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Redirect root to /login/
app.get('/', (req, res) => {
  res.redirect('/login/');
});

// Serve static files (css, js, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Serve login page
app.get('/login/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', 'login.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
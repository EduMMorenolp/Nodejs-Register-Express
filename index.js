// index.js
const express = require('express');
const { PrismaClient } = require('@prisma/client');
const path = require('path');

const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany();
  res.render('users', { users });
});

app.get('/createUser', async (req, res) => {
    res.render('createUser');
  });

app.post('/createUser', async (req, res) => {
  const { username, email } = req.body;
  const user = await prisma.user.create({
    data: {
      username,
      email,
    },
  });
  console.log(`User ${user.username} created successfully!`);
  res.redirect('/users');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

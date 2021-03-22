const express = require('express');
const app = express();

const port = process.env.PORT || 8080;
app.set('view-engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index.ejs', { name: 'Pawel' });
});
app.get('/login', (req, res) => {
    res.render('login.ejs', { name: 'Pawel' });
});
app.get('/register', (req, res) => {
    res.render('register.ejs', { name: 'Pawel' });
});

app.listen(port, () => {
    console.log(`App runs on port: ${port}`);
});

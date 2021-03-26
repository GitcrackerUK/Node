const express = require('express');
const bcrypt = require('bcrypt');
const app = express();

const port = process.env.PORT || 8080;

app.set('view-engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const store = [];

app.get('/', (req, res) => {
    res.render('index.ejs');
});
app.get('/login', (req, res) => {
    res.render('login.ejs', { name: 'Pawel' });
});
app.post('/login', (req, res) => {});

app.get('/register', (req, res) => {
    res.render('register.ejs', { name: 'Pawel' });
});
app.post('/register', async (req, res) => {
    try {
        const hashedPass = await bcrypt.hash(req.body.password, 10);
        store.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPass,
        });
        console.log(store);
    } catch {
        res.redirect('/register');
    }
    res.redirect('/login');
});

app.listen(port, () => {
    console.log(`App runs on port: ${port}`);
});

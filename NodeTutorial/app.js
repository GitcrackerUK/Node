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
app.post('/register', (req, res) => {
    try {
        const hashedPass = bcrypt.hash(req.body.password, 10);
        store.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPass,
        });
    } catch {
        res.redirect('/register');
    }
    (async function () {
        await store[0].password;
        console.log(store);
    })();
    res.redirect('/login');
});

app.listen(port, () => {
    console.log(`App runs on port: ${port}`);
});

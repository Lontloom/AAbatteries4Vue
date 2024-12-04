const express = require('express');
const pool = require('./database');
const cors = require('cors');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const port = process.env.PORT || 3000;

const app = express();

app.use(cors({ origin: 'http://localhost:8080', credentials: true }));

app.use(express.json());
app.use(cookieParser());

const secret = "tamper-countdown-rearview-survey-hundredth";
const maxAge = 60 * 60; // in seconds

const generateJWT = (id) => {
    return jwt.sign({ id }, secret, { expiresIn: maxAge })
}

app.listen(port, () => {
    console.log("Server is listening to port " + port)
});



app.get('/auth/authenticate', async(req, res) => {
    console.log('authentication request has been arrived');
    const token = req.cookies.jwt;
    let authenticated = false;
    try {
        if (token) {
            await jwt.verify(token, secret, (err) => {
                if (err) {
                    res.send({ "authenticated": authenticated });
                } else {
                    authenticated = true;
                    res.send({ "authenticated": authenticated })
                }
            })
        } else {
            console.log('author is not authinticated');
            res.send({ "authenticated": authenticated });
        }
    } catch (err) {
        console.error(err.message);
        res
        .status(400)
        .send(JSON.stringify({
            errorMessage: err.message 
        }));
    }
});



app.post('/auth/signup', async(req, res) => {
    try {
        const { email, password } = req.body;

        const salt = await bcrypt.genSalt();
        const bcryptPassword = await bcrypt.hash(password, salt);
        const authUser = await pool.query(
            "INSERT INTO users(email, password) values ($1, $2) RETURNING*", [email, bcryptPassword]
        );
        console.log(authUser.rows[0].id);
        const token = await generateJWT(authUser.rows[0].id);
        res.status(201)
        .cookie('jwt', token, { maxAge: 6000000, httpOnly: true })
        .json({ user_id: authUser.rows[0].id })
        .send;
    } catch (err) {
        console.error(err.message);
        res
        .status(400)
        .send(JSON.stringify({
            errorMessage: err.message 
        }));
    }
});



app.post('/auth/login', async(req, res) => {
    try {
        const { email, password } = req.body;
        const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        if (user.rows.length === 0) return res.status(401).json({ errorMessage: "User is not registered" });

        const validPassword = await bcrypt.compare(password, user.rows[0].password);

        if (!validPassword) return res.status(401).json({ errorMessage: "Incorrect password" });

        const token = await generateJWT(user.rows[0].id);
        res.status(201)
        .cookie('jwt', token, { maxAge: 6000000, httpOnly: true })
        .json({ user_id: user.rows[0].id })
        .send;
    } catch (error) {
        console.error(err.message);
        res
        .status(401)
        .send(JSON.stringify({
            errorMessage: err.message 
        }));
    }
});

app.get('/auth/logout', (req, res) => {
    console.log('delete jwt request arrived');
    res.status(202).clearCookie('jwt').json({ "Msg": "cookie cleared" }).send
});

app.get('/posts', async(req, res) => {
    try {
        console.log("get all posts request has arrived")
        const posts = await pool.query("SELECT * FROM posts")
        res.json(posts.rows)
    } catch (error) {
        console.error(error.message);
        res.status(401)
        .send(JSON.stringify({
            errorMessage: error.message 
        }));
    }
})

app.post('/posts/add', async(req, res) => {
    try {
        console.log("add post request has arrived")
        const {timestamp, text} = req.body;
        const post = await pool.query("INSERT INTO posts(date,body) VALUES($1, $2) RETURNING *", [timestamp, text])
        res.json(post);
    } catch (error) {
        console.error(error.message);
        res.status(401)
        .send(JSON.stringify({
            errorMessage: error.message 
        }));
    }
})

app.delete('/posts', async(req, res) => {
    try {
        console.log("delete all posts request has arrived")
        await pool.query("DELETE FROM posts")
        res.status(200)
        .send()
    } catch (error) {
        console.error(error.message);
        res.status(401)
        .send(JSON.stringify({
            errorMessage: error.message 
        }));
    }
})
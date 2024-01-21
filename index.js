const express = require("express");
const cors = require("cors");
const JSONdb = require("simple-json-db");
const db = new JSONdb("./db.json");


const app = express();
app.use(express.json());
app.use(cors());
const PORT = 3001;
const HOST = "0.0.0.0";
const ADMIN_PASSWORD = "admin";


app.get("/api", (req, res) => {
    res.json(db.JSON());
});

app.get("/api/login", (req, res) => {
    const password = req.query.password;
    if (password && ADMIN_PASSWORD === password) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

app.post("/api/save", (req, res) => {
    if (req.query.password === ADMIN_PASSWORD) {
        db.JSON(req.body);
        db.sync();
        res.json({ success: true });
    }
    else {
        res.json({ success: false });
    }
});

app.use(express.static(import.meta.dir + '/web/build'));


app.get('/', (req, res) => {
    res.sendFile(import.meta.dir + '/web/build/index.html');
}
);

app.all("*", (req, res) => {
    res.status(404).send("404 Not Found");
});

app.listen(PORT, HOST, () => {
    const host = HOST === "0.0.0.0" ? "localhost" : HOST;
    console.log(`Running on http://${host}:${PORT}`);
});
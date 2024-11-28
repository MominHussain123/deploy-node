const express = require('express');
const app = express();
const PORT = 4000;
const path = require("path");
app.use(express.static(path.resolve(path.join(__dirname,"public"))));
app.use(express.json());

app.get('/');

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

module.exports = app;
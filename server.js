const express = require('express');
const path = require('path');
const exerciseController = require('./backend/exercises-controller');

const app = express();
const port = process.env.PORT || 5000

app.use(express.json());
app.use(exerciseController);
app.use(express.static(path.join("./frontend/build")))


app.listen(port, () => console.log("Working"))
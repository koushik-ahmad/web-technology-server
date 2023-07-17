const express = require("express");
const app = express();
const cors = require("cors");
const Port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');
const details = require('./data/details.json');

app.get('/', (req, res) => {
    res.send("Web technology API Running");
})

app.get('/courses', (req, res) => {
    res.send(courses);
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const singleCourses = courses.find(c => c.id === id);
    res.send(singleCourses);
})


app.get('/details', (req, res) => {
    res.send(details);
})

app.get('/details/:id', (req, res) => {
    const id = req.params.id;
    const singleDetails = details.find(c => c.id === id);
    res.send(singleDetails);
})

app.listen(Port, () => {
    console.log("Web technology server running on port:", Port);
})

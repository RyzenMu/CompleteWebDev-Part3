const express = require('express');
const app = express();

const courses = [
    {id:1, name: 'course1'},
    {id:2, name: 'course2'},
    {id:3, name: 'course3'},
]
app.get('/', (req, res)=>{
    res.send('Hello world');
});

app.get('/api/courses', (req, res)=>{
    res.send(courses);
});

//params
app.get('/api/courses/:id', (req, res)=>{
    // const courseKey = parseInt(req.params.id)
    // res.send(courses[courseKey-1].name);
    const course = courses.find(c=>c.id === parseInt(req.params.id));
    if (!course) // 404 page
});

app.get('/api/posts/:year/:month', (req, res)=>{
    // res.send(req.params);
    res.send(req.query);
});
//environment variables
const port = process.env.PORT || 8000;
app.listen(port , ()=>{
    console.log(`listening on port ${port}...`);    
});
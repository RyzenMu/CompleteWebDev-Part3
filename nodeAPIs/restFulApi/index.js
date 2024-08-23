const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(express.json()); 
// app.use(bodyParser.urlencoded({extended: true}));
const courses = [
    {id:1, name1: 'course1'},
    {id:2, name1: 'course2'},
    {id:3, name1: 'course3'},
]
app.get('/', (req, res)=>{
    res.send('Hello world');
});

app.get('/api/courses', (req, res)=>{
    res.send(courses);
});

app.post('/api/courses', (req, res) =>{
    const course = {
        id : courses.length + 1,
        name1 : req.body.name1,
    };
    courses.push(course);
    res.send(courses);
});

//params
// app.get('/api/courses/:id', (req, res)=>{
//     // const courseKey = parseInt(req.params.id)
//     // res.send(courses[courseKey-1].name);
//     const course = courses.find(c=>c.id === parseInt(req.params.id));
//     console.log(course);
    
//     if (!course) { // 404 page
//         res.status(404).send("The course with the given id was not found");
//     }     
//     res.send(course);
// });

app.get('/api/courses/:id', (req, res) => {
    const { id } = req.params; // Destructure id from params
  
    const course = courses.find(c => c.id === parseInt(id));
    console.log(course);
  
    if (!course) {
      res.status(404).send("The course with the given id was not found");
    } else {
      res.send(course);
    }
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
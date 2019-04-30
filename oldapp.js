const express = require('express');
const app = express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Hello WOrld 123');
})  

var students = [
    {id: 1, name: 'faheem'},
    {id: 2, name: 'Waseem'},
    {id: 3, name: 'naeem'}
];

app.get('/students',(req,res)=>{
    res.send(students);
})

app.get('/student/:id',(req,res)=>{
    var student = students.find(s => s.id === parseInt(req.params.id));
    // res.send(students[req.params.id]);
    res.send(student);    
});

app.post('/student/',(req,res)=>{
    var student = {
        id: students.length + 1,
        name: req.body.name
    }  
    students.push(student);
    res.send("Student Added");
})

app.put('/student/:id',(req,res)=>{
    var student = students.find(s => s.id === parseInt(req.params.id));
    student.name = req.body.name;
    res.send("Record Updated");  
})

app.delete('/student/:id',(req,res)=>{
    var student = students.find(s => s.id === parseInt(req.params.id));
    var index = students.indexOf(student);
    students.splice(index,1);
    res.send("Data Deleted");
})


app.listen(3000,()=>{console.log("Server Is Running 3000")});
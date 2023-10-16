const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const user = require('./models/user');
const sequelize = require("./models");
const AddUser = require("./Controllers/userCtrller")

const port = 8000;
app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.send("hello world")
});
app.get('/add', AddUser.addUser )
app.get('/fetchusers', AddUser.getUser )
app.get('/fetchusers/:id', AddUser.getUsers )
app.post('/createuser', AddUser.postUsers )
app.delete('/deleteuser/:id', AddUser.deleteUser )
app.patch('/updateuser/:id', AddUser.updateUser)

user.sync({force:false})

app.listen(port, ()=>{
    console.log(`app is running on ${port} port`);
});
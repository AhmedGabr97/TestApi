const express = require('express');
const app = express();
const cors = require("cors")
app.use(express.json())
app.use(cors())

const mongosses = require('mongoose');
mongosses.connect("mongodb+srv://agahmedgabr2017:admin123@cluster0.1gmxatp.mongodb.net/test?retryWrites=true&w=majority");

const userModel = require('./model/User');

app.get('/', async (req, res) => {
   const user = await userModel.find(); 
   res.json(user);
});

app.post('/user', async (req, res) => {
   const user = new userModel(req.body)
   await user.save()
   res.json(req.body)
});


app.listen("3001" , () => {})
require("dotenv").config();
const express = require('express');
const app = express();
const cors = require("cors")
app.use(express.json())
app.use(cors())

const mongosses = require('mongoose');
mongosses.connect(process.env.MONGO_URI);

const userModel = require('./model/User');

const PORT = process.env.PORT || 3000;

app.get('/', async (req, res) => {
   const user = await userModel.find(); 
   res.json(user);
});

app.post('/user', async (req, res) => {
   const user = new userModel(req.body)
   await user.save()
   res.json(req.body)
});


app.listen(PORT , () => {})
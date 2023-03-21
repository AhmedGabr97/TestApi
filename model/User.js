const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    todo: String
});


// Create a model from the schema   
const userModel = mongoose.model({}, userSchema , "todo");

// Export the model
module.exports = userModel;
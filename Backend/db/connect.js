const mongoose = require("mongoose");
const db= 'mongodb+srv://Rithvika:Rithvika@5i1@cluster0.yi7spvi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
// Connect to MongoDB using the connection string

mongoose.connect(db).then(() => {
  console.log(`Connection successful`);
}).catch((e) => {   
  console.log(`No connection: ${e}`);   
});


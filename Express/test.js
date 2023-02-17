const mongoose = require("mongoose");

// mongoose.connect('mongodb://localhost:27017/ToDoList',{useNewUrlParser: true});
// mongoose.connection
//   .once("open", ()=> console.log("connected"))
//   .on("error", ()=> {
//     console.log("connected", Error)
//   })

mongoose.connect('mongodb://localhost:27017/ToDoList', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Database connected")
    })
    .catch(err => {
        console.log("Database not connected")
        console.log(err)
    });
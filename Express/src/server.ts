import express from "express";
import { Request, Response } from "express";
import bodyparser from "body-parser";
import cors from "cors";

const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

// mongoose.connect('mongodb://localhost:27017/ToDoList',{useNewUrlParser: true});
// mongoose.connection
//   .once("open", ()=> console.log("connected"))
//   .on("error", ()=> {
//     console.log("connected", Error)
//   })

const app = express();

app.use(bodyparser.json());
app.use(cors({ origin: "*" }));

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://localhost:27017/MyToDo');
}

const todolist = new mongoose.Schema({
  title: String,
  description: String,
  date: Date
});

const TodolistModel = mongoose.model("todolist",todolist)



app.get("/todolist", async (req: Request, res: Response) => {
	const posts = await TodolistModel.find()
  res.json(posts)
})


module.exports = TodolistModel
// app.get("/todolist/:id", async (req, res) => {
// 	const post = await TodolistModel.findOne({ _id: req.params.id })
// 	res.send(post)
// })

app.listen(3004, () => {
  console.log("Application started on port 3004!");
});

import express from "express";
import { Request, Response } from "express";
import bodyparser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

const { Schema } = mongoose;
// mongoose.set('strictQuery', false);


const app = express();

app.use(bodyparser.json());
app.use(cors({ origin: "*" }));


main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://localhost:27017/ToDoList');
}

const MyToDo = new Schema({
  title: String,
  description: String,
  date: {
    type: Date,
    default: Date.now(),
  },
  status: Boolean,
},{collection: "MyToDo"});

const TodolistModel = mongoose.model("MyToDo",MyToDo)
module.exports = TodolistModel



app.get("/todolist", (req: Request, res: Response) => {
  TodolistModel.find()
  .then((data) =>  res.send(data));
});

app.delete("/todolist/:id", async (req, res) => {
  TodolistModel.findByIdAndDelete(req.params.id)
  .then((data) =>  res.send(data));
});

app.put("/todolist/:id",(req, res) => {
  const toUpdate = {_id: req.params.id}
  TodolistModel.updateOne({_id: req.params.id},{ $set: { status : true } } )
  .then((data) =>  res.send(data));
});

app.post("/todolist",(req, res) => {
  TodolistModel.create({status : false, title: req.body.title, description: req.body.description})
  .then((data) =>  res.send(data));
});

app.listen(3004, () => {
  console.log("Application started on port 3004!");
});


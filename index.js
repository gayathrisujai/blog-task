const express = require("express");
const app = express();

app.use(express.json());
const blogModel=require('./model');


require('dotenv').config();
const port = process.env.PORT;


require('./connection')



//Write missing code here and all the CRUD operations on the database
 //GET
 app.get('/', async(req,res) => {
  try {
    const data = await blogModel.find();
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send('Data not found');
  }
 })

 //post
 app.post('/add', async(req,res) => {
  try {
    var item = req.body;
    const data1 = new blogModel(item);
    const savedData = await data1.save();
    res.status(200).send('post succesful');
  } catch (error) {
    res.status(404).send('post unsuccesful');
  }
 })

 //put
 app.put('/edit/:id', async(req,res) => {
  try {
    const id = req.params.id;
    const data = await blogModel.findByIdAndUpdate(id, req.body);
    res.status(200).send('update successful');
  } catch (error) {
    res.status(404).send('update unsuccessful');

  }
 })

 //DELETE
 app.delete('/remove/:id', async(req,res) => {
  try {
    const id = req.params.id;
    const data = await blogModel.findByIdAndDelete(id, req.body);
    res.status(200).send('Delete successful');
  } catch (error) {
    res.status(404).send('Delete unsuccessful');

  }
 })



app.listen(3000, () => {
  console.log(`server is up and running on port ${port}`);
});
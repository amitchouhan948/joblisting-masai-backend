const express = require("express");
const JobModel = require("../Models/Job.model");

const app = express.Router();

app.get("/", async (req, res) => {


  let jobList = await JobModel.find();
  res.send(jobList);

});



app.post("/", async (req, res) => {

  // let {} = req.body;

  console.log(req.body)
  try {
    let JobData = await JobModel.create(req.body);
    res.send(JobData);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

app.get("/search", async (req, res) => {

  let keyword = {};
  if (req.query.q) {
    keyword = req.query.q;

  }
  
  try {
    const jobs = await JobModel.find({language: { $regex: keyword, $options: "i" },});

    console.log(jobs);

    return res.send(jobs);

  } catch (err) {

    return res.send(err.message);
  }
});


app.get("/filter", async (req, res) => {

  const { q } = req.query;

  console.log(q);
  try {
    const data = await JobPost.find({ role: q });
    res.send(data);
  } catch (err) {
    return res.send(err);
    
  }
});


module.exports = app;

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


module.exports = app;

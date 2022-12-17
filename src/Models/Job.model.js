const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    company: { type: String,  required: true },
    role: { type: String, enum:["Frontend","Backend","FullStack"], default: "FullStack" },
    city: { type: String, required: true },
    location: { type: String, required: true },
    level: { type: String, enum:["Junior","Senior","Intern"], default: "Junior" },
    position: { type: String, enum:["Backend Developer","Junior Frontend Developer","Junior Backend Developer", "FSD"], default: "Junior Frontend Developer" },
    language: { type: String, enum:["Javascript","Java","C", "C++"], default: "Javascript" },
    contract: { type: String, enum:["full time","part time"], default: "full time" },
  },
  {timestamps : true} 
);

const Cart = mongoose.model("cart", jobSchema);

module.exports = Cart;
const express = require("express");
const router = express.Router();
router.use(express.json());
const mongoose = require("mongoose");
mongoose.connect(process.env.mongo).then(()=>console.log("connected product"));
router.get("/",(req,res)=> res.send("Product page"));


module.exports = router;
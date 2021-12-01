const mongoose = require("mongoose");

const cmpSchema = mongoose.Schema({

    cmpname:String,
    cmpid:String,
    prodid:String,
});

const cmpmodel = mongoose.model("assignment5",cmpSchema,"assignment5");

module.exports = cmpmodel;




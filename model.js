const mongoose=require("mongoose");
const schema = mongoose.Schema({
//Write missing code here

author: String,
title: String,
content: String,
pubDate: Date


});


//Write missing code here
const blogData = mongoose.model('blogdatas', schema);
module.exports = blogData;
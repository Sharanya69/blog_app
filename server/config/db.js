const mongoose = require("mongoose");

mongoose.set('strictQuery', false);


mongoose.connect("mongodb+srv://seshupavanik:pavani19@cluster0.ywjhs.mongodb.net/").then(()=>{
    console.log("connected!");
}).catch((err)=>{
    console.log(err);
})
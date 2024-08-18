const mongoose = require("mongoose");
//Write missing code here
mongoose.connect('mongodb+srv://Anjali:Anjali123@cluster0.3dw6yed.mongodb.net/blogDB?retryWrites=true&w=majority&appName=Cluster0'
   
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });

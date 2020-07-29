// require necessary npm packages

const express = require("express");

//Setting port
const PORT = process.env.PORT || 8000;

//Creating express app
const app = express();
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static("public"));

//Required routes
app.use(require("./routes/htmlRoutes"))

app.listen(PORT, ()=>{
  console.log("Listening on PORT: " + PORT);
})
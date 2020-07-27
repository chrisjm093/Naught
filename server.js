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
app.use(require("./public/js/script"))
//app.use(require("./controllers/dateSearch"));
app.use(require("./controllers/pubApiCalls"));
app.use(require("./controllers/stateApiCall"));

app.listen(PORT, ()=>{
  console.log("Listening on PORT: " + PORT);
})
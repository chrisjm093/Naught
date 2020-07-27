const router = require("express").Router();
const path = require("path");

const date = require("../../controllers/dateSearch")

router.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname, "../views/index.html"))
})

function covidApiCall() {

    //ajax call

    GenerateStatsList(data)
}

function generateStatsList() {


}


function generateArticleList() {


}

function readArticleModal() {


}

module.exports = router;
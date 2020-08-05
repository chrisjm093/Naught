const infected = $("#infected");
const dead = $("#dead");
const recovered = $("#recovered");
const casesToday = $("#cases-today");
const deathsToday = $("#deaths-today");
const hospitalized = $("#hospitalized");
const inICU = $("#in-icu");
const totalTested = $("#total-tested");
const positiveTests = $("#positive");
const negativeTests = $("#negative");

$(document).ready(()=>{
 
})

$('#get-stats').click( ()=>{
    let date = $('#select-date').val();
    const state =$('#select-state').val();

    date = date.replace(/-/g, '');
    var covidCall = "";
        if(state === "us"){
            covidCall = "us/" + date;
        } else {
            covidCall = "/states/" + state + "/" + date;
        } 
    covidApiCall(covidCall);



})


function covidApiCall(covidCall) {
    const queryURL = 'https://covidtracking.com/api/v1/' + covidCall + '.json';

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then( data =>{
        generateStatsList(data);
    }).catch(err =>{
        if( err ){
            alert("As the pandemic is an ever evolving situation, Some dates or places may not work. Try searching a different place or date.")
        }
    })
}

function generateStatsList(data) {
console.log(data)
    infected.text(data.total);
    dead.text(data.death);
    recovered.text(data.recovered);
    casesToday.text(data.positiveIncrease);
    deathsToday.text(data.deathIncrease);
    hospitalized.text(data.hospitalizedCurrently);
    inICU.text(data.inIcuCurrently);
    totalTested.text(data.total);
    positiveTests.text(data.positive);
    negativeTests.text(data.negative);

}


function generateArticleList() {


}

function readArticleModal() {


}




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
        console.log(data);
    }).catch(err =>{
        if( err ){
            alert("As the pandemic is an ever evolving situation, Some dates or places may not work. Try searching a different place or date.")
        }
    })
}

function generateStatsList() {


}


function generateArticleList() {


}

function readArticleModal() {


}




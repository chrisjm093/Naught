$(document).ready(()=>{
  $('#select-date').change( function(event){
      const date = ($(this).val());
      console.log(date);
    console.log(event.target.value)
  
    });
  });

module.exports = date;


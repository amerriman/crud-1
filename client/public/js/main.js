$(document).on('ready', function() {
  //get all penguins on DOM load
  getPenguins();
});

//handle form submission
$('form').on('submit', function(e){
  e.preventDefault();
  //clear message
  $('#message').html("");
  //create payload on form submit
  var payload = {
    name:  $("#name").val(),
    zoo: $("#checkbox").prop('checked'),
    nemesis: $('#nemesis').val()
  };
  //send post request to the server
  $.post('/penguins', payload, function(data){
    //append "Added" to the DOM
    $('#message').html('Added');
    //get all penguins
    getPenguins();
  });
});

//get all penguins function
function getPenguins(){
  //clear all penguins
  $('#all').html("");
  //get request sent to the server
  $.get('/penguins', function(data){
  //loop through array of abjects, appending each to the DOM
  for (var i = 0; i < data.length; i++) {
    $('#all').append('<li>'+data[i].name+'</li>');
  }
});
}

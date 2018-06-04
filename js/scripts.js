$(function() {
  var myArray=[]
  $("#submit").click(function() {
    var favoriteFood= $("input#food").val();
    var favoriteMusic= $("input#music").val();
    var favoriteGame= $("input#game").val();
    myArray.push(favoriteFood);
    myArray.push(favoriteMusic);
    myArray.push(favoriteGame);
    $("#output").text(myArray);

  });

});

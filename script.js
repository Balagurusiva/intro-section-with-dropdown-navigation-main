var image = document.getElementById("menuImg");
var btn = document.getElementsByClassName("dropdown")
//Now, we need to add an Event Listener to listen when the image gets mouse over.

 btn.addEventListener('mouseover', function(){
  image.src = "images/icon-arrow-up.svg "
})
btn.addEventListener('mouseout', function(){
    image.src = "images/icon-arrow-down.svg"
  })
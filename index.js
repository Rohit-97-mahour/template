function modalFunction(){
  var x = document.getElementById("exampleModal").style.display;
  if(x === "block")
    document.getElementById("exampleModal").style.display = "none";
  else {
    document.getElementById("exampleModal").style.display = "block";
    }
}
function opennav(){
  document.getElementById("mynav").style.width = "300px";
}
function closenav() {
  document.getElementById("mynav").style.width = "0px";
}

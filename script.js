
var menuIcon = document.querySelector('.menu-icon');
var sideber = document.querySelector('.sideber');
var container = document.querySelector('.container');


menuIcon.onclick = function(){
    sideber.classList.toggle("small-sideber");
    container.classList.toggle("large-container")
};
document.getElementById('sbtn').addEventListener("click",function(){
    document.getElementById('sbtn').innerHTML = "subcribed"
})

console.log("page loaded...");


var newname = document.querySelector(".oldname")
function editprofile(){
    newname.innerText= "jehad"
}

var hidden = document.querySelector(".card-list-item")
function hide(){
    hidden.remove()
}

var hidden = [document.querySelector(".card-list-item"), document.querySelector(".card-list-item1")]

function hide(x){
    hidden[x].remove()
}
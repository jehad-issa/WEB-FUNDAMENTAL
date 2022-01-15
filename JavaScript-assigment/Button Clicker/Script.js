
function massege(){
    alert("ninja was likes!");
}


function login(element){
    if(element.innerText == "login"){
        element.innerText = "logout";
    } else{
        element.innerText = "login";
    }
}

function hide(element){
    element.remove();
}
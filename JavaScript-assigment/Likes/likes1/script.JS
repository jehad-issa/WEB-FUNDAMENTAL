var likecount = 3;
var likespan1 = document.querySelector("#like1");


function like(){
    likecount++;
    likespan1.innerText = likecount + "like(s)";
}

function weatherlocation(){
    alert("weather in this location");
}

var cookie = document.querySelector("footer");

function footerhide(){
    cookie.remove();
}

function ctof(temp){
    return  Math.round (9/5 * temp +32);
}

function ftoc(temp){
    return  Math.round (5/9 * (temp -32));
}

function convert(element){
    console.log(element.value);
    for(var i=1; i<9; i++){
        var tempspan = document.querySelector("#temp"+ i);
        var tempval = parseInt(tempspan.innerText);
            if(element.value == "&#8451"){
                tempspan.innerText = ftoc(tempval);
                
                } else{
                    tempspan.innerText = ctof(tempval);
            
            }
    }



}
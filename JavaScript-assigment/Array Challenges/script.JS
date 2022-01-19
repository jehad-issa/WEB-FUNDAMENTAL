
// 1 Always Hungry

function alwaysHungry(arr) {
    var foodcount = 0;
    for(var i=0; i<arr.length; i++){
            if(arr[i]=="food"){
                console.log("yummy");
                foodcount++;
            } 
    }
    if(foodcount==0){
    console.log("im hungry");
     }
    
}

// alwaysHungry([3.14, "food", "pie", true, "food"]);
// alwaysHungry([4, 1, 5, 7, 2]);

// 2 High Pass Filter


function highPass(arr, cutoff) {
    var filteredArr = [];
    for(var i=0; i<arr.length; i++){
        if(arr[i]>cutoff){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
// var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
// console.log(result); // we expect back [6, 8, 10, 9]

// 3 Better than average

// Given an array of numbers return a count of how many of the numbers are larger than the average.

function betterThanAverage(arr) {
    var sum = 0;
   for(var i=0; i<arr.length; i++){
       sum+=arr[i];
   }
   var avg= sum/arr.length;
    var count = 0;
    for(var i=0; i<arr.length; i++){
        if(arr[i]>avg){
            count++;
        }
    }
    return count;
}
// var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
// // console.log(result); // we expect back 4

// 4 Array Reverse

// Write a function that will reverse the values an array and return them.


    var newarr=[];
    // var temp= 0;
    function reverse(arr) {
    for(var i=4; i>=0; i--){
        // temp = arr[i];
        newarr.push(arr[i]);
    }
    return newarr;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(newarr); // we expect back ["e", "d", "c", "b", "a"]


//5 Fibonacci Array

var temp = [0,1];
var fibArr = [0,1];

function fibonacciArray(n){
    for(var n=2; n<10; n++){
    fibArr[n] = fibArr[n-1] + fibArr[n-2];
        temp.push(fibArr[n]);
    }
    return temp;
}


var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]





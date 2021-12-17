function myFunction() {
    var text;
    var fruits = document.getElementById("myInput").value;
  
    switch(fruits) {
      case "Banana":
        text = "Banana is good!";
      break;
      case "Orange":
      text = "I am not a fan of orange.";
      break;
      case "Apple":
      text = "How you like them apples?";
      break;
      default:
      text = "I have never heard of that fruit...";
    }
    document.getElementById(".demo").innerHTML = text;
  }

//   var btn = document.createElement("button");
// btn.innerHTML = "Click Me";
// document.body.appendChild(btn);


var checDate = new Date();
// console.log(myDate.getDate());  to get date
// console.log(myDate.getMonth()); 11 
// console.log(myDate.getFullYear()); 2021

var myDate = checDate.getDate();
var myMonth = checDate.getMonth();
var myYear = checDate.getFullYear();
var fullDate = myDate + "/" + myMonth + "/" + myYear;

document.querySelector(".displayDate").innerHTML = fullDate;

console.log(checDate.getHours()); // 12

console.log(checDate.getMinutes()); // 27

console.log(checDate.getSeconds()); //seconds

console.log(checDate.toLocaleTimeString());

setInterval(() => {
    var checDate = new Date();
    document.querySelector(".displayTime").innerHTML = checDate.toLocaleTimeString();
}, 1000);

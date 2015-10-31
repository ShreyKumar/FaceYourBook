// save amount of money spent to local storage
// is this the initializer??
//
function loadApp() {
   if (localStorage.getItem("moneySpent") == undefined){
     localStorage.setItem("moneySpent") = 0;
   }
    var moneySpent = localStorage["moneySpent"];

    if (moneySpent < 3) {
      document.getElementById('titel').innerHTML = "You don't waste too much time, keep it up.";
    } else {
      document.getElementById('title').innerHTML = "Goddamn, go faceYOURbook";
    }

    document.getElementById('money').innerHTML = moneySpent;
}


// function addDolar() {
//   var dollarSpent = localStorage.moneySpent;
//   dollarSpent++;
// }

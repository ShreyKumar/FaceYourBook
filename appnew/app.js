document.addEventListener('DOMContentLoaded', function(){

  if (localStorage.getItem("moneySpent") == undefined){
    localStorage.setItem("moneySpent", 0);
  }
   var moneySpent = localStorage["moneySpent"];

   if (moneySpent < 3) {
     document.getElementById('title').innerHTML = "You don't waste too much time, keep it up.";
   } else {
     document.getElementById('title').innerHTML = "Goddamn, go faceYOURbook";
     //send text message.
     
   })

   document.getElementById('money').innerHTML = moneySpent;


 });

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
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://someotherdomain.com');
        xhr.withCredentials = true;
        xhr.setRequestHeader('Content-Type', 'text/plain');
        xhr.send('sometext');
   })

   document.getElementById('money').innerHTML = moneySpent;


 });

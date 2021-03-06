// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



/**
 * Get the current URL.
 *
 * @param {function(string)} callback - called when the URL of the current tab
 *   is found.
 */
function getCurrentTabUrl(callback) {
  // Query filter to be passed to chrome.tabs.query - see
  // https://developer.chrome.com/extensions/tabs#method-query
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    // chrome.tabs.query invokes the callback with a list of tabs that match the
    // query. When the popup is opened, there is certainly a window and at least
    // one tab, so we can safely assume that |tabs| is a non-empty array.
    // A window can only have one active tab at a time, so the array consists of
    // exactly one tab.
    var tab = tabs[0];


    // A tab is a plain object that provides information about the tab.
    // See https://developer.chrome.com/extensions/tabs#type-Tab
    var url = tab.url;
    // tab.url is only available if the "activeTab" permission is declared.
    // If you want to see the URL of other tabs (e.g. after removing active:true
    // from |queryInfo|), then the "tabs" permission is required to see their
    // "url" properties.
    console.assert(typeof url == 'string', 'tab.url should be a string');

    callback(url);
  });
}
//
// document.querySelector('#go-to-options').addEventListener(function() {
//   if (chrome.runtime.openOptionsPage) {
//     // New way to open options pages, if supported (Chrome 42+).
//     chrome.runtime.openOptionsPage();
//   } else {
//     // Reasonable fallback.
//     window.open(chrome.runtime.getURL('options.html'));
//   }
// });

document.addEventListener('DOMContentLoaded', function() {
  // check if moneySpent has been initialized
  if (localStorage.getItem("moneySpent") == undefined){
    localStorage.setItem("moneySpent", 0);
  }
  getCurrentTabUrl(function(url) {
    //check if facebook is in the url.
      if (url.indexOf("facebook") > -1){
        // alert("hello");

          $(document).ready(function(){
              var data = {
                medium: "balance",
                payee_id: "56241a13de4bf40b17112926",
                transaction_date: "31/10/15",
                status: "pending",
                description: "fdsfdsfds",
                amount: 1
              }

            //detuct amount
            $.ajax({
                method: "POST",
                dataType: "json",
                contentType: "application/json",
                url: "http://api.reimaginebanking.com/accounts/56241a13de4bf40b17112927/transfers?key=3cdb9c7676cdd3b9c000cbb9b5d94bdd",
                data: JSON.stringify(data)
            }).done(function( msg ) {
                alert("Amount transfered!");
            }).error(function(msg){
                console.log(msg);
            });
          });
          localStorage["moneySpent"]++;

      }


  });
  // the view for the popup.
  if (localStorage["moneySpent"] == 0) {
    document.getElementById('title').innerHTML = "You don't time, keep it up.";
  } else if ((localStorage["moneySpent"] > 0) && (localStorage["moneySpent"] <= 3)) {
    document.getElementById('title').innerHTML = "U HEADING DOWN A SLIPPERY SLOPE";
  } else {
    document.getElementById('title').innerHTML = "no more hope.";
  }

  document.getElementById('money').innerHTML = localStorage["moneySpent"];


});

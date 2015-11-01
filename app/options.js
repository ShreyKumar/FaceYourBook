function save_options() {
  var sendFrom = document.getElementById('youraccount').value;
  var sendTo = document.getElementById('theiraccount').value;
  chrome.storage.sync.set({
    accountFrom: sendFrom,
    accountTo: sendTo
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

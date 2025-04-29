// Handle form submission
document.getElementById('submitBtn').addEventListener('click', function() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  
  if (name && email && message) {
    alert('Thank you for your message, ' + name + '!\nWe will get back to you shortly.');
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  } else {
    alert('Please fill out all fields before submitting.');
  }
});


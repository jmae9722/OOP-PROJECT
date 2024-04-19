function sendmail() {
    var name = $('#Name').val();
    var email = $('#Sender').val();
    var subject = $('#Subject').val();
    var message = $('#Message').val();
    var Body = 'Name: ' + name + '<br>Email: ' + email + '<br>Subject: ' + subject + '<br>Message: ' + message;
  
    Email.send({
      SecureToken: "fbf31702-bb7f-4a4e-9c1c-4ccf17ee777f",
      To: 'jhornsby@rochesteru.edu',
      From: "demooptimalweb@gmail.com",
      Subject: "New message on contact from " + name,
      Body: Body
    }).then(
      message => {
        if (message == 'OK') {
          alert('Your mail has been sent. Thank you for connecting.');
        } else {
          console.error(message);
          alert('There is an error at sending message.');
        }
      }
    );
  }
  function sendmail() {
    var name = $('#Name').val();
    var email = $('#Sender').val();
    var subject = $('#Subject').val();
    var message = $('#Message').val();
    var Body = 'Name: ' + name + '<br>Email: ' + email + '<br>Subject: ' + subject + '<br>Message: ' + message;
  
    Email.send({
      SecureToken: "fbf31702-bb7f-4a4e-9c1c-4ccf17ee777f",
      To: 'optimalweb09@gmail.com',
      From: "demooptimalweb@gmail.com",
      Subject: "New message on contact from " + name,
      Body: Body
    }).then(
      message => {
        if (message == 'OK') {
          alert('Your mail has been sent. Thank you for connecting.');
        } else {
          console.error(message);
          alert('There is an error at sending message.');
        }
      }
    );
  }
  // Add smooth scrolling to all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function sendmail() {
    var name = $('#Name').val();
    var email = $('#Sender').val();
    var subject = $('#Subject').val();
    var message = $('#Message').val();
    var Body = 'Name: ' + name + '<br>Email: ' + email + '<br>Subject: ' + subject + '<br>Message: ' + message;
  
    Email.send({
      SecureToken: "fbf31702-bb7f-4a4e-9c1c-4ccf17ee777f",
      To: 'optimalweb09@gmail.com',
      From: "demooptimalweb@gmail.com",
      Subject: "New message on contact from " + name,
      Body: Body
    }).then(
      message => {
        if (message == 'OK') {
          alert('Your mail has been sent. Thank you for connecting.');
        } else {
          console.error(message);
          alert('There is an error at sending message.');
        }
      }
    );
}
// Add smooth scrolling to all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


  
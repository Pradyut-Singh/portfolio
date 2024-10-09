function sendEmail() {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let fullName = firstName + ' ' + lastName;
    let msg = document.getElementById('messageToSend').value;
    let email = document.getElementById('email').value;

    if (firstName === '' || lastName === '' || msg === '' || email === '') {
        alert('Please fill out all fields.');
        return;
    }

    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    let templateParams = {
        name: fullName,
        message: msg
    };

    emailjs.send('service_ch9ifvd', 'template_nao7bio', templateParams)
        .then(function(response) {
            console.log('Email sent successfully:', response); // Log success
            alert('Email sent successfully!');
            returnToHome();
        }, function(error) {
            console.error('Failed to send email:', error); // Log error
            alert('Failed to send email. Please try again.');
        });
}

function returnToHome() {
    window.location.href = 'index.html';
}
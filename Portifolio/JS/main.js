function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "craftyhomestore@gmail.com",
        Password : "Matheus11jh",
        To : 'craftyhomestore@gmail.com',
        From : document.getElementById("Email").value,
        Subject : "New Contact FOrm Enquiry",
        Body : "And this is the body"
    }).then(
    message => alert(message)
    );
}


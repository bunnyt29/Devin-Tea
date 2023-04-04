
function sendmail(params) {
    console.log("injs");
    // var name = document.forms["contactform"].getElementByTagName("name");
    // var inputs = document.getElementById("email").value;
    var inputs = document.getElementById("contact-form").elements;
    var name = inputs["name"].value;
    console.log(name);
    var email = inputs["email"].value;
    console.log(email);
    var subject = inputs["subject"].value;
    console.log(subject);
    var message= inputs["message"].value;
    console.log(message);
    var mailbody = "somebody with the mail: " + email + "send you the message" + message;
    Email.send({
        Host : "mail.bflow.dev",
        Username : "modis@bflow.dev",
        Password : "kronkron123",
        To : "taniabojkova929@gmail.com",
        From : "modis@bflow.dev",
        Subject : subject,
        Body : mailbody
    }).then(
      message => alert(message)
    );
}

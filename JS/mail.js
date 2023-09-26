function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "scaremax@gmail.com",
    Password: "0F27A40DD9648366E8BB05B7F99FEC67CCB1",

    To: "junaidmushahid@gmail.com",
    From: "scaremax@gmail.com",
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then((message) => alert(message));
}

const sentEmail = btc => {
  const nodemailer = require("nodemailer");
  let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "lymobach1985@gmail.com",
      pass: "thanhphong1803"
    }
  });

  let mailDetails = {
    from: "lymobach1985@gmail.com",
    to: "ledanghongphuc@gmail.com",
    subject: "Test mail",
    text: btc
  };

  mailTransporter.sendMail(mailDetails, function(err, data) {
    if (err) {
      console.log("Error Occurs");
    } else {
      console.log("Email sent successfully");
    }
  });
};
export default sentEmail;

const nodemailer = require("nodemailer");

// tivczuiwnqawkbsg

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "ejovwogfreeman007@gmail.com",
    password: "ayczpdzvosjlxjse",
  },
});

function sendEmail(to, subject, message) {
  const mailOptions = {
    from: "ejovwogfreeman007@gmail.com",
    to: to,
    subject: subject,
    html: message,
  };

  return transporter
    .sendMail(mailOptions)
    .then((info) => {
      console.log("Email sent ", info.response);
      return info;
    })
    .catch((err) => {
      console.log("Fail to send mail", err);
    });
}

function createBlogMail(to) {
  const subject = "A new blog created";
  const message = `
        <h1>Hello ${to}</h1>
        <p>Hell your blog has been added</p>
    `;

  return sendEmail(to, subject, message);
}

createBlogMail("ejovwgfreeman007@gmail.com");

// module.exports = {
//   createBlogMail,
// };

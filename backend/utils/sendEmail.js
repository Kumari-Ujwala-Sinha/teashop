const nodeMailer = require("nodemailer");

const sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port:465,
    service: "gmail",
    auth: {
      user: "kumariujwalas@gmail.com",
      pass: "vftyxnttjnxjrfyz",
    },
  });

  const mailOptions = {
    from: "kumariujwalas@gmail.com",
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;

const sgMail = require("@sendgrid/mail");
const sendgridAPIKey = process.env.SENDGRID_API_KEY;
sgMail.setApiKey(sendgridAPIKey);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "anabilsalah@gmail.com",
        subject: "Welcome to the task manager app",
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCanelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "anabilsalah@gmail.com",
        subject: "Sorry to see you go.",
        text: `Goodbye, ${name}. Let us know how to improve the app.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCanelationEmail
}
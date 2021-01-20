const { text } = require('express');
const nodemailer = require('nodemailer');
const mailgun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: 'c1d6a0770180f899b88dc98303c94952-d5e69b0b-33e325e3',
        domain: 'sandboxe24a5aa03f6c4763a39b5cb6cf050178.mailgun.org'
    }
};

const transporter = nodemailer.createTransport(mailgun(auth));

const sendMail = (email, subject, text, number, cb) => {
    const mailOptions = {
        from: email,
        to: 'mokshajain7176@gmail.com',
        subject: subject + number,
        text: text
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            cb(err, null);
        } else {
            cb(null, data);
        }
    });
}

module.exports = sendMail;
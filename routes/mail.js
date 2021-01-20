const { text } = require('express');
const nodemailer = require('nodemailer');
const mailgun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: ' ',
        domain: ' '
    }
};

const transporter = nodemailer.createTransport(mailgun(auth));

const sendMail = (email, subject, text, number, cb) => {
    const mailOptions = {
        from: email,
        to: ' ',
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

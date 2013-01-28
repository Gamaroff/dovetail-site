/**
 * User: gamaroff
 * Date: 2012/09/28
 * Time: 2:04 PM
 */
var mailer = require('../app/mailer');

function MailRoutes() {
    'use strict';

    var self = this;

    // app.get('/send'...)
    self.sendMail = function (req, res) {

        var senderName = req.body.name;
        var senderEmail = req.body.email;
        var senderMessage = req.body.message;

        var to = ['lorien@gamaroff.org'];
        var subject = 'Email from dovetaildhe.com';
        var html = '<p>A Mail has been received via dovetaildhe.com with the following contents:</p>' +
            '<p><br/></p><p>' + senderMessage + '</p><hr>' +
            '<p>From: ' + senderName + '</p>' +
            '<p>Email: ' + senderEmail + '</p>' +
            '<p>Regards, dovetaildhe.com</p>';

        mailer.sendMail(to, subject, html, function (err, result) {
            res.send({err:err, result:result});
        })

    };

}

module.exports = new MailRoutes();



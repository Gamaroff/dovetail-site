/**
 * User: gamaroff
 * Date: 2013/01/18
 * Time: 11:04 AM
 */

define(['lib/knockout', 'extenders/knockout.validation'], function (ko) {
    'use strict';

    return function MainViewModel() {

        var self = this;

        self.isBusy = ko.observable(false);

        self.messageOptions = ko.observableArray(['General Enquiries', 'Recruitment', 'Suggestions', 'Investors']);

        self.firstName = ko.observable().extend({required : true});
        self.lastName = ko.observable().extend({required : true});
        self.message = ko.observable().extend({required : true});
        self.messageSubject = ko.observable();
        self.email = ko.observable().extend({required : true, email : true});

        self.contactName = ko.observable().extend({required:true});
        self.information = ko.observable();

        self.sending = ko.observable(false);


        self.isValid = ko.computed(function () {
            var result = true;

            if(!self.firstName.isValid()){
                result = false;
            }

            if(!self.lastName.isValid()){
                result = false;
            }

            if(!self.message.isValid()){
                result = false;
            }

            if(!self.email.isValid()){
                result = false;
            }

            return result;

        });


        self.sendEmail = function () {

            self.isBusy(true);
            self.information(null);
            if (!self.isValid()) {
                self.information('Please ensure all fields are correct');
            }
            else {
                self.sending(true);

                self.information('Sending message...');

                var dto = {
                    name: self.firstName() + ' ' + self.lastName(),
                    email: self.email(),
                    message: self.message()
                };

                $.post('/send', dto, function (data) {
                    self.sending(false);
                    self.isBusy(false);

                    if (data.err) {
                        self.information('Your message was not sent. Please try emailing us at info@dovetaildhe.com');
                    }
                    else {

                        self.information('Your message has been sent');
                        self.firstName(null);
                        self.lastName(null);
                        self.email(null);
                        self.message(null);
                    }
                });

            }
        };

    };

});
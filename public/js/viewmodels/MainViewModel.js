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


        self.sendMessage = function () {
            alert(self.message());
        };

    };

});
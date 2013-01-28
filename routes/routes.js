var homeRoutes = require('./homeRoutes');
var mailRoutes = require('./mailRoutes');

function Routes() {
    'use strict';

    var self = this;

    self.init = function (app) {

        app.get('/', homeRoutes.view);

        app.post('/send', mailRoutes.sendMail);


    };

}

module.exports = new Routes();

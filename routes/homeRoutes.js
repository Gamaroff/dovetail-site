/**
 * User: gamaroff
 * Date: 2012/10/01
 * Time: 10:22 AM
 */

var viewUtil = require('../app/viewUtil');

function HomeRoutes() {
    'use strict';

    var self = this;

    // app.get('/'...)
    self.view = function (req, res) {
        viewUtil.renderView(req, res, 'index', 'Dovetail DHE');
    };

}

module.exports = new HomeRoutes();






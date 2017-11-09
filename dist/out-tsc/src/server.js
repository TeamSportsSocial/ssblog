"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("zone.js/dist/zone-node");
var platform_server_1 = require("@angular/platform-server");
var core_1 = require("@angular/core");
var express = require("express");
var path_1 = require("path");
var fs_1 = require("fs");
var compression = require("compression");
var app_server_module_ngfactory_1 = require("../dist/ngfactory/src/app/app-server.module.ngfactory");
core_1.enableProdMode();
var PORT = process.env.PORT || 4000;
var DIST_DIR = path_1.join(__dirname, '..', 'dist');
var app = express();
app.use(compression());
var template = fs_1.readFileSync(path_1.join(DIST_DIR, 'index.html')).toString();
// console.log(template);
// console.log(DIST_DIR);
app.engine('html', function (_, options, callback) {
    var newOptions = { document: template, url: options.req.url };
    platform_server_1.renderModuleFactory(app_server_module_ngfactory_1.AppServerModuleNgFactory, newOptions)
        .then(function (html) { return callback(null, html); });
});
app.set('views', 'src');
app.set('view engine', 'html');
app.get('*.*', express.static(DIST_DIR));
function ngApp(req, res) {
    res.render('index', {
        req: req,
        res: res,
        // time: true, // use this to determine what part of your app is slow only in development
        preboot: true,
        baseUrl: '/',
        requestUrl: req.originalUrl,
        originUrl: "http://localhost:" + PORT
    });
}
/* app.get('*', (req, res) => {
  res.render('index', { req});
}); */
app.get('/', ngApp);
app.get('/:tag', ngApp);
app.get('/:tag/:title/:blogId', ngApp);
app.listen(PORT, function () {
    console.log("App listening on http://localhost:" + PORT + "!");
});
//# sourceMappingURL=server.js.map
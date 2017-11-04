import 'reflect-metadata';
import 'zone.js/dist/zone-node';
import { renderModuleFactory } from '@angular/platform-server';
import { enableProdMode } from '@angular/core';
import * as express from 'express';
import { join } from 'path';
import { readFileSync } from 'fs';
import { AppServerModuleNgFactory } from '../dist/ngfactory/src/app/app-server.module.ngfactory';
import { routes } from './server.routes';


enableProdMode();

const PORT     = process.env.PORT || 4000;
const DIST_DIR = join(__dirname, '..', 'dist');
const app = express();
const template = readFileSync(join(DIST_DIR, 'index.html')).toString();

app.engine('html', (_, options, callback) => {
  const newOptions = { document: template, url: options.req.url };

  renderModuleFactory(AppServerModuleNgFactory, newOptions)
    .then(html => callback(null, html));
});

app.set('views', 'src');
app.set('view engine', 'html');

app.get('*.*', express.static(DIST_DIR));


function ngApp(req, res) {
  res.render('index', {
    req,
    res,
    // time: true, // use this to determine what part of your app is slow only in development
    preboot: true,
    baseUrl: '/',
    requestUrl: req.originalUrl,
    originUrl: `http://localhost:${PORT}`
  });
}
/* app.get('*', (req, res) => {
  res.render('index', { req});
}); */
app.get('/', ngApp);
routes.forEach(route => {
  app.get(`/${route}`, ngApp);
  app.get(`/${route}/*`, ngApp);
});
app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}!`);
});

'use strict';

module.exports = app => {
  app.post('/create', 'home.create');
  app.post('/updata', 'home.updata');
  app.get('/getSelect', 'home.getSelect');
  app.post('/getGet', 'home.getGet');
  app.post('/delete', 'home.delete');

  app.post('/cartCreate', 'home.cartCreate');
  app.get('/cartGet', 'home.cartGet');
  app.post('/cartDelete', 'home.cartDelete');
  app.post('/cartUpdate', 'home.cartUpdate');

  app.post('/addressCreate', 'home.addressCreate');
  app.get('/addressGet', 'home.addressGet');
  app.post('/addressDelete', 'home.addressDelete');
  app.post('/addressUpdate', 'home.addressUpdate');


};

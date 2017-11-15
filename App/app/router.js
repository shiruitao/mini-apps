'use strict';

module.exports = app => {
  app.post('/create', 'home.create');
  app.post('/updata', 'home.updata');
  app.get('/getSelect', 'home.getSelect');
  app.post('/getGet', 'home.getGet');
  app.post('/getClass', 'home.getClass');
  app.post('/getSearch', 'home.getSearch');
  app.post('/delete', 'home.delete');

  app.post('/cartCreate', 'home.cartCreate');
  app.post('/cartGet', 'home.cartGet');
  app.post('/cartSubmit', 'home.cartSubmit');
  app.post('/cartDelete', 'home.cartDelete');
  app.post('/cartUpdate', 'home.cartUpdate');

  app.post('/orderCreate', 'home.orderCreate');
  app.get('/orderGet', 'home.orderGet');
  app.post('/orderDelete', 'home.orderDelete');
  app.post('/orderUpdate', 'home.orderUpdate');


};

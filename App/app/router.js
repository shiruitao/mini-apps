'use strict';

module.exports = app => {
  app.post('/create', 'home.create');
  app.post('/updata', 'home.updata');
  app.post('/get', 'home.get');
  app.post('/delete', 'home.delete');
};

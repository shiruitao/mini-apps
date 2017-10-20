'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * create() {
      const r = yield this.service.home.create(this.ctx.request.body);
      this.ctx.body = r;
    }
    * delete() {
      const r = yield this.service.home.delete(this.ctx.request.body);
      this.ctx.body = r;
    }
    * updata() {
      const r = yield this.service.home.updata(this.ctx.request.body);
      this.ctx.body = r;
    }
    * get() {
      const r = yield this.service.home.get(this.ctx.request.body);
      this.ctx.body = r;
    }
  }
  return HomeController;
};

'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    // 首页表
    * create() {
      this.ctx.body = yield this.service.home.create(this.ctx.request.body);
    }
    * delete() {
      this.ctx.body = yield this.service.home.delete(this.ctx.request.body);
    }
    * updata() {
      this.ctx.body = yield this.service.home.updata(this.ctx.request.body);
    }
    * getSelect() {
      this.ctx.body = yield this.service.home.getSelect(this.ctx.request.body);
    }
    * getSearch() {
      this.ctx.body = yield this.service.home.getSearch(this.ctx.request.body);
    }
    * getGet() {
      this.ctx.body = yield this.service.home.getGet(this.ctx.request.body);
    }
    * getClass() {
      this.ctx.body = yield this.service.home.getClass(this.ctx.request.body);
    }
    // 购物车表
    * cartCreate() {
      this.ctx.body = yield this.service.home.cartCreate(this.ctx.request.body);
    }
    * cartGet() {
      this.ctx.body = yield this.service.home.cartGet(this.ctx.request.body);
    }
    * cartSubmit() {
      console.log(this.ctx.request.body, 'controller');
      this.ctx.body = yield this.service.home.cartSubmit(this.ctx.request.body);
    }
    * cartDelete() {
      this.ctx.body = yield this.service.home.cartDelete(this.ctx.request.body);
    }
    * cartUpdate() {
      this.ctx.body = yield this.service.home.cartUpdate(this.ctx.request.body);
    }
    // 最终订单
    * orderCreate() {
      console.log(this.ctx.request.body, 'order.....');
      this.ctx.body = yield this.service.home.orderCreate(this.ctx.request.body);
    }
    * orderGet() {
      this.ctx.body = yield this.service.home.orderGet(this.ctx.request.body);
    }
    * orderDelete() {
      this.ctx.body = yield this.service.home.orderDelete(this.ctx.request.body);
    }
    * orderUpdate() {
      this.ctx.body = yield this.service.home.orderUpdate(this.ctx.request.body);
    }
  }
  return HomeController;
};

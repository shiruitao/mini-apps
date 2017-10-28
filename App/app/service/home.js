'use strict';
module.exports = app => {
  class Test extends app.Service {
    // 首页表
    * create(param) {
      try {
        yield app.mysql.insert('commodity', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * get(req) {
      let res;
      try {
        res = yield app.mysql.select('commodity', req);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }
    * delete(param) {
      try {
        yield app.mysql.delete('commodity', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * update(parm) {
      try {
        yield app.mysql.update('commodity', parm);
      } catch (e) {
        this.ctx.logger.update(e);
        return false;
      }
      return true;
    }

    //  购物车表
    * cartCreate(param) {
      try {
        yield app.mysql.insert('carts', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * cartGet(req) {
      let res;
      try {
        res = yield app.mysql.select('carts', req);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }
    * cartDelete(param) {
      try {
        yield app.mysql.delete('carts', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * cartUpdate(parm) {
      try {
        yield app.mysql.update('carts', parm);
      } catch (e) {
        this.ctx.logger.update(e);
        return false;
      }
      return true;
    }
    // 收货地址
    * addressCreate(param) {
      try {
        yield app.mysql.insert('address', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * addressGet(req) {
      let res;
      try {
        res = yield app.mysql.select('address', req);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }
    * addressDelete(param) {
      try {
        yield app.mysql.delete('address', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * addressUpdate(parm) {
      try {
        yield app.mysql.update('address', parm);
      } catch (e) {
        this.ctx.logger.update(e);
        return false;
      }
      return true;
    }
  }
  return Test;
};

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
    * getSelect(req) {
      let res;
      try {
        res = yield app.mysql.select('commodity', req);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }
    * getGet(req) {
      let res;
      try {
        res = yield app.mysql.get('commodity', req);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }
    * getClass(req) {
      let res;
      try {
        res = yield app.mysql.select('commodity', {
          where: { class: req.class },
        });
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }
    * getSearch(req) {
      let res;
      try {
        res = yield app.mysql.query('select * from commodity where title like ?', [ `%${req.title}%` ]);
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
    * cartSubmit(req) {
      let res;
      try {
        res = yield app.mysql.select('carts', {
          where: { selected: req.selected },
        });
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
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
    // 最终订单
    * orderCreate(param) {
      try {
        yield app.mysql.insert('order', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * orderGet(req) {
      let res;
      try {
        res = yield app.mysql.select('order', req);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }
    * orderDelete(param) {
      try {
        yield app.mysql.delete('order', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * orderUpdate(parm) {
      try {
        yield app.mysql.update('order', parm);
      } catch (e) {
        this.ctx.logger.update(e);
        return false;
      }
      return true;
    }
  }
  return Test;
};

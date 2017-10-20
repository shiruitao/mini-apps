'use strict';
module.exports = app => {
  class Test extends app.Service {
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
  }
  return Test;
};

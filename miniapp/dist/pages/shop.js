'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '购物车'
    }, _this.data = {
      carts: [],
      delete: '../my/delete.png',
      totalPrice: 0.0,
      num: 1,
      cartNum: 0,
      selectAllStatus: true,
      height: 0,
      width: 0,
      obj: {
        name: 'hello'
      }
    }, _this.methods = {
      selectList: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
          var self, index, selected;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  self = this;
                  index = e.currentTarget.dataset.index;
                  selected = self.carts[index].selected;

                  self.carts[index].selected = !selected;
                  _context.next = 6;
                  return _wepy2.default.request({
                    url: 'http://127.0.0.1:7001/cartUpdate',
                    method: 'POST',
                    data: {
                      id: self.carts[index].id,
                      selected: self.carts[index].selected
                    }
                  });

                case 6:
                  this.$apply();
                  self.methods.getTotalPrice(self);
                  self.methods.cartsCount(self);
                  console.log(self.cartNum, '调用时');

                case 10:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function selectList(_x) {
          return _ref2.apply(this, arguments);
        }

        return selectList;
      }(),
      getTotalPrice: function getTotalPrice(self) {
        var total = 0;
        for (var i = 0; i < self.carts.length; i++) {
          if (self.carts[i].selected) {
            total += self.carts[i].num * self.carts[i].price;
          }
        }
        self.setData({
          totalPrice: total.toFixed(1)
        });
        self.totalPrice = total.toFixed(1);
      },
      deleteList: function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
          var self, index;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  self = this;
                  index = e.currentTarget.dataset.index;
                  _context2.next = 4;
                  return _wepy2.default.request({
                    url: 'http://127.0.0.1:7001/cartDelete',
                    method: 'POST',
                    data: {
                      id: self.carts[index].id
                    }
                  });

                case 4:
                  _context2.next = 6;
                  return _wepy2.default.request({
                    url: 'http://127.0.0.1:7001/cartGet',
                    method: 'POST',
                    success: function success(res) {
                      console.log(res.data, 'res.data');
                      self.carts = res.data;
                      self.setData({
                        carts: res.data
                      });
                      console.log(self.carts.length, '长度');
                      self.methods.getTotalPrice(self);
                    }
                  });

                case 6:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function deleteList(_x2) {
          return _ref3.apply(this, arguments);
        }

        return deleteList;
      }(),
      selectAll: function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
          var self, selectAllStatus, carts, i;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  self = this;
                  selectAllStatus = self.selectAllStatus;

                  selectAllStatus = !selectAllStatus;
                  carts = self.carts;
                  i = 0;

                case 5:
                  if (!(i < carts.length)) {
                    _context3.next = 12;
                    break;
                  }

                  carts[i].selected = selectAllStatus;
                  _context3.next = 9;
                  return _wepy2.default.request({
                    url: 'http://127.0.0.1:7001/cartUpdate',
                    method: 'POST',
                    data: {
                      id: self.carts[i].id,
                      selected: self.carts[i].selected
                    }
                  });

                case 9:
                  i++;
                  _context3.next = 5;
                  break;

                case 12:
                  self.selectAllStatus = selectAllStatus;
                  this.$apply();
                  self.setData({
                    carts: carts
                  });
                  self.methods.getTotalPrice(self);
                  self.methods.cartsCount(self);

                case 17:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        function selectAll() {
          return _ref4.apply(this, arguments);
        }

        return selectAll;
      }(),
      addCount: function addCount(e) {
        var self = this;
        var index = e.currentTarget.dataset.index;
        var carts = self.carts;
        console.log(self.carts);
        var num = carts[index].num;
        num = num + 1;
        carts[index].num = num;
        _wepy2.default.request({
          url: 'http://127.0.0.1:7001/cartUpdate',
          method: 'POST',
          data: {
            id: carts[index].id,
            num: carts[index].num
          }
        });
        self.setData({
          carts: carts
        });
        self.methods.getTotalPrice(self);
      },
      minusCount: function minusCount(e) {
        var self = this;
        var index = e.currentTarget.dataset.index;
        var carts = self.carts;
        var num = carts[index].num;
        if (num <= 1) {
          return false;
        }
        num = num - 1;
        carts[index].num = num;
        _wepy2.default.request({
          url: 'http://127.0.0.1:7001/cartUpdate',
          method: 'POST',
          data: {
            id: self.carts[index].id,
            num: carts[index].num
          }
        });
        self.setData({
          carts: carts
        });
        self.methods.getTotalPrice(self);
      },
      bill: function bill() {
        var self = this;
        if (self.cartNum >= 1) {
          _wepy2.default.navigateTo({
            url: './class/submit'
          });
        } else {
          _wepy2.default.showToast({
            title: '请选择商品',
            image: '../images/warn.png',
            duration: 1000
          });
        }
      },
      cartsCount: function cartsCount(self) {
        _wepy2.default.request({
          url: 'http://127.0.0.1:7001/cartSubmit',
          method: 'POST',
          data: {
            selected: true
          },
          success: function success(res) {
            var NUM = 0;
            console.log(res.data, 'data');
            for (var i = 0; i < res.data.length; i++) {
              if (res.data[i].selected === 1) {
                NUM += 1;
              }
            }
            self.setData({
              cartNum: NUM
            });
            self.cartNum = NUM;
          }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onShow',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var self;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                self = this;
                _context4.next = 3;
                return _wepy2.default.request({
                  url: 'http://127.0.0.1:7001/cartGet',
                  method: 'POST',
                  success: function success(res) {
                    self.carts = res.data;
                    self.setData({
                      carts: res.data
                    });
                    self.methods.getTotalPrice(self);
                    console.log(self.carts, 'cart-onShow');
                    console.log(self.carts.length, '长度');
                    self.methods.cartsCount(self);
                  }
                });

              case 3:
                this.$apply();

              case 4:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function onShow() {
        return _ref5.apply(this, arguments);
      }

      return onShow;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      _wepy2.default.request({
        url: 'http://127.0.0.1:7001/cartGet',
        method: 'POST',
        success: function success(res) {
          self.carts = res.data;
          self.setData({
            carts: res.data
          });
          self.methods.getTotalPrice(self);
          self.methods.cartsCount(self);
        }
      });
      _wepy2.default.getSystemInfo({
        success: function success(res) {
          self.height = res.windowHeight;
          self.width = res.windowWidth;
        }
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/shop'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3AuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImNhcnRzIiwiZGVsZXRlIiwidG90YWxQcmljZSIsIm51bSIsImNhcnROdW0iLCJzZWxlY3RBbGxTdGF0dXMiLCJoZWlnaHQiLCJ3aWR0aCIsIm9iaiIsIm5hbWUiLCJtZXRob2RzIiwic2VsZWN0TGlzdCIsImUiLCJzZWxmIiwiaW5kZXgiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInNlbGVjdGVkIiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsImlkIiwiJGFwcGx5IiwiZ2V0VG90YWxQcmljZSIsImNhcnRzQ291bnQiLCJjb25zb2xlIiwibG9nIiwidG90YWwiLCJpIiwibGVuZ3RoIiwicHJpY2UiLCJzZXREYXRhIiwidG9GaXhlZCIsImRlbGV0ZUxpc3QiLCJzdWNjZXNzIiwicmVzIiwic2VsZWN0QWxsIiwiYWRkQ291bnQiLCJtaW51c0NvdW50IiwiYmlsbCIsIm5hdmlnYXRlVG8iLCJzaG93VG9hc3QiLCJ0aXRsZSIsImltYWdlIiwiZHVyYXRpb24iLCJOVU0iLCJnZXRTeXN0ZW1JbmZvIiwid2luZG93SGVpZ2h0Iiwid2luZG93V2lkdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxhQUFPLEVBREY7QUFFTEMsY0FBUSxrQkFGSDtBQUdMQyxrQkFBWSxHQUhQO0FBSUxDLFdBQUssQ0FKQTtBQUtMQyxlQUFTLENBTEo7QUFNTEMsdUJBQWlCLElBTlo7QUFPTEMsY0FBUSxDQVBIO0FBUUxDLGFBQU8sQ0FSRjtBQVNMQyxXQUFLO0FBQ0hDLGNBQU07QUFESDtBQVRBLEssUUFhUEMsTyxHQUFVO0FBQ0ZDLGdCQURFO0FBQUEsNkZBQ1NDLENBRFQ7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IlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfotK3nianovaYnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBjYXJ0czogW10sXG4gICAgZGVsZXRlOiAnLi4vbXkvZGVsZXRlLnBuZycsXG4gICAgdG90YWxQcmljZTogMC4wLFxuICAgIG51bTogMSxcbiAgICBjYXJ0TnVtOiAwLFxuICAgIHNlbGVjdEFsbFN0YXR1czogdHJ1ZSxcbiAgICBoZWlnaHQ6IDAsXG4gICAgd2lkdGg6IDAsXG4gICAgb2JqOiB7XG4gICAgICBuYW1lOiAnaGVsbG8nXG4gICAgfVxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgYXN5bmMgc2VsZWN0TGlzdChlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGNvbnN0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICAgIGNvbnN0IHNlbGVjdGVkID0gc2VsZi5jYXJ0c1tpbmRleF0uc2VsZWN0ZWRcbiAgICAgIHNlbGYuY2FydHNbaW5kZXhdLnNlbGVjdGVkID0gIXNlbGVjdGVkXG4gICAgICBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvY2FydFVwZGF0ZScsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgaWQ6IHNlbGYuY2FydHNbaW5kZXhdLmlkLFxuICAgICAgICAgIHNlbGVjdGVkOiBzZWxmLmNhcnRzW2luZGV4XS5zZWxlY3RlZFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgc2VsZi5tZXRob2RzLmdldFRvdGFsUHJpY2Uoc2VsZilcbiAgICAgIHNlbGYubWV0aG9kcy5jYXJ0c0NvdW50KHNlbGYpXG4gICAgICBjb25zb2xlLmxvZyhzZWxmLmNhcnROdW0sICfosIPnlKjml7YnKVxuICAgIH0sXG5cbiAgICBnZXRUb3RhbFByaWNlKHNlbGYpIHtcbiAgICAgIGxldCB0b3RhbCA9IDBcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZi5jYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoc2VsZi5jYXJ0c1tpXS5zZWxlY3RlZCkge1xuICAgICAgICAgIHRvdGFsICs9IHNlbGYuY2FydHNbaV0ubnVtICogc2VsZi5jYXJ0c1tpXS5wcmljZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICB0b3RhbFByaWNlOiB0b3RhbC50b0ZpeGVkKDEpXG4gICAgICB9KVxuICAgICAgc2VsZi50b3RhbFByaWNlID0gdG90YWwudG9GaXhlZCgxKVxuICAgIH0sXG5cbiAgICBhc3luYyBkZWxldGVMaXN0KGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgY29uc3QgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleFxuICAgICAgYXdhaXQgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL2NhcnREZWxldGUnLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGlkOiBzZWxmLmNhcnRzW2luZGV4XS5pZFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgYXdhaXQgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL2NhcnRHZXQnLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEsICdyZXMuZGF0YScpXG4gICAgICAgICAgc2VsZi5jYXJ0cyA9IHJlcy5kYXRhXG4gICAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICAgIGNhcnRzOiByZXMuZGF0YVxuICAgICAgICAgIH0pXG4gICAgICAgICAgY29uc29sZS5sb2coc2VsZi5jYXJ0cy5sZW5ndGgsICfplb/luqYnKVxuICAgICAgICAgIHNlbGYubWV0aG9kcy5nZXRUb3RhbFByaWNlKHNlbGYpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcblxuICAgIGFzeW5jIHNlbGVjdEFsbCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgbGV0IHNlbGVjdEFsbFN0YXR1cyA9IHNlbGYuc2VsZWN0QWxsU3RhdHVzXG4gICAgICBzZWxlY3RBbGxTdGF0dXMgPSAhc2VsZWN0QWxsU3RhdHVzXG4gICAgICBsZXQgY2FydHMgPSBzZWxmLmNhcnRzXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNhcnRzW2ldLnNlbGVjdGVkID0gc2VsZWN0QWxsU3RhdHVzXG4gICAgICAgIGF3YWl0IHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL2NhcnRVcGRhdGUnLFxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGlkOiBzZWxmLmNhcnRzW2ldLmlkLFxuICAgICAgICAgICAgc2VsZWN0ZWQ6IHNlbGYuY2FydHNbaV0uc2VsZWN0ZWRcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBzZWxmLnNlbGVjdEFsbFN0YXR1cyA9IHNlbGVjdEFsbFN0YXR1c1xuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgY2FydHM6IGNhcnRzXG4gICAgICB9KVxuICAgICAgc2VsZi5tZXRob2RzLmdldFRvdGFsUHJpY2Uoc2VsZilcbiAgICAgIHNlbGYubWV0aG9kcy5jYXJ0c0NvdW50KHNlbGYpXG4gICAgfSxcblxuICAgIGFkZENvdW50KGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgY29uc3QgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleFxuICAgICAgbGV0IGNhcnRzID0gc2VsZi5jYXJ0c1xuICAgICAgY29uc29sZS5sb2coc2VsZi5jYXJ0cylcbiAgICAgIGxldCBudW0gPSBjYXJ0c1tpbmRleF0ubnVtXG4gICAgICBudW0gPSBudW0gKyAxXG4gICAgICBjYXJ0c1tpbmRleF0ubnVtID0gbnVtXG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvY2FydFVwZGF0ZScsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgaWQ6IGNhcnRzW2luZGV4XS5pZCxcbiAgICAgICAgICBudW06IGNhcnRzW2luZGV4XS5udW1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgIGNhcnRzOiBjYXJ0c1xuICAgICAgfSlcbiAgICAgIHNlbGYubWV0aG9kcy5nZXRUb3RhbFByaWNlKHNlbGYpXG4gICAgfSxcblxuICAgIG1pbnVzQ291bnQoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBjb25zdCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XG4gICAgICBsZXQgY2FydHMgPSBzZWxmLmNhcnRzXG4gICAgICBsZXQgbnVtID0gY2FydHNbaW5kZXhdLm51bVxuICAgICAgaWYgKG51bSA8PSAxKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgbnVtID0gbnVtIC0gMVxuICAgICAgY2FydHNbaW5kZXhdLm51bSA9IG51bVxuICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL2NhcnRVcGRhdGUnLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGlkOiBzZWxmLmNhcnRzW2luZGV4XS5pZCxcbiAgICAgICAgICBudW06IGNhcnRzW2luZGV4XS5udW1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgIGNhcnRzOiBjYXJ0c1xuICAgICAgfSlcbiAgICAgIHNlbGYubWV0aG9kcy5nZXRUb3RhbFByaWNlKHNlbGYpXG4gICAgfSxcblxuICAgIGJpbGwoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGlmIChzZWxmLmNhcnROdW0gPj0gMSkge1xuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy4vY2xhc3Mvc3VibWl0J1xuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiAn6K+36YCJ5oup5ZWG5ZOBJyxcbiAgICAgICAgICBpbWFnZTogJy4uL2ltYWdlcy93YXJuLnBuZycsXG4gICAgICAgICAgZHVyYXRpb246IDEwMDBcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9LFxuICAgIGNhcnRzQ291bnQoc2VsZikge1xuICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL2NhcnRTdWJtaXQnLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHNlbGVjdGVkOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIHZhciBOVU0gPSAwXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEsICdkYXRhJylcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlcy5kYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocmVzLmRhdGFbaV0uc2VsZWN0ZWQgPT09IDEpIHtcbiAgICAgICAgICAgICAgTlVNICs9IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICAgIGNhcnROdW06IE5VTVxuICAgICAgICAgIH0pXG4gICAgICAgICAgc2VsZi5jYXJ0TnVtID0gTlVNXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgb25TaG93KCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIGF3YWl0IHdlcHkucmVxdWVzdCh7XG4gICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvY2FydEdldCcsXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBzZWxmLmNhcnRzID0gcmVzLmRhdGFcbiAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICBjYXJ0czogcmVzLmRhdGFcbiAgICAgICAgfSlcbiAgICAgICAgc2VsZi5tZXRob2RzLmdldFRvdGFsUHJpY2Uoc2VsZilcbiAgICAgICAgY29uc29sZS5sb2coc2VsZi5jYXJ0cywgJ2NhcnQtb25TaG93JylcbiAgICAgICAgY29uc29sZS5sb2coc2VsZi5jYXJ0cy5sZW5ndGgsICfplb/luqYnKVxuICAgICAgICBzZWxmLm1ldGhvZHMuY2FydHNDb3VudChzZWxmKVxuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy4kYXBwbHkoKVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL2NhcnRHZXQnLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgc2VsZi5jYXJ0cyA9IHJlcy5kYXRhXG4gICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgY2FydHM6IHJlcy5kYXRhXG4gICAgICAgIH0pXG4gICAgICAgIHNlbGYubWV0aG9kcy5nZXRUb3RhbFByaWNlKHNlbGYpXG4gICAgICAgIHNlbGYubWV0aG9kcy5jYXJ0c0NvdW50KHNlbGYpXG4gICAgICB9XG4gICAgfSlcbiAgICB3ZXB5LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgc2VsZi5oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XG4gICAgICAgIHNlbGYud2lkdGggPSByZXMud2luZG93V2lkdGhcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=
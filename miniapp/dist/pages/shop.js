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
      commodity: [],
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
      },
      home: function home() {
        _wepy2.default.switchTab({
          url: '../pages/home'
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
      _wepy2.default.request({
        url: 'http://127.0.0.1:7001/getClass',
        method: 'POST',
        data: {
          class: '推荐'
        },
        success: function success(res) {
          self.commodity = res.data;
          self.setData({
            commodity: res.data
          });
          console.log(res.data, 'res.data');
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3AuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImNhcnRzIiwiY29tbW9kaXR5IiwiZGVsZXRlIiwidG90YWxQcmljZSIsIm51bSIsImNhcnROdW0iLCJzZWxlY3RBbGxTdGF0dXMiLCJoZWlnaHQiLCJ3aWR0aCIsIm9iaiIsIm5hbWUiLCJtZXRob2RzIiwic2VsZWN0TGlzdCIsImUiLCJzZWxmIiwiaW5kZXgiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInNlbGVjdGVkIiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsImlkIiwiJGFwcGx5IiwiZ2V0VG90YWxQcmljZSIsImNhcnRzQ291bnQiLCJjb25zb2xlIiwibG9nIiwidG90YWwiLCJpIiwibGVuZ3RoIiwicHJpY2UiLCJzZXREYXRhIiwidG9GaXhlZCIsImRlbGV0ZUxpc3QiLCJzdWNjZXNzIiwicmVzIiwic2VsZWN0QWxsIiwiYWRkQ291bnQiLCJtaW51c0NvdW50IiwiYmlsbCIsIm5hdmlnYXRlVG8iLCJzaG93VG9hc3QiLCJ0aXRsZSIsImltYWdlIiwiZHVyYXRpb24iLCJOVU0iLCJob21lIiwic3dpdGNoVGFiIiwiY2xhc3MiLCJnZXRTeXN0ZW1JbmZvIiwid2luZG93SGVpZ2h0Iiwid2luZG93V2lkdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxhQUFPLEVBREY7QUFFTEMsaUJBQVcsRUFGTjtBQUdMQyxjQUFRLGtCQUhIO0FBSUxDLGtCQUFZLEdBSlA7QUFLTEMsV0FBSyxDQUxBO0FBTUxDLGVBQVMsQ0FOSjtBQU9MQyx1QkFBaUIsSUFQWjtBQVFMQyxjQUFRLENBUkg7QUFTTEMsYUFBTyxDQVRGO0FBVUxDLFdBQUs7QUFDSEMsY0FB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LFVBQXRCO0FBQ0Q7QUFaVSxPQUFiO0FBY0EscUJBQUttRCxhQUFMLENBQW1CO0FBQ2pCZixlQURpQixtQkFDVEMsR0FEUyxFQUNKO0FBQ1h0QixlQUFLUCxNQUFMLEdBQWM2QixJQUFJZSxZQUFsQjtBQUNBckMsZUFBS04sS0FBTCxHQUFhNEIsSUFBSWdCLFdBQWpCO0FBQ0Q7QUFKZ0IsT0FBbkI7QUFNRDs7OztFQS9PZ0MsZUFBS0MsSTs7a0JBQW5CekQsSyIsImZpbGUiOiJzaG9wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+i0reeJqei9pidcbiAgfVxuICBkYXRhID0ge1xuICAgIGNhcnRzOiBbXSxcbiAgICBjb21tb2RpdHk6IFtdLFxuICAgIGRlbGV0ZTogJy4uL215L2RlbGV0ZS5wbmcnLFxuICAgIHRvdGFsUHJpY2U6IDAuMCxcbiAgICBudW06IDEsXG4gICAgY2FydE51bTogMCxcbiAgICBzZWxlY3RBbGxTdGF0dXM6IHRydWUsXG4gICAgaGVpZ2h0OiAwLFxuICAgIHdpZHRoOiAwLFxuICAgIG9iajoge1xuICAgICAgbmFtZTogJ2hlbGxvJ1xuICAgIH1cbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGFzeW5jIHNlbGVjdExpc3QoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBjb25zdCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XG4gICAgICBjb25zdCBzZWxlY3RlZCA9IHNlbGYuY2FydHNbaW5kZXhdLnNlbGVjdGVkXG4gICAgICBzZWxmLmNhcnRzW2luZGV4XS5zZWxlY3RlZCA9ICFzZWxlY3RlZFxuICAgICAgYXdhaXQgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL2NhcnRVcGRhdGUnLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGlkOiBzZWxmLmNhcnRzW2luZGV4XS5pZCxcbiAgICAgICAgICBzZWxlY3RlZDogc2VsZi5jYXJ0c1tpbmRleF0uc2VsZWN0ZWRcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIHNlbGYubWV0aG9kcy5nZXRUb3RhbFByaWNlKHNlbGYpXG4gICAgICBzZWxmLm1ldGhvZHMuY2FydHNDb3VudChzZWxmKVxuICAgICAgY29uc29sZS5sb2coc2VsZi5jYXJ0TnVtLCAn6LCD55So5pe2JylcbiAgICB9LFxuXG4gICAgZ2V0VG90YWxQcmljZShzZWxmKSB7XG4gICAgICBsZXQgdG90YWwgPSAwXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGYuY2FydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHNlbGYuY2FydHNbaV0uc2VsZWN0ZWQpIHtcbiAgICAgICAgICB0b3RhbCArPSBzZWxmLmNhcnRzW2ldLm51bSAqIHNlbGYuY2FydHNbaV0ucHJpY2VcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgdG90YWxQcmljZTogdG90YWwudG9GaXhlZCgxKVxuICAgICAgfSlcbiAgICAgIHNlbGYudG90YWxQcmljZSA9IHRvdGFsLnRvRml4ZWQoMSlcbiAgICB9LFxuXG4gICAgYXN5bmMgZGVsZXRlTGlzdChlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGNvbnN0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICAgIGF3YWl0IHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS9jYXJ0RGVsZXRlJyxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBpZDogc2VsZi5jYXJ0c1tpbmRleF0uaWRcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIGF3YWl0IHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS9jYXJ0R2V0JyxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhLCAncmVzLmRhdGEnKVxuICAgICAgICAgIHNlbGYuY2FydHMgPSByZXMuZGF0YVxuICAgICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgICBjYXJ0czogcmVzLmRhdGFcbiAgICAgICAgICB9KVxuICAgICAgICAgIHNlbGYubWV0aG9kcy5nZXRUb3RhbFByaWNlKHNlbGYpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcblxuICAgIGFzeW5jIHNlbGVjdEFsbCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgbGV0IHNlbGVjdEFsbFN0YXR1cyA9IHNlbGYuc2VsZWN0QWxsU3RhdHVzXG4gICAgICBzZWxlY3RBbGxTdGF0dXMgPSAhc2VsZWN0QWxsU3RhdHVzXG4gICAgICBsZXQgY2FydHMgPSBzZWxmLmNhcnRzXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNhcnRzW2ldLnNlbGVjdGVkID0gc2VsZWN0QWxsU3RhdHVzXG4gICAgICAgIGF3YWl0IHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL2NhcnRVcGRhdGUnLFxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGlkOiBzZWxmLmNhcnRzW2ldLmlkLFxuICAgICAgICAgICAgc2VsZWN0ZWQ6IHNlbGYuY2FydHNbaV0uc2VsZWN0ZWRcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBzZWxmLnNlbGVjdEFsbFN0YXR1cyA9IHNlbGVjdEFsbFN0YXR1c1xuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgY2FydHM6IGNhcnRzXG4gICAgICB9KVxuICAgICAgc2VsZi5tZXRob2RzLmdldFRvdGFsUHJpY2Uoc2VsZilcbiAgICAgIHNlbGYubWV0aG9kcy5jYXJ0c0NvdW50KHNlbGYpXG4gICAgfSxcblxuICAgIGFkZENvdW50KGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgY29uc3QgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleFxuICAgICAgbGV0IGNhcnRzID0gc2VsZi5jYXJ0c1xuICAgICAgY29uc29sZS5sb2coc2VsZi5jYXJ0cylcbiAgICAgIGxldCBudW0gPSBjYXJ0c1tpbmRleF0ubnVtXG4gICAgICBudW0gPSBudW0gKyAxXG4gICAgICBjYXJ0c1tpbmRleF0ubnVtID0gbnVtXG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvY2FydFVwZGF0ZScsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgaWQ6IGNhcnRzW2luZGV4XS5pZCxcbiAgICAgICAgICBudW06IGNhcnRzW2luZGV4XS5udW1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgIGNhcnRzOiBjYXJ0c1xuICAgICAgfSlcbiAgICAgIHNlbGYubWV0aG9kcy5nZXRUb3RhbFByaWNlKHNlbGYpXG4gICAgfSxcblxuICAgIG1pbnVzQ291bnQoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBjb25zdCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XG4gICAgICBsZXQgY2FydHMgPSBzZWxmLmNhcnRzXG4gICAgICBsZXQgbnVtID0gY2FydHNbaW5kZXhdLm51bVxuICAgICAgaWYgKG51bSA8PSAxKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgbnVtID0gbnVtIC0gMVxuICAgICAgY2FydHNbaW5kZXhdLm51bSA9IG51bVxuICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL2NhcnRVcGRhdGUnLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGlkOiBzZWxmLmNhcnRzW2luZGV4XS5pZCxcbiAgICAgICAgICBudW06IGNhcnRzW2luZGV4XS5udW1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgIGNhcnRzOiBjYXJ0c1xuICAgICAgfSlcbiAgICAgIHNlbGYubWV0aG9kcy5nZXRUb3RhbFByaWNlKHNlbGYpXG4gICAgfSxcblxuICAgIGJpbGwoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGlmIChzZWxmLmNhcnROdW0gPj0gMSkge1xuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy4vY2xhc3Mvc3VibWl0J1xuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiAn6K+36YCJ5oup5ZWG5ZOBJyxcbiAgICAgICAgICBpbWFnZTogJy4uL2ltYWdlcy93YXJuLnBuZycsXG4gICAgICAgICAgZHVyYXRpb246IDEwMDBcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9LFxuICAgIGNhcnRzQ291bnQoc2VsZikge1xuICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL2NhcnRTdWJtaXQnLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHNlbGVjdGVkOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIHZhciBOVU0gPSAwXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEsICdkYXRhJylcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlcy5kYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocmVzLmRhdGFbaV0uc2VsZWN0ZWQgPT09IDEpIHtcbiAgICAgICAgICAgICAgTlVNICs9IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICAgIGNhcnROdW06IE5VTVxuICAgICAgICAgIH0pXG4gICAgICAgICAgc2VsZi5jYXJ0TnVtID0gTlVNXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICBob21lKCkge1xuICAgICAgd2VweS5zd2l0Y2hUYWIoe1xuICAgICAgICB1cmw6ICcuLi9wYWdlcy9ob21lJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBvblNob3coKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgYXdhaXQgd2VweS5yZXF1ZXN0KHtcbiAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS9jYXJ0R2V0JyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIHNlbGYuY2FydHMgPSByZXMuZGF0YVxuICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgIGNhcnRzOiByZXMuZGF0YVxuICAgICAgICB9KVxuICAgICAgICBzZWxmLm1ldGhvZHMuZ2V0VG90YWxQcmljZShzZWxmKVxuICAgICAgICBzZWxmLm1ldGhvZHMuY2FydHNDb3VudChzZWxmKVxuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy4kYXBwbHkoKVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL2NhcnRHZXQnLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgc2VsZi5jYXJ0cyA9IHJlcy5kYXRhXG4gICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgY2FydHM6IHJlcy5kYXRhXG4gICAgICAgIH0pXG4gICAgICAgIHNlbGYubWV0aG9kcy5nZXRUb3RhbFByaWNlKHNlbGYpXG4gICAgICAgIHNlbGYubWV0aG9kcy5jYXJ0c0NvdW50KHNlbGYpXG4gICAgICB9XG4gICAgfSlcbiAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL2dldENsYXNzJyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgZGF0YToge1xuICAgICAgICBjbGFzczogJ+aOqOiNkCdcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgc2VsZi5jb21tb2RpdHkgPSByZXMuZGF0YVxuICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgIGNvbW1vZGl0eTogcmVzLmRhdGFcbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEsICdyZXMuZGF0YScpXG4gICAgICB9XG4gICAgfSlcbiAgICB3ZXB5LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgc2VsZi5oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XG4gICAgICAgIHNlbGYud2lkdGggPSByZXMud2luZG93V2lkdGhcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=
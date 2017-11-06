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
        _wepy2.default.navigateTo({
          url: './class/submit'
        });
      },
      cartsCount: function cartsCount(self) {
        var NUM = 0;
        for (var i = 0; i < self.carts.length; i++) {
          if (self.carts[i].selected === true) {
            NUM += 1;
          }
        }
        self.setData({
          cartNum: NUM
        });
        self.cartNum = NUM;
        console.log(self.cartNum, '函数中');
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
                    var NUM = 0;
                    for (var i = 0; i < self.carts.length; i++) {
                      if (self.carts[i].selected === true) {
                        NUM += 1;
                      }
                    }
                    self.setData({
                      cartNum: NUM
                    });
                    self.cartNum = NUM;
                    console.log(NUM, 'NUM');
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3AuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImNhcnRzIiwiZGVsZXRlIiwidG90YWxQcmljZSIsIm51bSIsImNhcnROdW0iLCJzZWxlY3RBbGxTdGF0dXMiLCJoZWlnaHQiLCJ3aWR0aCIsIm9iaiIsIm5hbWUiLCJtZXRob2RzIiwic2VsZWN0TGlzdCIsImUiLCJzZWxmIiwiaW5kZXgiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInNlbGVjdGVkIiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsImlkIiwiJGFwcGx5IiwiZ2V0VG90YWxQcmljZSIsImNhcnRzQ291bnQiLCJjb25zb2xlIiwibG9nIiwidG90YWwiLCJpIiwibGVuZ3RoIiwicHJpY2UiLCJzZXREYXRhIiwidG9GaXhlZCIsImRlbGV0ZUxpc3QiLCJzdWNjZXNzIiwicmVzIiwic2VsZWN0QWxsIiwiYWRkQ291bnQiLCJtaW51c0NvdW50IiwiYmlsbCIsIm5hdmlnYXRlVG8iLCJOVU0iLCJnZXRTeXN0ZW1JbmZvIiwid2luZG93SGVpZ2h0Iiwid2luZG93V2lkdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxhQUFPLEVBREY7QUFFTEMsY0FBUSxrQkFGSDtBQUdMQyxrQkFBWSxHQUhQO0FBSUxDLFdBQUssQ0FKQTtBQUtMQyxlQUFTLENBTEo7QUFNTEMsdUJBQWlCLElBTlo7QUFPTEMsY0FBUSxDQVBIO0FBUUxDLGFBQU8sQ0FSRjtBQVNMQyxXQUFLO0FBQ0hDLGNBQU07QUFESDtBQVRBLEssUUFhUEMsTyxHQUFVO0FBQ0ZDLGdCQURFO0FBQUEsNkZBQ1NDLENBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUZDLHNCQUZFLEdB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TCxDQUFXNkIsTUFBL0IsRUFBdUNELEdBQXZDLEVBQTRDO0FBQzFDLDBCQUFJZixLQUFLYixLQUFMLENBQVc0QixDQUFYLEVBQWNYLFFBQWQsS0FBMkIsSUFBL0IsRUFBcUM7QUFDbkN3QiwrQkFBTyxDQUFQO0FBQ0Q7QUFDRjtBQUNENUIseUJBQUtrQixPQUFMLENBQWE7QUFDWDNCLCtCQUFTcUM7QUFERSxxQkFBYjtBQUdBNUIseUJBQUtULE9BQUwsR0FBZXFDLEdBQWY7QUFDQWhCLDRCQUFRQyxHQUFSLENBQVllLEdBQVosRUFBaUIsS0FBakI7QUFDRDtBQXRCZ0IsaUJBQWIsQzs7O0FBd0JOLHFCQUFLbkIsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQUVPO0FBQ1AsVUFBSVQsT0FBTyxJQUFYO0FBQ0EscUJBQUtLLE9BQUwsQ0FBYTtBQUNYQyxhQUFLLCtCQURNO0FBRVhDLGdCQUFRLE1BRkc7QUFHWGMsaUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQnRCLGVBQUtiLEtBQUwsR0FBYW1DLElBQUlwQyxJQUFqQjtBQUNBYyxlQUFLa0IsT0FBTCxDQUFhO0FBQ1gvQixtQkFBT21DLElBQUlwQztBQURBLFdBQWI7QUFHQWMsZUFBS0gsT0FBTCxDQUFhYSxhQUFiLENBQTJCVixJQUEzQjtBQUNEO0FBVFUsT0FBYjtBQVdBLHFCQUFLNkIsYUFBTCxDQUFtQjtBQUNqQlIsZUFEaUIsbUJBQ1RDLEdBRFMsRUFDSjtBQUNYdEIsZUFBS1AsTUFBTCxHQUFjNkIsSUFBSVEsWUFBbEI7QUFDQTlCLGVBQUtOLEtBQUwsR0FBYTRCLElBQUlTLFdBQWpCO0FBQ0Q7QUFKZ0IsT0FBbkI7QUFNRDs7OztFQXJOZ0MsZUFBS0MsSTs7a0JBQW5CakQsSyIsImZpbGUiOiJzaG9wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+i0reeJqei9pidcbiAgfVxuICBkYXRhID0ge1xuICAgIGNhcnRzOiBbXSxcbiAgICBkZWxldGU6ICcuLi9teS9kZWxldGUucG5nJyxcbiAgICB0b3RhbFByaWNlOiAwLjAsXG4gICAgbnVtOiAxLFxuICAgIGNhcnROdW06IDAsXG4gICAgc2VsZWN0QWxsU3RhdHVzOiB0cnVlLFxuICAgIGhlaWdodDogMCxcbiAgICB3aWR0aDogMCxcbiAgICBvYmo6IHtcbiAgICAgIG5hbWU6ICdoZWxsbydcbiAgICB9XG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBhc3luYyBzZWxlY3RMaXN0KGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgY29uc3QgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleFxuICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBzZWxmLmNhcnRzW2luZGV4XS5zZWxlY3RlZFxuICAgICAgc2VsZi5jYXJ0c1tpbmRleF0uc2VsZWN0ZWQgPSAhc2VsZWN0ZWRcbiAgICAgIGF3YWl0IHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS9jYXJ0VXBkYXRlJyxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBpZDogc2VsZi5jYXJ0c1tpbmRleF0uaWQsXG4gICAgICAgICAgc2VsZWN0ZWQ6IHNlbGYuY2FydHNbaW5kZXhdLnNlbGVjdGVkXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgICBzZWxmLm1ldGhvZHMuZ2V0VG90YWxQcmljZShzZWxmKVxuICAgICAgc2VsZi5tZXRob2RzLmNhcnRzQ291bnQoc2VsZilcbiAgICAgIGNvbnNvbGUubG9nKHNlbGYuY2FydE51bSwgJ+iwg+eUqOaXticpXG4gICAgfSxcblxuICAgIGdldFRvdGFsUHJpY2Uoc2VsZikge1xuICAgICAgbGV0IHRvdGFsID0gMFxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxmLmNhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChzZWxmLmNhcnRzW2ldLnNlbGVjdGVkKSB7XG4gICAgICAgICAgdG90YWwgKz0gc2VsZi5jYXJ0c1tpXS5udW0gKiBzZWxmLmNhcnRzW2ldLnByaWNlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgIHRvdGFsUHJpY2U6IHRvdGFsLnRvRml4ZWQoMSlcbiAgICAgIH0pXG4gICAgICBzZWxmLnRvdGFsUHJpY2UgPSB0b3RhbC50b0ZpeGVkKDEpXG4gICAgfSxcblxuICAgIGFzeW5jIGRlbGV0ZUxpc3QoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBjb25zdCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XG4gICAgICBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvY2FydERlbGV0ZScsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgaWQ6IHNlbGYuY2FydHNbaW5kZXhdLmlkXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvY2FydEdldCcsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSwgJ3Jlcy5kYXRhJylcbiAgICAgICAgICBzZWxmLmNhcnRzID0gcmVzLmRhdGFcbiAgICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgICAgY2FydHM6IHJlcy5kYXRhXG4gICAgICAgICAgfSlcbiAgICAgICAgICBjb25zb2xlLmxvZyhzZWxmLmNhcnRzLmxlbmd0aCwgJ+mVv+W6picpXG4gICAgICAgICAgc2VsZi5tZXRob2RzLmdldFRvdGFsUHJpY2Uoc2VsZilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuXG4gICAgYXN5bmMgc2VsZWN0QWxsKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBsZXQgc2VsZWN0QWxsU3RhdHVzID0gc2VsZi5zZWxlY3RBbGxTdGF0dXNcbiAgICAgIHNlbGVjdEFsbFN0YXR1cyA9ICFzZWxlY3RBbGxTdGF0dXNcbiAgICAgIGxldCBjYXJ0cyA9IHNlbGYuY2FydHNcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY2FydHNbaV0uc2VsZWN0ZWQgPSBzZWxlY3RBbGxTdGF0dXNcbiAgICAgICAgYXdhaXQgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvY2FydFVwZGF0ZScsXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgaWQ6IHNlbGYuY2FydHNbaV0uaWQsXG4gICAgICAgICAgICBzZWxlY3RlZDogc2VsZi5jYXJ0c1tpXS5zZWxlY3RlZFxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIHNlbGYuc2VsZWN0QWxsU3RhdHVzID0gc2VsZWN0QWxsU3RhdHVzXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICBjYXJ0czogY2FydHNcbiAgICAgIH0pXG4gICAgICBzZWxmLm1ldGhvZHMuZ2V0VG90YWxQcmljZShzZWxmKVxuICAgICAgc2VsZi5tZXRob2RzLmNhcnRzQ291bnQoc2VsZilcbiAgICB9LFxuXG4gICAgYWRkQ291bnQoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBjb25zdCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XG4gICAgICBsZXQgY2FydHMgPSBzZWxmLmNhcnRzXG4gICAgICBjb25zb2xlLmxvZyhzZWxmLmNhcnRzKVxuICAgICAgbGV0IG51bSA9IGNhcnRzW2luZGV4XS5udW1cbiAgICAgIG51bSA9IG51bSArIDFcbiAgICAgIGNhcnRzW2luZGV4XS5udW0gPSBudW1cbiAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS9jYXJ0VXBkYXRlJyxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBpZDogY2FydHNbaW5kZXhdLmlkLFxuICAgICAgICAgIG51bTogY2FydHNbaW5kZXhdLm51bVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgY2FydHM6IGNhcnRzXG4gICAgICB9KVxuICAgICAgc2VsZi5tZXRob2RzLmdldFRvdGFsUHJpY2Uoc2VsZilcbiAgICB9LFxuXG4gICAgbWludXNDb3VudChlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGNvbnN0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICAgIGxldCBjYXJ0cyA9IHNlbGYuY2FydHNcbiAgICAgIGxldCBudW0gPSBjYXJ0c1tpbmRleF0ubnVtXG4gICAgICBpZiAobnVtIDw9IDEpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICBudW0gPSBudW0gLSAxXG4gICAgICBjYXJ0c1tpbmRleF0ubnVtID0gbnVtXG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvY2FydFVwZGF0ZScsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgaWQ6IHNlbGYuY2FydHNbaW5kZXhdLmlkLFxuICAgICAgICAgIG51bTogY2FydHNbaW5kZXhdLm51bVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgY2FydHM6IGNhcnRzXG4gICAgICB9KVxuICAgICAgc2VsZi5tZXRob2RzLmdldFRvdGFsUHJpY2Uoc2VsZilcbiAgICB9LFxuXG4gICAgYmlsbCgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vY2xhc3Mvc3VibWl0J1xuICAgICAgfSlcbiAgICB9LFxuICAgIGNhcnRzQ291bnQoc2VsZikge1xuICAgICAgdmFyIE5VTSA9IDBcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZi5jYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoc2VsZi5jYXJ0c1tpXS5zZWxlY3RlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIE5VTSArPSAxXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgIGNhcnROdW06IE5VTVxuICAgICAgfSlcbiAgICAgIHNlbGYuY2FydE51bSA9IE5VTVxuICAgICAgY29uc29sZS5sb2coc2VsZi5jYXJ0TnVtLCAn5Ye95pWw5LitJylcbiAgICB9XG4gIH1cblxuICBhc3luYyBvblNob3coKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgYXdhaXQgd2VweS5yZXF1ZXN0KHtcbiAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS9jYXJ0R2V0JyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIHNlbGYuY2FydHMgPSByZXMuZGF0YVxuICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgIGNhcnRzOiByZXMuZGF0YVxuICAgICAgICB9KVxuICAgICAgICBzZWxmLm1ldGhvZHMuZ2V0VG90YWxQcmljZShzZWxmKVxuICAgICAgICBjb25zb2xlLmxvZyhzZWxmLmNhcnRzLCAnY2FydC1vblNob3cnKVxuICAgICAgICBjb25zb2xlLmxvZyhzZWxmLmNhcnRzLmxlbmd0aCwgJ+mVv+W6picpXG4gICAgICAgIHZhciBOVU0gPSAwXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZi5jYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChzZWxmLmNhcnRzW2ldLnNlbGVjdGVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICBOVU0gKz0gMVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgIGNhcnROdW06IE5VTVxuICAgICAgICB9KVxuICAgICAgICBzZWxmLmNhcnROdW0gPSBOVU1cbiAgICAgICAgY29uc29sZS5sb2coTlVNLCAnTlVNJylcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuJGFwcGx5KClcbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS9jYXJ0R2V0JyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIHNlbGYuY2FydHMgPSByZXMuZGF0YVxuICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgIGNhcnRzOiByZXMuZGF0YVxuICAgICAgICB9KVxuICAgICAgICBzZWxmLm1ldGhvZHMuZ2V0VG90YWxQcmljZShzZWxmKVxuICAgICAgfVxuICAgIH0pXG4gICAgd2VweS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHNlbGYuaGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxuICAgICAgICBzZWxmLndpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19
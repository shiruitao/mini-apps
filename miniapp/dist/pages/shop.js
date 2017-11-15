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
      _wepy2.default.request({
        url: 'http://127.0.0.1:7001/getClass',
        method: 'POST',
        data: {
          class: '特价'
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3AuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImNhcnRzIiwiY29tbW9kaXR5IiwiZGVsZXRlIiwidG90YWxQcmljZSIsIm51bSIsImNhcnROdW0iLCJzZWxlY3RBbGxTdGF0dXMiLCJoZWlnaHQiLCJ3aWR0aCIsIm9iaiIsIm5hbWUiLCJtZXRob2RzIiwic2VsZWN0TGlzdCIsImUiLCJzZWxmIiwiaW5kZXgiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInNlbGVjdGVkIiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsImlkIiwiJGFwcGx5IiwiZ2V0VG90YWxQcmljZSIsImNhcnRzQ291bnQiLCJjb25zb2xlIiwibG9nIiwidG90YWwiLCJpIiwibGVuZ3RoIiwicHJpY2UiLCJzZXREYXRhIiwidG9GaXhlZCIsImRlbGV0ZUxpc3QiLCJzdWNjZXNzIiwicmVzIiwic2VsZWN0QWxsIiwiYWRkQ291bnQiLCJtaW51c0NvdW50IiwiYmlsbCIsIm5hdmlnYXRlVG8iLCJzaG93VG9hc3QiLCJ0aXRsZSIsImltYWdlIiwiZHVyYXRpb24iLCJOVU0iLCJob21lIiwic3dpdGNoVGFiIiwiY2xhc3MiLCJnZXRTeXN0ZW1JbmZvIiwid2luZG93SGVpZ2h0Iiwid2luZG93V2lkdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxhQUFPLEVBREY7QUFFTEMsaUJBQVcsRUFGTjtBQUdMQyxjQUFRLGtCQUhIO0FBSUxDLGtCQUFZLEdBSlA7QUFLTEMsV0FBSyxDQUxBO0FBTUxDLGVBQVMsQ0FOSjtBQU9MQyx1QkFBaUIsSUFQWjtBQVFMQyxjQUFRLENBUkg7QUFTTEMsYUFBTyxDQVRGO0FBVUxDLFdBQUs7QUFDSEMsY0FB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U0FISztBQU1YZCxpQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCdEIsZUFBS2IsU0FBTCxHQUFpQm1DLElBQUlyQyxJQUFyQjtBQUNBZSxlQUFLa0IsT0FBTCxDQUFhO0FBQ1gvQix1QkFBV21DLElBQUlyQztBQURKLFdBQWI7QUFHQTJCLGtCQUFRQyxHQUFSLENBQVlTLElBQUlyQyxJQUFoQixFQUFzQixVQUF0QjtBQUNEO0FBWlUsT0FBYjtBQWNBLHFCQUFLbUQsYUFBTCxDQUFtQjtBQUNqQmYsZUFEaUIsbUJBQ1RDLEdBRFMsRUFDSjtBQUNYdEIsZUFBS1AsTUFBTCxHQUFjNkIsSUFBSWUsWUFBbEI7QUFDQXJDLGVBQUtOLEtBQUwsR0FBYTRCLElBQUlnQixXQUFqQjtBQUNEO0FBSmdCLE9BQW5CO0FBTUQ7Ozs7RUFsUGdDLGVBQUtDLEk7O2tCQUFuQnpELEsiLCJmaWxlIjoic2hvcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfotK3nianovaYnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBjYXJ0czogW10sXG4gICAgY29tbW9kaXR5OiBbXSxcbiAgICBkZWxldGU6ICcuLi9teS9kZWxldGUucG5nJyxcbiAgICB0b3RhbFByaWNlOiAwLjAsXG4gICAgbnVtOiAxLFxuICAgIGNhcnROdW06IDAsXG4gICAgc2VsZWN0QWxsU3RhdHVzOiB0cnVlLFxuICAgIGhlaWdodDogMCxcbiAgICB3aWR0aDogMCxcbiAgICBvYmo6IHtcbiAgICAgIG5hbWU6ICdoZWxsbydcbiAgICB9XG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBhc3luYyBzZWxlY3RMaXN0KGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgY29uc3QgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleFxuICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBzZWxmLmNhcnRzW2luZGV4XS5zZWxlY3RlZFxuICAgICAgc2VsZi5jYXJ0c1tpbmRleF0uc2VsZWN0ZWQgPSAhc2VsZWN0ZWRcbiAgICAgIGF3YWl0IHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS9jYXJ0VXBkYXRlJyxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBpZDogc2VsZi5jYXJ0c1tpbmRleF0uaWQsXG4gICAgICAgICAgc2VsZWN0ZWQ6IHNlbGYuY2FydHNbaW5kZXhdLnNlbGVjdGVkXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgICBzZWxmLm1ldGhvZHMuZ2V0VG90YWxQcmljZShzZWxmKVxuICAgICAgc2VsZi5tZXRob2RzLmNhcnRzQ291bnQoc2VsZilcbiAgICAgIGNvbnNvbGUubG9nKHNlbGYuY2FydE51bSwgJ+iwg+eUqOaXticpXG4gICAgfSxcblxuICAgIGdldFRvdGFsUHJpY2Uoc2VsZikge1xuICAgICAgbGV0IHRvdGFsID0gMFxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxmLmNhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChzZWxmLmNhcnRzW2ldLnNlbGVjdGVkKSB7XG4gICAgICAgICAgdG90YWwgKz0gc2VsZi5jYXJ0c1tpXS5udW0gKiBzZWxmLmNhcnRzW2ldLnByaWNlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgIHRvdGFsUHJpY2U6IHRvdGFsLnRvRml4ZWQoMSlcbiAgICAgIH0pXG4gICAgICBzZWxmLnRvdGFsUHJpY2UgPSB0b3RhbC50b0ZpeGVkKDEpXG4gICAgfSxcblxuICAgIGFzeW5jIGRlbGV0ZUxpc3QoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBjb25zdCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XG4gICAgICBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvY2FydERlbGV0ZScsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgaWQ6IHNlbGYuY2FydHNbaW5kZXhdLmlkXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvY2FydEdldCcsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSwgJ3Jlcy5kYXRhJylcbiAgICAgICAgICBzZWxmLmNhcnRzID0gcmVzLmRhdGFcbiAgICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgICAgY2FydHM6IHJlcy5kYXRhXG4gICAgICAgICAgfSlcbiAgICAgICAgICBjb25zb2xlLmxvZyhzZWxmLmNhcnRzLmxlbmd0aCwgJ+mVv+W6picpXG4gICAgICAgICAgc2VsZi5tZXRob2RzLmdldFRvdGFsUHJpY2Uoc2VsZilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuXG4gICAgYXN5bmMgc2VsZWN0QWxsKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBsZXQgc2VsZWN0QWxsU3RhdHVzID0gc2VsZi5zZWxlY3RBbGxTdGF0dXNcbiAgICAgIHNlbGVjdEFsbFN0YXR1cyA9ICFzZWxlY3RBbGxTdGF0dXNcbiAgICAgIGxldCBjYXJ0cyA9IHNlbGYuY2FydHNcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY2FydHNbaV0uc2VsZWN0ZWQgPSBzZWxlY3RBbGxTdGF0dXNcbiAgICAgICAgYXdhaXQgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvY2FydFVwZGF0ZScsXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgaWQ6IHNlbGYuY2FydHNbaV0uaWQsXG4gICAgICAgICAgICBzZWxlY3RlZDogc2VsZi5jYXJ0c1tpXS5zZWxlY3RlZFxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIHNlbGYuc2VsZWN0QWxsU3RhdHVzID0gc2VsZWN0QWxsU3RhdHVzXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICBjYXJ0czogY2FydHNcbiAgICAgIH0pXG4gICAgICBzZWxmLm1ldGhvZHMuZ2V0VG90YWxQcmljZShzZWxmKVxuICAgICAgc2VsZi5tZXRob2RzLmNhcnRzQ291bnQoc2VsZilcbiAgICB9LFxuXG4gICAgYWRkQ291bnQoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBjb25zdCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XG4gICAgICBsZXQgY2FydHMgPSBzZWxmLmNhcnRzXG4gICAgICBjb25zb2xlLmxvZyhzZWxmLmNhcnRzKVxuICAgICAgbGV0IG51bSA9IGNhcnRzW2luZGV4XS5udW1cbiAgICAgIG51bSA9IG51bSArIDFcbiAgICAgIGNhcnRzW2luZGV4XS5udW0gPSBudW1cbiAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS9jYXJ0VXBkYXRlJyxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBpZDogY2FydHNbaW5kZXhdLmlkLFxuICAgICAgICAgIG51bTogY2FydHNbaW5kZXhdLm51bVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgY2FydHM6IGNhcnRzXG4gICAgICB9KVxuICAgICAgc2VsZi5tZXRob2RzLmdldFRvdGFsUHJpY2Uoc2VsZilcbiAgICB9LFxuXG4gICAgbWludXNDb3VudChlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGNvbnN0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICAgIGxldCBjYXJ0cyA9IHNlbGYuY2FydHNcbiAgICAgIGxldCBudW0gPSBjYXJ0c1tpbmRleF0ubnVtXG4gICAgICBpZiAobnVtIDw9IDEpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICBudW0gPSBudW0gLSAxXG4gICAgICBjYXJ0c1tpbmRleF0ubnVtID0gbnVtXG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvY2FydFVwZGF0ZScsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgaWQ6IHNlbGYuY2FydHNbaW5kZXhdLmlkLFxuICAgICAgICAgIG51bTogY2FydHNbaW5kZXhdLm51bVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgY2FydHM6IGNhcnRzXG4gICAgICB9KVxuICAgICAgc2VsZi5tZXRob2RzLmdldFRvdGFsUHJpY2Uoc2VsZilcbiAgICB9LFxuXG4gICAgYmlsbCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgaWYgKHNlbGYuY2FydE51bSA+PSAxKSB7XG4gICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnLi9jbGFzcy9zdWJtaXQnXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6ICfor7fpgInmi6nllYblk4EnLFxuICAgICAgICAgIGltYWdlOiAnLi4vaW1hZ2VzL3dhcm4ucG5nJyxcbiAgICAgICAgICBkdXJhdGlvbjogMTAwMFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0sXG4gICAgY2FydHNDb3VudChzZWxmKSB7XG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvY2FydFN1Ym1pdCcsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgc2VsZWN0ZWQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgdmFyIE5VTSA9IDBcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSwgJ2RhdGEnKVxuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzLmRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YVtpXS5zZWxlY3RlZCA9PT0gMSkge1xuICAgICAgICAgICAgICBOVU0gKz0gMVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgICAgY2FydE51bTogTlVNXG4gICAgICAgICAgfSlcbiAgICAgICAgICBzZWxmLmNhcnROdW0gPSBOVU1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIGhvbWUoKSB7XG4gICAgICB3ZXB5LnN3aXRjaFRhYih7XG4gICAgICAgIHVybDogJy4uL3BhZ2VzL2hvbWUnXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIG9uU2hvdygpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL2NhcnRHZXQnLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgc2VsZi5jYXJ0cyA9IHJlcy5kYXRhXG4gICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgY2FydHM6IHJlcy5kYXRhXG4gICAgICAgIH0pXG4gICAgICAgIHNlbGYubWV0aG9kcy5nZXRUb3RhbFByaWNlKHNlbGYpXG4gICAgICAgIGNvbnNvbGUubG9nKHNlbGYuY2FydHMsICdjYXJ0LW9uU2hvdycpXG4gICAgICAgIGNvbnNvbGUubG9nKHNlbGYuY2FydHMubGVuZ3RoLCAn6ZW/5bqmJylcbiAgICAgICAgc2VsZi5tZXRob2RzLmNhcnRzQ291bnQoc2VsZilcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuJGFwcGx5KClcbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS9jYXJ0R2V0JyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIHNlbGYuY2FydHMgPSByZXMuZGF0YVxuICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgIGNhcnRzOiByZXMuZGF0YVxuICAgICAgICB9KVxuICAgICAgICBzZWxmLm1ldGhvZHMuZ2V0VG90YWxQcmljZShzZWxmKVxuICAgICAgICBzZWxmLm1ldGhvZHMuY2FydHNDb3VudChzZWxmKVxuICAgICAgfVxuICAgIH0pXG4gICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS9nZXRDbGFzcycsXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgY2xhc3M6ICfnibnku7cnXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIHNlbGYuY29tbW9kaXR5ID0gcmVzLmRhdGFcbiAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICBjb21tb2RpdHk6IHJlcy5kYXRhXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhLCAncmVzLmRhdGEnKVxuICAgICAgfVxuICAgIH0pXG4gICAgd2VweS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHNlbGYuaGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxuICAgICAgICBzZWxmLndpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19
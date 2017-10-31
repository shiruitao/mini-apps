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
      selectList: function selectList(e) {
        var self = this;
        var index = e.currentTarget.dataset.index;
        var carts = self.carts;
        var selected = self.carts[index].selected;
        self.carts[index].selected = !selected;
        self.setData({
          carts: carts
        });
        self.methods.getTotalPrice(self);
      },
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
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
          var self, index;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  self = this;
                  index = e.currentTarget.dataset.index;
                  _context.next = 4;
                  return _wepy2.default.request({
                    url: 'http://127.0.0.1:7001/cartDelete',
                    method: 'POST',
                    data: {
                      id: self.carts[index].id
                    }
                  });

                case 4:
                  _context.next = 6;
                  return _wepy2.default.request({
                    url: 'http://127.0.0.1:7001/cartGet',
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
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function deleteList(_x) {
          return _ref2.apply(this, arguments);
        }

        return deleteList;
      }(),
      selectAll: function selectAll() {
        var self = this;
        var selectAllStatus = self.selectAllStatus;
        selectAllStatus = !selectAllStatus;
        var carts = self.carts;
        for (var i = 0; i < carts.length; i++) {
          carts[i].selected = selectAllStatus;
        }
        self.selectAllStatus = selectAllStatus;
        self.methods.getTotalPrice(self);
      },
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
        _wepy2.default.showModal({
          title: '仅支持货到付款',
          content: '\u5171\u8BA1: ' + self.totalPrice + '\u5143'
        });
      },
      cartsCount: function cartsCount() {
        var self = this;
        var NUM = self.cartNum;
        for (var i = 0; self.carts[i] < self.carts.length; i++) {
          if (self.carts[i].selected === true) {
            NUM += 1;
          }
        }
        self.setData({
          cartNum: NUM
        });
        self.cartNum = NUM;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onShow',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var self;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                self = this;
                _context2.next = 3;
                return _wepy2.default.request({
                  url: 'http://127.0.0.1:7001/cartGet',
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
                      if (self.carts[i].selected === 1) {
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
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onShow() {
        return _ref3.apply(this, arguments);
      }

      return onShow;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      _wepy2.default.request({
        url: 'http://127.0.0.1:7001/cartGet',
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3AuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImNhcnRzIiwiZGVsZXRlIiwidG90YWxQcmljZSIsIm51bSIsImNhcnROdW0iLCJzZWxlY3RBbGxTdGF0dXMiLCJoZWlnaHQiLCJ3aWR0aCIsIm9iaiIsIm5hbWUiLCJtZXRob2RzIiwic2VsZWN0TGlzdCIsImUiLCJzZWxmIiwiaW5kZXgiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInNlbGVjdGVkIiwic2V0RGF0YSIsImdldFRvdGFsUHJpY2UiLCJ0b3RhbCIsImkiLCJsZW5ndGgiLCJwcmljZSIsInRvRml4ZWQiLCJkZWxldGVMaXN0IiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsImlkIiwic3VjY2VzcyIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJzZWxlY3RBbGwiLCJhZGRDb3VudCIsIm1pbnVzQ291bnQiLCJiaWxsIiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50IiwiY2FydHNDb3VudCIsIk5VTSIsIiRhcHBseSIsImdldFN5c3RlbUluZm8iLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3dXaWR0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGFBQU8sRUFERjtBQUVMQyxjQUFRLGtCQUZIO0FBR0xDLGtCQUFZLEdBSFA7QUFJTEMsV0FBSyxDQUpBO0FBS0xDLGVBQVMsQ0FMSjtBQU1MQyx1QkFBaUIsSUFOWjtBQU9MQyxjQUFRLENBUEg7QUFRTEMsYUFBTyxDQVJGO0FBU0xDLFdBQUs7QUFDSEMsY0FBTTtBQURIO0FBVEEsSyxRQWFQQyxPLEdBQVU7QUFDUkMsZ0JBRFEsc0JBQ0dDLENBREgsRUFDTTtBQUNaLFlBQUlDLE9BQU8sSUFBWDtB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OiJzaG9wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+i0reeJqei9pidcbiAgfVxuICBkYXRhID0ge1xuICAgIGNhcnRzOiBbXSxcbiAgICBkZWxldGU6ICcuLi9teS9kZWxldGUucG5nJyxcbiAgICB0b3RhbFByaWNlOiAwLjAsXG4gICAgbnVtOiAxLFxuICAgIGNhcnROdW06IDAsXG4gICAgc2VsZWN0QWxsU3RhdHVzOiB0cnVlLFxuICAgIGhlaWdodDogMCxcbiAgICB3aWR0aDogMCxcbiAgICBvYmo6IHtcbiAgICAgIG5hbWU6ICdoZWxsbydcbiAgICB9XG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBzZWxlY3RMaXN0KGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgY29uc3QgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleFxuICAgICAgbGV0IGNhcnRzID0gc2VsZi5jYXJ0c1xuICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBzZWxmLmNhcnRzW2luZGV4XS5zZWxlY3RlZFxuICAgICAgc2VsZi5jYXJ0c1tpbmRleF0uc2VsZWN0ZWQgPSAhc2VsZWN0ZWRcbiAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgIGNhcnRzOiBjYXJ0c1xuICAgICAgfSlcbiAgICAgIHNlbGYubWV0aG9kcy5nZXRUb3RhbFByaWNlKHNlbGYpXG4gICAgfSxcblxuICAgIGdldFRvdGFsUHJpY2Uoc2VsZikge1xuICAgICAgbGV0IHRvdGFsID0gMFxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxmLmNhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChzZWxmLmNhcnRzW2ldLnNlbGVjdGVkKSB7XG4gICAgICAgICAgdG90YWwgKz0gc2VsZi5jYXJ0c1tpXS5udW0gKiBzZWxmLmNhcnRzW2ldLnByaWNlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgIHRvdGFsUHJpY2U6IHRvdGFsLnRvRml4ZWQoMSlcbiAgICAgIH0pXG4gICAgICBzZWxmLnRvdGFsUHJpY2UgPSB0b3RhbC50b0ZpeGVkKDEpXG4gICAgfSxcblxuICAgIGFzeW5jIGRlbGV0ZUxpc3QoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBjb25zdCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XG4gICAgICBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvY2FydERlbGV0ZScsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgaWQ6IHNlbGYuY2FydHNbaW5kZXhdLmlkXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvY2FydEdldCcsXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhLCAncmVzLmRhdGEnKVxuICAgICAgICAgIHNlbGYuY2FydHMgPSByZXMuZGF0YVxuICAgICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgICBjYXJ0czogcmVzLmRhdGFcbiAgICAgICAgICB9KVxuICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGYuY2FydHMubGVuZ3RoLCAn6ZW/5bqmJylcbiAgICAgICAgICBzZWxmLm1ldGhvZHMuZ2V0VG90YWxQcmljZShzZWxmKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG5cbiAgICBzZWxlY3RBbGwoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGxldCBzZWxlY3RBbGxTdGF0dXMgPSBzZWxmLnNlbGVjdEFsbFN0YXR1c1xuICAgICAgc2VsZWN0QWxsU3RhdHVzID0gIXNlbGVjdEFsbFN0YXR1c1xuICAgICAgbGV0IGNhcnRzID0gc2VsZi5jYXJ0c1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjYXJ0c1tpXS5zZWxlY3RlZCA9IHNlbGVjdEFsbFN0YXR1c1xuICAgICAgfVxuICAgICAgc2VsZi5zZWxlY3RBbGxTdGF0dXMgPSBzZWxlY3RBbGxTdGF0dXNcbiAgICAgIHNlbGYubWV0aG9kcy5nZXRUb3RhbFByaWNlKHNlbGYpXG4gICAgfSxcblxuICAgIGFkZENvdW50KGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgY29uc3QgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleFxuICAgICAgbGV0IGNhcnRzID0gc2VsZi5jYXJ0c1xuICAgICAgY29uc29sZS5sb2coc2VsZi5jYXJ0cylcbiAgICAgIGxldCBudW0gPSBjYXJ0c1tpbmRleF0ubnVtXG4gICAgICBudW0gPSBudW0gKyAxXG4gICAgICBjYXJ0c1tpbmRleF0ubnVtID0gbnVtXG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvY2FydFVwZGF0ZScsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgaWQ6IGNhcnRzW2luZGV4XS5pZCxcbiAgICAgICAgICBudW06IGNhcnRzW2luZGV4XS5udW1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgIGNhcnRzOiBjYXJ0c1xuICAgICAgfSlcbiAgICAgIHNlbGYubWV0aG9kcy5nZXRUb3RhbFByaWNlKHNlbGYpXG4gICAgfSxcblxuICAgIG1pbnVzQ291bnQoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBjb25zdCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XG4gICAgICBsZXQgY2FydHMgPSBzZWxmLmNhcnRzXG4gICAgICBsZXQgbnVtID0gY2FydHNbaW5kZXhdLm51bVxuICAgICAgaWYgKG51bSA8PSAxKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgbnVtID0gbnVtIC0gMVxuICAgICAgY2FydHNbaW5kZXhdLm51bSA9IG51bVxuICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL2NhcnRVcGRhdGUnLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGlkOiBzZWxmLmNhcnRzW2luZGV4XS5pZCxcbiAgICAgICAgICBudW06IGNhcnRzW2luZGV4XS5udW1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgIGNhcnRzOiBjYXJ0c1xuICAgICAgfSlcbiAgICAgIHNlbGYubWV0aG9kcy5nZXRUb3RhbFByaWNlKHNlbGYpXG4gICAgfSxcblxuICAgIGJpbGwoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgdGl0bGU6ICfku4XmlK/mjIHotKfliLDku5jmrL4nLFxuICAgICAgICBjb250ZW50OiBg5YWx6K6hOiAke3NlbGYudG90YWxQcmljZX3lhYNgXG4gICAgICB9KVxuICAgIH0sXG4gICAgY2FydHNDb3VudCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgbGV0IE5VTSA9IHNlbGYuY2FydE51bVxuICAgICAgZm9yIChsZXQgaSA9IDA7IHNlbGYuY2FydHNbaV0gPCBzZWxmLmNhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChzZWxmLmNhcnRzW2ldLnNlbGVjdGVkID09PSB0cnVlKSB7XG4gICAgICAgICAgTlVNICs9IDFcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgY2FydE51bTogTlVNXG4gICAgICB9KVxuICAgICAgc2VsZi5jYXJ0TnVtID0gTlVNXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgb25TaG93KCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIGF3YWl0IHdlcHkucmVxdWVzdCh7XG4gICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvY2FydEdldCcsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgc2VsZi5jYXJ0cyA9IHJlcy5kYXRhXG4gICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgY2FydHM6IHJlcy5kYXRhXG4gICAgICAgIH0pXG4gICAgICAgIHNlbGYubWV0aG9kcy5nZXRUb3RhbFByaWNlKHNlbGYpXG4gICAgICAgIGNvbnNvbGUubG9nKHNlbGYuY2FydHMsICdjYXJ0LW9uU2hvdycpXG4gICAgICAgIGNvbnNvbGUubG9nKHNlbGYuY2FydHMubGVuZ3RoLCAn6ZW/5bqmJylcbiAgICAgICAgdmFyIE5VTSA9IDBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxmLmNhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKHNlbGYuY2FydHNbaV0uc2VsZWN0ZWQgPT09IDEpIHtcbiAgICAgICAgICAgIE5VTSArPSAxXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgY2FydE51bTogTlVNXG4gICAgICAgIH0pXG4gICAgICAgIHNlbGYuY2FydE51bSA9IE5VTVxuICAgICAgICBjb25zb2xlLmxvZyhOVU0sICdOVU0nKVxuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy4kYXBwbHkoKVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL2NhcnRHZXQnLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIHNlbGYuY2FydHMgPSByZXMuZGF0YVxuICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgIGNhcnRzOiByZXMuZGF0YVxuICAgICAgICB9KVxuICAgICAgICBzZWxmLm1ldGhvZHMuZ2V0VG90YWxQcmljZShzZWxmKVxuICAgICAgfVxuICAgIH0pXG4gICAgd2VweS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHNlbGYuaGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxuICAgICAgICBzZWxmLndpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19
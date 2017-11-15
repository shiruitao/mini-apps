'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var detail = function (_wepy$page) {
  _inherits(detail, _wepy$page);

  function detail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, detail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = detail.__proto__ || Object.getPrototypeOf(detail)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '商品详情'
    }, _this.data = {
      index: 0,
      cart: [],
      height: 0,
      width: 0,
      favoriteIcon: false,
      favorite: '../../images/favorite.png',
      cartIcon: '../../images/shop.png',
      favor: '收藏'
    }, _this.methods = {
      carts: function carts(e) {
        var self = this;
        self.cartIcon = '../../images/shopclick.png';
        _wepy2.default.request({
          url: 'http://127.0.0.1:7001/cartCreate',
          method: 'POST',
          data: {
            title: self.cart.title,
            price: self.cart.price,
            image: self.cart.image
          },
          success: function success(res) {
            console.log('success');
          }
        });
        _wepy2.default.showToast({
          title: '加入成功',
          icon: 'success',
          duration: 1000
        });
      },
      favorite: function favorite() {
        var self = this;
        self.favoriteIcon = !self.favoriteIcon;
        self.favorite = self.favoriteIcon === true ? '../../images/favoriteclick.png' : '../../images/favorite.png';
        self.favor = self.favoriteIcon === true ? '已收藏' : '收藏';
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(detail, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
        var self;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                self = this;

                self.index = data.id;
                console.log(self.index, 'index');
                _context.next = 5;
                return _wepy2.default.request({
                  url: 'http://127.0.0.1:7001/getGet',
                  method: 'POST',
                  data: {
                    id: self.index
                  },
                  success: function success(res) {
                    self.cart = res.data;
                    self.setData({
                      cart: res.data
                    });
                    console.log(self.cart, 'cart');
                  }
                });

              case 5:
                _wepy2.default.getSystemInfo({
                  success: function success(res) {
                    self.height = res.windowHeight;
                    self.width = res.windowWidth;
                  }
                });
                this.$apply();

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad(_x) {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);

  return detail;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(detail , 'pages/class/detail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5qcyJdLCJuYW1lcyI6WyJkZXRhaWwiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImluZGV4IiwiY2FydCIsImhlaWdodCIsIndpZHRoIiwiZmF2b3JpdGVJY29uIiwiZmF2b3JpdGUiLCJjYXJ0SWNvbiIsImZhdm9yIiwibWV0aG9kcyIsImNhcnRzIiwiZSIsInNlbGYiLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwidGl0bGUiLCJwcmljZSIsImltYWdlIiwic3VjY2VzcyIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJzaG93VG9hc3QiLCJpY29uIiwiZHVyYXRpb24iLCJpZCIsInNldERhdGEiLCJnZXRTeXN0ZW1JbmZvIiwid2luZG93SGVpZ2h0Iiwid2luZG93V2lkdGgiLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxhQUFPLENBREY7QUFFTEMsWUFBTSxFQUZEO0FBR0xDLGNBQVEsQ0FISDtBQUlMQyxhQUFPLENBSkY7QUFLTEMsb0JBQWMsS0FMVDtBQU1MQyxnQkFBVSwyQkFOTDtBQU9MQyxnQkFBVSx1QkFQTDtBQVFMQyxhQUFPO0FBUkYsSyxRQVVQQyxPLEdBQVU7QUFDUkMsV0FEUSxpQkFDRkMsQ0FERSxFQUNDO0FBQ1AsWUFBSUMsT0FBTyxJQUFYO0FBQ0FBLGFBQUtMLFFBQUwsR0FBZ0IsNEJBQWhCO0FBQ0EsdUJBQUtNLE9BQUwsQ0FBYTtBQUNYQyxlQUFLLGtDQURNO0FBRVhDLGtCQUFRLE1BRkc7QUFHWGYsZ0JBQU07QUFDSmdCLG1CQUFPSixLQUFLVixJQUFMLENBQVVjLEtBRGI7QUFFSkMsbUJBQU9MLEtBQUtWLElBQUwsQ0FBVWUsS0FGYjtBQUdKQyxtQkFBT04sS0FBS1YsSUFBTCxDQUFVZ0I7QUFIYixXQUhLO0FBUVhDLG1CQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJDLG9CQUFRQyxHQUFSLENBQVksU0FBWjtBQUNEO0FBVlUsU0FBYjtBQVlBLHVCQUFLQyxTQUFMLENBQWU7QUFDYlAsaUJBQU8sTUFETTtBQUViUSxnQkFBTSxTQUZPO0FBR2JDLG9CQUFVO0FBSEcsU0FBZjtBQUtELE9BckJPO0FBc0JSbkIsY0F0QlEsc0JBc0JHO0FBQ1QsWUFBSU0sT0FBTyxJQUFYO0FBQ0FBLGFBQUtQLFlBQUwsR0FBb0IsQ0FBQ08sS0FBS1AsWUFBMUI7QUFDQU8sYUFBS04sUUFBTCxHQUFnQk0sS0FBS1AsWUFBTCxLQUFzQixJQUF0QixHQUE2QixnQ0FBN0IsR0FBZ0UsMkJBQWhGO0FBQ0FPLGFBQUtKLEtBQUwsR0FBYUksS0FBS1AsWUFBTCxLQUFzQixJQUF0QixHQUE2QixLQUE3QixHQUFxQyxJQUFsRDtBQUNEO0FBM0JPLEs7Ozs7OzsyRkE2QkdMLEk7Ozs7OztBQUNQWSxvQixHQUFPLEk7O0FBQ1hBLHFCQUFLWCxLQUFMLEdBQWFELEtBQUswQixFQUFsQjtBQUNBTCx3QkFBUUMsR0FBUixDQUFZVixLQUFLWCxLQUFqQixFQUF3QixPQUF4Qjs7dUJBQ00sZUFBS1ksT0FBTCxDQUFhO0FBQ2pCQyx1QkFBSyw4QkFEWTtBQUVqQkMsMEJBQVEsTUFGUztBQUdqQmYsd0JBQU07QUFDSjBCLHdCQUFJZCxLQUFLWDtBQURMLG1CQUhXO0FBTWpCa0IsMkJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQlIseUJBQUtWLElBQUwsR0FBWWtCLElBQUlwQixJQUFoQjtBQUNBWSx5QkFBS2UsT0FBTCxDQUFhO0FBQ1h6Qiw0QkFBTWtCLElBQUlwQjtBQURDLHFCQUFiO0FBR0FxQiw0QkFBUUMsR0FBUixDQUFZVixLQUFLVixJQUFqQixFQUF1QixNQUF2QjtBQUNEO0FBWmdCLGlCQUFiLEM7OztBQWNOLCtCQUFLMEIsYUFBTCxDQUFtQjtBQUNqQlQseUJBRGlCLG1CQUNUQyxHQURTLEVBQ0o7QUFDWFIseUJBQUtULE1BQUwsR0FBY2lCLElBQUlTLFlBQWxCO0FBQ0FqQix5QkFBS1IsS0FBTCxHQUFhZ0IsSUFBSVUsV0FBakI7QUFDRDtBQUpnQixpQkFBbkI7QUFNQSxxQkFBS0MsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW5FZ0MsZUFBS0MsSTs7a0JBQXBCbkMsTSIsImZpbGUiOiJkZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBkZXRhaWwgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WVhuWTgeivpuaDhSdcbiAgfVxuICBkYXRhID0ge1xuICAgIGluZGV4OiAwLFxuICAgIGNhcnQ6IFtdLFxuICAgIGhlaWdodDogMCxcbiAgICB3aWR0aDogMCxcbiAgICBmYXZvcml0ZUljb246IGZhbHNlLFxuICAgIGZhdm9yaXRlOiAnLi4vLi4vaW1hZ2VzL2Zhdm9yaXRlLnBuZycsXG4gICAgY2FydEljb246ICcuLi8uLi9pbWFnZXMvc2hvcC5wbmcnLFxuICAgIGZhdm9yOiAn5pS26JePJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgY2FydHMoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmNhcnRJY29uID0gJy4uLy4uL2ltYWdlcy9zaG9wY2xpY2sucG5nJ1xuICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL2NhcnRDcmVhdGUnLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHRpdGxlOiBzZWxmLmNhcnQudGl0bGUsXG4gICAgICAgICAgcHJpY2U6IHNlbGYuY2FydC5wcmljZSxcbiAgICAgICAgICBpbWFnZTogc2VsZi5jYXJ0LmltYWdlXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzJylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgdGl0bGU6ICfliqDlhaXmiJDlip8nLFxuICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgIGR1cmF0aW9uOiAxMDAwXG4gICAgICB9KVxuICAgIH0sXG4gICAgZmF2b3JpdGUoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuZmF2b3JpdGVJY29uID0gIXNlbGYuZmF2b3JpdGVJY29uXG4gICAgICBzZWxmLmZhdm9yaXRlID0gc2VsZi5mYXZvcml0ZUljb24gPT09IHRydWUgPyAnLi4vLi4vaW1hZ2VzL2Zhdm9yaXRlY2xpY2sucG5nJyA6ICcuLi8uLi9pbWFnZXMvZmF2b3JpdGUucG5nJ1xuICAgICAgc2VsZi5mYXZvciA9IHNlbGYuZmF2b3JpdGVJY29uID09PSB0cnVlID8gJ+W3suaUtuiXjycgOiAn5pS26JePJ1xuICAgIH1cbiAgfVxuICBhc3luYyBvbkxvYWQoZGF0YSkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHNlbGYuaW5kZXggPSBkYXRhLmlkXG4gICAgY29uc29sZS5sb2coc2VsZi5pbmRleCwgJ2luZGV4JylcbiAgICBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL2dldEdldCcsXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgaWQ6IHNlbGYuaW5kZXhcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgc2VsZi5jYXJ0ID0gcmVzLmRhdGFcbiAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICBjYXJ0OiByZXMuZGF0YVxuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZyhzZWxmLmNhcnQsICdjYXJ0JylcbiAgICAgIH1cbiAgICB9KVxuICAgIHdlcHkuZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBzZWxmLmhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgICAgICAgc2VsZi53aWR0aCA9IHJlcy53aW5kb3dXaWR0aFxuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy4kYXBwbHkoKVxuICB9XG59XG4iXX0=
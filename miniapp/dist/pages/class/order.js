'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var order = function (_wepy$page) {
  _inherits(order, _wepy$page);

  function order() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, order);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = order.__proto__ || Object.getPrototypeOf(order)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '订单详情'
    }, _this.data = {
      commodity: []
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(order, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      _wepy2.default.request({
        url: 'http://127.0.0.1:7001/cartGet',
        method: 'POST',
        success: function success(res) {
          self.commodity = res.data;
          self.setData({
            commodity: res.data
          });
        }
      });
    }
  }]);

  return order;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(order , 'pages/class/order'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLmpzIl0sIm5hbWVzIjpbIm9yZGVyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJjb21tb2RpdHkiLCJzZWxmIiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsInN1Y2Nlc3MiLCJyZXMiLCJzZXREYXRhIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGlCQUFXO0FBRE4sSzs7Ozs7NkJBR0U7QUFDUCxVQUFJQyxPQUFPLElBQVg7QUFDQSxxQkFBS0MsT0FBTCxDQUFhO0FBQ1hDLGFBQUssK0JBRE07QUFFWEMsZ0JBQVEsTUFGRztBQUdYQyxpQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCTCxlQUFLRCxTQUFMLEdBQWlCTSxJQUFJUCxJQUFyQjtBQUNBRSxlQUFLTSxPQUFMLENBQWE7QUFDWFAsdUJBQVdNLElBQUlQO0FBREosV0FBYjtBQUdEO0FBUlUsT0FBYjtBQVVEOzs7O0VBbkJnQyxlQUFLUyxJOztrQkFBbkJaLEsiLCJmaWxlIjoib3JkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBvcmRlciBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6K6i5Y2V6K+m5oOFJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgY29tbW9kaXR5OiBbXVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL2NhcnRHZXQnLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgc2VsZi5jb21tb2RpdHkgPSByZXMuZGF0YVxuICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgIGNvbW1vZGl0eTogcmVzLmRhdGFcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=
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

var search = function (_wepy$page) {
  _inherits(search, _wepy$page);

  function search() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, search);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = search.__proto__ || Object.getPrototypeOf(search)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '搜索发现'
    }, _this.data = {
      height: 0,
      width: 0,
      searchText: ''
    }, _this.methods = {
      formSubmit: function formSubmit(e) {
        var self = this;
        self.searchText = e.detail.value;
        console.log('form发生了submit事件，携带数据为：', e.detail.value);
      },
      search: function search(e) {
        // let self = this
        // var text = e.currentTarget.name.value
        // console.log(text)
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(search, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      _wepy2.default.getSystemInfo({
        success: function success(res) {
          self.height = res.windowHeight;
          self.width = res.windowWidth;
        }
      });
    }
  }]);

  return search;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(search , 'pages/class/search'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5qcyJdLCJuYW1lcyI6WyJzZWFyY2giLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImhlaWdodCIsIndpZHRoIiwic2VhcmNoVGV4dCIsIm1ldGhvZHMiLCJmb3JtU3VibWl0IiwiZSIsInNlbGYiLCJkZXRhaWwiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJnZXRTeXN0ZW1JbmZvIiwic3VjY2VzcyIsInJlcyIsIndpbmRvd0hlaWdodCIsIndpbmRvd1dpZHRoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsTTs7Ozs7Ozs7Ozs7Ozs7c0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGNBQVEsQ0FESDtBQUVMQyxhQUFPLENBRkY7QUFHTEMsa0JBQVk7QUFIUCxLLFFBS1BDLE8sR0FBVTtBQUNSQyxrQkFBWSxvQkFBU0MsQ0FBVCxFQUFZO0FBQ3RCLFlBQUlDLE9BQU8sSUFBWDtBQUNBQSxhQUFLSixVQUFMLEdBQWtCRyxFQUFFRSxNQUFGLENBQVNDLEtBQTNCO0FBQ0FDLGdCQUFRQyxHQUFSLENBQVksd0JBQVosRUFBc0NMLEVBQUVFLE1BQUYsQ0FBU0MsS0FBL0M7QUFDRCxPQUxPO0FBTVJaLFlBTlEsa0JBTURTLENBTkMsRUFNRTtBQUNSO0FBQ0E7QUFDQTtBQUNEO0FBVk8sSzs7Ozs7NkJBWUQ7QUFDUCxVQUFJQyxPQUFPLElBQVg7QUFDQSxxQkFBS0ssYUFBTCxDQUFtQjtBQUNqQkMsZUFEaUIsbUJBQ1RDLEdBRFMsRUFDSjtBQUNYUCxlQUFLTixNQUFMLEdBQWNhLElBQUlDLFlBQWxCO0FBQ0FSLGVBQUtMLEtBQUwsR0FBYVksSUFBSUUsV0FBakI7QUFDRDtBQUpnQixPQUFuQjtBQU1EOzs7O0VBN0JpQyxlQUFLQyxJOztrQkFBcEJwQixNIiwiZmlsZSI6InNlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHNlYXJjaCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5pCc57Si5Y+R546wJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgaGVpZ2h0OiAwLFxuICAgIHdpZHRoOiAwLFxuICAgIHNlYXJjaFRleHQ6ICcnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBmb3JtU3VibWl0OiBmdW5jdGlvbihlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuc2VhcmNoVGV4dCA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICBjb25zb2xlLmxvZygnZm9ybeWPkeeUn+S6hnN1Ym1pdOS6i+S7tu+8jOaQuuW4puaVsOaNruS4uu+8micsIGUuZGV0YWlsLnZhbHVlKVxuICAgIH0sXG4gICAgc2VhcmNoKGUpIHtcbiAgICAgIC8vIGxldCBzZWxmID0gdGhpc1xuICAgICAgLy8gdmFyIHRleHQgPSBlLmN1cnJlbnRUYXJnZXQubmFtZS52YWx1ZVxuICAgICAgLy8gY29uc29sZS5sb2codGV4dClcbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHdlcHkuZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBzZWxmLmhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgICAgICAgc2VsZi53aWR0aCA9IHJlcy53aW5kb3dXaWR0aFxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==
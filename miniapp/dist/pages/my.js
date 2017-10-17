'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      navigationBarTitleText: '个人中心'
    }, _this.data = {
      head: '../my/head.png',
      name: '',
      indent: '../my/indent.png',
      address: '../my/address.png',
      shop: '../images/shop.png',
      phone: '../my/phone.png'

    }, _this.methods = {
      pageIndent: function pageIndent() {
        _wepy2.default.navigateTo({
          url: './my/indent'
        });
      },
      pageAddress: function pageAddress() {
        _wepy2.default.navigateTo({
          url: './my/address'
        });
      },
      shop: function shop() {
        _wepy2.default.switchTab({
          url: './shop'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      _wepy2.default.getUserInfo({
        success: function success(res) {
          self.name = res.userInfo.nickName;
          self.head = res.userInfo.avatarUrl;
        }
      });
    }
  }, {
    key: 'onShow',
    value: function onShow() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/my'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJoZWFkIiwibmFtZSIsImluZGVudCIsImFkZHJlc3MiLCJzaG9wIiwicGhvbmUiLCJtZXRob2RzIiwicGFnZUluZGVudCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJwYWdlQWRkcmVzcyIsInN3aXRjaFRhYiIsInNlbGYiLCJnZXRVc2VySW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJ1c2VySW5mbyIsIm5pY2tOYW1lIiwiYXZhdGFyVXJsIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFlBQU0sZ0JBREQ7QUFFTEMsWUFBTSxFQUZEO0FBR0xDLGNBQVEsa0JBSEg7QUFJTEMsZUFBUyxtQkFKSjtBQUtMQyxZQUFNLG9CQUxEO0FBTUxDLGFBQU87O0FBTkYsSyxRQVNQQyxPLEdBQVU7QUFDUkMsZ0JBRFEsd0JBQ0s7QUFDWCx1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQUxPO0FBTVJDLGlCQU5RLHlCQU1NO0FBQ1osdUJBQUtGLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0FWTztBQVdSTCxVQVhRLGtCQVdEO0FBQ0wsdUJBQUtPLFNBQUwsQ0FBZTtBQUNiRixlQUFLO0FBRFEsU0FBZjtBQUdEO0FBZk8sSzs7Ozs7NkJBaUJEO0FBQ1AsVUFBSUcsT0FBTyxJQUFYO0FBQ0EscUJBQUtDLFdBQUwsQ0FBaUI7QUFDZkMsaUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQkgsZUFBS1gsSUFBTCxHQUFZYyxJQUFJQyxRQUFKLENBQWFDLFFBQXpCO0FBQ0FMLGVBQUtaLElBQUwsR0FBWWUsSUFBSUMsUUFBSixDQUFhRSxTQUF6QjtBQUNEO0FBSmMsT0FBakI7QUFNRDs7OzZCQUNRLENBQUU7Ozs7RUF2Q3NCLGVBQUtDLEk7O2tCQUFuQnZCLEsiLCJmaWxlIjoibXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Liq5Lq65Lit5b+DJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgaGVhZDogJy4uL215L2hlYWQucG5nJyxcbiAgICBuYW1lOiAnJyxcbiAgICBpbmRlbnQ6ICcuLi9teS9pbmRlbnQucG5nJyxcbiAgICBhZGRyZXNzOiAnLi4vbXkvYWRkcmVzcy5wbmcnLFxuICAgIHNob3A6ICcuLi9pbWFnZXMvc2hvcC5wbmcnLFxuICAgIHBob25lOiAnLi4vbXkvcGhvbmUucG5nJ1xuXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBwYWdlSW5kZW50KCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9teS9pbmRlbnQnXG4gICAgICB9KVxuICAgIH0sXG4gICAgcGFnZUFkZHJlc3MoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL215L2FkZHJlc3MnXG4gICAgICB9KVxuICAgIH0sXG4gICAgc2hvcCgpIHtcbiAgICAgIHdlcHkuc3dpdGNoVGFiKHtcbiAgICAgICAgdXJsOiAnLi9zaG9wJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHdlcHkuZ2V0VXNlckluZm8oe1xuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIHNlbGYubmFtZSA9IHJlcy51c2VySW5mby5uaWNrTmFtZVxuICAgICAgICBzZWxmLmhlYWQgPSByZXMudXNlckluZm8uYXZhdGFyVXJsXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBvblNob3coKSB7fVxufVxuIl19
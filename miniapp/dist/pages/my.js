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
      // login() {
      //   let self = this
      //   self.head = 'head'
      //   self.name = 'name'
      // },
      // onBack() {
      //   wepy.navigateTo({
      //     url: './login'
      //   })
      // }

    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }, {
    key: 'onShow',
    value: function onShow() {
      var self = this;
      try {
        var Head = _wepy2.default.getStorageSync('head');
        var Name = _wepy2.default.getStorageSync('name');
        if (Head) {
          self.head = Head;
          self.name = Name;
        }
      } catch (err) {}
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/my'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJoZWFkIiwibmFtZSIsImluZGVudCIsImFkZHJlc3MiLCJzaG9wIiwicGhvbmUiLCJtZXRob2RzIiwicGFnZUluZGVudCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJwYWdlQWRkcmVzcyIsInN3aXRjaFRhYiIsInNlbGYiLCJIZWFkIiwiZ2V0U3RvcmFnZVN5bmMiLCJOYW1lIiwiZXJyIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFlBQU0sZ0JBREQ7QUFFTEMsWUFBTSxFQUZEO0FBR0xDLGNBQVEsa0JBSEg7QUFJTEMsZUFBUyxtQkFKSjtBQUtMQyxZQUFNLG9CQUxEO0FBTUxDLGFBQU87O0FBTkYsSyxRQVNQQyxPLEdBQVU7QUFDUkMsZ0JBRFEsd0JBQ0s7QUFDWCx1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQUxPO0FBTVJDLGlCQU5RLHlCQU1NO0FBQ1osdUJBQUtGLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0FWTztBQVdSTCxVQVhRLGtCQVdEO0FBQ0wsdUJBQUtPLFNBQUwsQ0FBZTtBQUNiRixlQUFLO0FBRFEsU0FBZjtBQUdEO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBekJRLEs7Ozs7OzZCQTJCRCxDQUFHOzs7NkJBQ0g7QUFDUCxVQUFJRyxPQUFPLElBQVg7QUFDQSxVQUFJO0FBQ0YsWUFBSUMsT0FBTyxlQUFLQyxjQUFMLENBQW9CLE1BQXBCLENBQVg7QUFDQSxZQUFJQyxPQUFPLGVBQUtELGNBQUwsQ0FBb0IsTUFBcEIsQ0FBWDtBQUNBLFlBQUlELElBQUosRUFBVTtBQUNSRCxlQUFLWixJQUFMLEdBQVlhLElBQVo7QUFDQUQsZUFBS1gsSUFBTCxHQUFZYyxJQUFaO0FBQ0Q7QUFDRixPQVBELENBT0UsT0FBT0MsR0FBUCxFQUFZLENBRWI7QUFDRjs7OztFQXJEZ0MsZUFBS0MsSTs7a0JBQW5CckIsSyIsImZpbGUiOiJteS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfkuKrkurrkuK3lv4MnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBoZWFkOiAnLi4vbXkvaGVhZC5wbmcnLFxuICAgIG5hbWU6ICcnLFxuICAgIGluZGVudDogJy4uL215L2luZGVudC5wbmcnLFxuICAgIGFkZHJlc3M6ICcuLi9teS9hZGRyZXNzLnBuZycsXG4gICAgc2hvcDogJy4uL2ltYWdlcy9zaG9wLnBuZycsXG4gICAgcGhvbmU6ICcuLi9teS9waG9uZS5wbmcnXG5cbiAgfVxuICBtZXRob2RzID0ge1xuICAgIHBhZ2VJbmRlbnQoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL215L2luZGVudCdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBwYWdlQWRkcmVzcygpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vbXkvYWRkcmVzcydcbiAgICAgIH0pXG4gICAgfSxcbiAgICBzaG9wKCkge1xuICAgICAgd2VweS5zd2l0Y2hUYWIoe1xuICAgICAgICB1cmw6ICcuL3Nob3AnXG4gICAgICB9KVxuICAgIH1cbiAgICAvLyBsb2dpbigpIHtcbiAgICAvLyAgIGxldCBzZWxmID0gdGhpc1xuICAgIC8vICAgc2VsZi5oZWFkID0gJ2hlYWQnXG4gICAgLy8gICBzZWxmLm5hbWUgPSAnbmFtZSdcbiAgICAvLyB9LFxuICAgIC8vIG9uQmFjaygpIHtcbiAgICAvLyAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgLy8gICAgIHVybDogJy4vbG9naW4nXG4gICAgLy8gICB9KVxuICAgIC8vIH1cbiAgfVxuICBvbkxvYWQoKSB7IH1cbiAgb25TaG93KCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHRyeSB7XG4gICAgICBsZXQgSGVhZCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2hlYWQnKVxuICAgICAgbGV0IE5hbWUgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCduYW1lJylcbiAgICAgIGlmIChIZWFkKSB7XG4gICAgICAgIHNlbGYuaGVhZCA9IEhlYWRcbiAgICAgICAgc2VsZi5uYW1lID0gTmFtZVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuXG4gICAgfVxuICB9XG59XG4iXX0=
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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
      navigationBarTitleText: '登录'
    }, _this.data = {
      head: '',
      name: ''
    }, _this.methods = {
      login: function login() {
        var self = this;
        try {
          _wepy2.default.setStorageSync('head', self.head);
          _wepy2.default.setStorageSync('name', self.name);
        } catch (e) {}
        _wepy2.default.switchTab({
          url: './home'
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
  }]);

  return Index;
}(_wepy2.default.page);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJoZWFkIiwibmFtZSIsIm1ldGhvZHMiLCJsb2dpbiIsInNlbGYiLCJzZXRTdG9yYWdlU3luYyIsImUiLCJzd2l0Y2hUYWIiLCJ1cmwiLCJnZXRVc2VySW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJ1c2VySW5mbyIsIm5pY2tOYW1lIiwiYXZhdGFyVXJsIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFlBQU0sRUFERDtBQUVMQyxZQUFNO0FBRkQsSyxRQUlQQyxPLEdBQVU7QUFDUkMsV0FEUSxtQkFDQTtBQUNOLFlBQUlDLE9BQU8sSUFBWDtBQUNBLFlBQUk7QUFDRix5QkFBS0MsY0FBTCxDQUFvQixNQUFwQixFQUE0QkQsS0FBS0osSUFBakM7QUFDQSx5QkFBS0ssY0FBTCxDQUFvQixNQUFwQixFQUE0QkQsS0FBS0gsSUFBakM7QUFDRCxTQUhELENBR0UsT0FBT0ssQ0FBUCxFQUFVLENBQ1g7QUFDRCx1QkFBS0MsU0FBTCxDQUFlO0FBQ2JDLGVBQUs7QUFEUSxTQUFmO0FBR0Q7QUFYTyxLOzs7Ozs2QkFhRDtBQUNQLFVBQUlKLE9BQU8sSUFBWDtBQUNBLHFCQUFLSyxXQUFMLENBQWlCO0FBQ2ZDLGlCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJQLGVBQUtILElBQUwsR0FBWVUsSUFBSUMsUUFBSixDQUFhQyxRQUF6QjtBQUNBVCxlQUFLSixJQUFMLEdBQVlXLElBQUlDLFFBQUosQ0FBYUUsU0FBekI7QUFDRDtBQUpjLE9BQWpCO0FBTUQ7Ozs7RUE3QmdDLGVBQUtDLEk7O2tCQUFuQm5CLEsiLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn55m75b2VJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgaGVhZDogJycsXG4gICAgbmFtZTogJydcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGxvZ2luKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICB0cnkge1xuICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdoZWFkJywgc2VsZi5oZWFkKVxuICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCduYW1lJywgc2VsZi5uYW1lKVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgfVxuICAgICAgd2VweS5zd2l0Y2hUYWIoe1xuICAgICAgICB1cmw6ICcuL2hvbWUnXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgd2VweS5nZXRVc2VySW5mbyh7XG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgc2VsZi5uYW1lID0gcmVzLnVzZXJJbmZvLm5pY2tOYW1lXG4gICAgICAgIHNlbGYuaGVhZCA9IHJlcy51c2VySW5mby5hdmF0YXJVcmxcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=
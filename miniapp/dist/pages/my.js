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
      height: 0,
      width: 0,
      head: '../my/head.png',
      name: '',
      indent: '../my/indent.png',
      address: '../my/address.png',
      shop: '../images/shop.png',
      phone: '../my/phone.png'
    }, _this.methods = {
      pageOrder: function pageOrder() {
        _wepy2.default.navigateTo({
          url: './my/indent'
        });
      },
      pageAddress: function pageAddress() {
        _wepy2.default.chooseAddress({
          success: function success(res) {
            console.log(JSON.stringify(res));
          },
          fail: function fail(err) {
            console.log(JSON.stringify(err));
          }
        });
        // wepy.navigateTo({
        //   url: './my/address'
        // })
      },
      pageShop: function pageShop() {
        _wepy2.default.switchTab({
          url: './shop'
        });
      },
      pageContact: function pageContact() {
        _wepy2.default.showModal({
          title: '手机:',
          content: '18331290663'
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
      _wepy2.default.getSystemInfo({
        success: function success(res) {
          self.height = res.windowHeight;
          self.width = res.windowWidth;
        }
      });
    }
  }, {
    key: 'onShow',
    value: function onShow() {
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/my'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJoZWlnaHQiLCJ3aWR0aCIsImhlYWQiLCJuYW1lIiwiaW5kZW50IiwiYWRkcmVzcyIsInNob3AiLCJwaG9uZSIsIm1ldGhvZHMiLCJwYWdlT3JkZXIiLCJuYXZpZ2F0ZVRvIiwidXJsIiwicGFnZUFkZHJlc3MiLCJjaG9vc2VBZGRyZXNzIiwic3VjY2VzcyIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwiZmFpbCIsImVyciIsInBhZ2VTaG9wIiwic3dpdGNoVGFiIiwicGFnZUNvbnRhY3QiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJzZWxmIiwiZ2V0VXNlckluZm8iLCJ1c2VySW5mbyIsIm5pY2tOYW1lIiwiYXZhdGFyVXJsIiwiZ2V0U3lzdGVtSW5mbyIsIndpbmRvd0hlaWdodCIsIndpbmRvd1dpZHRoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGNBQVEsQ0FESDtBQUVMQyxhQUFPLENBRkY7QUFHTEMsWUFBTSxnQkFIRDtBQUlMQyxZQUFNLEVBSkQ7QUFLTEMsY0FBUSxrQkFMSDtBQU1MQyxlQUFTLG1CQU5KO0FBT0xDLFlBQU0sb0JBUEQ7QUFRTEMsYUFBTztBQVJGLEssUUFVUEMsTyxHQUFVO0FBQ1JDLGVBRFEsdUJBQ0k7QUFDVix1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQUxPO0FBTVJDLGlCQU5RLHlCQU1NO0FBQ1osdUJBQUtDLGFBQUwsQ0FBbUI7QUFDakJDLG1CQUFTLGlCQUFVQyxHQUFWLEVBQWU7QUFDdEJDLG9CQUFRQyxHQUFSLENBQVlDLEtBQUtDLFNBQUwsQ0FBZUosR0FBZixDQUFaO0FBQ0QsV0FIZ0I7QUFJakJLLGdCQUFNLGNBQVVDLEdBQVYsRUFBZTtBQUNuQkwsb0JBQVFDLEdBQVIsQ0FBWUMsS0FBS0MsU0FBTCxDQUFlRSxHQUFmLENBQVo7QUFDRDtBQU5nQixTQUFuQjtBQVFBO0FBQ0E7QUFDQTtBQUNELE9BbEJPO0FBbUJSQyxjQW5CUSxzQkFtQkc7QUFDVCx1QkFBS0MsU0FBTCxDQUFlO0FBQ2JaLGVBQUs7QUFEUSxTQUFmO0FBR0QsT0F2Qk87QUF3QlJhLGlCQXhCUSx5QkF3Qk07QUFDWix1QkFBS0MsU0FBTCxDQUFlO0FBQ2JDLGlCQUFPLEtBRE07QUFFYkMsbUJBQVM7QUFGSSxTQUFmO0FBSUQ7QUE3Qk8sSzs7Ozs7NkJBK0JEO0FBQ1AsVUFBSUMsT0FBTyxJQUFYO0FBQ0EscUJBQUtDLFdBQUwsQ0FBaUI7QUFDZmYsaUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQmEsZUFBS3pCLElBQUwsR0FBWVksSUFBSWUsUUFBSixDQUFhQyxRQUF6QjtBQUNBSCxlQUFLMUIsSUFBTCxHQUFZYSxJQUFJZSxRQUFKLENBQWFFLFNBQXpCO0FBQ0Q7QUFKYyxPQUFqQjtBQU1BLHFCQUFLQyxhQUFMLENBQW1CO0FBQ2pCbkIsZUFEaUIsbUJBQ1RDLEdBRFMsRUFDSjtBQUNYYSxlQUFLNUIsTUFBTCxHQUFjZSxJQUFJbUIsWUFBbEI7QUFDQU4sZUFBSzNCLEtBQUwsR0FBYWMsSUFBSW9CLFdBQWpCO0FBQ0Q7QUFKZ0IsT0FBbkI7QUFNRDs7OzZCQUNRO0FBQ1AsVUFBSVAsT0FBTyxJQUFYO0FBQ0EscUJBQUtDLFdBQUwsQ0FBaUI7QUFDZmYsaUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQmEsZUFBS3pCLElBQUwsR0FBWVksSUFBSWUsUUFBSixDQUFhQyxRQUF6QjtBQUNBSCxlQUFLMUIsSUFBTCxHQUFZYSxJQUFJZSxRQUFKLENBQWFFLFNBQXpCO0FBQ0Q7QUFKYyxPQUFqQjtBQU1EOzs7O0VBcEVnQyxlQUFLSSxJOztrQkFBbkJ4QyxLIiwiZmlsZSI6Im15LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+S4quS6uuS4reW/gydcbiAgfVxuICBkYXRhID0ge1xuICAgIGhlaWdodDogMCxcbiAgICB3aWR0aDogMCxcbiAgICBoZWFkOiAnLi4vbXkvaGVhZC5wbmcnLFxuICAgIG5hbWU6ICcnLFxuICAgIGluZGVudDogJy4uL215L2luZGVudC5wbmcnLFxuICAgIGFkZHJlc3M6ICcuLi9teS9hZGRyZXNzLnBuZycsXG4gICAgc2hvcDogJy4uL2ltYWdlcy9zaG9wLnBuZycsXG4gICAgcGhvbmU6ICcuLi9teS9waG9uZS5wbmcnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBwYWdlT3JkZXIoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL215L2luZGVudCdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBwYWdlQWRkcmVzcygpIHtcbiAgICAgIHdlcHkuY2hvb3NlQWRkcmVzcyh7XG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXMpKVxuICAgICAgICB9LFxuICAgICAgICBmYWlsOiBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyKSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC8vIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAvLyAgIHVybDogJy4vbXkvYWRkcmVzcydcbiAgICAgIC8vIH0pXG4gICAgfSxcbiAgICBwYWdlU2hvcCgpIHtcbiAgICAgIHdlcHkuc3dpdGNoVGFiKHtcbiAgICAgICAgdXJsOiAnLi9zaG9wJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIHBhZ2VDb250YWN0KCkge1xuICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICB0aXRsZTogJ+aJi+acujonLFxuICAgICAgICBjb250ZW50OiAnMTgzMzEyOTA2NjMnXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgd2VweS5nZXRVc2VySW5mbyh7XG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgc2VsZi5uYW1lID0gcmVzLnVzZXJJbmZvLm5pY2tOYW1lXG4gICAgICAgIHNlbGYuaGVhZCA9IHJlcy51c2VySW5mby5hdmF0YXJVcmxcbiAgICAgIH1cbiAgICB9KVxuICAgIHdlcHkuZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBzZWxmLmhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgICAgICAgc2VsZi53aWR0aCA9IHJlcy53aW5kb3dXaWR0aFxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgb25TaG93KCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHdlcHkuZ2V0VXNlckluZm8oe1xuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIHNlbGYubmFtZSA9IHJlcy51c2VySW5mby5uaWNrTmFtZVxuICAgICAgICBzZWxmLmhlYWQgPSByZXMudXNlckluZm8uYXZhdGFyVXJsXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19
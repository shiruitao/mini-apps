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

var my = function (_wepy$page) {
  _inherits(my, _wepy$page);

  function my() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, my);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = my.__proto__ || Object.getPrototypeOf(my)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '个人中心'
    }, _this.data = {
      height: 0,
      width: 0,
      head: '../my/head.png',
      name: '这里是昵称🇨🇳',
      order: '../my/order.png',
      address: '../my/address.png',
      shop: '../images/shop.png',
      phone: '../my/phone.png',
      arrow: '../my/arrow.png'
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
      pageContact: function pageContact() {
        _wepy2.default.showModal({
          title: '手机:',
          content: '18331290663'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(my, [{
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
    value: function onShow() {}
  }]);

  return my;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(my , 'pages/my'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LmpzIl0sIm5hbWVzIjpbIm15IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJoZWlnaHQiLCJ3aWR0aCIsImhlYWQiLCJuYW1lIiwib3JkZXIiLCJhZGRyZXNzIiwic2hvcCIsInBob25lIiwiYXJyb3ciLCJtZXRob2RzIiwicGFnZU9yZGVyIiwibmF2aWdhdGVUbyIsInVybCIsInBhZ2VBZGRyZXNzIiwiY2hvb3NlQWRkcmVzcyIsInN1Y2Nlc3MiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsImZhaWwiLCJlcnIiLCJwYWdlQ29udGFjdCIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsInNlbGYiLCJnZXRVc2VySW5mbyIsInVzZXJJbmZvIiwibmlja05hbWUiLCJhdmF0YXJVcmwiLCJnZXRTeXN0ZW1JbmZvIiwid2luZG93SGVpZ2h0Iiwid2luZG93V2lkdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxFOzs7Ozs7Ozs7Ozs7Ozs4S0FDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsY0FBUSxDQURIO0FBRUxDLGFBQU8sQ0FGRjtBQUdMQyxZQUFNLGdCQUhEO0FBSUxDLFlBQU0sV0FKRDtBQUtMQyxhQUFPLGlCQUxGO0FBTUxDLGVBQVMsbUJBTko7QUFPTEMsWUFBTSxvQkFQRDtBQVFMQyxhQUFPLGlCQVJGO0FBU0xDLGFBQU87QUFURixLLFFBV1BDLE8sR0FBVTtBQUNSQyxlQURRLHVCQUNJO0FBQ1YsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0FMTztBQU1SQyxpQkFOUSx5QkFNTTtBQUNaLHVCQUFLQyxhQUFMLENBQW1CO0FBQ2pCQyxtQkFBUyxpQkFBVUMsR0FBVixFQUFlO0FBQ3RCQyxvQkFBUUMsR0FBUixDQUFZQyxLQUFLQyxTQUFMLENBQWVKLEdBQWYsQ0FBWjtBQUNELFdBSGdCO0FBSWpCSyxnQkFBTSxjQUFVQyxHQUFWLEVBQWU7QUFDbkJMLG9CQUFRQyxHQUFSLENBQVlDLEtBQUtDLFNBQUwsQ0FBZUUsR0FBZixDQUFaO0FBQ0Q7QUFOZ0IsU0FBbkI7QUFRQTtBQUNBO0FBQ0E7QUFDRCxPQWxCTztBQW1CUkMsaUJBbkJRLHlCQW1CTTtBQUNaLHVCQUFLQyxTQUFMLENBQWU7QUFDYkMsaUJBQU8sS0FETTtBQUViQyxtQkFBUztBQUZJLFNBQWY7QUFJRDtBQXhCTyxLOzs7Ozs2QkEwQkQ7QUFDUCxVQUFJQyxPQUFPLElBQVg7QUFDQSxxQkFBS0MsV0FBTCxDQUFpQjtBQUNmYixpQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCVyxlQUFLeEIsSUFBTCxHQUFZYSxJQUFJYSxRQUFKLENBQWFDLFFBQXpCO0FBQ0FILGVBQUt6QixJQUFMLEdBQVljLElBQUlhLFFBQUosQ0FBYUUsU0FBekI7QUFDRDtBQUpjLE9BQWpCO0FBTUEscUJBQUtDLGFBQUwsQ0FBbUI7QUFDakJqQixlQURpQixtQkFDVEMsR0FEUyxFQUNKO0FBQ1hXLGVBQUszQixNQUFMLEdBQWNnQixJQUFJaUIsWUFBbEI7QUFDQU4sZUFBSzFCLEtBQUwsR0FBYWUsSUFBSWtCLFdBQWpCO0FBQ0Q7QUFKZ0IsT0FBbkI7QUFNRDs7OzZCQUNRLENBQUU7Ozs7RUF4RG1CLGVBQUtDLEk7O2tCQUFoQnZDLEUiLCJmaWxlIjoibXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBteSBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Liq5Lq65Lit5b+DJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgaGVpZ2h0OiAwLFxuICAgIHdpZHRoOiAwLFxuICAgIGhlYWQ6ICcuLi9teS9oZWFkLnBuZycsXG4gICAgbmFtZTogJ+i/memHjOaYr+aYteensPCfh6jwn4ezJyxcbiAgICBvcmRlcjogJy4uL215L29yZGVyLnBuZycsXG4gICAgYWRkcmVzczogJy4uL215L2FkZHJlc3MucG5nJyxcbiAgICBzaG9wOiAnLi4vaW1hZ2VzL3Nob3AucG5nJyxcbiAgICBwaG9uZTogJy4uL215L3Bob25lLnBuZycsXG4gICAgYXJyb3c6ICcuLi9teS9hcnJvdy5wbmcnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBwYWdlT3JkZXIoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL215L2luZGVudCdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBwYWdlQWRkcmVzcygpIHtcbiAgICAgIHdlcHkuY2hvb3NlQWRkcmVzcyh7XG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXMpKVxuICAgICAgICB9LFxuICAgICAgICBmYWlsOiBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyKSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC8vIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAvLyAgIHVybDogJy4vbXkvYWRkcmVzcydcbiAgICAgIC8vIH0pXG4gICAgfSxcbiAgICBwYWdlQ29udGFjdCgpIHtcbiAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgdGl0bGU6ICfmiYvmnLo6JyxcbiAgICAgICAgY29udGVudDogJzE4MzMxMjkwNjYzJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHdlcHkuZ2V0VXNlckluZm8oe1xuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIHNlbGYubmFtZSA9IHJlcy51c2VySW5mby5uaWNrTmFtZVxuICAgICAgICBzZWxmLmhlYWQgPSByZXMudXNlckluZm8uYXZhdGFyVXJsXG4gICAgICB9XG4gICAgfSlcbiAgICB3ZXB5LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgc2VsZi5oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XG4gICAgICAgIHNlbGYud2lkdGggPSByZXMud2luZG93V2lkdGhcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIG9uU2hvdygpIHt9XG59XG4iXX0=
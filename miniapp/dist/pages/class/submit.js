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

var submit = function (_wepy$page) {
  _inherits(submit, _wepy$page);

  function submit() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, submit);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = submit.__proto__ || Object.getPrototypeOf(submit)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigetionBarTitleText: '确认订单'
    }, _this.data = {
      address: '添加收货地址',
      width: 0,
      height: 0,
      total: 0
    }, _this.methods = {
      address: function address() {
        var self = this;
        _wepy2.default.chooseAddress({
          success: function success(res) {
            self.address = res;
            console.log(JSON.stringify(res), '地址是什么样的');
          },
          fail: function fail(err) {
            console.log(JSON.stringify(err));
          }
        });
        // wepy.navigateTo({
        //   url: './my/address'
        // })
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(submit, [{
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

  return submit;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(submit , 'pages/class/submit'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Ym1pdC5qcyJdLCJuYW1lcyI6WyJzdWJtaXQiLCJjb25maWciLCJuYXZpZ2V0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImFkZHJlc3MiLCJ3aWR0aCIsImhlaWdodCIsInRvdGFsIiwibWV0aG9kcyIsInNlbGYiLCJjaG9vc2VBZGRyZXNzIiwic3VjY2VzcyIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwiZmFpbCIsImVyciIsImdldFN5c3RlbUluZm8iLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3dXaWR0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxlQUFTLFFBREo7QUFFTEMsYUFBTyxDQUZGO0FBR0xDLGNBQVEsQ0FISDtBQUlMQyxhQUFPO0FBSkYsSyxRQU1QQyxPLEdBQVU7QUFDUkosYUFEUSxxQkFDRTtBQUNSLFlBQUlLLE9BQU8sSUFBWDtBQUNBLHVCQUFLQyxhQUFMLENBQW1CO0FBQ2pCQyxtQkFBUyxpQkFBVUMsR0FBVixFQUFlO0FBQ3RCSCxpQkFBS0wsT0FBTCxHQUFlUSxHQUFmO0FBQ0FDLG9CQUFRQyxHQUFSLENBQVlDLEtBQUtDLFNBQUwsQ0FBZUosR0FBZixDQUFaLEVBQWlDLFNBQWpDO0FBQ0QsV0FKZ0I7QUFLakJLLGdCQUFNLGNBQVVDLEdBQVYsRUFBZTtBQUNuQkwsb0JBQVFDLEdBQVIsQ0FBWUMsS0FBS0MsU0FBTCxDQUFlRSxHQUFmLENBQVo7QUFDRDtBQVBnQixTQUFuQjtBQVNBO0FBQ0E7QUFDQTtBQUNEO0FBZk8sSzs7Ozs7NkJBaUJEO0FBQ1AsVUFBSVQsT0FBTyxJQUFYO0FBQ0EscUJBQUtVLGFBQUwsQ0FBbUI7QUFDakJSLGVBRGlCLG1CQUNUQyxHQURTLEVBQ0o7QUFDWEgsZUFBS0gsTUFBTCxHQUFjTSxJQUFJUSxZQUFsQjtBQUNBWCxlQUFLSixLQUFMLEdBQWFPLElBQUlTLFdBQWpCO0FBQ0Q7QUFKZ0IsT0FBbkI7QUFNRDs7OztFQW5DaUMsZUFBS0MsSTs7a0JBQXBCdEIsTSIsImZpbGUiOiJzdWJtaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBzdWJtaXQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdldGlvbkJhclRpdGxlVGV4dDogJ+ehruiupOiuouWNlSdcbiAgfVxuICBkYXRhID0ge1xuICAgIGFkZHJlc3M6ICfmt7vliqDmlLbotKflnLDlnYAnLFxuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMCxcbiAgICB0b3RhbDogMFxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgYWRkcmVzcygpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgd2VweS5jaG9vc2VBZGRyZXNzKHtcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgIHNlbGYuYWRkcmVzcyA9IHJlc1xuICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlcyksICflnLDlnYDmmK/ku4DkuYjmoLfnmoQnKVxuICAgICAgICB9LFxuICAgICAgICBmYWlsOiBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyKSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC8vIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAvLyAgIHVybDogJy4vbXkvYWRkcmVzcydcbiAgICAgIC8vIH0pXG4gICAgfVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgc2VsZi5oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XG4gICAgICAgIHNlbGYud2lkdGggPSByZXMud2luZG93V2lkdGhcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=
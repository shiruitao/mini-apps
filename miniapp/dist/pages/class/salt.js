'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _commodity = require('./../../commodity/commodity.js');

var _commodity2 = _interopRequireDefault(_commodity);

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
      navigationBarTitleText: '调味品'
    }, _this.data = {
      commodity: []
    }, _this.methods = {
      goods: function goods(e) {
        var self = this;
        var index = e.currentTarget.dataset.index;
        var commodity = self.commodity[index];
        console.log(commodity);
        try {
          _wepy2.default.setStorageSync('commodity', commodity);
        } catch (e) {}
        _wepy2.default.showToast({
          title: '加入成功',
          icon: 'success',
          duration: 1000
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onShow',
    value: function onShow() {
      var self = this;
      self.commodity = _commodity2.default;
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/class/salt'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbHQuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImNvbW1vZGl0eSIsIm1ldGhvZHMiLCJnb29kcyIsImUiLCJzZWxmIiwiaW5kZXgiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdG9yYWdlU3luYyIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsaUJBQVc7QUFETixLLFFBR1BDLE8sR0FBVTtBQUNSQyxXQURRLGlCQUNGQyxDQURFLEVBQ0M7QUFDUCxZQUFJQyxPQUFPLElBQVg7QUFDQSxZQUFNQyxRQUFRRixFQUFFRyxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkYsS0FBdEM7QUFDQSxZQUFJTCxZQUFZSSxLQUFLSixTQUFMLENBQWVLLEtBQWYsQ0FBaEI7QUFDQUcsZ0JBQVFDLEdBQVIsQ0FBWVQsU0FBWjtBQUNBLFlBQUk7QUFDRix5QkFBS1UsY0FBTCxDQUFvQixXQUFwQixFQUFpQ1YsU0FBakM7QUFDRCxTQUZELENBRUUsT0FBT0csQ0FBUCxFQUFVLENBQ1g7QUFDRCx1QkFBS1EsU0FBTCxDQUFlO0FBQ2JDLGlCQUFPLE1BRE07QUFFYkMsZ0JBQU0sU0FGTztBQUdiQyxvQkFBVTtBQUhHLFNBQWY7QUFLRDtBQWZPLEs7Ozs7OzZCQWlCRDtBQUNQLFVBQUlWLE9BQU8sSUFBWDtBQUNBQSxXQUFLSixTQUFMO0FBQ0Q7Ozs7RUEzQmdDLGVBQUtlLEk7O2tCQUFuQm5CLEsiLCJmaWxlIjoic2FsdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBjb21tb2RpdHkgZnJvbSAnLi4vLi4vY29tbW9kaXR5L2NvbW1vZGl0eS5qcydcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfosIPlkbPlk4EnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBjb21tb2RpdHk6IFtdXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBnb29kcyhlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGNvbnN0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICAgIGxldCBjb21tb2RpdHkgPSBzZWxmLmNvbW1vZGl0eVtpbmRleF1cbiAgICAgIGNvbnNvbGUubG9nKGNvbW1vZGl0eSlcbiAgICAgIHRyeSB7XG4gICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ2NvbW1vZGl0eScsIGNvbW1vZGl0eSlcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIH1cbiAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgdGl0bGU6ICfliqDlhaXmiJDlip8nLFxuICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgIGR1cmF0aW9uOiAxMDAwXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBvblNob3coKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgc2VsZi5jb21tb2RpdHkgPSBjb21tb2RpdHlcbiAgfVxufVxuIl19
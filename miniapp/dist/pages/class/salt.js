'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./../../npm/wepy/lib/wepy.js');

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
      navigationBarTitleText: '购物车'
    }, _this.data = {
      number: 1,

      commodity: [{ comPhoto: '../../images/Yosemite.jpg', comText: '好山好水', money: 3500 }, { comPhoto: '../../images/Yosemite.jpg', comText: '好山好水', money: 3500 }, { comPhoto: '../../images/Yosemite.jpg', comText: '好山好水', money: 3500 }]
    }, _this.methods = {
      add: function add() {
        var self = this;
        self.number++;
      },
      sub: function sub() {
        var self = this;
        if (self.number > 1) {
          self.number--;
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/class/salt'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbHQuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsIm51bWJlciIsImNvbW1vZGl0eSIsImNvbVBob3RvIiwiY29tVGV4dCIsIm1vbmV5IiwibWV0aG9kcyIsImFkZCIsInNlbGYiLCJzdWIiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGNBQVEsQ0FESDs7QUFHTEMsaUJBQVcsQ0FDVCxFQUFFQyxVQUFVLDJCQUFaLEVBQXlDQyxTQUFTLE1BQWxELEVBQTBEQyxPQUFPLElBQWpFLEVBRFMsRUFFVCxFQUFFRixVQUFVLDJCQUFaLEVBQXlDQyxTQUFTLE1BQWxELEVBQTBEQyxPQUFPLElBQWpFLEVBRlMsRUFHVCxFQUFFRixVQUFVLDJCQUFaLEVBQXlDQyxTQUFTLE1BQWxELEVBQTBEQyxPQUFPLElBQWpFLEVBSFM7QUFITixLLFFBU1BDLE8sR0FBVTtBQUNSQyxTQURRLGlCQUNGO0FBQ0osWUFBSUMsT0FBTyxJQUFYO0FBQ0FBLGFBQUtQLE1BQUw7QUFDRCxPQUpPO0FBS1JRLFNBTFEsaUJBS0Y7QUFDSixZQUFJRCxPQUFPLElBQVg7QUFDQSxZQUFJQSxLQUFLUCxNQUFMLEdBQWMsQ0FBbEIsRUFBcUI7QUFDbkJPLGVBQUtQLE1BQUw7QUFDRDtBQUNGO0FBVk8sSzs7OztFQWJ1QixlQUFLUyxJOztrQkFBbkJiLEsiLCJmaWxlIjoic2FsdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfotK3nianovaYnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBudW1iZXI6IDEsXG5cbiAgICBjb21tb2RpdHk6IFtcbiAgICAgIHsgY29tUGhvdG86ICcuLi8uLi9pbWFnZXMvWW9zZW1pdGUuanBnJywgY29tVGV4dDogJ+WlveWxseWlveawtCcsIG1vbmV5OiAzNTAwIH0sXG4gICAgICB7IGNvbVBob3RvOiAnLi4vLi4vaW1hZ2VzL1lvc2VtaXRlLmpwZycsIGNvbVRleHQ6ICflpb3lsbHlpb3msLQnLCBtb25leTogMzUwMCB9LFxuICAgICAgeyBjb21QaG90bzogJy4uLy4uL2ltYWdlcy9Zb3NlbWl0ZS5qcGcnLCBjb21UZXh0OiAn5aW95bGx5aW95rC0JywgbW9uZXk6IDM1MDAgfVxuICAgIF1cbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGFkZCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5udW1iZXIrK1xuICAgIH0sXG4gICAgc3ViKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBpZiAoc2VsZi5udW1iZXIgPiAxKSB7XG4gICAgICAgIHNlbGYubnVtYmVyLS1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==
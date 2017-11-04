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

var searchResult = function (_wepy$page) {
  _inherits(searchResult, _wepy$page);

  function searchResult() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, searchResult);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = searchResult.__proto__ || Object.getPrototypeOf(searchResult)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '{{name}}'
    }, _this.data = {
      name: '搜索'
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(searchResult, [{
    key: 'onLoad',
    value: function onLoad(data) {
      var self = this;
      self.name = data.name;
    }
  }]);

  return searchResult;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(searchResult , 'pages/class/searchResult'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaFJlc3VsdC5qcyJdLCJuYW1lcyI6WyJzZWFyY2hSZXN1bHQiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsIm5hbWUiLCJzZWxmIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsWTs7Ozs7Ozs7Ozs7Ozs7a01BQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFlBQU07QUFERCxLOzs7OzsyQkFHQUQsSSxFQUFNO0FBQ1gsVUFBSUUsT0FBTyxJQUFYO0FBQ0FBLFdBQUtELElBQUwsR0FBWUQsS0FBS0MsSUFBakI7QUFDRDs7OztFQVZ1QyxlQUFLRSxJOztrQkFBMUJOLFkiLCJmaWxlIjoic2VhcmNoUmVzdWx0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc2VhcmNoUmVzdWx0IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICd7e25hbWV9fSdcbiAgfVxuICBkYXRhID0ge1xuICAgIG5hbWU6ICfmkJzntKInXG4gIH1cbiAgb25Mb2FkKGRhdGEpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBzZWxmLm5hbWUgPSBkYXRhLm5hbWVcbiAgfVxufVxuIl19
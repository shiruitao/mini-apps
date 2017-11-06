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
      search: function search(e) {
        var self = this;
        self.searchText = e.detail.value;
        _wepy2.default.request({
          url: 'http://127.0.0.1:7001/getSearch',
          method: 'POST',
          data: {
            title: self.searchText
          },
          success: function success(res) {
            self.commodity = res.data;
            self.setData({
              commodity: res.data
            });
            console.log(res.data, 'res.data');
          }
        });
      },
      detail: function detail(e) {
        var self = this;
        var index = e.currentTarget.dataset.index;
        _wepy2.default.navigateTo({
          url: './detail?id=' + self.commodity[index].id
        });
        console.log(self.commodity[index].id, 'id');
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5qcyJdLCJuYW1lcyI6WyJzZWFyY2giLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImhlaWdodCIsIndpZHRoIiwic2VhcmNoVGV4dCIsIm1ldGhvZHMiLCJlIiwic2VsZiIsImRldGFpbCIsInZhbHVlIiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsInRpdGxlIiwic3VjY2VzcyIsInJlcyIsImNvbW1vZGl0eSIsInNldERhdGEiLCJjb25zb2xlIiwibG9nIiwiaW5kZXgiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIm5hdmlnYXRlVG8iLCJpZCIsImdldFN5c3RlbUluZm8iLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3dXaWR0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxjQUFRLENBREg7QUFFTEMsYUFBTyxDQUZGO0FBR0xDLGtCQUFZO0FBSFAsSyxRQUtQQyxPLEdBQVU7QUFDUlAsWUFEUSxrQkFDRFEsQ0FEQyxFQUNFO0FBQ1IsWUFBSUMsT0FBTyxJQUFYO0FBQ0FBLGFBQUtILFVBQUwsR0FBa0JFLEVBQUVFLE1BQUYsQ0FBU0MsS0FBM0I7QUFDQSx1QkFBS0MsT0FBTCxDQUFhO0FBQ1hDLGVBQUssaUNBRE07QUFFWEMsa0JBQVEsTUFGRztBQUdYWCxnQkFBTTtBQUNKWSxtQkFBT04sS0FBS0g7QUFEUixXQUhLO0FBTVhVLG1CQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJSLGlCQUFLUyxTQUFMLEdBQWlCRCxJQUFJZCxJQUFyQjtBQUNBTSxpQkFBS1UsT0FBTCxDQUFhO0FBQ1hELHlCQUFXRCxJQUFJZDtBQURKLGFBQWI7QUFHQWlCLG9CQUFRQyxHQUFSLENBQVlKLElBQUlkLElBQWhCLEVBQXNCLFVBQXRCO0FBQ0Q7QUFaVSxTQUFiO0FBY0QsT0FsQk87QUFtQlJPLFlBbkJRLGtCQW1CREYsQ0FuQkMsRUFtQkU7QUFDUixZQUFJQyxPQUFPLElBQVg7QUFDQSxZQUFNYSxRQUFRZCxFQUFFZSxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkYsS0FBdEM7QUFDQSx1QkFBS0csVUFBTCxDQUFnQjtBQUNkWixnQ0FBb0JKLEtBQUtTLFNBQUwsQ0FBZUksS0FBZixFQUFzQkk7QUFENUIsU0FBaEI7QUFHQU4sZ0JBQVFDLEdBQVIsQ0FBWVosS0FBS1MsU0FBTCxDQUFlSSxLQUFmLEVBQXNCSSxFQUFsQyxFQUFzQyxJQUF0QztBQUNEO0FBMUJPLEs7Ozs7OzZCQTRCRDtBQUNQLFVBQUlqQixPQUFPLElBQVg7QUFDQSxxQkFBS2tCLGFBQUwsQ0FBbUI7QUFDakJYLGVBRGlCLG1CQUNUQyxHQURTLEVBQ0o7QUFDWFIsZUFBS0wsTUFBTCxHQUFjYSxJQUFJVyxZQUFsQjtBQUNBbkIsZUFBS0osS0FBTCxHQUFhWSxJQUFJWSxXQUFqQjtBQUNEO0FBSmdCLE9BQW5CO0FBTUQ7Ozs7RUE3Q2lDLGVBQUtDLEk7O2tCQUFwQjlCLE0iLCJmaWxlIjoic2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc2VhcmNoIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmkJzntKLlj5HnjrAnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBoZWlnaHQ6IDAsXG4gICAgd2lkdGg6IDAsXG4gICAgc2VhcmNoVGV4dDogJydcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIHNlYXJjaChlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuc2VhcmNoVGV4dCA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvZ2V0U2VhcmNoJyxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICB0aXRsZTogc2VsZi5zZWFyY2hUZXh0XG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIHNlbGYuY29tbW9kaXR5ID0gcmVzLmRhdGFcbiAgICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgICAgY29tbW9kaXR5OiByZXMuZGF0YVxuICAgICAgICAgIH0pXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEsICdyZXMuZGF0YScpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICBkZXRhaWwoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBjb25zdCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAuL2RldGFpbD9pZD0ke3NlbGYuY29tbW9kaXR5W2luZGV4XS5pZH1gXG4gICAgICB9KVxuICAgICAgY29uc29sZS5sb2coc2VsZi5jb21tb2RpdHlbaW5kZXhdLmlkLCAnaWQnKVxuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgd2VweS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHNlbGYuaGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxuICAgICAgICBzZWxmLndpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19
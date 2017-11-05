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
      formSubmit: function formSubmit(e) {
        var self = this;
        self.searchText = e.detail.value;
      },
      search: function search(e) {
        var self = this;
        var text = self.searchText;
        console.log('form发生了submit事件，携带数据为：', text.input);
        _wepy2.default.request({
          url: 'http://127.0.0.1:7001/getSearch',
          method: 'POST',
          data: {
            title: '%' + text.input + '%'
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5qcyJdLCJuYW1lcyI6WyJzZWFyY2giLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImhlaWdodCIsIndpZHRoIiwic2VhcmNoVGV4dCIsIm1ldGhvZHMiLCJmb3JtU3VibWl0IiwiZSIsInNlbGYiLCJkZXRhaWwiLCJ2YWx1ZSIsInRleHQiLCJjb25zb2xlIiwibG9nIiwiaW5wdXQiLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwidGl0bGUiLCJzdWNjZXNzIiwicmVzIiwiY29tbW9kaXR5Iiwic2V0RGF0YSIsImluZGV4IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJuYXZpZ2F0ZVRvIiwiaWQiLCJnZXRTeXN0ZW1JbmZvIiwid2luZG93SGVpZ2h0Iiwid2luZG93V2lkdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxNOzs7Ozs7Ozs7Ozs7OztzTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsY0FBUSxDQURIO0FBRUxDLGFBQU8sQ0FGRjtBQUdMQyxrQkFBWTtBQUhQLEssUUFLUEMsTyxHQUFVO0FBQ1JDLGtCQUFZLG9CQUFTQyxDQUFULEVBQVk7QUFDdEIsWUFBSUMsT0FBTyxJQUFYO0FBQ0FBLGFBQUtKLFVBQUwsR0FBa0JHLEVBQUVFLE1BQUYsQ0FBU0MsS0FBM0I7QUFDRCxPQUpPO0FBS1JaLFlBTFEsa0JBS0RTLENBTEMsRUFLRTtBQUNSLFlBQUlDLE9BQU8sSUFBWDtBQUNBLFlBQUlHLE9BQU9ILEtBQUtKLFVBQWhCO0FBQ0FRLGdCQUFRQyxHQUFSLENBQVksd0JBQVosRUFBc0NGLEtBQUtHLEtBQTNDO0FBQ0EsdUJBQUtDLE9BQUwsQ0FBYTtBQUNYQyxlQUFLLGlDQURNO0FBRVhDLGtCQUFRLE1BRkc7QUFHWGhCLGdCQUFNO0FBQ0ppQix5QkFBV1AsS0FBS0csS0FBaEI7QUFESSxXQUhLO0FBTVhLLG1CQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJaLGlCQUFLYSxTQUFMLEdBQWlCRCxJQUFJbkIsSUFBckI7QUFDQU8saUJBQUtjLE9BQUwsQ0FBYTtBQUNYRCx5QkFBV0QsSUFBSW5CO0FBREosYUFBYjtBQUdBVyxvQkFBUUMsR0FBUixDQUFZTyxJQUFJbkIsSUFBaEIsRUFBc0IsVUFBdEI7QUFDRDtBQVpVLFNBQWI7QUFjRCxPQXZCTztBQXdCUlEsWUF4QlEsa0JBd0JERixDQXhCQyxFQXdCRTtBQUNSLFlBQUlDLE9BQU8sSUFBWDtBQUNBLFlBQU1lLFFBQVFoQixFQUFFaUIsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JGLEtBQXRDO0FBQ0EsdUJBQUtHLFVBQUwsQ0FBZ0I7QUFDZFYsZ0NBQW9CUixLQUFLYSxTQUFMLENBQWVFLEtBQWYsRUFBc0JJO0FBRDVCLFNBQWhCO0FBR0FmLGdCQUFRQyxHQUFSLENBQVlMLEtBQUthLFNBQUwsQ0FBZUUsS0FBZixFQUFzQkksRUFBbEMsRUFBc0MsSUFBdEM7QUFDRDtBQS9CTyxLOzs7Ozs2QkFpQ0Q7QUFDUCxVQUFJbkIsT0FBTyxJQUFYO0FBQ0EscUJBQUtvQixhQUFMLENBQW1CO0FBQ2pCVCxlQURpQixtQkFDVEMsR0FEUyxFQUNKO0FBQ1haLGVBQUtOLE1BQUwsR0FBY2tCLElBQUlTLFlBQWxCO0FBQ0FyQixlQUFLTCxLQUFMLEdBQWFpQixJQUFJVSxXQUFqQjtBQUNEO0FBSmdCLE9BQW5CO0FBTUQ7Ozs7RUFsRGlDLGVBQUtDLEk7O2tCQUFwQmpDLE0iLCJmaWxlIjoic2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc2VhcmNoIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmkJzntKLlj5HnjrAnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBoZWlnaHQ6IDAsXG4gICAgd2lkdGg6IDAsXG4gICAgc2VhcmNoVGV4dDogJydcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGZvcm1TdWJtaXQ6IGZ1bmN0aW9uKGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5zZWFyY2hUZXh0ID0gZS5kZXRhaWwudmFsdWVcbiAgICB9LFxuICAgIHNlYXJjaChlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHZhciB0ZXh0ID0gc2VsZi5zZWFyY2hUZXh0XG4gICAgICBjb25zb2xlLmxvZygnZm9ybeWPkeeUn+S6hnN1Ym1pdOS6i+S7tu+8jOaQuuW4puaVsOaNruS4uu+8micsIHRleHQuaW5wdXQpXG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvZ2V0U2VhcmNoJyxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICB0aXRsZTogYCUke3RleHQuaW5wdXR9JWBcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgc2VsZi5jb21tb2RpdHkgPSByZXMuZGF0YVxuICAgICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgICBjb21tb2RpdHk6IHJlcy5kYXRhXG4gICAgICAgICAgfSlcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSwgJ3Jlcy5kYXRhJylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIGRldGFpbChlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGNvbnN0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC4vZGV0YWlsP2lkPSR7c2VsZi5jb21tb2RpdHlbaW5kZXhdLmlkfWBcbiAgICAgIH0pXG4gICAgICBjb25zb2xlLmxvZyhzZWxmLmNvbW1vZGl0eVtpbmRleF0uaWQsICdpZCcpXG4gICAgfVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgc2VsZi5oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XG4gICAgICAgIHNlbGYud2lkdGggPSByZXMud2luZG93V2lkdGhcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=
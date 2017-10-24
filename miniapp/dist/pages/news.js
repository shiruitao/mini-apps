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
      navigationBarTitleText: '动态',
      enablePullDownRefresh: true
    }, _this.data = {
      height: 0,
      width: 0,
      issue: '../image/issue.png',
      head: '',
      name: '',
      imaUrl: [{ url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508848562785&di=bb9789d7fc6bbd2fa8898c4873effd98&imgtype=0&src=http%3A%2F%2Fp18.qhimg.com%2Fbdr%2F__%2Fd%2F_open360%2Ffengjing0423%2F27.jpg' }, { url: 'https://img11.360buyimg.com/babel/jfs/t10276/362/1287822046/93410/f75a7664/59df518aN37f8489b.jpg' }, { url: 'https://img.alicdn.com/tfs/TB16j9ph2BNTKJjy0FdXXcPpVXa-520-280.jpg_q90' }, { url: 'https://img.alicdn.com/simba/img/TB1Sn01X7T85uJjSZFhSuwPEVXa.jpg' }],
      photo: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509244645&di=debd65bf16176135b691782fb939095f&imgtype=jpg&er=1&src=http%3A%2F%2Fimg4.xiazaizhijia.com%2Fwalls%2F20150908%2F1440x900_dd76839deec4325.jpg'
    }, _this.methods = {
      issue: function issue() {
        _wepy2.default.navigateTo({
          url: '../pages/class/newContent'
        });
      },
      previewImage: function previewImage(e) {
        var self = this;
        console.log('点击');
        var index = e.currentTarget.dataset.index;
        var arr = [];
        for (var i = 0; i < self.imaUrl.length; i++) {
          arr.push(self.imaUrl[i].url);
        }
        _wepy2.default.previewImage({
          urls: arr,
          current: '' + self.imaUrl[index].url
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      _wepy2.default.startPullDownRefresh();
      setTimeout(function () {
        _wepy2.default.stopPullDownRefresh();
      }, 1500);
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      _wepy2.default.getSystemInfo({
        success: function success(res) {
          self.height = res.windowHeight;
          self.width = res.windowWidth;
        }
      });
      _wepy2.default.getUserInfo({
        success: function success(res) {
          self.head = res.userInfo.avatarUrl;
          self.name = res.userInfo.nickName;
        }
      });
    }
  }, {
    key: 'onShow',
    value: function onShow() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/news'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld3MuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZW5hYmxlUHVsbERvd25SZWZyZXNoIiwiZGF0YSIsImhlaWdodCIsIndpZHRoIiwiaXNzdWUiLCJoZWFkIiwibmFtZSIsImltYVVybCIsInVybCIsInBob3RvIiwibWV0aG9kcyIsIm5hdmlnYXRlVG8iLCJwcmV2aWV3SW1hZ2UiLCJlIiwic2VsZiIsImNvbnNvbGUiLCJsb2ciLCJpbmRleCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiYXJyIiwiaSIsImxlbmd0aCIsInB1c2giLCJ1cmxzIiwiY3VycmVudCIsInN0YXJ0UHVsbERvd25SZWZyZXNoIiwic2V0VGltZW91dCIsInN0b3BQdWxsRG93blJlZnJlc2giLCJnZXRTeXN0ZW1JbmZvIiwic3VjY2VzcyIsInJlcyIsIndpbmRvd0hlaWdodCIsIndpbmRvd1dpZHRoIiwiZ2V0VXNlckluZm8iLCJ1c2VySW5mbyIsImF2YXRhclVybCIsIm5pY2tOYW1lIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLElBRGpCO0FBRVBDLDZCQUF1QjtBQUZoQixLLFFBSVRDLEksR0FBTztBQUNMQyxjQUFRLENBREg7QUFFTEMsYUFBTyxDQUZGO0FBR0xDLGFBQU8sb0JBSEY7QUFJTEMsWUFBTSxFQUpEO0FBS0xDLFlBQU0sRUFMRDtBQU1MQyxjQUFRLENBQ04sRUFBQ0MsS0FBSyxrTkFBTixFQURNLEVBRU4sRUFBQ0EsS0FBSyxrR0FBTixFQUZNLEVBR04sRUFBQ0EsS0FBSyx3RUFBTixFQUhNLEVBSU4sRUFBQ0EsS0FBSyxrRUFBTixFQUpNLENBTkg7QUFZTEMsYUFBTztBQVpGLEssUUFjUEMsTyxHQUFVO0FBQ1JOLFdBRFEsbUJBQ0E7QUFDTix1QkFBS08sVUFBTCxDQUFnQjtBQUNkSCxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQUxPO0FBTVJJLGtCQU5RLHdCQU1LQyxDQU5MLEVBTVE7QUFDZCxZQUFJQyxPQUFPLElBQVg7QUFDQUMsZ0JBQVFDLEdBQVIsQ0FBWSxJQUFaO0FBQ0EsWUFBTUMsUUFBUUosRUFBRUssYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JGLEtBQXRDO0FBQ0EsWUFBSUcsTUFBTSxFQUFWO0FBQ0EsYUFBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlQLEtBQUtQLE1BQUwsQ0FBWWUsTUFBaEMsRUFBd0NELEdBQXhDLEVBQTZDO0FBQzNDRCxjQUFJRyxJQUFKLENBQVNULEtBQUtQLE1BQUwsQ0FBWWMsQ0FBWixFQUFlYixHQUF4QjtBQUNEO0FBQ0QsdUJBQUtJLFlBQUwsQ0FBa0I7QUFDaEJZLGdCQUFNSixHQURVO0FBRWhCSyx3QkFBWVgsS0FBS1AsTUFBTCxDQUFZVSxLQUFaLEVBQW1CVDtBQUZmLFNBQWxCO0FBSUQ7QUFsQk8sSzs7Ozs7d0NBb0JVO0FBQ2xCLHFCQUFLa0Isb0JBQUw7QUFDQUMsaUJBQVcsWUFBVztBQUNwQix1QkFBS0MsbUJBQUw7QUFDRCxPQUZELEVBRUcsSUFGSDtBQUdEOzs7NkJBQ1E7QUFDUCxVQUFJZCxPQUFPLElBQVg7QUFDQSxxQkFBS2UsYUFBTCxDQUFtQjtBQUNqQkMsZUFEaUIsbUJBQ1RDLEdBRFMsRUFDSjtBQUNYakIsZUFBS1osTUFBTCxHQUFjNkIsSUFBSUMsWUFBbEI7QUFDQWxCLGVBQUtYLEtBQUwsR0FBYTRCLElBQUlFLFdBQWpCO0FBQ0Q7QUFKZ0IsT0FBbkI7QUFNQSxxQkFBS0MsV0FBTCxDQUFpQjtBQUNmSixpQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCakIsZUFBS1QsSUFBTCxHQUFZMEIsSUFBSUksUUFBSixDQUFhQyxTQUF6QjtBQUNBdEIsZUFBS1IsSUFBTCxHQUFZeUIsSUFBSUksUUFBSixDQUFhRSxRQUF6QjtBQUNEO0FBSmMsT0FBakI7QUFNRDs7OzZCQUNRLENBQUU7Ozs7RUE1RHNCLGVBQUtDLEk7O2tCQUFuQnpDLEsiLCJmaWxlIjoibmV3cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfliqjmgIEnLFxuICAgIGVuYWJsZVB1bGxEb3duUmVmcmVzaDogdHJ1ZVxuICB9XG4gIGRhdGEgPSB7XG4gICAgaGVpZ2h0OiAwLFxuICAgIHdpZHRoOiAwLFxuICAgIGlzc3VlOiAnLi4vaW1hZ2UvaXNzdWUucG5nJyxcbiAgICBoZWFkOiAnJyxcbiAgICBuYW1lOiAnJyxcbiAgICBpbWFVcmw6IFtcbiAgICAgIHt1cmw6ICdodHRwczovL3RpbWdzYS5iYWlkdS5jb20vdGltZz9pbWFnZSZxdWFsaXR5PTgwJnNpemU9Yjk5OTlfMTAwMDAmc2VjPTE1MDg4NDg1NjI3ODUmZGk9YmI5Nzg5ZDdmYzZiYmQyZmE4ODk4YzQ4NzNlZmZkOTgmaW1ndHlwZT0wJnNyYz1odHRwJTNBJTJGJTJGcDE4LnFoaW1nLmNvbSUyRmJkciUyRl9fJTJGZCUyRl9vcGVuMzYwJTJGZmVuZ2ppbmcwNDIzJTJGMjcuanBnJ30sXG4gICAgICB7dXJsOiAnaHR0cHM6Ly9pbWcxMS4zNjBidXlpbWcuY29tL2JhYmVsL2pmcy90MTAyNzYvMzYyLzEyODc4MjIwNDYvOTM0MTAvZjc1YTc2NjQvNTlkZjUxOGFOMzdmODQ4OWIuanBnJ30sXG4gICAgICB7dXJsOiAnaHR0cHM6Ly9pbWcuYWxpY2RuLmNvbS90ZnMvVEIxNmo5cGgyQk5US0pqeTBGZFhYY1BwVlhhLTUyMC0yODAuanBnX3E5MCd9LFxuICAgICAge3VybDogJ2h0dHBzOi8vaW1nLmFsaWNkbi5jb20vc2ltYmEvaW1nL1RCMVNuMDFYN1Q4NXVKalNaRmhTdXdQRVZYYS5qcGcnfVxuICAgIF0sXG4gICAgcGhvdG86ICdodHRwczovL3RpbWdzYS5iYWlkdS5jb20vdGltZz9pbWFnZSZxdWFsaXR5PTgwJnNpemU9Yjk5OTlfMTAwMDAmc2VjPTE1MDkyNDQ2NDUmZGk9ZGViZDY1YmYxNjE3NjEzNWI2OTE3ODJmYjkzOTA5NWYmaW1ndHlwZT1qcGcmZXI9MSZzcmM9aHR0cCUzQSUyRiUyRmltZzQueGlhemFpemhpamlhLmNvbSUyRndhbGxzJTJGMjAxNTA5MDglMkYxNDQweDkwMF9kZDc2ODM5ZGVlYzQzMjUuanBnJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgaXNzdWUoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuLi9wYWdlcy9jbGFzcy9uZXdDb250ZW50J1xuICAgICAgfSlcbiAgICB9LFxuICAgIHByZXZpZXdJbWFnZShlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGNvbnNvbGUubG9nKCfngrnlh7snKVxuICAgICAgY29uc3QgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleFxuICAgICAgbGV0IGFyciA9IFtdXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGYuaW1hVXJsLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGFyci5wdXNoKHNlbGYuaW1hVXJsW2ldLnVybClcbiAgICAgIH1cbiAgICAgIHdlcHkucHJldmlld0ltYWdlKHtcbiAgICAgICAgdXJsczogYXJyLFxuICAgICAgICBjdXJyZW50OiBgJHtzZWxmLmltYVVybFtpbmRleF0udXJsfWBcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIG9uUHVsbERvd25SZWZyZXNoKCkge1xuICAgIHdlcHkuc3RhcnRQdWxsRG93blJlZnJlc2goKVxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICB3ZXB5LnN0b3BQdWxsRG93blJlZnJlc2goKVxuICAgIH0sIDE1MDApXG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHdlcHkuZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBzZWxmLmhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgICAgICAgc2VsZi53aWR0aCA9IHJlcy53aW5kb3dXaWR0aFxuICAgICAgfVxuICAgIH0pXG4gICAgd2VweS5nZXRVc2VySW5mbyh7XG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgc2VsZi5oZWFkID0gcmVzLnVzZXJJbmZvLmF2YXRhclVybFxuICAgICAgICBzZWxmLm5hbWUgPSByZXMudXNlckluZm8ubmlja05hbWVcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIG9uU2hvdygpIHt9XG59XG4iXX0=
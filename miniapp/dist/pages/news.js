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

var news = function (_wepy$page) {
  _inherits(news, _wepy$page);

  function news() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, news);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = news.__proto__ || Object.getPrototypeOf(news)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '动态',
      enablePullDownRefresh: true
    }, _this.data = {
      height: 0,
      width: 0,
      issue: '../image/issue.png',
      head: '',
      name: '',
      src: [],
      newsText: '',
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

  _createClass(news, [{
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
    value: function onShow() {
      var _ = require('./../npm/lodash/lodash.js');
      var self = this;
      try {
        var srcValue = _wepy2.default.getStorageSync('src');
        srcValue = _.toArray(srcValue);
        self.src = srcValue;
        self.setData({
          src: srcValue
        });
      } catch (e) {}
      try {
        var value = _wepy2.default.getStorageSync('text');
        self.newsText = value;
        self.setData({
          newsText: value
        });
      } catch (e) {}
    }
  }]);

  return news;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(news , 'pages/news'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld3MuanMiXSwibmFtZXMiOlsibmV3cyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJlbmFibGVQdWxsRG93blJlZnJlc2giLCJkYXRhIiwiaGVpZ2h0Iiwid2lkdGgiLCJpc3N1ZSIsImhlYWQiLCJuYW1lIiwic3JjIiwibmV3c1RleHQiLCJpbWFVcmwiLCJ1cmwiLCJwaG90byIsIm1ldGhvZHMiLCJuYXZpZ2F0ZVRvIiwicHJldmlld0ltYWdlIiwiZSIsInNlbGYiLCJjb25zb2xlIiwibG9nIiwiaW5kZXgiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImFyciIsImkiLCJsZW5ndGgiLCJwdXNoIiwidXJscyIsImN1cnJlbnQiLCJzdGFydFB1bGxEb3duUmVmcmVzaCIsInNldFRpbWVvdXQiLCJzdG9wUHVsbERvd25SZWZyZXNoIiwiZ2V0U3lzdGVtSW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3dXaWR0aCIsImdldFVzZXJJbmZvIiwidXNlckluZm8iLCJhdmF0YXJVcmwiLCJuaWNrTmFtZSIsIl8iLCJyZXF1aXJlIiwic3JjVmFsdWUiLCJnZXRTdG9yYWdlU3luYyIsInRvQXJyYXkiLCJzZXREYXRhIiwidmFsdWUiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsSUFEakI7QUFFUEMsNkJBQXVCO0FBRmhCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLGNBQVEsQ0FESDtBQUVMQyxhQUFPLENBRkY7QUFHTEMsYUFBTyxvQkFIRjtBQUlMQyxZQUFNLEVBSkQ7QUFLTEMsWUFBTSxFQUxEO0FBTUxDLFdBQUssRUFOQTtBQU9MQyxnQkFBVSxFQVBMO0FBUUxDLGNBQVEsQ0FDTixFQUFDQyxLQUFLLGtOQUFOLEVBRE0sRUFFTixFQUFDQSxLQUFLLGtHQUFOLEVBRk0sRUFHTixFQUFDQSxLQUFLLHdFQUFOLEVBSE0sRUFJTixFQUFDQSxLQUFLLGtFQUFOLEVBSk0sQ0FSSDtBQWNMQyxhQUFPO0FBZEYsSyxRQWdCUEMsTyxHQUFVO0FBQ1JSLFdBRFEsbUJBQ0E7QUFDTix1QkFBS1MsVUFBTCxDQUFnQjtBQUNkSCxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQUxPO0FBTVJJLGtCQU5RLHdCQU1LQyxDQU5MLEVBTVE7QUFDZCxZQUFJQyxPQUFPLElBQVg7QUFDQUMsZ0JBQVFDLEdBQVIsQ0FBWSxJQUFaO0FBQ0EsWUFBTUMsUUFBUUosRUFBRUssYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JGLEtBQXRDO0FBQ0EsWUFBSUcsTUFBTSxFQUFWO0FBQ0EsYUFBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlQLEtBQUtQLE1BQUwsQ0FBWWUsTUFBaEMsRUFBd0NELEdBQXhDLEVBQTZDO0FBQzNDRCxjQUFJRyxJQUFKLENBQVNULEtBQUtQLE1BQUwsQ0FBWWMsQ0FBWixFQUFlYixHQUF4QjtBQUNEO0FBQ0QsdUJBQUtJLFlBQUwsQ0FBa0I7QUFDaEJZLGdCQUFNSixHQURVO0FBRWhCSyx3QkFBWVgsS0FBS1AsTUFBTCxDQUFZVSxLQUFaLEVBQW1CVDtBQUZmLFNBQWxCO0FBSUQ7QUFsQk8sSzs7Ozs7d0NBb0JVO0FBQ2xCLHFCQUFLa0Isb0JBQUw7QUFDQUMsaUJBQVcsWUFBVztBQUNwQix1QkFBS0MsbUJBQUw7QUFDRCxPQUZELEVBRUcsSUFGSDtBQUdEOzs7NkJBQ1E7QUFDUCxVQUFJZCxPQUFPLElBQVg7QUFDQSxxQkFBS2UsYUFBTCxDQUFtQjtBQUNqQkMsZUFEaUIsbUJBQ1RDLEdBRFMsRUFDSjtBQUNYakIsZUFBS2QsTUFBTCxHQUFjK0IsSUFBSUMsWUFBbEI7QUFDQWxCLGVBQUtiLEtBQUwsR0FBYThCLElBQUlFLFdBQWpCO0FBQ0Q7QUFKZ0IsT0FBbkI7QUFNQSxxQkFBS0MsV0FBTCxDQUFpQjtBQUNmSixpQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCakIsZUFBS1gsSUFBTCxHQUFZNEIsSUFBSUksUUFBSixDQUFhQyxTQUF6QjtBQUNBdEIsZUFBS1YsSUFBTCxHQUFZMkIsSUFBSUksUUFBSixDQUFhRSxRQUF6QjtBQUNEO0FBSmMsT0FBakI7QUFNRDs7OzZCQUNRO0FBQ1AsVUFBTUMsSUFBSUMsUUFBUSxRQUFSLENBQVY7QUFDQSxVQUFJekIsT0FBTyxJQUFYO0FBQ0EsVUFBSTtBQUNGLFlBQUkwQixXQUFXLGVBQUtDLGNBQUwsQ0FBb0IsS0FBcEIsQ0FBZjtBQUNBRCxtQkFBV0YsRUFBRUksT0FBRixDQUFVRixRQUFWLENBQVg7QUFDQTFCLGFBQUtULEdBQUwsR0FBV21DLFFBQVg7QUFDQTFCLGFBQUs2QixPQUFMLENBQWE7QUFDWHRDLGVBQUttQztBQURNLFNBQWI7QUFHRCxPQVBELENBT0UsT0FBTzNCLENBQVAsRUFBVSxDQUNYO0FBQ0QsVUFBSTtBQUNGLFlBQUkrQixRQUFRLGVBQUtILGNBQUwsQ0FBb0IsTUFBcEIsQ0FBWjtBQUNBM0IsYUFBS1IsUUFBTCxHQUFnQnNDLEtBQWhCO0FBQ0E5QixhQUFLNkIsT0FBTCxDQUFhO0FBQ1hyQyxvQkFBVXNDO0FBREMsU0FBYjtBQUdELE9BTkQsQ0FNRSxPQUFPL0IsQ0FBUCxFQUFVLENBQ1g7QUFDRjs7OztFQWxGK0IsZUFBS2dDLEk7O2tCQUFsQmxELEkiLCJmaWxlIjoibmV3cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIG5ld3MgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WKqOaAgScsXG4gICAgZW5hYmxlUHVsbERvd25SZWZyZXNoOiB0cnVlXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBoZWlnaHQ6IDAsXG4gICAgd2lkdGg6IDAsXG4gICAgaXNzdWU6ICcuLi9pbWFnZS9pc3N1ZS5wbmcnLFxuICAgIGhlYWQ6ICcnLFxuICAgIG5hbWU6ICcnLFxuICAgIHNyYzogW10sXG4gICAgbmV3c1RleHQ6ICcnLFxuICAgIGltYVVybDogW1xuICAgICAge3VybDogJ2h0dHBzOi8vdGltZ3NhLmJhaWR1LmNvbS90aW1nP2ltYWdlJnF1YWxpdHk9ODAmc2l6ZT1iOTk5OV8xMDAwMCZzZWM9MTUwODg0ODU2Mjc4NSZkaT1iYjk3ODlkN2ZjNmJiZDJmYTg4OThjNDg3M2VmZmQ5OCZpbWd0eXBlPTAmc3JjPWh0dHAlM0ElMkYlMkZwMTgucWhpbWcuY29tJTJGYmRyJTJGX18lMkZkJTJGX29wZW4zNjAlMkZmZW5namluZzA0MjMlMkYyNy5qcGcnfSxcbiAgICAgIHt1cmw6ICdodHRwczovL2ltZzExLjM2MGJ1eWltZy5jb20vYmFiZWwvamZzL3QxMDI3Ni8zNjIvMTI4NzgyMjA0Ni85MzQxMC9mNzVhNzY2NC81OWRmNTE4YU4zN2Y4NDg5Yi5qcGcnfSxcbiAgICAgIHt1cmw6ICdodHRwczovL2ltZy5hbGljZG4uY29tL3Rmcy9UQjE2ajlwaDJCTlRLSmp5MEZkWFhjUHBWWGEtNTIwLTI4MC5qcGdfcTkwJ30sXG4gICAgICB7dXJsOiAnaHR0cHM6Ly9pbWcuYWxpY2RuLmNvbS9zaW1iYS9pbWcvVEIxU24wMVg3VDg1dUpqU1pGaFN1d1BFVlhhLmpwZyd9XG4gICAgXSxcbiAgICBwaG90bzogJ2h0dHBzOi8vdGltZ3NhLmJhaWR1LmNvbS90aW1nP2ltYWdlJnF1YWxpdHk9ODAmc2l6ZT1iOTk5OV8xMDAwMCZzZWM9MTUwOTI0NDY0NSZkaT1kZWJkNjViZjE2MTc2MTM1YjY5MTc4MmZiOTM5MDk1ZiZpbWd0eXBlPWpwZyZlcj0xJnNyYz1odHRwJTNBJTJGJTJGaW1nNC54aWF6YWl6aGlqaWEuY29tJTJGd2FsbHMlMkYyMDE1MDkwOCUyRjE0NDB4OTAwX2RkNzY4MzlkZWVjNDMyNS5qcGcnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBpc3N1ZSgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4uL3BhZ2VzL2NsYXNzL25ld0NvbnRlbnQnXG4gICAgICB9KVxuICAgIH0sXG4gICAgcHJldmlld0ltYWdlKGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgY29uc29sZS5sb2coJ+eCueWHuycpXG4gICAgICBjb25zdCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XG4gICAgICBsZXQgYXJyID0gW11cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZi5pbWFVcmwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYXJyLnB1c2goc2VsZi5pbWFVcmxbaV0udXJsKVxuICAgICAgfVxuICAgICAgd2VweS5wcmV2aWV3SW1hZ2Uoe1xuICAgICAgICB1cmxzOiBhcnIsXG4gICAgICAgIGN1cnJlbnQ6IGAke3NlbGYuaW1hVXJsW2luZGV4XS51cmx9YFxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgb25QdWxsRG93blJlZnJlc2goKSB7XG4gICAgd2VweS5zdGFydFB1bGxEb3duUmVmcmVzaCgpXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHdlcHkuc3RvcFB1bGxEb3duUmVmcmVzaCgpXG4gICAgfSwgMTUwMClcbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgd2VweS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHNlbGYuaGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxuICAgICAgICBzZWxmLndpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICB9XG4gICAgfSlcbiAgICB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBzZWxmLmhlYWQgPSByZXMudXNlckluZm8uYXZhdGFyVXJsXG4gICAgICAgIHNlbGYubmFtZSA9IHJlcy51c2VySW5mby5uaWNrTmFtZVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgb25TaG93KCkge1xuICAgIGNvbnN0IF8gPSByZXF1aXJlKCdsb2Rhc2gnKVxuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHRyeSB7XG4gICAgICB2YXIgc3JjVmFsdWUgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdzcmMnKVxuICAgICAgc3JjVmFsdWUgPSBfLnRvQXJyYXkoc3JjVmFsdWUpXG4gICAgICBzZWxmLnNyYyA9IHNyY1ZhbHVlXG4gICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICBzcmM6IHNyY1ZhbHVlXG4gICAgICB9KVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIHZhciB2YWx1ZSA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ3RleHQnKVxuICAgICAgc2VsZi5uZXdzVGV4dCA9IHZhbHVlXG4gICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICBuZXdzVGV4dDogdmFsdWVcbiAgICAgIH0pXG4gICAgfSBjYXRjaCAoZSkge1xuICAgIH1cbiAgfVxufVxuIl19
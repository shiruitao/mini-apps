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
      head: '',
      name: '',
      src: [],
      newsText: '',
      imaUrl: [{ url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508848562785&di=bb9789d7fc6bbd2fa8898c4873effd98&imgtype=0&src=http%3A%2F%2Fp18.qhimg.com%2Fbdr%2F__%2Fd%2F_open360%2Ffengjing0423%2F27.jpg' }, { url: 'https://img11.360buyimg.com/babel/jfs/t10276/362/1287822046/93410/f75a7664/59df518aN37f8489b.jpg' }, { url: 'https://img.alicdn.com/tfs/TB16j9ph2BNTKJjy0FdXXcPpVXa-520-280.jpg_q90' }, { url: 'https://img.alicdn.com/simba/img/TB1Sn01X7T85uJjSZFhSuwPEVXa.jpg' }]
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
      },
      previewImageInter: function previewImageInter(e) {
        console.log('点击');
        _wepy2.default.previewImage({
          urls: ['http://api.dujin.org/bing/1920.php']
          // current: 'http://api.dujin.org/bing/1920.php'
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
      // const _ = require('./../npm/lodash/lodash.js')
      // let self = this
      // try {
      //   var value = wepy.getStorageSync('text')
      //   self.newsText = value
      //   self.setData({
      //     newsText: value
      //   })
      //   var srcValue = wepy.getStorageSync('src')
      //   srcValue = _.toArray(srcValue)
      //   self.src = srcValue
      //   self.setData({
      //     src: srcValue
      //   })
      // } catch (e) {
      // }
    }
  }]);

  return news;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(news , 'pages/news'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld3MuanMiXSwibmFtZXMiOlsibmV3cyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJlbmFibGVQdWxsRG93blJlZnJlc2giLCJkYXRhIiwiaGVpZ2h0Iiwid2lkdGgiLCJoZWFkIiwibmFtZSIsInNyYyIsIm5ld3NUZXh0IiwiaW1hVXJsIiwidXJsIiwibWV0aG9kcyIsImlzc3VlIiwibmF2aWdhdGVUbyIsInByZXZpZXdJbWFnZSIsImUiLCJzZWxmIiwiY29uc29sZSIsImxvZyIsImluZGV4IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJhcnIiLCJpIiwibGVuZ3RoIiwicHVzaCIsInVybHMiLCJjdXJyZW50IiwicHJldmlld0ltYWdlSW50ZXIiLCJzdGFydFB1bGxEb3duUmVmcmVzaCIsInNldFRpbWVvdXQiLCJzdG9wUHVsbERvd25SZWZyZXNoIiwiZ2V0U3lzdGVtSW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3dXaWR0aCIsImdldFVzZXJJbmZvIiwidXNlckluZm8iLCJhdmF0YXJVcmwiLCJuaWNrTmFtZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixJQURqQjtBQUVQQyw2QkFBdUI7QUFGaEIsSyxRQUlUQyxJLEdBQU87QUFDTEMsY0FBUSxDQURIO0FBRUxDLGFBQU8sQ0FGRjtBQUdMQyxZQUFNLEVBSEQ7QUFJTEMsWUFBTSxFQUpEO0FBS0xDLFdBQUssRUFMQTtBQU1MQyxnQkFBVSxFQU5MO0FBT0xDLGNBQVEsQ0FDTixFQUFDQyxLQUFLLGtOQUFOLEVBRE0sRUFFTixFQUFDQSxLQUFLLGtHQUFOLEVBRk0sRUFHTixFQUFDQSxLQUFLLHdFQUFOLEVBSE0sRUFJTixFQUFDQSxLQUFLLGtFQUFOLEVBSk07QUFQSCxLLFFBY1BDLE8sR0FBVTtBQUNSQyxXQURRLG1CQUNBO0FBQ04sdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEgsZUFBSztBQURTLFNBQWhCO0FBR0QsT0FMTztBQU1SSSxrQkFOUSx3QkFNS0MsQ0FOTCxFQU1RO0FBQ2QsWUFBSUMsT0FBTyxJQUFYO0FBQ0FDLGdCQUFRQyxHQUFSLENBQVksSUFBWjtBQUNBLFlBQU1DLFFBQVFKLEVBQUVLLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCRixLQUF0QztBQUNBLFlBQUlHLE1BQU0sRUFBVjtBQUNBLGFBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJUCxLQUFLUCxNQUFMLENBQVllLE1BQWhDLEVBQXdDRCxHQUF4QyxFQUE2QztBQUMzQ0QsY0FBSUcsSUFBSixDQUFTVCxLQUFLUCxNQUFMLENBQVljLENBQVosRUFBZWIsR0FBeEI7QUFDRDtBQUNELHVCQUFLSSxZQUFMLENBQWtCO0FBQ2hCWSxnQkFBTUosR0FEVTtBQUVoQkssd0JBQVlYLEtBQUtQLE1BQUwsQ0FBWVUsS0FBWixFQUFtQlQ7QUFGZixTQUFsQjtBQUlELE9BbEJPO0FBbUJSa0IsdUJBbkJRLDZCQW1CVWIsQ0FuQlYsRUFtQmE7QUFDbkJFLGdCQUFRQyxHQUFSLENBQVksSUFBWjtBQUNBLHVCQUFLSixZQUFMLENBQWtCO0FBQ2hCWSxnQkFBTSxDQUFDLG9DQUFEO0FBQ047QUFGZ0IsU0FBbEI7QUFJRDtBQXpCTyxLOzs7Ozt3Q0EyQlU7QUFDbEIscUJBQUtHLG9CQUFMO0FBQ0FDLGlCQUFXLFlBQVc7QUFDcEIsdUJBQUtDLG1CQUFMO0FBQ0QsT0FGRCxFQUVHLElBRkg7QUFHRDs7OzZCQUNRO0FBQ1AsVUFBSWYsT0FBTyxJQUFYO0FBQ0EscUJBQUtnQixhQUFMLENBQW1CO0FBQ2pCQyxlQURpQixtQkFDVEMsR0FEUyxFQUNKO0FBQ1hsQixlQUFLYixNQUFMLEdBQWMrQixJQUFJQyxZQUFsQjtBQUNBbkIsZUFBS1osS0FBTCxHQUFhOEIsSUFBSUUsV0FBakI7QUFDRDtBQUpnQixPQUFuQjtBQU1BLHFCQUFLQyxXQUFMLENBQWlCO0FBQ2ZKLGlCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJsQixlQUFLWCxJQUFMLEdBQVk2QixJQUFJSSxRQUFKLENBQWFDLFNBQXpCO0FBQ0F2QixlQUFLVixJQUFMLEdBQVk0QixJQUFJSSxRQUFKLENBQWFFLFFBQXpCO0FBQ0Q7QUFKYyxPQUFqQjtBQU1EOzs7NkJBQ1E7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEOzs7O0VBcEYrQixlQUFLQyxJOztrQkFBbEIzQyxJIiwiZmlsZSI6Im5ld3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBuZXdzIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfliqjmgIEnLFxuICAgIGVuYWJsZVB1bGxEb3duUmVmcmVzaDogdHJ1ZVxuICB9XG4gIGRhdGEgPSB7XG4gICAgaGVpZ2h0OiAwLFxuICAgIHdpZHRoOiAwLFxuICAgIGhlYWQ6ICcnLFxuICAgIG5hbWU6ICcnLFxuICAgIHNyYzogW10sXG4gICAgbmV3c1RleHQ6ICcnLFxuICAgIGltYVVybDogW1xuICAgICAge3VybDogJ2h0dHBzOi8vdGltZ3NhLmJhaWR1LmNvbS90aW1nP2ltYWdlJnF1YWxpdHk9ODAmc2l6ZT1iOTk5OV8xMDAwMCZzZWM9MTUwODg0ODU2Mjc4NSZkaT1iYjk3ODlkN2ZjNmJiZDJmYTg4OThjNDg3M2VmZmQ5OCZpbWd0eXBlPTAmc3JjPWh0dHAlM0ElMkYlMkZwMTgucWhpbWcuY29tJTJGYmRyJTJGX18lMkZkJTJGX29wZW4zNjAlMkZmZW5namluZzA0MjMlMkYyNy5qcGcnfSxcbiAgICAgIHt1cmw6ICdodHRwczovL2ltZzExLjM2MGJ1eWltZy5jb20vYmFiZWwvamZzL3QxMDI3Ni8zNjIvMTI4NzgyMjA0Ni85MzQxMC9mNzVhNzY2NC81OWRmNTE4YU4zN2Y4NDg5Yi5qcGcnfSxcbiAgICAgIHt1cmw6ICdodHRwczovL2ltZy5hbGljZG4uY29tL3Rmcy9UQjE2ajlwaDJCTlRLSmp5MEZkWFhjUHBWWGEtNTIwLTI4MC5qcGdfcTkwJ30sXG4gICAgICB7dXJsOiAnaHR0cHM6Ly9pbWcuYWxpY2RuLmNvbS9zaW1iYS9pbWcvVEIxU24wMVg3VDg1dUpqU1pGaFN1d1BFVlhhLmpwZyd9XG4gICAgXVxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgaXNzdWUoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuLi9wYWdlcy9jbGFzcy9uZXdDb250ZW50J1xuICAgICAgfSlcbiAgICB9LFxuICAgIHByZXZpZXdJbWFnZShlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGNvbnNvbGUubG9nKCfngrnlh7snKVxuICAgICAgY29uc3QgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleFxuICAgICAgbGV0IGFyciA9IFtdXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGYuaW1hVXJsLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGFyci5wdXNoKHNlbGYuaW1hVXJsW2ldLnVybClcbiAgICAgIH1cbiAgICAgIHdlcHkucHJldmlld0ltYWdlKHtcbiAgICAgICAgdXJsczogYXJyLFxuICAgICAgICBjdXJyZW50OiBgJHtzZWxmLmltYVVybFtpbmRleF0udXJsfWBcbiAgICAgIH0pXG4gICAgfSxcbiAgICBwcmV2aWV3SW1hZ2VJbnRlcihlKSB7XG4gICAgICBjb25zb2xlLmxvZygn54K55Ye7JylcbiAgICAgIHdlcHkucHJldmlld0ltYWdlKHtcbiAgICAgICAgdXJsczogWydodHRwOi8vYXBpLmR1amluLm9yZy9iaW5nLzE5MjAucGhwJ11cbiAgICAgICAgLy8gY3VycmVudDogJ2h0dHA6Ly9hcGkuZHVqaW4ub3JnL2JpbmcvMTkyMC5waHAnXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBvblB1bGxEb3duUmVmcmVzaCgpIHtcbiAgICB3ZXB5LnN0YXJ0UHVsbERvd25SZWZyZXNoKClcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgd2VweS5zdG9wUHVsbERvd25SZWZyZXNoKClcbiAgICB9LCAxNTAwKVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgc2VsZi5oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XG4gICAgICAgIHNlbGYud2lkdGggPSByZXMud2luZG93V2lkdGhcbiAgICAgIH1cbiAgICB9KVxuICAgIHdlcHkuZ2V0VXNlckluZm8oe1xuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIHNlbGYuaGVhZCA9IHJlcy51c2VySW5mby5hdmF0YXJVcmxcbiAgICAgICAgc2VsZi5uYW1lID0gcmVzLnVzZXJJbmZvLm5pY2tOYW1lXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBvblNob3coKSB7XG4gICAgLy8gY29uc3QgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpXG4gICAgLy8gbGV0IHNlbGYgPSB0aGlzXG4gICAgLy8gdHJ5IHtcbiAgICAvLyAgIHZhciB2YWx1ZSA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ3RleHQnKVxuICAgIC8vICAgc2VsZi5uZXdzVGV4dCA9IHZhbHVlXG4gICAgLy8gICBzZWxmLnNldERhdGEoe1xuICAgIC8vICAgICBuZXdzVGV4dDogdmFsdWVcbiAgICAvLyAgIH0pXG4gICAgLy8gICB2YXIgc3JjVmFsdWUgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdzcmMnKVxuICAgIC8vICAgc3JjVmFsdWUgPSBfLnRvQXJyYXkoc3JjVmFsdWUpXG4gICAgLy8gICBzZWxmLnNyYyA9IHNyY1ZhbHVlXG4gICAgLy8gICBzZWxmLnNldERhdGEoe1xuICAgIC8vICAgICBzcmM6IHNyY1ZhbHVlXG4gICAgLy8gICB9KVxuICAgIC8vIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyB9XG4gIH1cbn1cbiJdfQ==
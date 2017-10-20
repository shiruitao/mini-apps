'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _commodity = require('./../commodity/commodity.js');

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
      navigationBarTitleText: '超市'
    }, _this.data = {
      photoposter: '../images/poster.jpg',
      indicatorDots: true,
      autoplay: true,
      interval: 4000,
      duration: 500,
      indicatorActiveColor: '#e8884d',
      image: '',
      title: '',
      price: '',
      selected: '',
      num: 1,
      icon: {
        salt: '../image/salt.png',
        edibleOil: '../image/edibleOil.png',
        rice: '../image/rice.png',
        beans: '../image/beans.png',
        sauce: '../image/sauce.png',
        hotPot: '../image/hotPot.png',
        snacks: '../image/snacks.png',
        use: '../image/use.png'
      },
      imgUrls: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508474772093&di=2a094a7ef3b9158036adc82aae0f18c6&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fgamephotolib%2F1411%2F04%2Fc0%2F40533215_1415069787897.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509069524&di=4e7b6496805f6c5cc4cfc26fc1396243&imgtype=jpg&er=1&src=http%3A%2F%2Fimages.ali213.net%2Fpicfile%2Fpic%2F2010-01-08%2F16264985383.jpg'],
      commodity: []
    }, _this.methods = {
      goods: function goods(e) {
        var self = this;
        // let item = self.commodity[e.currentTarget.id]
        var index = e.currentTarget.dataset.index;
        var commodity = self.data.commodity;
        var image = commodity[index].image;
        var title = commodity[index].title;
        var price = commodity[index].price;
        var selected = commodity[index].selected;
        // self.image = image
        // self.title = title
        // self.price = price
        // self.selected = selected
        module.exports = { image: image, title: title, price: price, selected: selected };
        console.log('加入购物车');
        // wepy.switchTab({
        //   url: `./shop?image=${self.image}&title=${self.title}&price=${self.price}&num=${self.num}&selected=${self.selected}`
        // })
      },

      changeIndicatorDots: function changeIndicatorDots(e) {
        this.setData({
          indicatorDots: !this.data.indicatorDots
        });
      },
      changeAutoplay: function changeAutoplay(e) {
        this.setData({
          autoplay: !this.data.autoplay
        });
      },
      intervalChange: function intervalChange(e) {
        this.setData({
          interval: e.detail.value
        });
      },
      durationChange: function durationChange(e) {
        this.setData({
          duration: e.detail.value
        });
      },
      formSubmit: function formSubmit(e) {
        console.log('form发生了submit事件，携带数据为：', e.detail.value);
      },
      page1: function page1() {
        _wepy2.default.navigateTo({
          url: './class/salt'
        });
      },
      page2: function page2() {
        _wepy2.default.navigateTo({
          url: './class/edibleOil'
        });
      },
      page3: function page3() {
        _wepy2.default.navigateTo({
          url: './class/rice'
        });
      },
      page4: function page4() {
        _wepy2.default.navigateTo({
          url: './class/beans'
        });
      },
      page5: function page5() {
        _wepy2.default.navigateTo({
          url: './class/sauce'
        });
      },
      page6: function page6() {
        _wepy2.default.navigateTo({
          url: './class/hotPot'
        });
      },
      page7: function page7() {
        _wepy2.default.navigateTo({
          url: './class/snacks'
        });
      },
      page8: function page8() {
        _wepy2.default.navigateTo({
          url: './class/use'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onShow',
    value: function onShow() {}
  }, {
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      // self.commodity = commodity
      _wepy2.default.request({
        url: 'http://127.0.0.1/get',
        methods: 'POST',
        success: function success(res) {
          console.log(res.data, 2);
          self.commodity = res.data;
        }
      });
      self.commodity = _commodity2.default;
      console.log(self.commodity, 23);
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/home'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInBob3RvcG9zdGVyIiwiaW5kaWNhdG9yRG90cyIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJkdXJhdGlvbiIsImluZGljYXRvckFjdGl2ZUNvbG9yIiwiaW1hZ2UiLCJ0aXRsZSIsInByaWNlIiwic2VsZWN0ZWQiLCJudW0iLCJpY29uIiwic2FsdCIsImVkaWJsZU9pbCIsInJpY2UiLCJiZWFucyIsInNhdWNlIiwiaG90UG90Iiwic25hY2tzIiwidXNlIiwiaW1nVXJscyIsImNvbW1vZGl0eSIsIm1ldGhvZHMiLCJnb29kcyIsImUiLCJzZWxmIiwiaW5kZXgiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIm1vZHVsZSIsImV4cG9ydHMiLCJjb25zb2xlIiwibG9nIiwiY2hhbmdlSW5kaWNhdG9yRG90cyIsInNldERhdGEiLCJjaGFuZ2VBdXRvcGxheSIsImludGVydmFsQ2hhbmdlIiwiZGV0YWlsIiwidmFsdWUiLCJkdXJhdGlvbkNoYW5nZSIsImZvcm1TdWJtaXQiLCJwYWdlMSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJwYWdlMiIsInBhZ2UzIiwicGFnZTQiLCJwYWdlNSIsInBhZ2U2IiwicGFnZTciLCJwYWdlOCIsInJlcXVlc3QiLCJzdWNjZXNzIiwicmVzIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsbUJBQWEsc0JBRFI7QUFFTEMscUJBQWUsSUFGVjtBQUdMQyxnQkFBVSxJQUhMO0FBSUxDLGdCQUFVLElBSkw7QUFLTEMsZ0JBQVUsR0FMTDtBQU1MQyw0QkFBc0IsU0FOakI7QUFPTEMsYUFBTyxFQVBGO0FBUUxDLGFBQU8sRUFSRjtBQVNM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aEI7QUFHRCxPQTdFTztBQThFUk8sV0E5RVEsbUJBOEVBO0FBQ04sdUJBQUtSLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0Q7QUFsRk8sSzs7Ozs7NkJBb0ZELENBQ1I7Ozs2QkFDUTtBQUNQLFVBQUlsQixPQUFPLElBQVg7QUFDQTtBQUNBLHFCQUFLMEIsT0FBTCxDQUFhO0FBQ1hSLGFBQUssc0JBRE07QUFFWHJCLGlCQUFTLE1BRkU7QUFHWDhCLGlCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJ0QixrQkFBUUMsR0FBUixDQUFZcUIsSUFBSXRELElBQWhCLEVBQXNCLENBQXRCO0FBQ0EwQixlQUFLSixTQUFMLEdBQWlCZ0MsSUFBSXRELElBQXJCO0FBQ0Q7QUFOVSxPQUFiO0FBUUEwQixXQUFLSixTQUFMO0FBQ0FVLGNBQVFDLEdBQVIsQ0FBWVAsS0FBS0osU0FBakIsRUFBNEIsRUFBNUI7QUFDRDs7OztFQW5JZ0MsZUFBS2lDLEk7O2tCQUFuQjFELEsiLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBjb21tb2RpdHkgZnJvbSAnLi4vY29tbW9kaXR5L2NvbW1vZGl0eS5qcydcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfotoXluIInXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBwaG90b3Bvc3RlcjogJy4uL2ltYWdlcy9wb3N0ZXIuanBnJyxcbiAgICBpbmRpY2F0b3JEb3RzOiB0cnVlLFxuICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgIGludGVydmFsOiA0MDAwLFxuICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgaW5kaWNhdG9yQWN0aXZlQ29sb3I6ICcjZTg4ODRkJyxcbiAgICBpbWFnZTogJycsXG4gICAgdGl0bGU6ICcnLFxuICAgIHByaWNlOiAnJyxcbiAgICBzZWxlY3RlZDogJycsXG4gICAgbnVtOiAxLFxuICAgIGljb246IHtcbiAgICAgIHNhbHQ6ICcuLi9pbWFnZS9zYWx0LnBuZycsXG4gICAgICBlZGlibGVPaWw6ICcuLi9pbWFnZS9lZGlibGVPaWwucG5nJyxcbiAgICAgIHJpY2U6ICcuLi9pbWFnZS9yaWNlLnBuZycsXG4gICAgICBiZWFuczogJy4uL2ltYWdlL2JlYW5zLnBuZycsXG4gICAgICBzYXVjZTogJy4uL2ltYWdlL3NhdWNlLnBuZycsXG4gICAgICBob3RQb3Q6ICcuLi9pbWFnZS9ob3RQb3QucG5nJyxcbiAgICAgIHNuYWNrczogJy4uL2ltYWdlL3NuYWNrcy5wbmcnLFxuICAgICAgdXNlOiAnLi4vaW1hZ2UvdXNlLnBuZydcbiAgICB9LFxuICAgIGltZ1VybHM6IFtcbiAgICAgICdodHRwczovL3RpbWdzYS5iYWlkdS5jb20vdGltZz9pbWFnZSZxdWFsaXR5PTgwJnNpemU9Yjk5OTlfMTAwMDAmc2VjPTE1MDg0NzQ3NzIwOTMmZGk9MmEwOTRhN2VmM2I5MTU4MDM2YWRjODJhYWUwZjE4YzYmaW1ndHlwZT0wJnNyYz1odHRwJTNBJTJGJTJGaW1nLnBjb25saW5lLmNvbS5jbiUyRmltYWdlcyUyRnVwbG9hZCUyRnVwYyUyRnR4JTJGZ2FtZXBob3RvbGliJTJGMTQxMSUyRjA0JTJGYzAlMkY0MDUzMzIxNV8xNDE1MDY5Nzg3ODk3LmpwZycsXG4gICAgICAnaHR0cHM6Ly90aW1nc2EuYmFpZHUuY29tL3RpbWc/aW1hZ2UmcXVhbGl0eT04MCZzaXplPWI5OTk5XzEwMDAwJnNlYz0xNTA5MDY5NTI0JmRpPTRlN2I2NDk2ODA1ZjZjNWNjNGNmYzI2ZmMxMzk2MjQzJmltZ3R5cGU9anBnJmVyPTEmc3JjPWh0dHAlM0ElMkYlMkZpbWFnZXMuYWxpMjEzLm5ldCUyRnBpY2ZpbGUlMkZwaWMlMkYyMDEwLTAxLTA4JTJGMTYyNjQ5ODUzODMuanBnJ1xuICAgIF0sXG4gICAgY29tbW9kaXR5OiBbXVxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgZ29vZHMoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAvLyBsZXQgaXRlbSA9IHNlbGYuY29tbW9kaXR5W2UuY3VycmVudFRhcmdldC5pZF1cbiAgICAgIGNvbnN0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICAgIGxldCBjb21tb2RpdHkgPSBzZWxmLmRhdGEuY29tbW9kaXR5XG4gICAgICBsZXQgaW1hZ2UgPSBjb21tb2RpdHlbaW5kZXhdLmltYWdlXG4gICAgICBsZXQgdGl0bGUgPSBjb21tb2RpdHlbaW5kZXhdLnRpdGxlXG4gICAgICBsZXQgcHJpY2UgPSBjb21tb2RpdHlbaW5kZXhdLnByaWNlXG4gICAgICBsZXQgc2VsZWN0ZWQgPSBjb21tb2RpdHlbaW5kZXhdLnNlbGVjdGVkXG4gICAgICAvLyBzZWxmLmltYWdlID0gaW1hZ2VcbiAgICAgIC8vIHNlbGYudGl0bGUgPSB0aXRsZVxuICAgICAgLy8gc2VsZi5wcmljZSA9IHByaWNlXG4gICAgICAvLyBzZWxmLnNlbGVjdGVkID0gc2VsZWN0ZWRcbiAgICAgIG1vZHVsZS5leHBvcnRzID0geyBpbWFnZSwgdGl0bGUsIHByaWNlLCBzZWxlY3RlZCB9XG4gICAgICBjb25zb2xlLmxvZygn5Yqg5YWl6LSt54mp6L2mJylcbiAgICAgIC8vIHdlcHkuc3dpdGNoVGFiKHtcbiAgICAgIC8vICAgdXJsOiBgLi9zaG9wP2ltYWdlPSR7c2VsZi5pbWFnZX0mdGl0bGU9JHtzZWxmLnRpdGxlfSZwcmljZT0ke3NlbGYucHJpY2V9Jm51bT0ke3NlbGYubnVtfSZzZWxlY3RlZD0ke3NlbGYuc2VsZWN0ZWR9YFxuICAgICAgLy8gfSlcbiAgICB9LFxuICAgIGNoYW5nZUluZGljYXRvckRvdHM6IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGluZGljYXRvckRvdHM6ICF0aGlzLmRhdGEuaW5kaWNhdG9yRG90c1xuICAgICAgfSlcbiAgICB9LFxuICAgIGNoYW5nZUF1dG9wbGF5OiBmdW5jdGlvbihlKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBhdXRvcGxheTogIXRoaXMuZGF0YS5hdXRvcGxheVxuICAgICAgfSlcbiAgICB9LFxuICAgIGludGVydmFsQ2hhbmdlOiBmdW5jdGlvbihlKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBpbnRlcnZhbDogZS5kZXRhaWwudmFsdWVcbiAgICAgIH0pXG4gICAgfSxcbiAgICBkdXJhdGlvbkNoYW5nZTogZnVuY3Rpb24oZSkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgZHVyYXRpb246IGUuZGV0YWlsLnZhbHVlXG4gICAgICB9KVxuICAgIH0sXG4gICAgZm9ybVN1Ym1pdDogZnVuY3Rpb24oZSkge1xuICAgICAgY29uc29sZS5sb2coJ2Zvcm3lj5HnlJ/kuoZzdWJtaXTkuovku7bvvIzmkLrluKbmlbDmja7kuLrvvJonLCBlLmRldGFpbC52YWx1ZSlcbiAgICB9LFxuICAgIHBhZ2UxKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9jbGFzcy9zYWx0J1xuICAgICAgfSlcbiAgICB9LFxuICAgIHBhZ2UyKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9jbGFzcy9lZGlibGVPaWwnXG4gICAgICB9KVxuICAgIH0sXG4gICAgcGFnZTMoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL2NsYXNzL3JpY2UnXG4gICAgICB9KVxuICAgIH0sXG4gICAgcGFnZTQoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL2NsYXNzL2JlYW5zJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIHBhZ2U1KCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9jbGFzcy9zYXVjZSdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBwYWdlNigpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vY2xhc3MvaG90UG90J1xuICAgICAgfSlcbiAgICB9LFxuICAgIHBhZ2U3KCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9jbGFzcy9zbmFja3MnXG4gICAgICB9KVxuICAgIH0sXG4gICAgcGFnZTgoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL2NsYXNzL3VzZSdcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIG9uU2hvdygpIHtcbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgLy8gc2VsZi5jb21tb2RpdHkgPSBjb21tb2RpdHlcbiAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMS9nZXQnLFxuICAgICAgbWV0aG9kczogJ1BPU1QnLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhLCAyKVxuICAgICAgICBzZWxmLmNvbW1vZGl0eSA9IHJlcy5kYXRhXG4gICAgICB9XG4gICAgfSlcbiAgICBzZWxmLmNvbW1vZGl0eSA9IGNvbW1vZGl0eVxuICAgIGNvbnNvbGUubG9nKHNlbGYuY29tbW9kaXR5LCAyMylcbiAgfVxufVxuIl19
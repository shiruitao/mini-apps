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

// import commodity from '../commodity/commodity.js'
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
      imgUrls: ['../images/Yosemite.jpg', '../images/Yosemite 2.jpg'],
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
      console.log(self.commodity, 23);
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/home'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInBob3RvcG9zdGVyIiwiaW5kaWNhdG9yRG90cyIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJkdXJhdGlvbiIsImluZGljYXRvckFjdGl2ZUNvbG9yIiwiaW1hZ2UiLCJ0aXRsZSIsInByaWNlIiwic2VsZWN0ZWQiLCJudW0iLCJpY29uIiwic2FsdCIsImVkaWJsZU9pbCIsInJpY2UiLCJiZWFucyIsInNhdWNlIiwiaG90UG90Iiwic25hY2tzIiwidXNlIiwiaW1nVXJscyIsImNvbW1vZGl0eSIsIm1ldGhvZHMiLCJnb29kcyIsImUiLCJzZWxmIiwiaW5kZXgiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIm1vZHVsZSIsImV4cG9ydHMiLCJjb25zb2xlIiwibG9nIiwiY2hhbmdlSW5kaWNhdG9yRG90cyIsInNldERhdGEiLCJjaGFuZ2VBdXRvcGxheSIsImludGVydmFsQ2hhbmdlIiwiZGV0YWlsIiwidmFsdWUiLCJkdXJhdGlvbkNoYW5nZSIsImZvcm1TdWJtaXQiLCJwYWdlMSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJwYWdlMiIsInBhZ2UzIiwicGFnZTQiLCJwYWdlNSIsInBhZ2U2IiwicGFnZTciLCJwYWdlOCIsInJlcXVlc3QiLCJzdWNjZXNzIiwicmVzIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUNBO0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsbUJBQWEsc0JBRFI7QUFFTEMscUJBQWUsSUFGVjtBQUdMQyxnQkFBVSxJQUhMO0FBSUxDLGdCQUFVLElBSkw7QUFLTEMsZ0JBQVUsR0FMTDtBQU1MQyw0QkFBc0IsU0FOakI7QUFPTEMsYUFBTyxFQVBGO0FBUUxDLGFBQU8sRUFSRjtBQVNMQyxh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QUFHRCxPQTdFTztBQThFUk8sV0E5RVEsbUJBOEVBO0FBQ04sdUJBQUtSLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0Q7QUFsRk8sSzs7Ozs7NkJBb0ZEO0FBQ1AsVUFBSWxCLE9BQU8sSUFBWDtBQUNBO0FBQ0EscUJBQUswQixPQUFMLENBQWE7QUFDWFIsYUFBSyxzQkFETTtBQUVYckIsaUJBQVMsTUFGRTtBQUdYOEIsaUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQnRCLGtCQUFRQyxHQUFSLENBQVlxQixJQUFJdEQsSUFBaEIsRUFBc0IsQ0FBdEI7QUFDQTBCLGVBQUtKLFNBQUwsR0FBaUJnQyxJQUFJdEQsSUFBckI7QUFDRDtBQU5VLE9BQWI7QUFRQWdDLGNBQVFDLEdBQVIsQ0FBWVAsS0FBS0osU0FBakIsRUFBNEIsRUFBNUI7QUFDRDs7OztFQWhJZ0MsZUFBS2lDLEk7O2tCQUFuQjFELEsiLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbi8vIGltcG9ydCBjb21tb2RpdHkgZnJvbSAnLi4vY29tbW9kaXR5L2NvbW1vZGl0eS5qcydcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfotoXluIInXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBwaG90b3Bvc3RlcjogJy4uL2ltYWdlcy9wb3N0ZXIuanBnJyxcbiAgICBpbmRpY2F0b3JEb3RzOiB0cnVlLFxuICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgIGludGVydmFsOiA0MDAwLFxuICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgaW5kaWNhdG9yQWN0aXZlQ29sb3I6ICcjZTg4ODRkJyxcbiAgICBpbWFnZTogJycsXG4gICAgdGl0bGU6ICcnLFxuICAgIHByaWNlOiAnJyxcbiAgICBzZWxlY3RlZDogJycsXG4gICAgbnVtOiAxLFxuICAgIGljb246IHtcbiAgICAgIHNhbHQ6ICcuLi9pbWFnZS9zYWx0LnBuZycsXG4gICAgICBlZGlibGVPaWw6ICcuLi9pbWFnZS9lZGlibGVPaWwucG5nJyxcbiAgICAgIHJpY2U6ICcuLi9pbWFnZS9yaWNlLnBuZycsXG4gICAgICBiZWFuczogJy4uL2ltYWdlL2JlYW5zLnBuZycsXG4gICAgICBzYXVjZTogJy4uL2ltYWdlL3NhdWNlLnBuZycsXG4gICAgICBob3RQb3Q6ICcuLi9pbWFnZS9ob3RQb3QucG5nJyxcbiAgICAgIHNuYWNrczogJy4uL2ltYWdlL3NuYWNrcy5wbmcnLFxuICAgICAgdXNlOiAnLi4vaW1hZ2UvdXNlLnBuZydcbiAgICB9LFxuICAgIGltZ1VybHM6IFtcbiAgICAgICcuLi9pbWFnZXMvWW9zZW1pdGUuanBnJyxcbiAgICAgICcuLi9pbWFnZXMvWW9zZW1pdGUgMi5qcGcnXG4gICAgXSxcbiAgICBjb21tb2RpdHk6IFtdXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBnb29kcyhlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIC8vIGxldCBpdGVtID0gc2VsZi5jb21tb2RpdHlbZS5jdXJyZW50VGFyZ2V0LmlkXVxuICAgICAgY29uc3QgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleFxuICAgICAgbGV0IGNvbW1vZGl0eSA9IHNlbGYuZGF0YS5jb21tb2RpdHlcbiAgICAgIGxldCBpbWFnZSA9IGNvbW1vZGl0eVtpbmRleF0uaW1hZ2VcbiAgICAgIGxldCB0aXRsZSA9IGNvbW1vZGl0eVtpbmRleF0udGl0bGVcbiAgICAgIGxldCBwcmljZSA9IGNvbW1vZGl0eVtpbmRleF0ucHJpY2VcbiAgICAgIGxldCBzZWxlY3RlZCA9IGNvbW1vZGl0eVtpbmRleF0uc2VsZWN0ZWRcbiAgICAgIC8vIHNlbGYuaW1hZ2UgPSBpbWFnZVxuICAgICAgLy8gc2VsZi50aXRsZSA9IHRpdGxlXG4gICAgICAvLyBzZWxmLnByaWNlID0gcHJpY2VcbiAgICAgIC8vIHNlbGYuc2VsZWN0ZWQgPSBzZWxlY3RlZFxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSB7IGltYWdlLCB0aXRsZSwgcHJpY2UsIHNlbGVjdGVkIH1cbiAgICAgIGNvbnNvbGUubG9nKCfliqDlhaXotK3nianovaYnKVxuICAgICAgLy8gd2VweS5zd2l0Y2hUYWIoe1xuICAgICAgLy8gICB1cmw6IGAuL3Nob3A/aW1hZ2U9JHtzZWxmLmltYWdlfSZ0aXRsZT0ke3NlbGYudGl0bGV9JnByaWNlPSR7c2VsZi5wcmljZX0mbnVtPSR7c2VsZi5udW19JnNlbGVjdGVkPSR7c2VsZi5zZWxlY3RlZH1gXG4gICAgICAvLyB9KVxuICAgIH0sXG4gICAgY2hhbmdlSW5kaWNhdG9yRG90czogZnVuY3Rpb24oZSkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgaW5kaWNhdG9yRG90czogIXRoaXMuZGF0YS5pbmRpY2F0b3JEb3RzXG4gICAgICB9KVxuICAgIH0sXG4gICAgY2hhbmdlQXV0b3BsYXk6IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGF1dG9wbGF5OiAhdGhpcy5kYXRhLmF1dG9wbGF5XG4gICAgICB9KVxuICAgIH0sXG4gICAgaW50ZXJ2YWxDaGFuZ2U6IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGludGVydmFsOiBlLmRldGFpbC52YWx1ZVxuICAgICAgfSlcbiAgICB9LFxuICAgIGR1cmF0aW9uQ2hhbmdlOiBmdW5jdGlvbihlKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBkdXJhdGlvbjogZS5kZXRhaWwudmFsdWVcbiAgICAgIH0pXG4gICAgfSxcbiAgICBmb3JtU3VibWl0OiBmdW5jdGlvbihlKSB7XG4gICAgICBjb25zb2xlLmxvZygnZm9ybeWPkeeUn+S6hnN1Ym1pdOS6i+S7tu+8jOaQuuW4puaVsOaNruS4uu+8micsIGUuZGV0YWlsLnZhbHVlKVxuICAgIH0sXG4gICAgcGFnZTEoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL2NsYXNzL3NhbHQnXG4gICAgICB9KVxuICAgIH0sXG4gICAgcGFnZTIoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL2NsYXNzL2VkaWJsZU9pbCdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBwYWdlMygpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vY2xhc3MvcmljZSdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBwYWdlNCgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vY2xhc3MvYmVhbnMnXG4gICAgICB9KVxuICAgIH0sXG4gICAgcGFnZTUoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL2NsYXNzL3NhdWNlJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIHBhZ2U2KCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9jbGFzcy9ob3RQb3QnXG4gICAgICB9KVxuICAgIH0sXG4gICAgcGFnZTcoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL2NsYXNzL3NuYWNrcydcbiAgICAgIH0pXG4gICAgfSxcbiAgICBwYWdlOCgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vY2xhc3MvdXNlJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIC8vIHNlbGYuY29tbW9kaXR5ID0gY29tbW9kaXR5XG4gICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjEvZ2V0JyxcbiAgICAgIG1ldGhvZHM6ICdQT1NUJyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSwgMilcbiAgICAgICAgc2VsZi5jb21tb2RpdHkgPSByZXMuZGF0YVxuICAgICAgfVxuICAgIH0pXG4gICAgY29uc29sZS5sb2coc2VsZi5jb21tb2RpdHksIDIzKVxuICB9XG59XG4iXX0=
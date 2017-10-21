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
        var index = e.currentTarget.dataset.index;
        var commodity = self.commodity[index];
        console.log(commodity);
        try {
          _wepy2.default.setStorageSync('commodity', commodity);
        } catch (e) {}
        console.log('加入购物车');
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
          self.commodity = res.data;
        }
      });
      self.commodity = _commodity2.default;
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/home'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInBob3RvcG9zdGVyIiwiaW5kaWNhdG9yRG90cyIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJkdXJhdGlvbiIsImluZGljYXRvckFjdGl2ZUNvbG9yIiwiaW1hZ2UiLCJ0aXRsZSIsInByaWNlIiwic2VsZWN0ZWQiLCJudW0iLCJpY29uIiwic2FsdCIsImVkaWJsZU9pbCIsInJpY2UiLCJiZWFucyIsInNhdWNlIiwiaG90UG90Iiwic25hY2tzIiwidXNlIiwiaW1nVXJscyIsImNvbW1vZGl0eSIsIm1ldGhvZHMiLCJnb29kcyIsImUiLCJzZWxmIiwiaW5kZXgiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdG9yYWdlU3luYyIsImNoYW5nZUluZGljYXRvckRvdHMiLCJzZXREYXRhIiwiY2hhbmdlQXV0b3BsYXkiLCJpbnRlcnZhbENoYW5nZSIsImRldGFpbCIsInZhbHVlIiwiZHVyYXRpb25DaGFuZ2UiLCJmb3JtU3VibWl0IiwicGFnZTEiLCJuYXZpZ2F0ZVRvIiwidXJsIiwicGFnZTIiLCJwYWdlMyIsInBhZ2U0IiwicGFnZTUiLCJwYWdlNiIsInBhZ2U3IiwicGFnZTgiLCJyZXF1ZXN0Iiwic3VjY2VzcyIsInJlcyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLG1CQUFhLHNCQURSO0FBRUxDLHFCQUFlLElBRlY7QUFHTEMsZ0JBQVUsSUFITDtBQUlMQyxnQkFBVSxJQUpMO0FBS0xDLGdCQUFVLEdBTEw7QUFNTEMsNEJBQXNCLFNBTmpCO0FBT0xDLGFBQU8sRUFQRjtBQVFMQyxhQUFPLEVBUkY7QUFTTEMs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QUssc0JBRE07QUFFWHBCLGlCQUFTLE1BRkU7QUFHWDZCLGlCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckIzQixlQUFLSixTQUFMLEdBQWlCK0IsSUFBSXJELElBQXJCO0FBQ0Q7QUFMVSxPQUFiO0FBT0EwQixXQUFLSixTQUFMO0FBQ0Q7Ozs7RUF6SGdDLGVBQUtnQyxJOztrQkFBbkJ6RCxLIiwiZmlsZSI6ImhvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgY29tbW9kaXR5IGZyb20gJy4uL2NvbW1vZGl0eS9jb21tb2RpdHkuanMnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6LaF5biCJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgcGhvdG9wb3N0ZXI6ICcuLi9pbWFnZXMvcG9zdGVyLmpwZycsXG4gICAgaW5kaWNhdG9yRG90czogdHJ1ZSxcbiAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICBpbnRlcnZhbDogNDAwMCxcbiAgICBkdXJhdGlvbjogNTAwLFxuICAgIGluZGljYXRvckFjdGl2ZUNvbG9yOiAnI2U4ODg0ZCcsXG4gICAgaW1hZ2U6ICcnLFxuICAgIHRpdGxlOiAnJyxcbiAgICBwcmljZTogJycsXG4gICAgc2VsZWN0ZWQ6ICcnLFxuICAgIG51bTogMSxcbiAgICBpY29uOiB7XG4gICAgICBzYWx0OiAnLi4vaW1hZ2Uvc2FsdC5wbmcnLFxuICAgICAgZWRpYmxlT2lsOiAnLi4vaW1hZ2UvZWRpYmxlT2lsLnBuZycsXG4gICAgICByaWNlOiAnLi4vaW1hZ2UvcmljZS5wbmcnLFxuICAgICAgYmVhbnM6ICcuLi9pbWFnZS9iZWFucy5wbmcnLFxuICAgICAgc2F1Y2U6ICcuLi9pbWFnZS9zYXVjZS5wbmcnLFxuICAgICAgaG90UG90OiAnLi4vaW1hZ2UvaG90UG90LnBuZycsXG4gICAgICBzbmFja3M6ICcuLi9pbWFnZS9zbmFja3MucG5nJyxcbiAgICAgIHVzZTogJy4uL2ltYWdlL3VzZS5wbmcnXG4gICAgfSxcbiAgICBpbWdVcmxzOiBbXG4gICAgICAnaHR0cHM6Ly90aW1nc2EuYmFpZHUuY29tL3RpbWc/aW1hZ2UmcXVhbGl0eT04MCZzaXplPWI5OTk5XzEwMDAwJnNlYz0xNTA4NDc0NzcyMDkzJmRpPTJhMDk0YTdlZjNiOTE1ODAzNmFkYzgyYWFlMGYxOGM2JmltZ3R5cGU9MCZzcmM9aHR0cCUzQSUyRiUyRmltZy5wY29ubGluZS5jb20uY24lMkZpbWFnZXMlMkZ1cGxvYWQlMkZ1cGMlMkZ0eCUyRmdhbWVwaG90b2xpYiUyRjE0MTElMkYwNCUyRmMwJTJGNDA1MzMyMTVfMTQxNTA2OTc4Nzg5Ny5qcGcnLFxuICAgICAgJ2h0dHBzOi8vdGltZ3NhLmJhaWR1LmNvbS90aW1nP2ltYWdlJnF1YWxpdHk9ODAmc2l6ZT1iOTk5OV8xMDAwMCZzZWM9MTUwOTA2OTUyNCZkaT00ZTdiNjQ5NjgwNWY2YzVjYzRjZmMyNmZjMTM5NjI0MyZpbWd0eXBlPWpwZyZlcj0xJnNyYz1odHRwJTNBJTJGJTJGaW1hZ2VzLmFsaTIxMy5uZXQlMkZwaWNmaWxlJTJGcGljJTJGMjAxMC0wMS0wOCUyRjE2MjY0OTg1MzgzLmpwZydcbiAgICBdLFxuICAgIGNvbW1vZGl0eTogW11cbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGdvb2RzKGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgY29uc3QgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleFxuICAgICAgbGV0IGNvbW1vZGl0eSA9IHNlbGYuY29tbW9kaXR5W2luZGV4XVxuICAgICAgY29uc29sZS5sb2coY29tbW9kaXR5KVxuICAgICAgdHJ5IHtcbiAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnY29tbW9kaXR5JywgY29tbW9kaXR5KVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coJ+WKoOWFpei0reeJqei9picpXG4gICAgfSxcbiAgICBjaGFuZ2VJbmRpY2F0b3JEb3RzOiBmdW5jdGlvbihlKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBpbmRpY2F0b3JEb3RzOiAhdGhpcy5kYXRhLmluZGljYXRvckRvdHNcbiAgICAgIH0pXG4gICAgfSxcbiAgICBjaGFuZ2VBdXRvcGxheTogZnVuY3Rpb24oZSkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgYXV0b3BsYXk6ICF0aGlzLmRhdGEuYXV0b3BsYXlcbiAgICAgIH0pXG4gICAgfSxcbiAgICBpbnRlcnZhbENoYW5nZTogZnVuY3Rpb24oZSkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgaW50ZXJ2YWw6IGUuZGV0YWlsLnZhbHVlXG4gICAgICB9KVxuICAgIH0sXG4gICAgZHVyYXRpb25DaGFuZ2U6IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGR1cmF0aW9uOiBlLmRldGFpbC52YWx1ZVxuICAgICAgfSlcbiAgICB9LFxuICAgIGZvcm1TdWJtaXQ6IGZ1bmN0aW9uKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdmb3Jt5Y+R55Sf5LqGc3VibWl05LqL5Lu277yM5pC65bim5pWw5o2u5Li677yaJywgZS5kZXRhaWwudmFsdWUpXG4gICAgfSxcbiAgICBwYWdlMSgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vY2xhc3Mvc2FsdCdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBwYWdlMigpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vY2xhc3MvZWRpYmxlT2lsJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIHBhZ2UzKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9jbGFzcy9yaWNlJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIHBhZ2U0KCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9jbGFzcy9iZWFucydcbiAgICAgIH0pXG4gICAgfSxcbiAgICBwYWdlNSgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vY2xhc3Mvc2F1Y2UnXG4gICAgICB9KVxuICAgIH0sXG4gICAgcGFnZTYoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL2NsYXNzL2hvdFBvdCdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBwYWdlNygpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vY2xhc3Mvc25hY2tzJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIHBhZ2U4KCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9jbGFzcy91c2UnXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBvblNob3coKSB7XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIC8vIHNlbGYuY29tbW9kaXR5ID0gY29tbW9kaXR5XG4gICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjEvZ2V0JyxcbiAgICAgIG1ldGhvZHM6ICdQT1NUJyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBzZWxmLmNvbW1vZGl0eSA9IHJlcy5kYXRhXG4gICAgICB9XG4gICAgfSlcbiAgICBzZWxmLmNvbW1vZGl0eSA9IGNvbW1vZGl0eVxuICB9XG59XG4iXX0=
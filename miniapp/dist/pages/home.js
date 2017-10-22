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
      imgUrls: ['https://img11.360buyimg.com/babel/jfs/t10276/362/1287822046/93410/f75a7664/59df518aN37f8489b.jpg', 'https://img.alicdn.com/tfs/TB16j9ph2BNTKJjy0FdXXcPpVXa-520-280.jpg_q90', 'https://img.alicdn.com/simba/img/TB1Sn01X7T85uJjSZFhSuwPEVXa.jpg'],
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
        _wepy2.default.showToast({
          title: '加入成功',
          icon: 'success',
          duration: 1000
        });
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInBob3RvcG9zdGVyIiwiaW5kaWNhdG9yRG90cyIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJkdXJhdGlvbiIsImluZGljYXRvckFjdGl2ZUNvbG9yIiwiaW1hZ2UiLCJ0aXRsZSIsInByaWNlIiwic2VsZWN0ZWQiLCJudW0iLCJpY29uIiwic2FsdCIsImVkaWJsZU9pbCIsInJpY2UiLCJiZWFucyIsInNhdWNlIiwiaG90UG90Iiwic25hY2tzIiwidXNlIiwiaW1nVXJscyIsImNvbW1vZGl0eSIsIm1ldGhvZHMiLCJnb29kcyIsImUiLCJzZWxmIiwiaW5kZXgiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdG9yYWdlU3luYyIsInNob3dUb2FzdCIsImNoYW5nZUluZGljYXRvckRvdHMiLCJzZXREYXRhIiwiY2hhbmdlQXV0b3BsYXkiLCJpbnRlcnZhbENoYW5nZSIsImRldGFpbCIsInZhbHVlIiwiZHVyYXRpb25DaGFuZ2UiLCJmb3JtU3VibWl0IiwicGFnZTEiLCJuYXZpZ2F0ZVRvIiwidXJsIiwicGFnZTIiLCJwYWdlMyIsInBhZ2U0IiwicGFnZTUiLCJwYWdlNiIsInBhZ2U3IiwicGFnZTgiLCJyZXF1ZXN0Iiwic3VjY2VzcyIsInJlcyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLG1CQUFhLHNCQURSO0FBRUxDLHFCQUFlLElBRlY7QUFHTEMsZ0JBQVUsSUFITDtBQUlMQyxnQkFBVSxJQUpMO0FBS0xDLGdCQUFVLEdBTEw7QUFNTEMsNEJBQXNCLFNBTmpCO0FBT0xDLGFBQU8sRUFQRjtBQVFMQyxhQUFP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QkFnRkQsQ0FDUjs7OzZCQUNRO0FBQ1AsVUFBSWxCLE9BQU8sSUFBWDtBQUNBO0FBQ0EscUJBQUswQixPQUFMLENBQWE7QUFDWFIsYUFBSyxzQkFETTtBQUVYckIsaUJBQVMsTUFGRTtBQUdYOEIsaUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQjVCLGVBQUtKLFNBQUwsR0FBaUJnQyxJQUFJdEQsSUFBckI7QUFDRDtBQUxVLE9BQWI7QUFPQTBCLFdBQUtKLFNBQUw7QUFDRDs7OztFQTlIZ0MsZUFBS2lDLEk7O2tCQUFuQjFELEsiLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBjb21tb2RpdHkgZnJvbSAnLi4vY29tbW9kaXR5L2NvbW1vZGl0eS5qcydcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfotoXluIInXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBwaG90b3Bvc3RlcjogJy4uL2ltYWdlcy9wb3N0ZXIuanBnJyxcbiAgICBpbmRpY2F0b3JEb3RzOiB0cnVlLFxuICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgIGludGVydmFsOiA0MDAwLFxuICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgaW5kaWNhdG9yQWN0aXZlQ29sb3I6ICcjZTg4ODRkJyxcbiAgICBpbWFnZTogJycsXG4gICAgdGl0bGU6ICcnLFxuICAgIHByaWNlOiAnJyxcbiAgICBzZWxlY3RlZDogJycsXG4gICAgbnVtOiAxLFxuICAgIGljb246IHtcbiAgICAgIHNhbHQ6ICcuLi9pbWFnZS9zYWx0LnBuZycsXG4gICAgICBlZGlibGVPaWw6ICcuLi9pbWFnZS9lZGlibGVPaWwucG5nJyxcbiAgICAgIHJpY2U6ICcuLi9pbWFnZS9yaWNlLnBuZycsXG4gICAgICBiZWFuczogJy4uL2ltYWdlL2JlYW5zLnBuZycsXG4gICAgICBzYXVjZTogJy4uL2ltYWdlL3NhdWNlLnBuZycsXG4gICAgICBob3RQb3Q6ICcuLi9pbWFnZS9ob3RQb3QucG5nJyxcbiAgICAgIHNuYWNrczogJy4uL2ltYWdlL3NuYWNrcy5wbmcnLFxuICAgICAgdXNlOiAnLi4vaW1hZ2UvdXNlLnBuZydcbiAgICB9LFxuICAgIGltZ1VybHM6IFtcbiAgICAgICdodHRwczovL2ltZzExLjM2MGJ1eWltZy5jb20vYmFiZWwvamZzL3QxMDI3Ni8zNjIvMTI4NzgyMjA0Ni85MzQxMC9mNzVhNzY2NC81OWRmNTE4YU4zN2Y4NDg5Yi5qcGcnLFxuICAgICAgJ2h0dHBzOi8vaW1nLmFsaWNkbi5jb20vdGZzL1RCMTZqOXBoMkJOVEtKankwRmRYWGNQcFZYYS01MjAtMjgwLmpwZ19xOTAnLFxuICAgICAgJ2h0dHBzOi8vaW1nLmFsaWNkbi5jb20vc2ltYmEvaW1nL1RCMVNuMDFYN1Q4NXVKalNaRmhTdXdQRVZYYS5qcGcnXG4gICAgXSxcbiAgICBjb21tb2RpdHk6IFtdXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBnb29kcyhlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGNvbnN0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICAgIGxldCBjb21tb2RpdHkgPSBzZWxmLmNvbW1vZGl0eVtpbmRleF1cbiAgICAgIGNvbnNvbGUubG9nKGNvbW1vZGl0eSlcbiAgICAgIHRyeSB7XG4gICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ2NvbW1vZGl0eScsIGNvbW1vZGl0eSlcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIH1cbiAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgdGl0bGU6ICfliqDlhaXmiJDlip8nLFxuICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgIGR1cmF0aW9uOiAxMDAwXG4gICAgICB9KVxuICAgIH0sXG4gICAgY2hhbmdlSW5kaWNhdG9yRG90czogZnVuY3Rpb24oZSkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgaW5kaWNhdG9yRG90czogIXRoaXMuZGF0YS5pbmRpY2F0b3JEb3RzXG4gICAgICB9KVxuICAgIH0sXG4gICAgY2hhbmdlQXV0b3BsYXk6IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGF1dG9wbGF5OiAhdGhpcy5kYXRhLmF1dG9wbGF5XG4gICAgICB9KVxuICAgIH0sXG4gICAgaW50ZXJ2YWxDaGFuZ2U6IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGludGVydmFsOiBlLmRldGFpbC52YWx1ZVxuICAgICAgfSlcbiAgICB9LFxuICAgIGR1cmF0aW9uQ2hhbmdlOiBmdW5jdGlvbihlKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBkdXJhdGlvbjogZS5kZXRhaWwudmFsdWVcbiAgICAgIH0pXG4gICAgfSxcbiAgICBmb3JtU3VibWl0OiBmdW5jdGlvbihlKSB7XG4gICAgICBjb25zb2xlLmxvZygnZm9ybeWPkeeUn+S6hnN1Ym1pdOS6i+S7tu+8jOaQuuW4puaVsOaNruS4uu+8micsIGUuZGV0YWlsLnZhbHVlKVxuICAgIH0sXG4gICAgcGFnZTEoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL2NsYXNzL3NhbHQnXG4gICAgICB9KVxuICAgIH0sXG4gICAgcGFnZTIoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL2NsYXNzL2VkaWJsZU9pbCdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBwYWdlMygpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vY2xhc3MvcmljZSdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBwYWdlNCgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vY2xhc3MvYmVhbnMnXG4gICAgICB9KVxuICAgIH0sXG4gICAgcGFnZTUoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL2NsYXNzL3NhdWNlJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIHBhZ2U2KCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9jbGFzcy9ob3RQb3QnXG4gICAgICB9KVxuICAgIH0sXG4gICAgcGFnZTcoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL2NsYXNzL3NuYWNrcydcbiAgICAgIH0pXG4gICAgfSxcbiAgICBwYWdlOCgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vY2xhc3MvdXNlJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgb25TaG93KCkge1xuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAvLyBzZWxmLmNvbW1vZGl0eSA9IGNvbW1vZGl0eVxuICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xL2dldCcsXG4gICAgICBtZXRob2RzOiAnUE9TVCcsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgc2VsZi5jb21tb2RpdHkgPSByZXMuZGF0YVxuICAgICAgfVxuICAgIH0pXG4gICAgc2VsZi5jb21tb2RpdHkgPSBjb21tb2RpdHlcbiAgfVxufVxuIl19
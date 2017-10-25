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
      interval: 3000,
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInBob3RvcG9zdGVyIiwiaW5kaWNhdG9yRG90cyIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJkdXJhdGlvbiIsImluZGljYXRvckFjdGl2ZUNvbG9yIiwiaW1hZ2UiLCJ0aXRsZSIsInByaWNlIiwic2VsZWN0ZWQiLCJudW0iLCJpY29uIiwic2FsdCIsImVkaWJsZU9pbCIsInJpY2UiLCJiZWFucyIsInNhdWNlIiwiaG90UG90Iiwic25hY2tzIiwidXNlIiwiaW1nVXJscyIsImNvbW1vZGl0eSIsIm1ldGhvZHMiLCJnb29kcyIsImUiLCJzZWxmIiwiaW5kZXgiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdG9yYWdlU3luYyIsInNob3dUb2FzdCIsImNoYW5nZUluZGljYXRvckRvdHMiLCJzZXREYXRhIiwiY2hhbmdlQXV0b3BsYXkiLCJpbnRlcnZhbENoYW5nZSIsImRldGFpbCIsInZhbHVlIiwiZHVyYXRpb25DaGFuZ2UiLCJmb3JtU3VibWl0IiwicGFnZTEiLCJuYXZpZ2F0ZVRvIiwidXJsIiwicGFnZTIiLCJwYWdlMyIsInBhZ2U0IiwicGFnZTUiLCJwYWdlNiIsInBhZ2U3IiwicGFnZTgiLCJyZXF1ZXN0Iiwic3VjY2VzcyIsInJlcyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLG1CQUFhLHNCQURSO0FBRUxDLHFCQUFlLElBRlY7QUFHTEMsZ0JBQVUsSUFITDtBQUlMQyxnQkFBVSxJQUpMO0FBS0xDLGdCQUFVLEdBTEw7QUFNTEMsNEJBQXNCLFNBTmpCO0FBT0xDLGFBQU8sRUFQRjtBQVFMQyxhQUFPLEVBUkY7QUFTTEMsYUFBTyxFQVRGO0FBVUxDLGdCQUFVLEVBVkw7QUFXTEMsV0FBSyxDQVhBO0FBWUxDLFlBQU07QUFDSkMsY0FBTSxtQkFERjtBQUVKQyxtQkFBVyx3QkFGUDtBQUdKQyxjQUFNLG1CQUhGO0FBSUpDLGVBQU8sb0JBSkg7QUFLSkMsZUFBTyxvQkFMSDtBQU1KQyxnQkFBUSxxQkFOSjtBQU9KQyxnQkFBUSxxQkFQSjtBQVFKQyxhQUFLO0FBUkQsT0FaRDtBQXNCTEMsZUFBUyxDQUNQLGtHQURPLEVBRVAsd0VBRk8sRUFHUCxrRUFITyxDQXRCSjtBQTJCTEMsaUJBQVc7QUEzQk4sSyxRQTZCUEMsTyxHQUFVO0FBQ1JDLFdBRFEsaUJBQ0ZDLENBREUsRUFDQztBQUNQLFlBQUlDLE9BQU8sSUFBWDtBQUNBLFlBQU1DLFFBQVFGLEVBQUVHLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCRixLQUF0QztBQUNBLFlBQUlMLFlBQVlJLEtBQUtKLFNBQUwsQ0FBZUssS0FBZixDQUFoQjtBQUNBRyxnQkFBUUMsR0FBUixDQUFZVCxTQUFaO0FBQ0EsWUFBSTtBQUNGLHlCQUFLVSxjQUFMLENBQW9CLFdBQXBCLEVBQWlDVixTQUFqQztBQUNELFNBRkQsQ0FFRSxPQUFPRyxDQUFQLEVBQVUsQ0FDWDtBQUNELHVCQUFLUSxTQUFMLENBQWU7QUFDYnpCLGlCQUFPLE1BRE07QUFFYkksZ0JBQU0sU0FGTztBQUdiUCxvQkFBVTtBQUhHLFNBQWY7QUFLRCxPQWZPOztBQWdCUjZCLDJCQUFxQiw2QkFBU1QsQ0FBVCxFQUFZO0FBQy9CLGFBQUtVLE9BQUwsQ0FBYTtBQUNYakMseUJBQWUsQ0FBQyxLQUFLRixJQUFMLENBQVVFO0FBRGYsU0FBYjtBQUdELE9BcEJPO0FBcUJSa0Msc0JBQWdCLHdCQUFTWCxDQUFULEVBQVk7QUFDMUIsYUFBS1UsT0FBTCxDQUFhO0FBQ1hoQyxvQkFBVSxDQUFDLEtBQUtILElBQUwsQ0FBVUc7QUFEVixTQUFiO0FBR0QsT0F6Qk87QUEwQlJrQyxzQkFBZ0Isd0JBQVNaLENBQVQsRUFBWTtBQUMxQixhQUFLVSxPQUFMLENBQWE7QUFDWC9CLG9CQUFVcUIsRUFBRWEsTUFBRixDQUFTQztBQURSLFNBQWI7QUFHRCxPQTlCTztBQStCUkMsc0JBQWdCLHdCQUFTZixDQUFULEVBQVk7QUFDMUIsYUFBS1UsT0FBTCxDQUFhO0FBQ1g5QixvQkFBVW9CLEVBQUVhLE1BQUYsQ0FBU0M7QUFEUixTQUFiO0FBR0QsT0FuQ087QUFvQ1JFLGtCQUFZLG9CQUFTaEIsQ0FBVCxFQUFZO0FBQ3RCSyxnQkFBUUMsR0FBUixDQUFZLHdCQUFaLEVBQXNDTixFQUFFYSxNQUFGLENBQVNDLEtBQS9DO0FBQ0QsT0F0Q087QUF1Q1JHLFdBdkNRLG1CQXVDQTtBQUNOLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BM0NPO0FBNENSQyxXQTVDUSxtQkE0Q0E7QUFDTix1QkFBS0YsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQWhETztBQWlEUkUsV0FqRFEsbUJBaURBO0FBQ04sdUJBQUtILFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0FyRE87QUFzRFJHLFdBdERRLG1CQXNEQTtBQUNOLHVCQUFLSixVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BMURPO0FBMkRSSSxXQTNEUSxtQkEyREE7QUFDTix1QkFBS0wsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQS9ETztBQWdFUkssV0FoRVEsbUJBZ0VBO0FBQ04sdUJBQUtOLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0FwRU87QUFxRVJNLFdBckVRLG1CQXFFQTtBQUNOLHVCQUFLUCxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BekVPO0FBMEVSTyxXQTFFUSxtQkEwRUE7QUFDTix1QkFBS1IsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRDtBQTlFTyxLOzs7Ozs2QkFnRkQsQ0FDUjs7OzZCQUNRO0FBQ1AsVUFBSWxCLE9BQU8sSUFBWDtBQUNBLHFCQUFLMEIsT0FBTCxDQUFhO0FBQ1hSLGFBQUssc0JBRE07QUFFWHJCLGlCQUFTLE1BRkU7QUFHWDhCLGlCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckI1QixlQUFLSixTQUFMLEdBQWlCZ0MsSUFBSXRELElBQXJCO0FBQ0Q7QUFMVSxPQUFiO0FBT0EwQixXQUFLSixTQUFMO0FBQ0Q7Ozs7RUE3SGdDLGVBQUtpQyxJOztrQkFBbkIxRCxLIiwiZmlsZSI6ImhvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgY29tbW9kaXR5IGZyb20gJy4uL2NvbW1vZGl0eS9jb21tb2RpdHkuanMnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6LaF5biCJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgcGhvdG9wb3N0ZXI6ICcuLi9pbWFnZXMvcG9zdGVyLmpwZycsXG4gICAgaW5kaWNhdG9yRG90czogdHJ1ZSxcbiAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICBpbnRlcnZhbDogMzAwMCxcbiAgICBkdXJhdGlvbjogNTAwLFxuICAgIGluZGljYXRvckFjdGl2ZUNvbG9yOiAnI2U4ODg0ZCcsXG4gICAgaW1hZ2U6ICcnLFxuICAgIHRpdGxlOiAnJyxcbiAgICBwcmljZTogJycsXG4gICAgc2VsZWN0ZWQ6ICcnLFxuICAgIG51bTogMSxcbiAgICBpY29uOiB7XG4gICAgICBzYWx0OiAnLi4vaW1hZ2Uvc2FsdC5wbmcnLFxuICAgICAgZWRpYmxlT2lsOiAnLi4vaW1hZ2UvZWRpYmxlT2lsLnBuZycsXG4gICAgICByaWNlOiAnLi4vaW1hZ2UvcmljZS5wbmcnLFxuICAgICAgYmVhbnM6ICcuLi9pbWFnZS9iZWFucy5wbmcnLFxuICAgICAgc2F1Y2U6ICcuLi9pbWFnZS9zYXVjZS5wbmcnLFxuICAgICAgaG90UG90OiAnLi4vaW1hZ2UvaG90UG90LnBuZycsXG4gICAgICBzbmFja3M6ICcuLi9pbWFnZS9zbmFja3MucG5nJyxcbiAgICAgIHVzZTogJy4uL2ltYWdlL3VzZS5wbmcnXG4gICAgfSxcbiAgICBpbWdVcmxzOiBbXG4gICAgICAnaHR0cHM6Ly9pbWcxMS4zNjBidXlpbWcuY29tL2JhYmVsL2pmcy90MTAyNzYvMzYyLzEyODc4MjIwNDYvOTM0MTAvZjc1YTc2NjQvNTlkZjUxOGFOMzdmODQ4OWIuanBnJyxcbiAgICAgICdodHRwczovL2ltZy5hbGljZG4uY29tL3Rmcy9UQjE2ajlwaDJCTlRLSmp5MEZkWFhjUHBWWGEtNTIwLTI4MC5qcGdfcTkwJyxcbiAgICAgICdodHRwczovL2ltZy5hbGljZG4uY29tL3NpbWJhL2ltZy9UQjFTbjAxWDdUODV1SmpTWkZoU3V3UEVWWGEuanBnJ1xuICAgIF0sXG4gICAgY29tbW9kaXR5OiBbXVxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgZ29vZHMoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBjb25zdCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XG4gICAgICBsZXQgY29tbW9kaXR5ID0gc2VsZi5jb21tb2RpdHlbaW5kZXhdXG4gICAgICBjb25zb2xlLmxvZyhjb21tb2RpdHkpXG4gICAgICB0cnkge1xuICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdjb21tb2RpdHknLCBjb21tb2RpdHkpXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICB9XG4gICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgIHRpdGxlOiAn5Yqg5YWl5oiQ5YqfJyxcbiAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICBkdXJhdGlvbjogMTAwMFxuICAgICAgfSlcbiAgICB9LFxuICAgIGNoYW5nZUluZGljYXRvckRvdHM6IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGluZGljYXRvckRvdHM6ICF0aGlzLmRhdGEuaW5kaWNhdG9yRG90c1xuICAgICAgfSlcbiAgICB9LFxuICAgIGNoYW5nZUF1dG9wbGF5OiBmdW5jdGlvbihlKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBhdXRvcGxheTogIXRoaXMuZGF0YS5hdXRvcGxheVxuICAgICAgfSlcbiAgICB9LFxuICAgIGludGVydmFsQ2hhbmdlOiBmdW5jdGlvbihlKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBpbnRlcnZhbDogZS5kZXRhaWwudmFsdWVcbiAgICAgIH0pXG4gICAgfSxcbiAgICBkdXJhdGlvbkNoYW5nZTogZnVuY3Rpb24oZSkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgZHVyYXRpb246IGUuZGV0YWlsLnZhbHVlXG4gICAgICB9KVxuICAgIH0sXG4gICAgZm9ybVN1Ym1pdDogZnVuY3Rpb24oZSkge1xuICAgICAgY29uc29sZS5sb2coJ2Zvcm3lj5HnlJ/kuoZzdWJtaXTkuovku7bvvIzmkLrluKbmlbDmja7kuLrvvJonLCBlLmRldGFpbC52YWx1ZSlcbiAgICB9LFxuICAgIHBhZ2UxKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9jbGFzcy9zYWx0J1xuICAgICAgfSlcbiAgICB9LFxuICAgIHBhZ2UyKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9jbGFzcy9lZGlibGVPaWwnXG4gICAgICB9KVxuICAgIH0sXG4gICAgcGFnZTMoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL2NsYXNzL3JpY2UnXG4gICAgICB9KVxuICAgIH0sXG4gICAgcGFnZTQoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL2NsYXNzL2JlYW5zJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIHBhZ2U1KCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9jbGFzcy9zYXVjZSdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBwYWdlNigpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vY2xhc3MvaG90UG90J1xuICAgICAgfSlcbiAgICB9LFxuICAgIHBhZ2U3KCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9jbGFzcy9zbmFja3MnXG4gICAgICB9KVxuICAgIH0sXG4gICAgcGFnZTgoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL2NsYXNzL3VzZSdcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIG9uU2hvdygpIHtcbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjEvZ2V0JyxcbiAgICAgIG1ldGhvZHM6ICdQT1NUJyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBzZWxmLmNvbW1vZGl0eSA9IHJlcy5kYXRhXG4gICAgICB9XG4gICAgfSlcbiAgICBzZWxmLmNvbW1vZGl0eSA9IGNvbW1vZGl0eVxuICB9XG59XG4iXX0=
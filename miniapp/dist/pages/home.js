'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


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
      navigationBarTitleText: '超市'
    }, _this.data = {
      photoposter: '../images/poster.jpg',
      indicatorDots: true,
      autoplay: true,
      interval: 4000,
      duration: 500,
      indicatorActiveColor: '#e8884d',
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
      imgUrls: ['../images/Yosemite.jpg', '../images/Yosemite 2.jpg', '../images/Yosemite 3.jpg', '../images/Yosemite 4.jpg']
    }, _this.methods = {
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
      formReset: function formReset() {
        console.log('form发生了reset事件');
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

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/home'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInBob3RvcG9zdGVyIiwiaW5kaWNhdG9yRG90cyIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJkdXJhdGlvbiIsImluZGljYXRvckFjdGl2ZUNvbG9yIiwiaWNvbiIsInNhbHQiLCJlZGlibGVPaWwiLCJyaWNlIiwiYmVhbnMiLCJzYXVjZSIsImhvdFBvdCIsInNuYWNrcyIsInVzZSIsImltZ1VybHMiLCJtZXRob2RzIiwiY2hhbmdlSW5kaWNhdG9yRG90cyIsImUiLCJzZXREYXRhIiwiY2hhbmdlQXV0b3BsYXkiLCJpbnRlcnZhbENoYW5nZSIsImRldGFpbCIsInZhbHVlIiwiZHVyYXRpb25DaGFuZ2UiLCJmb3JtU3VibWl0IiwiY29uc29sZSIsImxvZyIsImZvcm1SZXNldCIsInBhZ2UxIiwibmF2aWdhdGVUbyIsInVybCIsInBhZ2UyIiwicGFnZTMiLCJwYWdlNCIsInBhZ2U1IiwicGFnZTYiLCJwYWdlNyIsInBhZ2U4IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxtQkFBYSxzQkFEUjtBQUVMQyxxQkFBZSxJQUZWO0FBR0xDLGdCQUFVLElBSEw7QUFJTEMsZ0JBQVUsSUFKTDtBQUtMQyxnQkFBVSxHQUxMO0FBTUxDLDRCQUFzQixTQU5qQjtBQU9MQyxZQUFNO0FBQ0pDLGNBQU0sbUJBREY7QUFFSkMsbUJBQVcsd0JBRlA7QUFHSkMsY0FBTSxtQkFIRjtBQUlKQyxlQUFPLG9CQUpIO0FBS0pDLGVBQU8sb0JBTEg7QUFNSkMsZ0JBQVEscUJBTko7QUFPSkMsZ0JBQVEscUJBUEo7QUFRSkMsYUFBSztBQVJELE9BUEQ7QUFpQkxDLGVBQVMsQ0FDUCx3QkFETyxFQUVQLDBCQUZPLEVBR1AsMEJBSE8sRUFJUCwwQkFKTztBQWpCSixLLFFBd0JQQyxPLEdBQVU7QUFDUkMsMkJBQXFCLDZCQUFTQyxDQUFULEVBQVk7QUFDL0IsYUFBS0MsT0FBTCxDQUFhO0FBQ1hsQix5QkFBZSxDQUFDLEtBQUtGLElBQUwsQ0FBVUU7QUFEZixTQUFiO0FBR0QsT0FMTztBQU1SbUIsc0JBQWdCLHdCQUFTRixDQUFULEVBQVk7QUFDMUIsYUFBS0MsT0FBTCxDQUFhO0FBQ1hqQixvQkFBVSxDQUFDLEtBQUtILElBQUwsQ0FBVUc7QUFEVixTQUFiO0FBR0QsT0FWTztBQVdSbUIsc0JBQWdCLHdCQUFTSCxDQUFULEVBQVk7QUFDMUIsYUFBS0MsT0FBTCxDQUFhO0FBQ1hoQixvQkFBVWUsRUFBRUksTUFBRixDQUFTQztBQURSLFNBQWI7QUFHRCxPQWZPO0FBZ0JSQyxzQkFBZ0Isd0JBQVNOLENBQVQsRUFBWTtBQUMxQixhQUFLQyxPQUFMLENBQWE7QUFDWGYsb0JBQVVjLEVBQUVJLE1BQUYsQ0FBU0M7QUFEUixTQUFiO0FBR0QsT0FwQk87QUFxQlJFLGtCQUFZLG9CQUFTUCxDQUFULEVBQVk7QUFDdEJRLGdCQUFRQyxHQUFSLENBQVksd0JBQVosRUFBc0NULEVBQUVJLE1BQUYsQ0FBU0MsS0FBL0M7QUFDRCxPQXZCTztBQXdCUkssaUJBQVcscUJBQVc7QUFDcEJGLGdCQUFRQyxHQUFSLENBQVksZ0JBQVo7QUFDRCxPQTFCTztBQTJCUkUsV0EzQlEsbUJBMkJBO0FBQ04sdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0EvQk87QUFnQ1JDLFdBaENRLG1CQWdDQTtBQUNOLHVCQUFLRixVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BcENPO0FBcUNSRSxXQXJDUSxtQkFxQ0E7QUFDTix1QkFBS0gsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQXpDTztBQTBDUkcsV0ExQ1EsbUJBMENBO0FBQ04sdUJBQUtKLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0E5Q087QUErQ1JJLFdBL0NRLG1CQStDQTtBQUNOLHVCQUFLTCxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BbkRPO0FBb0RSSyxXQXBEUSxtQkFvREE7QUFDTix1QkFBS04sVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQXhETztBQXlEUk0sV0F6RFEsbUJBeURBO0FBQ04sdUJBQUtQLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0E3RE87QUE4RFJPLFdBOURRLG1CQThEQTtBQUNOLHVCQUFLUixVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdEO0FBbEVPLEs7Ozs7RUE1QnVCLGVBQUtRLEk7O2tCQUFuQjNDLEsiLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfotoXluIInXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBwaG90b3Bvc3RlcjogJy4uL2ltYWdlcy9wb3N0ZXIuanBnJyxcbiAgICBpbmRpY2F0b3JEb3RzOiB0cnVlLFxuICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgIGludGVydmFsOiA0MDAwLFxuICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgaW5kaWNhdG9yQWN0aXZlQ29sb3I6ICcjZTg4ODRkJyxcbiAgICBpY29uOiB7XG4gICAgICBzYWx0OiAnLi4vaW1hZ2Uvc2FsdC5wbmcnLFxuICAgICAgZWRpYmxlT2lsOiAnLi4vaW1hZ2UvZWRpYmxlT2lsLnBuZycsXG4gICAgICByaWNlOiAnLi4vaW1hZ2UvcmljZS5wbmcnLFxuICAgICAgYmVhbnM6ICcuLi9pbWFnZS9iZWFucy5wbmcnLFxuICAgICAgc2F1Y2U6ICcuLi9pbWFnZS9zYXVjZS5wbmcnLFxuICAgICAgaG90UG90OiAnLi4vaW1hZ2UvaG90UG90LnBuZycsXG4gICAgICBzbmFja3M6ICcuLi9pbWFnZS9zbmFja3MucG5nJyxcbiAgICAgIHVzZTogJy4uL2ltYWdlL3VzZS5wbmcnXG4gICAgfSxcbiAgICBpbWdVcmxzOiBbXG4gICAgICAnLi4vaW1hZ2VzL1lvc2VtaXRlLmpwZycsXG4gICAgICAnLi4vaW1hZ2VzL1lvc2VtaXRlIDIuanBnJyxcbiAgICAgICcuLi9pbWFnZXMvWW9zZW1pdGUgMy5qcGcnLFxuICAgICAgJy4uL2ltYWdlcy9Zb3NlbWl0ZSA0LmpwZydcbiAgICBdXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBjaGFuZ2VJbmRpY2F0b3JEb3RzOiBmdW5jdGlvbihlKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBpbmRpY2F0b3JEb3RzOiAhdGhpcy5kYXRhLmluZGljYXRvckRvdHNcbiAgICAgIH0pXG4gICAgfSxcbiAgICBjaGFuZ2VBdXRvcGxheTogZnVuY3Rpb24oZSkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgYXV0b3BsYXk6ICF0aGlzLmRhdGEuYXV0b3BsYXlcbiAgICAgIH0pXG4gICAgfSxcbiAgICBpbnRlcnZhbENoYW5nZTogZnVuY3Rpb24oZSkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgaW50ZXJ2YWw6IGUuZGV0YWlsLnZhbHVlXG4gICAgICB9KVxuICAgIH0sXG4gICAgZHVyYXRpb25DaGFuZ2U6IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGR1cmF0aW9uOiBlLmRldGFpbC52YWx1ZVxuICAgICAgfSlcbiAgICB9LFxuICAgIGZvcm1TdWJtaXQ6IGZ1bmN0aW9uKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdmb3Jt5Y+R55Sf5LqGc3VibWl05LqL5Lu277yM5pC65bim5pWw5o2u5Li677yaJywgZS5kZXRhaWwudmFsdWUpXG4gICAgfSxcbiAgICBmb3JtUmVzZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc29sZS5sb2coJ2Zvcm3lj5HnlJ/kuoZyZXNldOS6i+S7ticpXG4gICAgfSxcbiAgICBwYWdlMSgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vY2xhc3Mvc2FsdCdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBwYWdlMigpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vY2xhc3MvZWRpYmxlT2lsJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIHBhZ2UzKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9jbGFzcy9yaWNlJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIHBhZ2U0KCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9jbGFzcy9iZWFucydcbiAgICAgIH0pXG4gICAgfSxcbiAgICBwYWdlNSgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vY2xhc3Mvc2F1Y2UnXG4gICAgICB9KVxuICAgIH0sXG4gICAgcGFnZTYoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL2NsYXNzL2hvdFBvdCdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBwYWdlNygpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vY2xhc3Mvc25hY2tzJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIHBhZ2U4KCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9jbGFzcy91c2UnXG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuIl19
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
      commodity: [
        // { image: '../images/Yosemite.jpg', title: '好山好水', price: 3500 },
        // { image: '../images/Yosemite.jpg', title: '好山好水', price: 3500 },
        // { image: '../images/Yosemite.jpg', title: '好山好水', price: 3500 }
      ]
    }, _this.methods = {
      goods: function goods(e) {
        var self = this;
        var item = self.commodity[e.currentTarget.id];
        _wepy2.default.navigateTo({
          url: './shop?image=' + item.image + '&title=' + item.title + '&price=' + item.price + '&num=' + item.num + '&selected=' + item.selected
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
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      self.commodity = _commodity2.default;
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/home'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInBob3RvcG9zdGVyIiwiaW5kaWNhdG9yRG90cyIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJkdXJhdGlvbiIsImluZGljYXRvckFjdGl2ZUNvbG9yIiwibnVtIiwiaWNvbiIsInNhbHQiLCJlZGlibGVPaWwiLCJyaWNlIiwiYmVhbnMiLCJzYXVjZSIsImhvdFBvdCIsInNuYWNrcyIsInVzZSIsImltZ1VybHMiLCJjb21tb2RpdHkiLCJtZXRob2RzIiwiZ29vZHMiLCJlIiwic2VsZiIsIml0ZW0iLCJjdXJyZW50VGFyZ2V0IiwiaWQiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiaW1hZ2UiLCJ0aXRsZSIsInByaWNlIiwic2VsZWN0ZWQiLCJjaGFuZ2VJbmRpY2F0b3JEb3RzIiwic2V0RGF0YSIsImNoYW5nZUF1dG9wbGF5IiwiaW50ZXJ2YWxDaGFuZ2UiLCJkZXRhaWwiLCJ2YWx1ZSIsImR1cmF0aW9uQ2hhbmdlIiwiZm9ybVN1Ym1pdCIsImNvbnNvbGUiLCJsb2ciLCJwYWdlMSIsInBhZ2UyIiwicGFnZTMiLCJwYWdlNCIsInBhZ2U1IiwicGFnZTYiLCJwYWdlNyIsInBhZ2U4IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsbUJBQWEsc0JBRFI7QUFFTEMscUJBQWUsSUFGVjtBQUdMQyxnQkFBVSxJQUhMO0FBSUxDLGdCQUFVLElBSkw7QUFLTEMsZ0JBQVUsR0FMTDtBQU1MQyw0QkFBc0IsU0FOakI7QUFPTEMsV0FBSyxDQVBBO0FBUUxDLFlBQU07QUFDSkMsY0FBTSxtQkFERjtBQUVKQyxtQkFBVyx3QkFGUDtBQUdKQyxjQUFNLG1CQUhGO0FBSUpDLGVBQU8sb0JBSkg7QUFLSkMsZUFBTyxvQkFMSDtBQU1KQyxnQkFBUSxxQkFOSjtBQU9KQyxnQkFBUSxxQkFQSjtBQVFKQyxhQUFLO0FBUkQsT0FSRDtBQWtCTEMsZUFBUyxDQUNQLHdCQURPLEVBRVAsMEJBRk8sQ0FsQko7QUFzQkxDLGlCQUFXO0FBQ1Q7QUFDQTtBQUNBO0FBSFM7QUF0Qk4sSyxRQTRCUEMsTyxHQUFVO0FBQ1JDLFdBRFEsaUJBQ0ZDLENBREUsRUFDQztBQUNQLFlBQUlDLE9BQU8sSUFBWDtBQUNBLFlBQUlDLE9BQU9ELEtBQUtKLFNBQUwsQ0FBZUcsRUFBRUcsYUFBRixDQUFnQkMsRUFBL0IsQ0FBWDtBQUNBLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGlDQUFxQkosS0FBS0ssS0FBMUIsZUFBeUNMLEtBQUtNLEtBQTlDLGVBQTZETixLQUFLTyxLQUFsRSxhQUErRVAsS0FBS2hCLEdBQXBGLGtCQUFvR2dCLEtBQUtRO0FBRDNGLFNBQWhCO0FBR0QsT0FQTzs7QUFRUkMsMkJBQXFCLDZCQUFTWCxDQUFULEVBQVk7QUFDL0IsYUFBS1ksT0FBTCxDQUFhO0FBQ1gvQix5QkFBZSxDQUFDLEtBQUtGLElBQUwsQ0FBVUU7QUFEZixTQUFiO0FBR0QsT0FaTztBQWFSZ0Msc0JBQWdCLHdCQUFTYixDQUFULEVBQVk7QUFDMUIsYUFBS1ksT0FBTCxDQUFhO0FBQ1g5QixvQkFBVSxDQUFDLEtBQUtILElBQUwsQ0FBVUc7QUFEVixTQUFiO0FBR0QsT0FqQk87QUFrQlJnQyxzQkFBZ0Isd0JBQVNkLENBQVQsRUFBWTtBQUMxQixhQUFLWSxPQUFMLENBQWE7QUFDWDdCLG9CQUFVaUIsRUFBRWUsTUFBRixDQUFTQztBQURSLFNBQWI7QUFHRCxPQXRCTztBQXVCUkMsc0JBQWdCLHdCQUFTakIsQ0FBVCxFQUFZO0FBQzFCLGFBQUtZLE9BQUwsQ0FBYTtBQUNYNUIsb0JBQVVnQixFQUFFZSxNQUFGLENBQVNDO0FBRFIsU0FBYjtBQUdELE9BM0JPO0FBNEJSRSxrQkFBWSxvQkFBU2xCLENBQVQsRUFBWTtBQUN0Qm1CLGdCQUFRQyxHQUFSLENBQVksd0JBQVosRUFBc0NwQixFQUFFZSxNQUFGLENBQVNDLEtBQS9DO0FBQ0QsT0E5Qk87QUErQlJLLFdBL0JRLG1CQStCQTtBQUNOLHVCQUFLaEIsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQW5DTztBQW9DUmdCLFdBcENRLG1CQW9DQTtBQUNOLHVCQUFLakIsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQXhDTztBQXlDUmlCLFdBekNRLG1CQXlDQTtBQUNOLHVCQUFLbEIsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQTdDTztBQThDUmtCLFdBOUNRLG1CQThDQTtBQUNOLHVCQUFLbkIsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQWxETztBQW1EUm1CLFdBbkRRLG1CQW1EQTtBQUNOLHVCQUFLcEIsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQXZETztBQXdEUm9CLFdBeERRLG1CQXdEQTtBQUNOLHVCQUFLckIsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQTVETztBQTZEUnFCLFdBN0RRLG1CQTZEQTtBQUNOLHVCQUFLdEIsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQWpFTztBQWtFUnNCLFdBbEVRLG1CQWtFQTtBQUNOLHVCQUFLdkIsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRDtBQXRFTyxLOzs7Ozs2QkF3RUQ7QUFDUCxVQUFJTCxPQUFPLElBQVg7QUFDQUEsV0FBS0osU0FBTDtBQUNEOzs7O0VBM0dnQyxlQUFLZ0MsSTs7a0JBQW5CckQsSyIsImZpbGUiOiJob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IGNvbW1vZGl0eSBmcm9tICcuLi9jb21tb2RpdHkvY29tbW9kaXR5LmpzJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+i2heW4gidcbiAgfVxuICBkYXRhID0ge1xuICAgIHBob3RvcG9zdGVyOiAnLi4vaW1hZ2VzL3Bvc3Rlci5qcGcnLFxuICAgIGluZGljYXRvckRvdHM6IHRydWUsXG4gICAgYXV0b3BsYXk6IHRydWUsXG4gICAgaW50ZXJ2YWw6IDQwMDAsXG4gICAgZHVyYXRpb246IDUwMCxcbiAgICBpbmRpY2F0b3JBY3RpdmVDb2xvcjogJyNlODg4NGQnLFxuICAgIG51bTogMSxcbiAgICBpY29uOiB7XG4gICAgICBzYWx0OiAnLi4vaW1hZ2Uvc2FsdC5wbmcnLFxuICAgICAgZWRpYmxlT2lsOiAnLi4vaW1hZ2UvZWRpYmxlT2lsLnBuZycsXG4gICAgICByaWNlOiAnLi4vaW1hZ2UvcmljZS5wbmcnLFxuICAgICAgYmVhbnM6ICcuLi9pbWFnZS9iZWFucy5wbmcnLFxuICAgICAgc2F1Y2U6ICcuLi9pbWFnZS9zYXVjZS5wbmcnLFxuICAgICAgaG90UG90OiAnLi4vaW1hZ2UvaG90UG90LnBuZycsXG4gICAgICBzbmFja3M6ICcuLi9pbWFnZS9zbmFja3MucG5nJyxcbiAgICAgIHVzZTogJy4uL2ltYWdlL3VzZS5wbmcnXG4gICAgfSxcbiAgICBpbWdVcmxzOiBbXG4gICAgICAnLi4vaW1hZ2VzL1lvc2VtaXRlLmpwZycsXG4gICAgICAnLi4vaW1hZ2VzL1lvc2VtaXRlIDIuanBnJ1xuICAgIF0sXG4gICAgY29tbW9kaXR5OiBbXG4gICAgICAvLyB7IGltYWdlOiAnLi4vaW1hZ2VzL1lvc2VtaXRlLmpwZycsIHRpdGxlOiAn5aW95bGx5aW95rC0JywgcHJpY2U6IDM1MDAgfSxcbiAgICAgIC8vIHsgaW1hZ2U6ICcuLi9pbWFnZXMvWW9zZW1pdGUuanBnJywgdGl0bGU6ICflpb3lsbHlpb3msLQnLCBwcmljZTogMzUwMCB9LFxuICAgICAgLy8geyBpbWFnZTogJy4uL2ltYWdlcy9Zb3NlbWl0ZS5qcGcnLCB0aXRsZTogJ+WlveWxseWlveawtCcsIHByaWNlOiAzNTAwIH1cbiAgICBdXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBnb29kcyhlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGxldCBpdGVtID0gc2VsZi5jb21tb2RpdHlbZS5jdXJyZW50VGFyZ2V0LmlkXVxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgLi9zaG9wP2ltYWdlPSR7aXRlbS5pbWFnZX0mdGl0bGU9JHtpdGVtLnRpdGxlfSZwcmljZT0ke2l0ZW0ucHJpY2V9Jm51bT0ke2l0ZW0ubnVtfSZzZWxlY3RlZD0ke2l0ZW0uc2VsZWN0ZWR9YFxuICAgICAgfSlcbiAgICB9LFxuICAgIGNoYW5nZUluZGljYXRvckRvdHM6IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGluZGljYXRvckRvdHM6ICF0aGlzLmRhdGEuaW5kaWNhdG9yRG90c1xuICAgICAgfSlcbiAgICB9LFxuICAgIGNoYW5nZUF1dG9wbGF5OiBmdW5jdGlvbihlKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBhdXRvcGxheTogIXRoaXMuZGF0YS5hdXRvcGxheVxuICAgICAgfSlcbiAgICB9LFxuICAgIGludGVydmFsQ2hhbmdlOiBmdW5jdGlvbihlKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBpbnRlcnZhbDogZS5kZXRhaWwudmFsdWVcbiAgICAgIH0pXG4gICAgfSxcbiAgICBkdXJhdGlvbkNoYW5nZTogZnVuY3Rpb24oZSkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgZHVyYXRpb246IGUuZGV0YWlsLnZhbHVlXG4gICAgICB9KVxuICAgIH0sXG4gICAgZm9ybVN1Ym1pdDogZnVuY3Rpb24oZSkge1xuICAgICAgY29uc29sZS5sb2coJ2Zvcm3lj5HnlJ/kuoZzdWJtaXTkuovku7bvvIzmkLrluKbmlbDmja7kuLrvvJonLCBlLmRldGFpbC52YWx1ZSlcbiAgICB9LFxuICAgIHBhZ2UxKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9jbGFzcy9zYWx0J1xuICAgICAgfSlcbiAgICB9LFxuICAgIHBhZ2UyKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9jbGFzcy9lZGlibGVPaWwnXG4gICAgICB9KVxuICAgIH0sXG4gICAgcGFnZTMoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL2NsYXNzL3JpY2UnXG4gICAgICB9KVxuICAgIH0sXG4gICAgcGFnZTQoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL2NsYXNzL2JlYW5zJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIHBhZ2U1KCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9jbGFzcy9zYXVjZSdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBwYWdlNigpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vY2xhc3MvaG90UG90J1xuICAgICAgfSlcbiAgICB9LFxuICAgIHBhZ2U3KCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9jbGFzcy9zbmFja3MnXG4gICAgICB9KVxuICAgIH0sXG4gICAgcGFnZTgoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL2NsYXNzL3VzZSdcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBzZWxmLmNvbW1vZGl0eSA9IGNvbW1vZGl0eVxuICB9XG59XG4iXX0=
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
      commodity: [{ image: '../images/Yosemite.jpg', title: '好山好水', money: 3500 }, { image: '../images/Yosemite.jpg', title: '好山好水', money: 3500 }, { image: '../images/Yosemite.jpg', title: '好山好水', money: 3500 }]
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
      },
      add: function add() {
        var self = this;
        self.num++;
      },
      sub: function sub() {
        var self = this;
        if (self.num > 1) {
          self.num--;
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/home'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInBob3RvcG9zdGVyIiwiaW5kaWNhdG9yRG90cyIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJkdXJhdGlvbiIsImluZGljYXRvckFjdGl2ZUNvbG9yIiwibnVtIiwiaWNvbiIsInNhbHQiLCJlZGlibGVPaWwiLCJyaWNlIiwiYmVhbnMiLCJzYXVjZSIsImhvdFBvdCIsInNuYWNrcyIsInVzZSIsImltZ1VybHMiLCJjb21tb2RpdHkiLCJpbWFnZSIsInRpdGxlIiwibW9uZXkiLCJtZXRob2RzIiwiY2hhbmdlSW5kaWNhdG9yRG90cyIsImUiLCJzZXREYXRhIiwiY2hhbmdlQXV0b3BsYXkiLCJpbnRlcnZhbENoYW5nZSIsImRldGFpbCIsInZhbHVlIiwiZHVyYXRpb25DaGFuZ2UiLCJmb3JtU3VibWl0IiwiY29uc29sZSIsImxvZyIsInBhZ2UxIiwibmF2aWdhdGVUbyIsInVybCIsInBhZ2UyIiwicGFnZTMiLCJwYWdlNCIsInBhZ2U1IiwicGFnZTYiLCJwYWdlNyIsInBhZ2U4IiwiYWRkIiwic2VsZiIsInN1YiIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsbUJBQWEsc0JBRFI7QUFFTEMscUJBQWUsSUFGVjtBQUdMQyxnQkFBVSxJQUhMO0FBSUxDLGdCQUFVLElBSkw7QUFLTEMsZ0JBQVUsR0FMTDtBQU1MQyw0QkFBc0IsU0FOakI7QUFPTEMsV0FBSyxDQVBBO0FBUUxDLFlBQU07QUFDSkMsY0FBTSxtQkFERjtBQUVKQyxtQkFBVyx3QkFGUDtBQUdKQyxjQUFNLG1CQUhGO0FBSUpDLGVBQU8sb0JBSkg7QUFLSkMsZUFBTyxvQkFMSDtBQU1KQyxnQkFBUSxxQkFOSjtBQU9KQyxnQkFBUSxxQkFQSjtBQVFKQyxhQUFLO0FBUkQsT0FSRDtBQWtCTEMsZUFBUyxDQUNQLHdCQURPLEVBRVAsMEJBRk8sQ0FsQko7QUFzQkxDLGlCQUFXLENBQ1QsRUFBRUMsT0FBTyx3QkFBVCxFQUFtQ0MsT0FBTyxNQUExQyxFQUFrREMsT0FBTyxJQUF6RCxFQURTLEVBRVQsRUFBRUYsT0FBTyx3QkFBVCxFQUFtQ0MsT0FBTyxNQUExQyxFQUFrREMsT0FBTyxJQUF6RCxFQUZTLEVBR1QsRUFBRUYsT0FBTyx3QkFBVCxFQUFtQ0MsT0FBTyxNQUExQyxFQUFrREMsT0FBTyxJQUF6RCxFQUhTO0FBdEJOLEssUUE0QlBDLE8sR0FBVTtBQUNSQywyQkFBcUIsNkJBQVNDLENBQVQsRUFBWTtBQUMvQixhQUFLQyxPQUFMLENBQWE7QUFDWHZCLHlCQUFlLENBQUMsS0FBS0YsSUFBTCxDQUFVRTtBQURmLFNBQWI7QUFHRCxPQUxPO0FBTVJ3QixzQkFBZ0Isd0JBQVNGLENBQVQsRUFBWTtBQUMxQixhQUFLQyxPQUFMLENBQWE7QUFDWHRCLG9CQUFVLENBQUMsS0FBS0gsSUFBTCxDQUFVRztBQURWLFNBQWI7QUFHRCxPQVZPO0FBV1J3QixzQkFBZ0Isd0JBQVNILENBQVQsRUFBWTtBQUMxQixhQUFLQyxPQUFMLENBQWE7QUFDWHJCLG9CQUFVb0IsRUFBRUksTUFBRixDQUFTQztBQURSLFNBQWI7QUFHRCxPQWZPO0FBZ0JSQyxzQkFBZ0Isd0JBQVNOLENBQVQsRUFBWTtBQUMxQixhQUFLQyxPQUFMLENBQWE7QUFDWHBCLG9CQUFVbUIsRUFBRUksTUFBRixDQUFTQztBQURSLFNBQWI7QUFHRCxPQXBCTztBQXFCUkUsa0JBQVksb0JBQVNQLENBQVQsRUFBWTtBQUN0QlEsZ0JBQVFDLEdBQVIsQ0FBWSx3QkFBWixFQUFzQ1QsRUFBRUksTUFBRixDQUFTQyxLQUEvQztBQUNELE9BdkJPO0FBd0JSSyxXQXhCUSxtQkF3QkE7QUFDTix1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQTVCTztBQTZCUkMsV0E3QlEsbUJBNkJBO0FBQ04sdUJBQUtGLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0FqQ087QUFrQ1JFLFdBbENRLG1CQWtDQTtBQUNOLHVCQUFLSCxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BdENPO0FBdUNSRyxXQXZDUSxtQkF1Q0E7QUFDTix1QkFBS0osVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQTNDTztBQTRDUkksV0E1Q1EsbUJBNENBO0FBQ04sdUJBQUtMLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0FoRE87QUFpRFJLLFdBakRRLG1CQWlEQTtBQUNOLHVCQUFLTixVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BckRPO0FBc0RSTSxXQXREUSxtQkFzREE7QUFDTix1QkFBS1AsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQTFETztBQTJEUk8sV0EzRFEsbUJBMkRBO0FBQ04sdUJBQUtSLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0EvRE87QUFnRVJRLFNBaEVRLGlCQWdFRjtBQUNKLFlBQUlDLE9BQU8sSUFBWDtBQUNBQSxhQUFLdEMsR0FBTDtBQUNELE9BbkVPO0FBb0VSdUMsU0FwRVEsaUJBb0VGO0FBQ0osWUFBSUQsT0FBTyxJQUFYO0FBQ0EsWUFBSUEsS0FBS3RDLEdBQUwsR0FBVyxDQUFmLEVBQWtCO0FBQ2hCc0MsZUFBS3RDLEdBQUw7QUFDRDtBQUNGO0FBekVPLEs7Ozs7RUFoQ3VCLGVBQUt3QyxJOztrQkFBbkJsRCxLIiwiZmlsZSI6ImhvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6LaF5biCJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgcGhvdG9wb3N0ZXI6ICcuLi9pbWFnZXMvcG9zdGVyLmpwZycsXG4gICAgaW5kaWNhdG9yRG90czogdHJ1ZSxcbiAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICBpbnRlcnZhbDogNDAwMCxcbiAgICBkdXJhdGlvbjogNTAwLFxuICAgIGluZGljYXRvckFjdGl2ZUNvbG9yOiAnI2U4ODg0ZCcsXG4gICAgbnVtOiAxLFxuICAgIGljb246IHtcbiAgICAgIHNhbHQ6ICcuLi9pbWFnZS9zYWx0LnBuZycsXG4gICAgICBlZGlibGVPaWw6ICcuLi9pbWFnZS9lZGlibGVPaWwucG5nJyxcbiAgICAgIHJpY2U6ICcuLi9pbWFnZS9yaWNlLnBuZycsXG4gICAgICBiZWFuczogJy4uL2ltYWdlL2JlYW5zLnBuZycsXG4gICAgICBzYXVjZTogJy4uL2ltYWdlL3NhdWNlLnBuZycsXG4gICAgICBob3RQb3Q6ICcuLi9pbWFnZS9ob3RQb3QucG5nJyxcbiAgICAgIHNuYWNrczogJy4uL2ltYWdlL3NuYWNrcy5wbmcnLFxuICAgICAgdXNlOiAnLi4vaW1hZ2UvdXNlLnBuZydcbiAgICB9LFxuICAgIGltZ1VybHM6IFtcbiAgICAgICcuLi9pbWFnZXMvWW9zZW1pdGUuanBnJyxcbiAgICAgICcuLi9pbWFnZXMvWW9zZW1pdGUgMi5qcGcnLFxuICAgIF0sXG4gICAgY29tbW9kaXR5OiBbXG4gICAgICB7IGltYWdlOiAnLi4vaW1hZ2VzL1lvc2VtaXRlLmpwZycsIHRpdGxlOiAn5aW95bGx5aW95rC0JywgbW9uZXk6IDM1MDAgfSxcbiAgICAgIHsgaW1hZ2U6ICcuLi9pbWFnZXMvWW9zZW1pdGUuanBnJywgdGl0bGU6ICflpb3lsbHlpb3msLQnLCBtb25leTogMzUwMCB9LFxuICAgICAgeyBpbWFnZTogJy4uL2ltYWdlcy9Zb3NlbWl0ZS5qcGcnLCB0aXRsZTogJ+WlveWxseWlveawtCcsIG1vbmV5OiAzNTAwIH1cbiAgICBdXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBjaGFuZ2VJbmRpY2F0b3JEb3RzOiBmdW5jdGlvbihlKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBpbmRpY2F0b3JEb3RzOiAhdGhpcy5kYXRhLmluZGljYXRvckRvdHNcbiAgICAgIH0pXG4gICAgfSxcbiAgICBjaGFuZ2VBdXRvcGxheTogZnVuY3Rpb24oZSkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgYXV0b3BsYXk6ICF0aGlzLmRhdGEuYXV0b3BsYXlcbiAgICAgIH0pXG4gICAgfSxcbiAgICBpbnRlcnZhbENoYW5nZTogZnVuY3Rpb24oZSkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgaW50ZXJ2YWw6IGUuZGV0YWlsLnZhbHVlXG4gICAgICB9KVxuICAgIH0sXG4gICAgZHVyYXRpb25DaGFuZ2U6IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGR1cmF0aW9uOiBlLmRldGFpbC52YWx1ZVxuICAgICAgfSlcbiAgICB9LFxuICAgIGZvcm1TdWJtaXQ6IGZ1bmN0aW9uKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdmb3Jt5Y+R55Sf5LqGc3VibWl05LqL5Lu277yM5pC65bim5pWw5o2u5Li677yaJywgZS5kZXRhaWwudmFsdWUpXG4gICAgfSxcbiAgICBwYWdlMSgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vY2xhc3Mvc2FsdCdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBwYWdlMigpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vY2xhc3MvZWRpYmxlT2lsJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIHBhZ2UzKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9jbGFzcy9yaWNlJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIHBhZ2U0KCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9jbGFzcy9iZWFucydcbiAgICAgIH0pXG4gICAgfSxcbiAgICBwYWdlNSgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vY2xhc3Mvc2F1Y2UnXG4gICAgICB9KVxuICAgIH0sXG4gICAgcGFnZTYoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL2NsYXNzL2hvdFBvdCdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBwYWdlNygpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vY2xhc3Mvc25hY2tzJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIHBhZ2U4KCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9jbGFzcy91c2UnXG4gICAgICB9KVxuICAgIH0sXG4gICAgYWRkKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLm51bSsrXG4gICAgfSxcbiAgICBzdWIoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGlmIChzZWxmLm51bSA+IDEpIHtcbiAgICAgICAgc2VsZi5udW0tLVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19
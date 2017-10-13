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
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/home'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInBob3RvcG9zdGVyIiwiaW5kaWNhdG9yRG90cyIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJkdXJhdGlvbiIsImluZGljYXRvckFjdGl2ZUNvbG9yIiwiaWNvbiIsInNhbHQiLCJlZGlibGVPaWwiLCJyaWNlIiwiYmVhbnMiLCJzYXVjZSIsImhvdFBvdCIsInNuYWNrcyIsInVzZSIsImltZ1VybHMiLCJtZXRob2RzIiwiY2hhbmdlSW5kaWNhdG9yRG90cyIsImUiLCJzZXREYXRhIiwiY2hhbmdlQXV0b3BsYXkiLCJpbnRlcnZhbENoYW5nZSIsImRldGFpbCIsInZhbHVlIiwiZHVyYXRpb25DaGFuZ2UiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLG1CQUFhLHNCQURSO0FBRUxDLHFCQUFlLElBRlY7QUFHTEMsZ0JBQVUsSUFITDtBQUlMQyxnQkFBVSxJQUpMO0FBS0xDLGdCQUFVLEdBTEw7QUFNTEMsNEJBQXNCLFNBTmpCO0FBT0xDLFlBQU07QUFDSkMsY0FBTSxtQkFERjtBQUVKQyxtQkFBVyx3QkFGUDtBQUdKQyxjQUFNLG1CQUhGO0FBSUpDLGVBQU8sb0JBSkg7QUFLSkMsZUFBTyxvQkFMSDtBQU1KQyxnQkFBUSxxQkFOSjtBQU9KQyxnQkFBUSxxQkFQSjtBQVFKQyxhQUFLO0FBUkQsT0FQRDtBQWlCTEMsZUFBUyxDQUNQLHdCQURPLEVBRVAsMEJBRk8sRUFHUCwwQkFITyxFQUlQLDBCQUpPO0FBakJKLEssUUF3QlBDLE8sR0FBVTtBQUNSQywyQkFBcUIsNkJBQVNDLENBQVQsRUFBWTtBQUMvQixhQUFLQyxPQUFMLENBQWE7QUFDWGxCLHlCQUFlLENBQUMsS0FBS0YsSUFBTCxDQUFVRTtBQURmLFNBQWI7QUFHRCxPQUxPO0FBTVJtQixzQkFBZ0Isd0JBQVNGLENBQVQsRUFBWTtBQUMxQixhQUFLQyxPQUFMLENBQWE7QUFDWGpCLG9CQUFVLENBQUMsS0FBS0gsSUFBTCxDQUFVRztBQURWLFNBQWI7QUFHRCxPQVZPO0FBV1JtQixzQkFBZ0Isd0JBQVNILENBQVQsRUFBWTtBQUMxQixhQUFLQyxPQUFMLENBQWE7QUFDWGhCLG9CQUFVZSxFQUFFSSxNQUFGLENBQVNDO0FBRFIsU0FBYjtBQUdELE9BZk87QUFnQlJDLHNCQUFnQix3QkFBU04sQ0FBVCxFQUFZO0FBQzFCLGFBQUtDLE9BQUwsQ0FBYTtBQUNYZixvQkFBVWMsRUFBRUksTUFBRixDQUFTQztBQURSLFNBQWI7QUFHRDtBQXBCTyxLOzs7O0VBNUJ1QixlQUFLRSxJOztrQkFBbkI3QixLIiwiZmlsZSI6ImhvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6LaF5biCJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgcGhvdG9wb3N0ZXI6ICcuLi9pbWFnZXMvcG9zdGVyLmpwZycsXG4gICAgaW5kaWNhdG9yRG90czogdHJ1ZSxcbiAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICBpbnRlcnZhbDogNDAwMCxcbiAgICBkdXJhdGlvbjogNTAwLFxuICAgIGluZGljYXRvckFjdGl2ZUNvbG9yOiAnI2U4ODg0ZCcsXG4gICAgaWNvbjoge1xuICAgICAgc2FsdDogJy4uL2ltYWdlL3NhbHQucG5nJyxcbiAgICAgIGVkaWJsZU9pbDogJy4uL2ltYWdlL2VkaWJsZU9pbC5wbmcnLFxuICAgICAgcmljZTogJy4uL2ltYWdlL3JpY2UucG5nJyxcbiAgICAgIGJlYW5zOiAnLi4vaW1hZ2UvYmVhbnMucG5nJyxcbiAgICAgIHNhdWNlOiAnLi4vaW1hZ2Uvc2F1Y2UucG5nJyxcbiAgICAgIGhvdFBvdDogJy4uL2ltYWdlL2hvdFBvdC5wbmcnLFxuICAgICAgc25hY2tzOiAnLi4vaW1hZ2Uvc25hY2tzLnBuZycsXG4gICAgICB1c2U6ICcuLi9pbWFnZS91c2UucG5nJ1xuICAgIH0sXG4gICAgaW1nVXJsczogW1xuICAgICAgJy4uL2ltYWdlcy9Zb3NlbWl0ZS5qcGcnLFxuICAgICAgJy4uL2ltYWdlcy9Zb3NlbWl0ZSAyLmpwZycsXG4gICAgICAnLi4vaW1hZ2VzL1lvc2VtaXRlIDMuanBnJyxcbiAgICAgICcuLi9pbWFnZXMvWW9zZW1pdGUgNC5qcGcnXG4gICAgXVxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgY2hhbmdlSW5kaWNhdG9yRG90czogZnVuY3Rpb24oZSkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgaW5kaWNhdG9yRG90czogIXRoaXMuZGF0YS5pbmRpY2F0b3JEb3RzXG4gICAgICB9KVxuICAgIH0sXG4gICAgY2hhbmdlQXV0b3BsYXk6IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGF1dG9wbGF5OiAhdGhpcy5kYXRhLmF1dG9wbGF5XG4gICAgICB9KVxuICAgIH0sXG4gICAgaW50ZXJ2YWxDaGFuZ2U6IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGludGVydmFsOiBlLmRldGFpbC52YWx1ZVxuICAgICAgfSlcbiAgICB9LFxuICAgIGR1cmF0aW9uQ2hhbmdlOiBmdW5jdGlvbihlKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBkdXJhdGlvbjogZS5kZXRhaWwudmFsdWVcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG4iXX0=
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
      number: 1,
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
      imgUrls: ['../images/Yosemite.jpg', '../images/Yosemite 2.jpg', '../images/Yosemite 3.jpg', '../images/Yosemite 4.jpg'],
      commodity: [{ comPhoto: '../images/Yosemite.jpg', comText: '好山好水', money: 3500 }, { comPhoto: '../images/Yosemite.jpg', comText: '好山好水', money: 3500 }, { comPhoto: '../images/Yosemite.jpg', comText: '好山好水', money: 3500 }]
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
        self.number++;
      },
      sub: function sub() {
        var self = this;
        if (self.number > 1) {
          self.number--;
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/home'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInBob3RvcG9zdGVyIiwiaW5kaWNhdG9yRG90cyIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJkdXJhdGlvbiIsImluZGljYXRvckFjdGl2ZUNvbG9yIiwibnVtYmVyIiwiaWNvbiIsInNhbHQiLCJlZGlibGVPaWwiLCJyaWNlIiwiYmVhbnMiLCJzYXVjZSIsImhvdFBvdCIsInNuYWNrcyIsInVzZSIsImltZ1VybHMiLCJjb21tb2RpdHkiLCJjb21QaG90byIsImNvbVRleHQiLCJtb25leSIsIm1ldGhvZHMiLCJjaGFuZ2VJbmRpY2F0b3JEb3RzIiwiZSIsInNldERhdGEiLCJjaGFuZ2VBdXRvcGxheSIsImludGVydmFsQ2hhbmdlIiwiZGV0YWlsIiwidmFsdWUiLCJkdXJhdGlvbkNoYW5nZSIsImZvcm1TdWJtaXQiLCJjb25zb2xlIiwibG9nIiwicGFnZTEiLCJuYXZpZ2F0ZVRvIiwidXJsIiwicGFnZTIiLCJwYWdlMyIsInBhZ2U0IiwicGFnZTUiLCJwYWdlNiIsInBhZ2U3IiwicGFnZTgiLCJhZGQiLCJzZWxmIiwic3ViIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxtQkFBYSxzQkFEUjtBQUVMQyxxQkFBZSxJQUZWO0FBR0xDLGdCQUFVLElBSEw7QUFJTEMsZ0JBQVUsSUFKTDtBQUtMQyxnQkFBVSxHQUxMO0FBTUxDLDRCQUFzQixTQU5qQjtBQU9MQyxjQUFRLENBUEg7QUFRTEMsWUFBTTtBQUNKQyxjQUFNLG1CQURGO0FBRUpDLG1CQUFXLHdCQUZQO0FBR0pDLGNBQU0sbUJBSEY7QUFJSkMsZUFBTyxvQkFKSDtBQUtKQyxlQUFPLG9CQUxIO0FBTUpDLGdCQUFRLHFCQU5KO0FBT0pDLGdCQUFRLHFCQVBKO0FBUUpDLGFBQUs7QUFSRCxPQVJEO0FBa0JMQyxlQUFTLENBQ1Asd0JBRE8sRUFFUCwwQkFGTyxFQUdQLDBCQUhPLEVBSVAsMEJBSk8sQ0FsQko7QUF3QkxDLGlCQUFXLENBQ1QsRUFBRUMsVUFBVSx3QkFBWixFQUFzQ0MsU0FBUyxNQUEvQyxFQUF1REMsT0FBTyxJQUE5RCxFQURTLEVBRVQsRUFBRUYsVUFBVSx3QkFBWixFQUFzQ0MsU0FBUyxNQUEvQyxFQUF1REMsT0FBTyxJQUE5RCxFQUZTLEVBR1QsRUFBRUYsVUFBVSx3QkFBWixFQUFzQ0MsU0FBUyxNQUEvQyxFQUF1REMsT0FBTyxJQUE5RCxFQUhTO0FBeEJOLEssUUE4QlBDLE8sR0FBVTtBQUNSQywyQkFBcUIsNkJBQVNDLENBQVQsRUFBWTtBQUMvQixhQUFLQyxPQUFMLENBQWE7QUFDWHZCLHlCQUFlLENBQUMsS0FBS0YsSUFBTCxDQUFVRTtBQURmLFNBQWI7QUFHRCxPQUxPO0FBTVJ3QixzQkFBZ0Isd0JBQVNGLENBQVQsRUFBWTtBQUMxQixhQUFLQyxPQUFMLENBQWE7QUFDWHRCLG9CQUFVLENBQUMsS0FBS0gsSUFBTCxDQUFVRztBQURWLFNBQWI7QUFHRCxPQVZPO0FBV1J3QixzQkFBZ0Isd0JBQVNILENBQVQsRUFBWTtBQUMxQixhQUFLQyxPQUFMLENBQWE7QUFDWHJCLG9CQUFVb0IsRUFBRUksTUFBRixDQUFTQztBQURSLFNBQWI7QUFHRCxPQWZPO0FBZ0JSQyxzQkFBZ0Isd0JBQVNOLENBQVQsRUFBWTtBQUMxQixhQUFLQyxPQUFMLENBQWE7QUFDWHBCLG9CQUFVbUIsRUFBRUksTUFBRixDQUFTQztBQURSLFNBQWI7QUFHRCxPQXBCTztBQXFCUkUsa0JBQVksb0JBQVNQLENBQVQsRUFBWTtBQUN0QlEsZ0JBQVFDLEdBQVIsQ0FBWSx3QkFBWixFQUFzQ1QsRUFBRUksTUFBRixDQUFTQyxLQUEvQztBQUNELE9BdkJPO0FBd0JSSyxXQXhCUSxtQkF3QkE7QUFDTix1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQTVCTztBQTZCUkMsV0E3QlEsbUJBNkJBO0FBQ04sdUJBQUtGLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0FqQ087QUFrQ1JFLFdBbENRLG1CQWtDQTtBQUNOLHVCQUFLSCxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BdENPO0FBdUNSRyxXQXZDUSxtQkF1Q0E7QUFDTix1QkFBS0osVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQTNDTztBQTRDUkksV0E1Q1EsbUJBNENBO0FBQ04sdUJBQUtMLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0FoRE87QUFpRFJLLFdBakRRLG1CQWlEQTtBQUNOLHVCQUFLTixVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BckRPO0FBc0RSTSxXQXREUSxtQkFzREE7QUFDTix1QkFBS1AsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQTFETztBQTJEUk8sV0EzRFEsbUJBMkRBO0FBQ04sdUJBQUtSLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0EvRE87QUFnRVJRLFNBaEVRLGlCQWdFRjtBQUNKLFlBQUlDLE9BQU8sSUFBWDtBQUNBQSxhQUFLdEMsTUFBTDtBQUNELE9BbkVPO0FBb0VSdUMsU0FwRVEsaUJBb0VGO0FBQ0osWUFBSUQsT0FBTyxJQUFYO0FBQ0EsWUFBSUEsS0FBS3RDLE1BQUwsR0FBYyxDQUFsQixFQUFxQjtBQUNuQnNDLGVBQUt0QyxNQUFMO0FBQ0Q7QUFDRjtBQXpFTyxLOzs7O0VBbEN1QixlQUFLd0MsSTs7a0JBQW5CbEQsSyIsImZpbGUiOiJob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+i2heW4gidcbiAgfVxuICBkYXRhID0ge1xuICAgIHBob3RvcG9zdGVyOiAnLi4vaW1hZ2VzL3Bvc3Rlci5qcGcnLFxuICAgIGluZGljYXRvckRvdHM6IHRydWUsXG4gICAgYXV0b3BsYXk6IHRydWUsXG4gICAgaW50ZXJ2YWw6IDQwMDAsXG4gICAgZHVyYXRpb246IDUwMCxcbiAgICBpbmRpY2F0b3JBY3RpdmVDb2xvcjogJyNlODg4NGQnLFxuICAgIG51bWJlcjogMSxcbiAgICBpY29uOiB7XG4gICAgICBzYWx0OiAnLi4vaW1hZ2Uvc2FsdC5wbmcnLFxuICAgICAgZWRpYmxlT2lsOiAnLi4vaW1hZ2UvZWRpYmxlT2lsLnBuZycsXG4gICAgICByaWNlOiAnLi4vaW1hZ2UvcmljZS5wbmcnLFxuICAgICAgYmVhbnM6ICcuLi9pbWFnZS9iZWFucy5wbmcnLFxuICAgICAgc2F1Y2U6ICcuLi9pbWFnZS9zYXVjZS5wbmcnLFxuICAgICAgaG90UG90OiAnLi4vaW1hZ2UvaG90UG90LnBuZycsXG4gICAgICBzbmFja3M6ICcuLi9pbWFnZS9zbmFja3MucG5nJyxcbiAgICAgIHVzZTogJy4uL2ltYWdlL3VzZS5wbmcnXG4gICAgfSxcbiAgICBpbWdVcmxzOiBbXG4gICAgICAnLi4vaW1hZ2VzL1lvc2VtaXRlLmpwZycsXG4gICAgICAnLi4vaW1hZ2VzL1lvc2VtaXRlIDIuanBnJyxcbiAgICAgICcuLi9pbWFnZXMvWW9zZW1pdGUgMy5qcGcnLFxuICAgICAgJy4uL2ltYWdlcy9Zb3NlbWl0ZSA0LmpwZydcbiAgICBdLFxuICAgIGNvbW1vZGl0eTogW1xuICAgICAgeyBjb21QaG90bzogJy4uL2ltYWdlcy9Zb3NlbWl0ZS5qcGcnLCBjb21UZXh0OiAn5aW95bGx5aW95rC0JywgbW9uZXk6IDM1MDAgfSxcbiAgICAgIHsgY29tUGhvdG86ICcuLi9pbWFnZXMvWW9zZW1pdGUuanBnJywgY29tVGV4dDogJ+WlveWxseWlveawtCcsIG1vbmV5OiAzNTAwIH0sXG4gICAgICB7IGNvbVBob3RvOiAnLi4vaW1hZ2VzL1lvc2VtaXRlLmpwZycsIGNvbVRleHQ6ICflpb3lsbHlpb3msLQnLCBtb25leTogMzUwMCB9XG4gICAgXVxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgY2hhbmdlSW5kaWNhdG9yRG90czogZnVuY3Rpb24oZSkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgaW5kaWNhdG9yRG90czogIXRoaXMuZGF0YS5pbmRpY2F0b3JEb3RzXG4gICAgICB9KVxuICAgIH0sXG4gICAgY2hhbmdlQXV0b3BsYXk6IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGF1dG9wbGF5OiAhdGhpcy5kYXRhLmF1dG9wbGF5XG4gICAgICB9KVxuICAgIH0sXG4gICAgaW50ZXJ2YWxDaGFuZ2U6IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGludGVydmFsOiBlLmRldGFpbC52YWx1ZVxuICAgICAgfSlcbiAgICB9LFxuICAgIGR1cmF0aW9uQ2hhbmdlOiBmdW5jdGlvbihlKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBkdXJhdGlvbjogZS5kZXRhaWwudmFsdWVcbiAgICAgIH0pXG4gICAgfSxcbiAgICBmb3JtU3VibWl0OiBmdW5jdGlvbihlKSB7XG4gICAgICBjb25zb2xlLmxvZygnZm9ybeWPkeeUn+S6hnN1Ym1pdOS6i+S7tu+8jOaQuuW4puaVsOaNruS4uu+8micsIGUuZGV0YWlsLnZhbHVlKVxuICAgIH0sXG4gICAgcGFnZTEoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL2NsYXNzL3NhbHQnXG4gICAgICB9KVxuICAgIH0sXG4gICAgcGFnZTIoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL2NsYXNzL2VkaWJsZU9pbCdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBwYWdlMygpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vY2xhc3MvcmljZSdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBwYWdlNCgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vY2xhc3MvYmVhbnMnXG4gICAgICB9KVxuICAgIH0sXG4gICAgcGFnZTUoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL2NsYXNzL3NhdWNlJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIHBhZ2U2KCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9jbGFzcy9ob3RQb3QnXG4gICAgICB9KVxuICAgIH0sXG4gICAgcGFnZTcoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL2NsYXNzL3NuYWNrcydcbiAgICAgIH0pXG4gICAgfSxcbiAgICBwYWdlOCgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vY2xhc3MvdXNlJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIGFkZCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5udW1iZXIrK1xuICAgIH0sXG4gICAgc3ViKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBpZiAoc2VsZi5udW1iZXIgPiAxKSB7XG4gICAgICAgIHNlbGYubnVtYmVyLS1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==
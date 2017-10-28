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
      price: 0.0,
      selected: '',
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
        _wepy2.default.request({
          url: 'http://127.0.0.1:7001/cartCreate',
          method: 'POST',
          data: {
            title: commodity.title,
            price: commodity.price,
            image: commodity.image
          },
          success: function success(res) {
            console.log('success');
          }
        });
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
        url: 'http://127.0.0.1:7001/get',
        method: 'GET',
        success: function success(res) {
          self.commodity = res.data;
          self.setData({
            commodity: res.data
          });
          console.log(res.data, 'res.data');
        }
      });
      console.log(self.commodity, 'self.commodity');
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/home'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInBob3RvcG9zdGVyIiwiaW5kaWNhdG9yRG90cyIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJkdXJhdGlvbiIsImluZGljYXRvckFjdGl2ZUNvbG9yIiwiaW1hZ2UiLCJ0aXRsZSIsInByaWNlIiwic2VsZWN0ZWQiLCJpY29uIiwic2FsdCIsImVkaWJsZU9pbCIsInJpY2UiLCJiZWFucyIsInNhdWNlIiwiaG90UG90Iiwic25hY2tzIiwidXNlIiwiaW1nVXJscyIsImNvbW1vZGl0eSIsIm1ldGhvZHMiLCJnb29kcyIsImUiLCJzZWxmIiwiaW5kZXgiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImNvbnNvbGUiLCJsb2ciLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwic3VjY2VzcyIsInJlcyIsInNob3dUb2FzdCIsImNoYW5nZUluZGljYXRvckRvdHMiLCJzZXREYXRhIiwiY2hhbmdlQXV0b3BsYXkiLCJpbnRlcnZhbENoYW5nZSIsImRldGFpbCIsInZhbHVlIiwiZHVyYXRpb25DaGFuZ2UiLCJmb3JtU3VibWl0IiwicGFnZTEiLCJuYXZpZ2F0ZVRvIiwicGFnZTIiLCJwYWdlMyIsInBhZ2U0IiwicGFnZTUiLCJwYWdlNiIsInBhZ2U3IiwicGFnZTgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsbUJBQWEsc0JBRFI7QUFFTEMscUJBQWUsSUFGVjtBQUdMQyxnQkFBVSxJQUhMO0FBSUxDLGdCQUFVLElBSkw7QUFLTEMsZ0JBQVUsR0FMTDtBQU1MQyw0QkFBc0IsU0FOakI7QUFPTEMsYUFBTyxFQVBGO0FBUUxDLGFBQU8sRUFSRjtBQVNMQyxhQUFPLEdBVEY7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QUFEUyxTQUFoQjtBQUdELE9BakZPO0FBa0ZScUIsV0FsRlEsbUJBa0ZBO0FBQ04sdUJBQUtQLFVBQUwsQ0FBZ0I7QUFDZGQsZUFBSztBQURTLFNBQWhCO0FBR0Q7QUF0Rk8sSzs7Ozs7NkJBd0ZELENBQ1I7Ozs2QkFDUTtBQUNQLFVBQUlQLE9BQU8sSUFBWDtBQUNBLHFCQUFLTSxPQUFMLENBQWE7QUFDWEMsYUFBSywyQkFETTtBQUVYQyxnQkFBUSxLQUZHO0FBR1hDLGlCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJWLGVBQUtKLFNBQUwsR0FBaUJjLElBQUluQyxJQUFyQjtBQUNBeUIsZUFBS2EsT0FBTCxDQUFhO0FBQ1hqQix1QkFBV2MsSUFBSW5DO0FBREosV0FBYjtBQUdBNkIsa0JBQVFDLEdBQVIsQ0FBWUssSUFBSW5DLElBQWhCLEVBQXNCLFVBQXRCO0FBQ0Q7QUFUVSxPQUFiO0FBV0E2QixjQUFRQyxHQUFSLENBQVlMLEtBQUtKLFNBQWpCLEVBQTRCLGdCQUE1QjtBQUNEOzs7O0VBeElnQyxlQUFLaUMsSTs7a0JBQW5CekQsSyIsImZpbGUiOiJob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+i2heW4gidcbiAgfVxuICBkYXRhID0ge1xuICAgIHBob3RvcG9zdGVyOiAnLi4vaW1hZ2VzL3Bvc3Rlci5qcGcnLFxuICAgIGluZGljYXRvckRvdHM6IHRydWUsXG4gICAgYXV0b3BsYXk6IHRydWUsXG4gICAgaW50ZXJ2YWw6IDMwMDAsXG4gICAgZHVyYXRpb246IDUwMCxcbiAgICBpbmRpY2F0b3JBY3RpdmVDb2xvcjogJyNlODg4NGQnLFxuICAgIGltYWdlOiAnJyxcbiAgICB0aXRsZTogJycsXG4gICAgcHJpY2U6IDAuMCxcbiAgICBzZWxlY3RlZDogJycsXG4gICAgaWNvbjoge1xuICAgICAgc2FsdDogJy4uL2ltYWdlL3NhbHQucG5nJyxcbiAgICAgIGVkaWJsZU9pbDogJy4uL2ltYWdlL2VkaWJsZU9pbC5wbmcnLFxuICAgICAgcmljZTogJy4uL2ltYWdlL3JpY2UucG5nJyxcbiAgICAgIGJlYW5zOiAnLi4vaW1hZ2UvYmVhbnMucG5nJyxcbiAgICAgIHNhdWNlOiAnLi4vaW1hZ2Uvc2F1Y2UucG5nJyxcbiAgICAgIGhvdFBvdDogJy4uL2ltYWdlL2hvdFBvdC5wbmcnLFxuICAgICAgc25hY2tzOiAnLi4vaW1hZ2Uvc25hY2tzLnBuZycsXG4gICAgICB1c2U6ICcuLi9pbWFnZS91c2UucG5nJ1xuICAgIH0sXG4gICAgaW1nVXJsczogW1xuICAgICAgJ2h0dHBzOi8vaW1nMTEuMzYwYnV5aW1nLmNvbS9iYWJlbC9qZnMvdDEwMjc2LzM2Mi8xMjg3ODIyMDQ2LzkzNDEwL2Y3NWE3NjY0LzU5ZGY1MThhTjM3Zjg0ODliLmpwZycsXG4gICAgICAnaHR0cHM6Ly9pbWcuYWxpY2RuLmNvbS90ZnMvVEIxNmo5cGgyQk5US0pqeTBGZFhYY1BwVlhhLTUyMC0yODAuanBnX3E5MCcsXG4gICAgICAnaHR0cHM6Ly9pbWcuYWxpY2RuLmNvbS9zaW1iYS9pbWcvVEIxU24wMVg3VDg1dUpqU1pGaFN1d1BFVlhhLmpwZydcbiAgICBdLFxuICAgIGNvbW1vZGl0eTogW11cbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGdvb2RzKGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgY29uc3QgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleFxuICAgICAgbGV0IGNvbW1vZGl0eSA9IHNlbGYuY29tbW9kaXR5W2luZGV4XVxuICAgICAgY29uc29sZS5sb2coY29tbW9kaXR5KVxuICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL2NhcnRDcmVhdGUnLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHRpdGxlOiBjb21tb2RpdHkudGl0bGUsXG4gICAgICAgICAgcHJpY2U6IGNvbW1vZGl0eS5wcmljZSxcbiAgICAgICAgICBpbWFnZTogY29tbW9kaXR5LmltYWdlXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzJylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgdGl0bGU6ICfliqDlhaXmiJDlip8nLFxuICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgIGR1cmF0aW9uOiAxMDAwXG4gICAgICB9KVxuICAgIH0sXG4gICAgY2hhbmdlSW5kaWNhdG9yRG90czogZnVuY3Rpb24oZSkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgaW5kaWNhdG9yRG90czogIXRoaXMuZGF0YS5pbmRpY2F0b3JEb3RzXG4gICAgICB9KVxuICAgIH0sXG4gICAgY2hhbmdlQXV0b3BsYXk6IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGF1dG9wbGF5OiAhdGhpcy5kYXRhLmF1dG9wbGF5XG4gICAgICB9KVxuICAgIH0sXG4gICAgaW50ZXJ2YWxDaGFuZ2U6IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGludGVydmFsOiBlLmRldGFpbC52YWx1ZVxuICAgICAgfSlcbiAgICB9LFxuICAgIGR1cmF0aW9uQ2hhbmdlOiBmdW5jdGlvbihlKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBkdXJhdGlvbjogZS5kZXRhaWwudmFsdWVcbiAgICAgIH0pXG4gICAgfSxcbiAgICBmb3JtU3VibWl0OiBmdW5jdGlvbihlKSB7XG4gICAgICBjb25zb2xlLmxvZygnZm9ybeWPkeeUn+S6hnN1Ym1pdOS6i+S7tu+8jOaQuuW4puaVsOaNruS4uu+8micsIGUuZGV0YWlsLnZhbHVlKVxuICAgIH0sXG4gICAgcGFnZTEoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL2NsYXNzL3NhbHQnXG4gICAgICB9KVxuICAgIH0sXG4gICAgcGFnZTIoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL2NsYXNzL2VkaWJsZU9pbCdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBwYWdlMygpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vY2xhc3MvcmljZSdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBwYWdlNCgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vY2xhc3MvYmVhbnMnXG4gICAgICB9KVxuICAgIH0sXG4gICAgcGFnZTUoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL2NsYXNzL3NhdWNlJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIHBhZ2U2KCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9jbGFzcy9ob3RQb3QnXG4gICAgICB9KVxuICAgIH0sXG4gICAgcGFnZTcoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL2NsYXNzL3NuYWNrcydcbiAgICAgIH0pXG4gICAgfSxcbiAgICBwYWdlOCgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vY2xhc3MvdXNlJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgb25TaG93KCkge1xuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL2dldCcsXG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIHNlbGYuY29tbW9kaXR5ID0gcmVzLmRhdGFcbiAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICBjb21tb2RpdHk6IHJlcy5kYXRhXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhLCAncmVzLmRhdGEnKVxuICAgICAgfVxuICAgIH0pXG4gICAgY29uc29sZS5sb2coc2VsZi5jb21tb2RpdHksICdzZWxmLmNvbW1vZGl0eScpXG4gIH1cbn1cbiJdfQ==
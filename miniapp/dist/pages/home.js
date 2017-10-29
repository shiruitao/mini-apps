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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInBob3RvcG9zdGVyIiwiaW5kaWNhdG9yRG90cyIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJkdXJhdGlvbiIsImluZGljYXRvckFjdGl2ZUNvbG9yIiwiaW1hZ2UiLCJ0aXRsZSIsInByaWNlIiwic2VsZWN0ZWQiLCJpY29uIiwic2FsdCIsImVkaWJsZU9pbCIsInJpY2UiLCJiZWFucyIsInNhdWNlIiwiaG90UG90Iiwic25hY2tzIiwidXNlIiwiaW1nVXJscyIsImNvbW1vZGl0eSIsIm1ldGhvZHMiLCJnb29kcyIsImUiLCJzZWxmIiwiaW5kZXgiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImNvbnNvbGUiLCJsb2ciLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwic3VjY2VzcyIsInJlcyIsInNob3dUb2FzdCIsImNoYW5nZUluZGljYXRvckRvdHMiLCJzZXREYXRhIiwiY2hhbmdlQXV0b3BsYXkiLCJpbnRlcnZhbENoYW5nZSIsImRldGFpbCIsInZhbHVlIiwiZHVyYXRpb25DaGFuZ2UiLCJwYWdlMSIsIm5hdmlnYXRlVG8iLCJwYWdlMiIsInBhZ2UzIiwicGFnZTQiLCJwYWdlNSIsInBhZ2U2IiwicGFnZTciLCJwYWdlOCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxtQkFBYSxzQkFEUjtBQUVMQyxxQkFBZSxJQUZWO0FBR0xDLGdCQUFVLElBSEw7QUFJTEMsZ0JBQVUsSUFKTDtBQUtMQyxnQkFBVSxHQUxMO0FBTUxDLDRCQUFzQixTQU5qQjtBQU9MQyxhQUFPLEVBUEY7QUFRTEMsYUFBTyxFQVJGO0FBU0xDLGFBQU8sR0FURjtBQVVMQyxnQkFBVSxF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Ozs2QkFDUTtBQUNQLFVBQUlQLE9BQU8sSUFBWDtBQUNBLHFCQUFLTSxPQUFMLENBQWE7QUFDWEMsYUFBSywyQkFETTtBQUVYQyxnQkFBUSxLQUZHO0FBR1hDLGlCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJWLGVBQUtKLFNBQUwsR0FBaUJjLElBQUluQyxJQUFyQjtBQUNBeUIsZUFBS2EsT0FBTCxDQUFhO0FBQ1hqQix1QkFBV2MsSUFBSW5DO0FBREosV0FBYjtBQUdBNkIsa0JBQVFDLEdBQVIsQ0FBWUssSUFBSW5DLElBQWhCLEVBQXNCLFVBQXRCO0FBQ0Q7QUFUVSxPQUFiO0FBV0E2QixjQUFRQyxHQUFSLENBQVlMLEtBQUtKLFNBQWpCLEVBQTRCLGdCQUE1QjtBQUNEOzs7O0VBcklnQyxlQUFLZ0MsSTs7a0JBQW5CeEQsSyIsImZpbGUiOiJob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+i2heW4gidcbiAgfVxuICBkYXRhID0ge1xuICAgIHBob3RvcG9zdGVyOiAnLi4vaW1hZ2VzL3Bvc3Rlci5qcGcnLFxuICAgIGluZGljYXRvckRvdHM6IHRydWUsXG4gICAgYXV0b3BsYXk6IHRydWUsXG4gICAgaW50ZXJ2YWw6IDMwMDAsXG4gICAgZHVyYXRpb246IDUwMCxcbiAgICBpbmRpY2F0b3JBY3RpdmVDb2xvcjogJyNlODg4NGQnLFxuICAgIGltYWdlOiAnJyxcbiAgICB0aXRsZTogJycsXG4gICAgcHJpY2U6IDAuMCxcbiAgICBzZWxlY3RlZDogJycsXG4gICAgaWNvbjoge1xuICAgICAgc2FsdDogJy4uL2ltYWdlL3NhbHQucG5nJyxcbiAgICAgIGVkaWJsZU9pbDogJy4uL2ltYWdlL2VkaWJsZU9pbC5wbmcnLFxuICAgICAgcmljZTogJy4uL2ltYWdlL3JpY2UucG5nJyxcbiAgICAgIGJlYW5zOiAnLi4vaW1hZ2UvYmVhbnMucG5nJyxcbiAgICAgIHNhdWNlOiAnLi4vaW1hZ2Uvc2F1Y2UucG5nJyxcbiAgICAgIGhvdFBvdDogJy4uL2ltYWdlL2hvdFBvdC5wbmcnLFxuICAgICAgc25hY2tzOiAnLi4vaW1hZ2Uvc25hY2tzLnBuZycsXG4gICAgICB1c2U6ICcuLi9pbWFnZS91c2UucG5nJ1xuICAgIH0sXG4gICAgaW1nVXJsczogW1xuICAgICAgJ2h0dHBzOi8vaW1nMTEuMzYwYnV5aW1nLmNvbS9iYWJlbC9qZnMvdDEwMjc2LzM2Mi8xMjg3ODIyMDQ2LzkzNDEwL2Y3NWE3NjY0LzU5ZGY1MThhTjM3Zjg0ODliLmpwZycsXG4gICAgICAnaHR0cHM6Ly9pbWcuYWxpY2RuLmNvbS90ZnMvVEIxNmo5cGgyQk5US0pqeTBGZFhYY1BwVlhhLTUyMC0yODAuanBnX3E5MCcsXG4gICAgICAnaHR0cHM6Ly9pbWcuYWxpY2RuLmNvbS9zaW1iYS9pbWcvVEIxU24wMVg3VDg1dUpqU1pGaFN1d1BFVlhhLmpwZydcbiAgICBdLFxuICAgIGNvbW1vZGl0eTogW11cbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGdvb2RzKGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgY29uc3QgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleFxuICAgICAgbGV0IGNvbW1vZGl0eSA9IHNlbGYuY29tbW9kaXR5W2luZGV4XVxuICAgICAgY29uc29sZS5sb2coY29tbW9kaXR5KVxuICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL2NhcnRDcmVhdGUnLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHRpdGxlOiBjb21tb2RpdHkudGl0bGUsXG4gICAgICAgICAgcHJpY2U6IGNvbW1vZGl0eS5wcmljZSxcbiAgICAgICAgICBpbWFnZTogY29tbW9kaXR5LmltYWdlXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzJylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgdGl0bGU6ICfliqDlhaXmiJDlip8nLFxuICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgIGR1cmF0aW9uOiAxMDAwXG4gICAgICB9KVxuICAgIH0sXG4gICAgY2hhbmdlSW5kaWNhdG9yRG90czogZnVuY3Rpb24oZSkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgaW5kaWNhdG9yRG90czogIXRoaXMuZGF0YS5pbmRpY2F0b3JEb3RzXG4gICAgICB9KVxuICAgIH0sXG4gICAgY2hhbmdlQXV0b3BsYXk6IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGF1dG9wbGF5OiAhdGhpcy5kYXRhLmF1dG9wbGF5XG4gICAgICB9KVxuICAgIH0sXG4gICAgaW50ZXJ2YWxDaGFuZ2U6IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGludGVydmFsOiBlLmRldGFpbC52YWx1ZVxuICAgICAgfSlcbiAgICB9LFxuICAgIGR1cmF0aW9uQ2hhbmdlOiBmdW5jdGlvbihlKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBkdXJhdGlvbjogZS5kZXRhaWwudmFsdWVcbiAgICAgIH0pXG4gICAgfSxcbiAgICBwYWdlMSgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vY2xhc3Mvc2FsdCdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBwYWdlMigpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vY2xhc3MvZWRpYmxlT2lsJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIHBhZ2UzKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9jbGFzcy9yaWNlJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIHBhZ2U0KCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9jbGFzcy9iZWFucydcbiAgICAgIH0pXG4gICAgfSxcbiAgICBwYWdlNSgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vY2xhc3Mvc2F1Y2UnXG4gICAgICB9KVxuICAgIH0sXG4gICAgcGFnZTYoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL2NsYXNzL2hvdFBvdCdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBwYWdlNygpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vY2xhc3Mvc25hY2tzJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIHBhZ2U4KCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9jbGFzcy91c2UnXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBvblNob3coKSB7XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvZ2V0JyxcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgc2VsZi5jb21tb2RpdHkgPSByZXMuZGF0YVxuICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgIGNvbW1vZGl0eTogcmVzLmRhdGFcbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEsICdyZXMuZGF0YScpXG4gICAgICB9XG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyhzZWxmLmNvbW1vZGl0eSwgJ3NlbGYuY29tbW9kaXR5JylcbiAgfVxufVxuIl19
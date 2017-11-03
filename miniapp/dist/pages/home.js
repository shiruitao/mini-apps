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
      tab: ['特价', '调味品', '米面', '豆类', '酱乳类', '火锅食材', '厨房餐具'],
      currentTargetId: 0,
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
      Width: 0,
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
      tab: function tab(e) {
        var self = this;
        self.currentTargetId = e.currentTarget.id;
        console.log(e.currentTarget.id, 'e中的东西');
      },
      search: function search() {
        _wepy2.default.navigateTo({
          url: './class/search'
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
      },
      detail: function detail(e) {
        var self = this;
        var index = e.currentTarget.dataset.index;
        _wepy2.default.navigateTo({
          url: './class/detail?id=' + self.commodity[index].id
        });
        console.log(self.commodity[index].id, 'id');
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
      _wepy2.default.getSystemInfo({
        success: function success(res) {
          self.Width = res.windowWidth;
        }
      });
      _wepy2.default.request({
        url: 'http://127.0.0.1:7001/getSelect',
        method: 'GET',
        success: function success(res) {
          self.commodity = res.data;
          self.setData({
            commodity: res.data
          });
          console.log(res.data, 'res.data');
        }
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/home'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInRhYiIsImN1cnJlbnRUYXJnZXRJZCIsInBob3RvcG9zdGVyIiwiaW5kaWNhdG9yRG90cyIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJkdXJhdGlvbiIsImluZGljYXRvckFjdGl2ZUNvbG9yIiwiaW1hZ2UiLCJ0aXRsZSIsInByaWNlIiwic2VsZWN0ZWQiLCJXaWR0aCIsImljb24iLCJzYWx0IiwiZWRpYmxlT2lsIiwicmljZSIsImJlYW5zIiwic2F1Y2UiLCJob3RQb3QiLCJzbmFja3MiLCJ1c2UiLCJpbWdVcmxzIiwiY29tbW9kaXR5IiwibWV0aG9kcyIsImdvb2RzIiwiZSIsInNlbGYiLCJpbmRleCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsInN1Y2Nlc3MiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwic2hvd1RvYXN0IiwiaWQiLCJzZWFyY2giLCJuYXZpZ2F0ZVRvIiwiY2hhbmdlSW5kaWNhdG9yRG90cyIsInNldERhdGEiLCJjaGFuZ2VBdXRvcGxheSIsImludGVydmFsQ2hhbmdlIiwiZGV0YWlsIiwidmFsdWUiLCJkdXJhdGlvbkNoYW5nZSIsInBhZ2UxIiwicGFnZTIiLCJwYWdlMyIsInBhZ2U0IiwicGFnZTUiLCJwYWdlNiIsInBhZ2U3IiwicGFnZTgiLCJnZXRTeXN0ZW1JbmZvIiwid2luZG93V2lkdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsV0FBSyxDQUFDLElBQUQsRUFBTyxLQUFQLEVBQWMsSUFBZCxFQUFvQixJQUFwQixFQUEwQixLQUExQixFQUFpQyxNQUFqQyxFQUF5QyxNQUF6QyxD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WEMsaUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQlIsZUFBS0osU0FBTCxHQUFpQlksSUFBSXBDLElBQXJCO0FBQ0E0QixlQUFLZ0IsT0FBTCxDQUFhO0FBQ1hwQix1QkFBV1ksSUFBSXBDO0FBREosV0FBYjtBQUdBcUMsa0JBQVFDLEdBQVIsQ0FBWUYsSUFBSXBDLElBQWhCLEVBQXNCLFVBQXRCO0FBQ0Q7QUFUVSxPQUFiO0FBV0Q7Ozs7RUE3SmdDLGVBQUs0RCxJOztrQkFBbkIvRCxLIiwiZmlsZSI6ImhvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6LaF5biCJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgdGFiOiBbJ+eJueS7tycsICfosIPlkbPlk4EnLCAn57Gz6Z2iJywgJ+ixhuexuycsICfphbHkubPnsbsnLCAn54Gr6ZSF6aOf5p2QJywgJ+WOqOaIv+mkkOWFtyddLFxuICAgIGN1cnJlbnRUYXJnZXRJZDogMCxcbiAgICBwaG90b3Bvc3RlcjogJy4uL2ltYWdlcy9wb3N0ZXIuanBnJyxcbiAgICBpbmRpY2F0b3JEb3RzOiB0cnVlLFxuICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgIGludGVydmFsOiAzMDAwLFxuICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgaW5kaWNhdG9yQWN0aXZlQ29sb3I6ICcjZTg4ODRkJyxcbiAgICBpbWFnZTogJycsXG4gICAgdGl0bGU6ICcnLFxuICAgIHByaWNlOiAwLjAsXG4gICAgc2VsZWN0ZWQ6ICcnLFxuICAgIFdpZHRoOiAwLFxuICAgIGljb246IHtcbiAgICAgIHNhbHQ6ICcuLi9pbWFnZS9zYWx0LnBuZycsXG4gICAgICBlZGlibGVPaWw6ICcuLi9pbWFnZS9lZGlibGVPaWwucG5nJyxcbiAgICAgIHJpY2U6ICcuLi9pbWFnZS9yaWNlLnBuZycsXG4gICAgICBiZWFuczogJy4uL2ltYWdlL2JlYW5zLnBuZycsXG4gICAgICBzYXVjZTogJy4uL2ltYWdlL3NhdWNlLnBuZycsXG4gICAgICBob3RQb3Q6ICcuLi9pbWFnZS9ob3RQb3QucG5nJyxcbiAgICAgIHNuYWNrczogJy4uL2ltYWdlL3NuYWNrcy5wbmcnLFxuICAgICAgdXNlOiAnLi4vaW1hZ2UvdXNlLnBuZydcbiAgICB9LFxuICAgIGltZ1VybHM6IFtcbiAgICAgICdodHRwczovL2ltZzExLjM2MGJ1eWltZy5jb20vYmFiZWwvamZzL3QxMDI3Ni8zNjIvMTI4NzgyMjA0Ni85MzQxMC9mNzVhNzY2NC81OWRmNTE4YU4zN2Y4NDg5Yi5qcGcnLFxuICAgICAgJ2h0dHBzOi8vaW1nLmFsaWNkbi5jb20vdGZzL1RCMTZqOXBoMkJOVEtKankwRmRYWGNQcFZYYS01MjAtMjgwLmpwZ19xOTAnLFxuICAgICAgJ2h0dHBzOi8vaW1nLmFsaWNkbi5jb20vc2ltYmEvaW1nL1RCMVNuMDFYN1Q4NXVKalNaRmhTdXdQRVZYYS5qcGcnXG4gICAgXSxcbiAgICBjb21tb2RpdHk6IFtdXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBnb29kcyhlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGNvbnN0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICAgIGxldCBjb21tb2RpdHkgPSBzZWxmLmNvbW1vZGl0eVtpbmRleF1cbiAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS9jYXJ0Q3JlYXRlJyxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICB0aXRsZTogY29tbW9kaXR5LnRpdGxlLFxuICAgICAgICAgIHByaWNlOiBjb21tb2RpdHkucHJpY2UsXG4gICAgICAgICAgaW1hZ2U6IGNvbW1vZGl0eS5pbWFnZVxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnc3VjY2VzcycpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgIHRpdGxlOiAn5Yqg5YWl5oiQ5YqfJyxcbiAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICBkdXJhdGlvbjogMTAwMFxuICAgICAgfSlcbiAgICB9LFxuICAgIHRhYihlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuY3VycmVudFRhcmdldElkID0gZS5jdXJyZW50VGFyZ2V0LmlkXG4gICAgICBjb25zb2xlLmxvZyhlLmN1cnJlbnRUYXJnZXQuaWQsICdl5Lit55qE5Lic6KW/JylcbiAgICB9LFxuICAgIHNlYXJjaCgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vY2xhc3Mvc2VhcmNoJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIGNoYW5nZUluZGljYXRvckRvdHM6IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGluZGljYXRvckRvdHM6ICF0aGlzLmRhdGEuaW5kaWNhdG9yRG90c1xuICAgICAgfSlcbiAgICB9LFxuICAgIGNoYW5nZUF1dG9wbGF5OiBmdW5jdGlvbihlKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBhdXRvcGxheTogIXRoaXMuZGF0YS5hdXRvcGxheVxuICAgICAgfSlcbiAgICB9LFxuICAgIGludGVydmFsQ2hhbmdlOiBmdW5jdGlvbihlKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBpbnRlcnZhbDogZS5kZXRhaWwudmFsdWVcbiAgICAgIH0pXG4gICAgfSxcbiAgICBkdXJhdGlvbkNoYW5nZTogZnVuY3Rpb24oZSkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgZHVyYXRpb246IGUuZGV0YWlsLnZhbHVlXG4gICAgICB9KVxuICAgIH0sXG4gICAgcGFnZTEoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL2NsYXNzL3NhbHQnXG4gICAgICB9KVxuICAgIH0sXG4gICAgcGFnZTIoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL2NsYXNzL2VkaWJsZU9pbCdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBwYWdlMygpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vY2xhc3MvcmljZSdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBwYWdlNCgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vY2xhc3MvYmVhbnMnXG4gICAgICB9KVxuICAgIH0sXG4gICAgcGFnZTUoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL2NsYXNzL3NhdWNlJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIHBhZ2U2KCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9jbGFzcy9ob3RQb3QnXG4gICAgICB9KVxuICAgIH0sXG4gICAgcGFnZTcoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL2NsYXNzL3NuYWNrcydcbiAgICAgIH0pXG4gICAgfSxcbiAgICBwYWdlOCgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vY2xhc3MvdXNlJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIGRldGFpbChlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGNvbnN0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC4vY2xhc3MvZGV0YWlsP2lkPSR7c2VsZi5jb21tb2RpdHlbaW5kZXhdLmlkfWBcbiAgICAgIH0pXG4gICAgICBjb25zb2xlLmxvZyhzZWxmLmNvbW1vZGl0eVtpbmRleF0uaWQsICdpZCcpXG4gICAgfVxuICB9XG4gIG9uU2hvdygpIHtcbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgd2VweS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHNlbGYuV2lkdGggPSByZXMud2luZG93V2lkdGhcbiAgICAgIH1cbiAgICB9KVxuICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvZ2V0U2VsZWN0JyxcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgc2VsZi5jb21tb2RpdHkgPSByZXMuZGF0YVxuICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgIGNvbW1vZGl0eTogcmVzLmRhdGFcbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEsICdyZXMuZGF0YScpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19
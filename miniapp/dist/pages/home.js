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
        var where = e.currentTarget.id;
        _wepy2.default.request({
          url: 'http://127.0.0.1:7001/getClass',
          method: 'POST',
          data: {
            class: self.tab[where]
          },
          success: function success(res) {
            self.commodity = res.data;
            self.setData({
              commodity: res.data
            });
            console.log(res.data, 'res.data');
          }
        });
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
        url: 'http://127.0.0.1:7001/getClass',
        method: 'POST',
        data: {
          class: '特价'
        },
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInRhYiIsImN1cnJlbnRUYXJnZXRJZCIsInBob3RvcG9zdGVyIiwiaW5kaWNhdG9yRG90cyIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJkdXJhdGlvbiIsImluZGljYXRvckFjdGl2ZUNvbG9yIiwiaW1hZ2UiLCJ0aXRsZSIsInByaWNlIiwic2VsZWN0ZWQiLCJXaWR0aCIsImljb24iLCJzYWx0IiwiZWRpYmxlT2lsIiwicmljZSIsImJlYW5zIiwic2F1Y2UiLCJob3RQb3QiLCJzbmFja3MiLCJ1c2UiLCJpbWdVcmxzIiwiY29tbW9kaXR5IiwibWV0aG9kcyIsImdvb2RzIiwiZSIsInNlbGYiLCJpbmRleCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsInN1Y2Nlc3MiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwic2hvd1RvYXN0IiwiaWQiLCJ3aGVyZSIsImNsYXNzIiwic2V0RGF0YSIsInNlYXJjaCIsIm5hdmlnYXRlVG8iLCJjaGFuZ2VJbmRpY2F0b3JEb3RzIiwiY2hhbmdlQXV0b3BsYXkiLCJpbnRlcnZhbENoYW5nZSIsImRldGFpbCIsInZhbHVlIiwiZHVyYXRpb25DaGFuZ2UiLCJnZXRTeXN0ZW1JbmZvIiwid2luZG93V2lkdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsV0FBSyxDQUFDLElBQUQsRUFBTyxLQUFQLEVBQWMsSUFBZCxFQUFvQixJQUFwQixFQUEwQixLQUExQixFQUFpQyxNQUFqQyxFQUF5QyxNQUF6QyxDQURBO0FBRUxDLHVCQUFpQixDQUZaO0FBR0xDLG1CQUFhLHNCQUhSO0FBSUxDLHFC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RUFBRXNCLE1BQUYsQ0FBU0M7QUFEUixTQUFiO0FBR0QsT0FsRU87QUFtRVJELFlBbkVRLGtCQW1FRHRCLENBbkVDLEVBbUVFO0FBQ1IsWUFBSUMsT0FBTyxJQUFYO0FBQ0EsWUFBTUMsUUFBUUYsRUFBRUcsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JGLEtBQXRDO0FBQ0EsdUJBQUtnQixVQUFMLENBQWdCO0FBQ2RaLHNDQUEwQkwsS0FBS0osU0FBTCxDQUFlSyxLQUFmLEVBQXNCVztBQURsQyxTQUFoQjtBQUdBSCxnQkFBUUMsR0FBUixDQUFZVixLQUFLSixTQUFMLENBQWVLLEtBQWYsRUFBc0JXLEVBQWxDLEVBQXNDLElBQXRDO0FBQ0Q7QUExRU8sSzs7Ozs7NkJBNEVELENBQ1I7Ozs2QkFDUTtBQUNQLFVBQUlaLE9BQU8sSUFBWDtBQUNBLHFCQUFLd0IsYUFBTCxDQUFtQjtBQUNqQmpCLGVBRGlCLG1CQUNUQyxHQURTLEVBQ0o7QUFDWFIsZUFBS2YsS0FBTCxHQUFhdUIsSUFBSWlCLFdBQWpCO0FBQ0Q7QUFIZ0IsT0FBbkI7QUFLQSxxQkFBS3JCLE9BQUwsQ0FBYTtBQUNYQyxhQUFLLGdDQURNO0FBRVhDLGdCQUFRLE1BRkc7QUFHWGxDLGNBQU07QUFDSjBDLGlCQUFPO0FBREgsU0FISztBQU1YUCxpQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCUixlQUFLSixTQUFMLEdBQWlCWSxJQUFJcEMsSUFBckI7QUFDQTRCLGVBQUtlLE9BQUwsQ0FBYTtBQUNYbkIsdUJBQVdZLElBQUlwQztBQURKLFdBQWI7QUFHQXFDLGtCQUFRQyxHQUFSLENBQVlGLElBQUlwQyxJQUFoQixFQUFzQixVQUF0QjtBQUNEO0FBWlUsT0FBYjtBQWNEOzs7O0VBdElnQyxlQUFLc0QsSTs7a0JBQW5CekQsSyIsImZpbGUiOiJob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+i2heW4gidcbiAgfVxuICBkYXRhID0ge1xuICAgIHRhYjogWyfnibnku7cnLCAn6LCD5ZGz5ZOBJywgJ+exs+mdoicsICfosYbnsbsnLCAn6YWx5Lmz57G7JywgJ+eBq+mUhemjn+adkCcsICfljqjmiL/ppJDlhbcnXSxcbiAgICBjdXJyZW50VGFyZ2V0SWQ6IDAsXG4gICAgcGhvdG9wb3N0ZXI6ICcuLi9pbWFnZXMvcG9zdGVyLmpwZycsXG4gICAgaW5kaWNhdG9yRG90czogdHJ1ZSxcbiAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICBpbnRlcnZhbDogMzAwMCxcbiAgICBkdXJhdGlvbjogNTAwLFxuICAgIGluZGljYXRvckFjdGl2ZUNvbG9yOiAnI2U4ODg0ZCcsXG4gICAgaW1hZ2U6ICcnLFxuICAgIHRpdGxlOiAnJyxcbiAgICBwcmljZTogMC4wLFxuICAgIHNlbGVjdGVkOiAnJyxcbiAgICBXaWR0aDogMCxcbiAgICBpY29uOiB7XG4gICAgICBzYWx0OiAnLi4vaW1hZ2Uvc2FsdC5wbmcnLFxuICAgICAgZWRpYmxlT2lsOiAnLi4vaW1hZ2UvZWRpYmxlT2lsLnBuZycsXG4gICAgICByaWNlOiAnLi4vaW1hZ2UvcmljZS5wbmcnLFxuICAgICAgYmVhbnM6ICcuLi9pbWFnZS9iZWFucy5wbmcnLFxuICAgICAgc2F1Y2U6ICcuLi9pbWFnZS9zYXVjZS5wbmcnLFxuICAgICAgaG90UG90OiAnLi4vaW1hZ2UvaG90UG90LnBuZycsXG4gICAgICBzbmFja3M6ICcuLi9pbWFnZS9zbmFja3MucG5nJyxcbiAgICAgIHVzZTogJy4uL2ltYWdlL3VzZS5wbmcnXG4gICAgfSxcbiAgICBpbWdVcmxzOiBbXG4gICAgICAnaHR0cHM6Ly9pbWcxMS4zNjBidXlpbWcuY29tL2JhYmVsL2pmcy90MTAyNzYvMzYyLzEyODc4MjIwNDYvOTM0MTAvZjc1YTc2NjQvNTlkZjUxOGFOMzdmODQ4OWIuanBnJyxcbiAgICAgICdodHRwczovL2ltZy5hbGljZG4uY29tL3Rmcy9UQjE2ajlwaDJCTlRLSmp5MEZkWFhjUHBWWGEtNTIwLTI4MC5qcGdfcTkwJyxcbiAgICAgICdodHRwczovL2ltZy5hbGljZG4uY29tL3NpbWJhL2ltZy9UQjFTbjAxWDdUODV1SmpTWkZoU3V3UEVWWGEuanBnJ1xuICAgIF0sXG4gICAgY29tbW9kaXR5OiBbXVxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgZ29vZHMoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBjb25zdCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XG4gICAgICBsZXQgY29tbW9kaXR5ID0gc2VsZi5jb21tb2RpdHlbaW5kZXhdXG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvY2FydENyZWF0ZScsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgdGl0bGU6IGNvbW1vZGl0eS50aXRsZSxcbiAgICAgICAgICBwcmljZTogY29tbW9kaXR5LnByaWNlLFxuICAgICAgICAgIGltYWdlOiBjb21tb2RpdHkuaW1hZ2VcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3MnKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICB0aXRsZTogJ+WKoOWFpeaIkOWKnycsXG4gICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgZHVyYXRpb246IDEwMDBcbiAgICAgIH0pXG4gICAgfSxcbiAgICB0YWIoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmN1cnJlbnRUYXJnZXRJZCA9IGUuY3VycmVudFRhcmdldC5pZFxuICAgICAgdmFyIHdoZXJlID0gZS5jdXJyZW50VGFyZ2V0LmlkXG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvZ2V0Q2xhc3MnLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGNsYXNzOiBzZWxmLnRhYlt3aGVyZV1cbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgc2VsZi5jb21tb2RpdHkgPSByZXMuZGF0YVxuICAgICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgICBjb21tb2RpdHk6IHJlcy5kYXRhXG4gICAgICAgICAgfSlcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSwgJ3Jlcy5kYXRhJylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHNlYXJjaCgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vY2xhc3Mvc2VhcmNoJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIGNoYW5nZUluZGljYXRvckRvdHM6IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGluZGljYXRvckRvdHM6ICF0aGlzLmRhdGEuaW5kaWNhdG9yRG90c1xuICAgICAgfSlcbiAgICB9LFxuICAgIGNoYW5nZUF1dG9wbGF5OiBmdW5jdGlvbihlKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBhdXRvcGxheTogIXRoaXMuZGF0YS5hdXRvcGxheVxuICAgICAgfSlcbiAgICB9LFxuICAgIGludGVydmFsQ2hhbmdlOiBmdW5jdGlvbihlKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBpbnRlcnZhbDogZS5kZXRhaWwudmFsdWVcbiAgICAgIH0pXG4gICAgfSxcbiAgICBkdXJhdGlvbkNoYW5nZTogZnVuY3Rpb24oZSkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgZHVyYXRpb246IGUuZGV0YWlsLnZhbHVlXG4gICAgICB9KVxuICAgIH0sXG4gICAgZGV0YWlsKGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgY29uc3QgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleFxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgLi9jbGFzcy9kZXRhaWw/aWQ9JHtzZWxmLmNvbW1vZGl0eVtpbmRleF0uaWR9YFxuICAgICAgfSlcbiAgICAgIGNvbnNvbGUubG9nKHNlbGYuY29tbW9kaXR5W2luZGV4XS5pZCwgJ2lkJylcbiAgICB9XG4gIH1cbiAgb25TaG93KCkge1xuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgc2VsZi5XaWR0aCA9IHJlcy53aW5kb3dXaWR0aFxuICAgICAgfVxuICAgIH0pXG4gICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS9nZXRDbGFzcycsXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgY2xhc3M6ICfnibnku7cnXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIHNlbGYuY29tbW9kaXR5ID0gcmVzLmRhdGFcbiAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICBjb21tb2RpdHk6IHJlcy5kYXRhXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhLCAncmVzLmRhdGEnKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==
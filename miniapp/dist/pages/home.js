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
        console.log(self.currentTargetId, '是不是特价');
        console.log(self.tab[where], '类型');
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInRhYiIsImN1cnJlbnRUYXJnZXRJZCIsInBob3RvcG9zdGVyIiwiaW5kaWNhdG9yRG90cyIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJkdXJhdGlvbiIsImluZGljYXRvckFjdGl2ZUNvbG9yIiwiaW1hZ2UiLCJ0aXRsZSIsInByaWNlIiwic2VsZWN0ZWQiLCJXaWR0aCIsImljb24iLCJzYWx0IiwiZWRpYmxlT2lsIiwicmljZSIsImJlYW5zIiwic2F1Y2UiLCJob3RQb3QiLCJzbmFja3MiLCJ1c2UiLCJpbWdVcmxzIiwiY29tbW9kaXR5IiwibWV0aG9kcyIsImdvb2RzIiwiZSIsInNlbGYiLCJpbmRleCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsInN1Y2Nlc3MiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwic2hvd1RvYXN0IiwiaWQiLCJ3aGVyZSIsImNsYXNzIiwic2V0RGF0YSIsInNlYXJjaCIsIm5hdmlnYXRlVG8iLCJjaGFuZ2VJbmRpY2F0b3JEb3RzIiwiY2hhbmdlQXV0b3BsYXkiLCJpbnRlcnZhbENoYW5nZSIsImRldGFpbCIsInZhbHVlIiwiZHVyYXRpb25DaGFuZ2UiLCJnZXRTeXN0ZW1JbmZvIiwid2luZG93V2lkdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsV0FBSyxDQUFDLElBQUQsRUFBTyxLQUFQLEVBQWMsSUFBZCxFQUFvQixJQUFwQixFQUEwQixLQUExQixFQUFpQyxNQUFqQyxFQUF5QyxNQUF6QyxDQURBO0FBRUxDLHVCQUFpQixDQUZaO0FBR0xDLG1CQUFhLHNCQUhSO0FBSUxDLHFC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IjoiaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfotoXluIInXG4gIH1cbiAgZGF0YSA9IHtcbiAgICB0YWI6IFsn54m55Lu3JywgJ+iwg+WRs+WTgScsICfnsbPpnaInLCAn6LGG57G7JywgJ+mFseS5s+exuycsICfngavplIXpo5/mnZAnLCAn5Y6o5oi/6aSQ5YW3J10sXG4gICAgY3VycmVudFRhcmdldElkOiAwLFxuICAgIHBob3RvcG9zdGVyOiAnLi4vaW1hZ2VzL3Bvc3Rlci5qcGcnLFxuICAgIGluZGljYXRvckRvdHM6IHRydWUsXG4gICAgYXV0b3BsYXk6IHRydWUsXG4gICAgaW50ZXJ2YWw6IDMwMDAsXG4gICAgZHVyYXRpb246IDUwMCxcbiAgICBpbmRpY2F0b3JBY3RpdmVDb2xvcjogJyNlODg4NGQnLFxuICAgIGltYWdlOiAnJyxcbiAgICB0aXRsZTogJycsXG4gICAgcHJpY2U6IDAuMCxcbiAgICBzZWxlY3RlZDogJycsXG4gICAgV2lkdGg6IDAsXG4gICAgaWNvbjoge1xuICAgICAgc2FsdDogJy4uL2ltYWdlL3NhbHQucG5nJyxcbiAgICAgIGVkaWJsZU9pbDogJy4uL2ltYWdlL2VkaWJsZU9pbC5wbmcnLFxuICAgICAgcmljZTogJy4uL2ltYWdlL3JpY2UucG5nJyxcbiAgICAgIGJlYW5zOiAnLi4vaW1hZ2UvYmVhbnMucG5nJyxcbiAgICAgIHNhdWNlOiAnLi4vaW1hZ2Uvc2F1Y2UucG5nJyxcbiAgICAgIGhvdFBvdDogJy4uL2ltYWdlL2hvdFBvdC5wbmcnLFxuICAgICAgc25hY2tzOiAnLi4vaW1hZ2Uvc25hY2tzLnBuZycsXG4gICAgICB1c2U6ICcuLi9pbWFnZS91c2UucG5nJ1xuICAgIH0sXG4gICAgaW1nVXJsczogW1xuICAgICAgJ2h0dHBzOi8vaW1nMTEuMzYwYnV5aW1nLmNvbS9iYWJlbC9qZnMvdDEwMjc2LzM2Mi8xMjg3ODIyMDQ2LzkzNDEwL2Y3NWE3NjY0LzU5ZGY1MThhTjM3Zjg0ODliLmpwZycsXG4gICAgICAnaHR0cHM6Ly9pbWcuYWxpY2RuLmNvbS90ZnMvVEIxNmo5cGgyQk5US0pqeTBGZFhYY1BwVlhhLTUyMC0yODAuanBnX3E5MCcsXG4gICAgICAnaHR0cHM6Ly9pbWcuYWxpY2RuLmNvbS9zaW1iYS9pbWcvVEIxU24wMVg3VDg1dUpqU1pGaFN1d1BFVlhhLmpwZydcbiAgICBdLFxuICAgIGNvbW1vZGl0eTogW11cbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGdvb2RzKGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgY29uc3QgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleFxuICAgICAgbGV0IGNvbW1vZGl0eSA9IHNlbGYuY29tbW9kaXR5W2luZGV4XVxuICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL2NhcnRDcmVhdGUnLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHRpdGxlOiBjb21tb2RpdHkudGl0bGUsXG4gICAgICAgICAgcHJpY2U6IGNvbW1vZGl0eS5wcmljZSxcbiAgICAgICAgICBpbWFnZTogY29tbW9kaXR5LmltYWdlXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzJylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgdGl0bGU6ICfliqDlhaXmiJDlip8nLFxuICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgIGR1cmF0aW9uOiAxMDAwXG4gICAgICB9KVxuICAgIH0sXG4gICAgdGFiKGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5jdXJyZW50VGFyZ2V0SWQgPSBlLmN1cnJlbnRUYXJnZXQuaWRcbiAgICAgIHZhciB3aGVyZSA9IGUuY3VycmVudFRhcmdldC5pZFxuICAgICAgY29uc29sZS5sb2coc2VsZi5jdXJyZW50VGFyZ2V0SWQsICfmmK/kuI3mmK/nibnku7cnKVxuICAgICAgY29uc29sZS5sb2coc2VsZi50YWJbd2hlcmVdLCAn57G75Z6LJylcbiAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS9nZXRDbGFzcycsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgY2xhc3M6IHNlbGYudGFiW3doZXJlXVxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICBzZWxmLmNvbW1vZGl0eSA9IHJlcy5kYXRhXG4gICAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICAgIGNvbW1vZGl0eTogcmVzLmRhdGFcbiAgICAgICAgICB9KVxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhLCAncmVzLmRhdGEnKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgc2VhcmNoKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9jbGFzcy9zZWFyY2gnXG4gICAgICB9KVxuICAgIH0sXG4gICAgY2hhbmdlSW5kaWNhdG9yRG90czogZnVuY3Rpb24oZSkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgaW5kaWNhdG9yRG90czogIXRoaXMuZGF0YS5pbmRpY2F0b3JEb3RzXG4gICAgICB9KVxuICAgIH0sXG4gICAgY2hhbmdlQXV0b3BsYXk6IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGF1dG9wbGF5OiAhdGhpcy5kYXRhLmF1dG9wbGF5XG4gICAgICB9KVxuICAgIH0sXG4gICAgaW50ZXJ2YWxDaGFuZ2U6IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGludGVydmFsOiBlLmRldGFpbC52YWx1ZVxuICAgICAgfSlcbiAgICB9LFxuICAgIGR1cmF0aW9uQ2hhbmdlOiBmdW5jdGlvbihlKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBkdXJhdGlvbjogZS5kZXRhaWwudmFsdWVcbiAgICAgIH0pXG4gICAgfSxcbiAgICBkZXRhaWwoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBjb25zdCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAuL2NsYXNzL2RldGFpbD9pZD0ke3NlbGYuY29tbW9kaXR5W2luZGV4XS5pZH1gXG4gICAgICB9KVxuICAgICAgY29uc29sZS5sb2coc2VsZi5jb21tb2RpdHlbaW5kZXhdLmlkLCAnaWQnKVxuICAgIH1cbiAgfVxuICBvblNob3coKSB7XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHdlcHkuZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBzZWxmLldpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICB9XG4gICAgfSlcbiAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL2dldENsYXNzJyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgZGF0YToge1xuICAgICAgICBjbGFzczogJ+eJueS7tydcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgc2VsZi5jb21tb2RpdHkgPSByZXMuZGF0YVxuICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgIGNvbW1vZGl0eTogcmVzLmRhdGFcbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEsICdyZXMuZGF0YScpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19
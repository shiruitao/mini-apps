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
      Width: 0,
      colorA: '#f56d11',
      colorB: '',
      colorC: '',
      colorD: '',
      colorE: '',
      colorF: '',
      colorG: '',
      colorH: '',
      colora: '#f56d11',
      colorb: 'white',
      colorc: 'white',
      colord: 'white',
      colore: 'white',
      colorf: 'white',
      colorg: 'white',
      colorh: 'white',
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
      },
      classA: function classA() {
        var self = this;
        self.colorA = '#f56d11';
        self.colora = '#f56d11';
        self.colorB = 'black';
        self.colorb = 'white';
        self.colorC = 'black';
        self.colorc = 'white';
        self.colorD = 'black';
        self.colord = 'white';
        self.colorE = 'black';
        self.colore = 'white';
        self.colorF = 'black';
        self.colorf = 'white';
        self.colorG = 'black';
        self.colorg = 'white';
        self.colorH = 'black';
        self.colorh = 'white';
      },
      classB: function classB() {
        var self = this;
        self.colorA = 'black';
        self.colora = 'white';
        self.colorB = '#f56d11';
        self.colorb = '#f56d11';
        self.colorC = 'black';
        self.colorc = 'white';
        self.colorD = 'black';
        self.colord = 'white';
        self.colorE = 'black';
        self.colore = 'white';
        self.colorF = 'black';
        self.colorf = 'white';
        self.colorG = 'black';
        self.colorg = 'white';
        self.colorH = 'black';
        self.colorh = 'white';
      },
      classC: function classC() {
        var self = this;
        self.colorA = 'black';
        self.colora = 'white';
        self.colorB = 'black';
        self.colorb = 'white';
        self.colorC = '#f56d11';
        self.colorc = '#f56d11';
        self.colorD = 'black';
        self.colord = 'white';
        self.colorE = 'black';
        self.colore = 'white';
        self.colorF = 'black';
        self.colorf = 'white';
        self.colorG = 'black';
        self.colorg = 'white';
        self.colorH = 'black';
        self.colorh = 'white';
      },
      classD: function classD() {
        var self = this;
        self.colorA = 'black';
        self.colora = 'white';
        self.colorB = 'black';
        self.colorb = 'white';
        self.colorC = 'black';
        self.colorc = 'white';
        self.colorD = '#f56d11';
        self.colord = '#f56d11';
        self.colorE = 'black';
        self.colore = 'white';
        self.colorF = 'black';
        self.colorf = 'white';
        self.colorG = 'black';
        self.colorg = 'white';
        self.colorH = 'black';
        self.colorh = 'white';
      },
      classE: function classE() {
        var self = this;
        self.colorA = 'black';
        self.colora = 'white';
        self.colorB = 'black';
        self.colorb = 'white';
        self.colorC = 'black';
        self.colorc = 'white';
        self.colorD = 'black';
        self.colord = 'white';
        self.colorE = '#f56d11';
        self.colore = '#f56d11';
        self.colorF = 'black';
        self.colorf = 'white';
        self.colorG = 'black';
        self.colorg = 'white';
        self.colorH = 'black';
        self.colorh = 'white';
      },
      classF: function classF() {
        var self = this;
        self.colorA = 'black';
        self.colora = 'white';
        self.colorB = 'black';
        self.colorb = 'white';
        self.colorC = 'black';
        self.colorc = 'white';
        self.colorD = 'black';
        self.colord = 'white';
        self.colorE = 'black';
        self.colore = 'white';
        self.colorF = '#f56d11';
        self.colorf = '#f56d11';
        self.colorG = 'black';
        self.colorg = 'white';
        self.colorH = 'black';
        self.colorh = 'white';
      },
      classG: function classG() {
        var self = this;
        self.colorA = 'black';
        self.colora = 'white';
        self.colorB = 'black';
        self.colorb = 'white';
        self.colorC = 'black';
        self.colorc = 'white';
        self.colorD = 'black';
        self.colord = 'white';
        self.colorE = 'black';
        self.colore = 'white';
        self.colorF = 'black';
        self.colorf = 'white';
        self.colorG = '#f56d11';
        self.colorg = '#f56d11';
        self.colorH = 'black';
        self.colorh = 'white';
      },
      classH: function classH() {
        var self = this;
        self.colorA = 'black';
        self.colora = 'white';
        self.colorB = 'black';
        self.colorb = 'white';
        self.colorC = 'black';
        self.colorc = 'white';
        self.colorD = 'black';
        self.colord = 'white';
        self.colorE = 'black';
        self.colore = 'white';
        self.colorF = 'black';
        self.colorf = 'white';
        self.colorG = 'black';
        self.colorg = 'white';
        self.colorH = '#f56d11';
        self.colorh = '#f56d11';
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInBob3RvcG9zdGVyIiwiaW5kaWNhdG9yRG90cyIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJkdXJhdGlvbiIsImluZGljYXRvckFjdGl2ZUNvbG9yIiwiaW1hZ2UiLCJ0aXRsZSIsInByaWNlIiwic2VsZWN0ZWQiLCJXaWR0aCIsImNvbG9yQSIsImNvbG9yQiIsImNvbG9yQyIsImNvbG9yRCIsImNvbG9yRSIsImNvbG9yRiIsImNvbG9yRyIsImNvbG9ySCIsImNvbG9yYSIsImNvbG9yYiIsImNvbG9yYyIsImNvbG9yZCIsImNvbG9yZSIsImNvbG9yZiIsImNvbG9yZyIsImNvbG9yaCIsImljb24iLCJzYWx0IiwiZWRpYmxlT2lsIiwicmljZSIsImJlYW5zIiwic2F1Y2UiLCJob3RQb3QiLCJzbmFja3MiLCJ1c2UiLCJpbWdVcmxzIiwiY29tbW9kaXR5IiwibWV0aG9kcyIsImdvb2RzIiwiZSIsInNlbGYiLCJpbmRleCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsInN1Y2Nlc3MiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwic2hvd1RvYXN0IiwiY2hhbmdlSW5kaWNhdG9yRG90cyIsInNldERhdGEiLCJjaGFuZ2VBdXRvcGxheSIsImludGVydmFsQ2hhbmdlIiwiZGV0YWlsIiwidmFsdWUiLCJkdXJhdGlvbkNoYW5nZSIsInBhZ2UxIiwibmF2aWdhdGVUbyIsInBhZ2UyIiwicGFnZTMiLCJwYWdlNCIsInBhZ2U1IiwicGFnZTYiLCJwYWdlNyIsInBhZ2U4IiwiaWQiLCJjbGFzc0EiLCJjbGFzc0IiLCJjbGFzc0MiLCJjbGFzc0QiLCJjbGFzc0UiLCJjbGFzc0YiLCJjbGFzc0ciLCJjbGFzc0giLCJnZXRTeXN0ZW1JbmZvIiwid2luZG93V2lkdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7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dCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6LaF5biCJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgcGhvdG9wb3N0ZXI6ICcuLi9pbWFnZXMvcG9zdGVyLmpwZycsXG4gICAgaW5kaWNhdG9yRG90czogdHJ1ZSxcbiAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICBpbnRlcnZhbDogMzAwMCxcbiAgICBkdXJhdGlvbjogNTAwLFxuICAgIGluZGljYXRvckFjdGl2ZUNvbG9yOiAnI2U4ODg0ZCcsXG4gICAgaW1hZ2U6ICcnLFxuICAgIHRpdGxlOiAnJyxcbiAgICBwcmljZTogMC4wLFxuICAgIHNlbGVjdGVkOiAnJyxcbiAgICBXaWR0aDogMCxcbiAgICBjb2xvckE6ICcjZjU2ZDExJyxcbiAgICBjb2xvckI6ICcnLFxuICAgIGNvbG9yQzogJycsXG4gICAgY29sb3JEOiAnJyxcbiAgICBjb2xvckU6ICcnLFxuICAgIGNvbG9yRjogJycsXG4gICAgY29sb3JHOiAnJyxcbiAgICBjb2xvckg6ICcnLFxuICAgIGNvbG9yYTogJyNmNTZkMTEnLFxuICAgIGNvbG9yYjogJ3doaXRlJyxcbiAgICBjb2xvcmM6ICd3aGl0ZScsXG4gICAgY29sb3JkOiAnd2hpdGUnLFxuICAgIGNvbG9yZTogJ3doaXRlJyxcbiAgICBjb2xvcmY6ICd3aGl0ZScsXG4gICAgY29sb3JnOiAnd2hpdGUnLFxuICAgIGNvbG9yaDogJ3doaXRlJyxcbiAgICBpY29uOiB7XG4gICAgICBzYWx0OiAnLi4vaW1hZ2Uvc2FsdC5wbmcnLFxuICAgICAgZWRpYmxlT2lsOiAnLi4vaW1hZ2UvZWRpYmxlT2lsLnBuZycsXG4gICAgICByaWNlOiAnLi4vaW1hZ2UvcmljZS5wbmcnLFxuICAgICAgYmVhbnM6ICcuLi9pbWFnZS9iZWFucy5wbmcnLFxuICAgICAgc2F1Y2U6ICcuLi9pbWFnZS9zYXVjZS5wbmcnLFxuICAgICAgaG90UG90OiAnLi4vaW1hZ2UvaG90UG90LnBuZycsXG4gICAgICBzbmFja3M6ICcuLi9pbWFnZS9zbmFja3MucG5nJyxcbiAgICAgIHVzZTogJy4uL2ltYWdlL3VzZS5wbmcnXG4gICAgfSxcbiAgICBpbWdVcmxzOiBbXG4gICAgICAnaHR0cHM6Ly9pbWcxMS4zNjBidXlpbWcuY29tL2JhYmVsL2pmcy90MTAyNzYvMzYyLzEyODc4MjIwNDYvOTM0MTAvZjc1YTc2NjQvNTlkZjUxOGFOMzdmODQ4OWIuanBnJyxcbiAgICAgICdodHRwczovL2ltZy5hbGljZG4uY29tL3Rmcy9UQjE2ajlwaDJCTlRLSmp5MEZkWFhjUHBWWGEtNTIwLTI4MC5qcGdfcTkwJyxcbiAgICAgICdodHRwczovL2ltZy5hbGljZG4uY29tL3NpbWJhL2ltZy9UQjFTbjAxWDdUODV1SmpTWkZoU3V3UEVWWGEuanBnJ1xuICAgIF0sXG4gICAgY29tbW9kaXR5OiBbXVxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgZ29vZHMoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBjb25zdCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XG4gICAgICBsZXQgY29tbW9kaXR5ID0gc2VsZi5jb21tb2RpdHlbaW5kZXhdXG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvY2FydENyZWF0ZScsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgdGl0bGU6IGNvbW1vZGl0eS50aXRsZSxcbiAgICAgICAgICBwcmljZTogY29tbW9kaXR5LnByaWNlLFxuICAgICAgICAgIGltYWdlOiBjb21tb2RpdHkuaW1hZ2VcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3MnKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICB0aXRsZTogJ+WKoOWFpeaIkOWKnycsXG4gICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgZHVyYXRpb246IDEwMDBcbiAgICAgIH0pXG4gICAgfSxcbiAgICBjaGFuZ2VJbmRpY2F0b3JEb3RzOiBmdW5jdGlvbihlKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBpbmRpY2F0b3JEb3RzOiAhdGhpcy5kYXRhLmluZGljYXRvckRvdHNcbiAgICAgIH0pXG4gICAgfSxcbiAgICBjaGFuZ2VBdXRvcGxheTogZnVuY3Rpb24oZSkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgYXV0b3BsYXk6ICF0aGlzLmRhdGEuYXV0b3BsYXlcbiAgICAgIH0pXG4gICAgfSxcbiAgICBpbnRlcnZhbENoYW5nZTogZnVuY3Rpb24oZSkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgaW50ZXJ2YWw6IGUuZGV0YWlsLnZhbHVlXG4gICAgICB9KVxuICAgIH0sXG4gICAgZHVyYXRpb25DaGFuZ2U6IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGR1cmF0aW9uOiBlLmRldGFpbC52YWx1ZVxuICAgICAgfSlcbiAgICB9LFxuICAgIHBhZ2UxKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9jbGFzcy9zYWx0J1xuICAgICAgfSlcbiAgICB9LFxuICAgIHBhZ2UyKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9jbGFzcy9lZGlibGVPaWwnXG4gICAgICB9KVxuICAgIH0sXG4gICAgcGFnZTMoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL2NsYXNzL3JpY2UnXG4gICAgICB9KVxuICAgIH0sXG4gICAgcGFnZTQoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL2NsYXNzL2JlYW5zJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIHBhZ2U1KCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9jbGFzcy9zYXVjZSdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBwYWdlNigpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vY2xhc3MvaG90UG90J1xuICAgICAgfSlcbiAgICB9LFxuICAgIHBhZ2U3KCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9jbGFzcy9zbmFja3MnXG4gICAgICB9KVxuICAgIH0sXG4gICAgcGFnZTgoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL2NsYXNzL3VzZSdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBkZXRhaWwoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBjb25zdCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAuL2NsYXNzL2RldGFpbD9pZD0ke3NlbGYuY29tbW9kaXR5W2luZGV4XS5pZH1gXG4gICAgICB9KVxuICAgICAgY29uc29sZS5sb2coc2VsZi5jb21tb2RpdHlbaW5kZXhdLmlkLCAnaWQnKVxuICAgIH0sXG4gICAgY2xhc3NBKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmNvbG9yQSA9ICcjZjU2ZDExJ1xuICAgICAgc2VsZi5jb2xvcmEgPSAnI2Y1NmQxMSdcbiAgICAgIHNlbGYuY29sb3JCID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcmIgPSAnd2hpdGUnXG4gICAgICBzZWxmLmNvbG9yQyA9ICdibGFjaydcbiAgICAgIHNlbGYuY29sb3JjID0gJ3doaXRlJ1xuICAgICAgc2VsZi5jb2xvckQgPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9yZCA9ICd3aGl0ZSdcbiAgICAgIHNlbGYuY29sb3JFID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcmUgPSAnd2hpdGUnXG4gICAgICBzZWxmLmNvbG9yRiA9ICdibGFjaydcbiAgICAgIHNlbGYuY29sb3JmID0gJ3doaXRlJ1xuICAgICAgc2VsZi5jb2xvckcgPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9yZyA9ICd3aGl0ZSdcbiAgICAgIHNlbGYuY29sb3JIID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcmggPSAnd2hpdGUnXG4gICAgfSxcbiAgICBjbGFzc0IoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuY29sb3JBID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcmEgPSAnd2hpdGUnXG4gICAgICBzZWxmLmNvbG9yQiA9ICcjZjU2ZDExJ1xuICAgICAgc2VsZi5jb2xvcmIgPSAnI2Y1NmQxMSdcbiAgICAgIHNlbGYuY29sb3JDID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcmMgPSAnd2hpdGUnXG4gICAgICBzZWxmLmNvbG9yRCA9ICdibGFjaydcbiAgICAgIHNlbGYuY29sb3JkID0gJ3doaXRlJ1xuICAgICAgc2VsZi5jb2xvckUgPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9yZSA9ICd3aGl0ZSdcbiAgICAgIHNlbGYuY29sb3JGID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcmYgPSAnd2hpdGUnXG4gICAgICBzZWxmLmNvbG9yRyA9ICdibGFjaydcbiAgICAgIHNlbGYuY29sb3JnID0gJ3doaXRlJ1xuICAgICAgc2VsZi5jb2xvckggPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9yaCA9ICd3aGl0ZSdcbiAgICB9LFxuICAgIGNsYXNzQygpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5jb2xvckEgPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9yYSA9ICd3aGl0ZSdcbiAgICAgIHNlbGYuY29sb3JCID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcmIgPSAnd2hpdGUnXG4gICAgICBzZWxmLmNvbG9yQyA9ICcjZjU2ZDExJ1xuICAgICAgc2VsZi5jb2xvcmMgPSAnI2Y1NmQxMSdcbiAgICAgIHNlbGYuY29sb3JEID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcmQgPSAnd2hpdGUnXG4gICAgICBzZWxmLmNvbG9yRSA9ICdibGFjaydcbiAgICAgIHNlbGYuY29sb3JlID0gJ3doaXRlJ1xuICAgICAgc2VsZi5jb2xvckYgPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9yZiA9ICd3aGl0ZSdcbiAgICAgIHNlbGYuY29sb3JHID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcmcgPSAnd2hpdGUnXG4gICAgICBzZWxmLmNvbG9ySCA9ICdibGFjaydcbiAgICAgIHNlbGYuY29sb3JoID0gJ3doaXRlJ1xuICAgIH0sXG4gICAgY2xhc3NEKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmNvbG9yQSA9ICdibGFjaydcbiAgICAgIHNlbGYuY29sb3JhID0gJ3doaXRlJ1xuICAgICAgc2VsZi5jb2xvckIgPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9yYiA9ICd3aGl0ZSdcbiAgICAgIHNlbGYuY29sb3JDID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcmMgPSAnd2hpdGUnXG4gICAgICBzZWxmLmNvbG9yRCA9ICcjZjU2ZDExJ1xuICAgICAgc2VsZi5jb2xvcmQgPSAnI2Y1NmQxMSdcbiAgICAgIHNlbGYuY29sb3JFID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcmUgPSAnd2hpdGUnXG4gICAgICBzZWxmLmNvbG9yRiA9ICdibGFjaydcbiAgICAgIHNlbGYuY29sb3JmID0gJ3doaXRlJ1xuICAgICAgc2VsZi5jb2xvckcgPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9yZyA9ICd3aGl0ZSdcbiAgICAgIHNlbGYuY29sb3JIID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcmggPSAnd2hpdGUnXG4gICAgfSxcbiAgICBjbGFzc0UoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuY29sb3JBID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcmEgPSAnd2hpdGUnXG4gICAgICBzZWxmLmNvbG9yQiA9ICdibGFjaydcbiAgICAgIHNlbGYuY29sb3JiID0gJ3doaXRlJ1xuICAgICAgc2VsZi5jb2xvckMgPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9yYyA9ICd3aGl0ZSdcbiAgICAgIHNlbGYuY29sb3JEID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcmQgPSAnd2hpdGUnXG4gICAgICBzZWxmLmNvbG9yRSA9ICcjZjU2ZDExJ1xuICAgICAgc2VsZi5jb2xvcmUgPSAnI2Y1NmQxMSdcbiAgICAgIHNlbGYuY29sb3JGID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcmYgPSAnd2hpdGUnXG4gICAgICBzZWxmLmNvbG9yRyA9ICdibGFjaydcbiAgICAgIHNlbGYuY29sb3JnID0gJ3doaXRlJ1xuICAgICAgc2VsZi5jb2xvckggPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9yaCA9ICd3aGl0ZSdcbiAgICB9LFxuICAgIGNsYXNzRigpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5jb2xvckEgPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9yYSA9ICd3aGl0ZSdcbiAgICAgIHNlbGYuY29sb3JCID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcmIgPSAnd2hpdGUnXG4gICAgICBzZWxmLmNvbG9yQyA9ICdibGFjaydcbiAgICAgIHNlbGYuY29sb3JjID0gJ3doaXRlJ1xuICAgICAgc2VsZi5jb2xvckQgPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9yZCA9ICd3aGl0ZSdcbiAgICAgIHNlbGYuY29sb3JFID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcmUgPSAnd2hpdGUnXG4gICAgICBzZWxmLmNvbG9yRiA9ICcjZjU2ZDExJ1xuICAgICAgc2VsZi5jb2xvcmYgPSAnI2Y1NmQxMSdcbiAgICAgIHNlbGYuY29sb3JHID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcmcgPSAnd2hpdGUnXG4gICAgICBzZWxmLmNvbG9ySCA9ICdibGFjaydcbiAgICAgIHNlbGYuY29sb3JoID0gJ3doaXRlJ1xuICAgIH0sXG4gICAgY2xhc3NHKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmNvbG9yQSA9ICdibGFjaydcbiAgICAgIHNlbGYuY29sb3JhID0gJ3doaXRlJ1xuICAgICAgc2VsZi5jb2xvckIgPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9yYiA9ICd3aGl0ZSdcbiAgICAgIHNlbGYuY29sb3JDID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcmMgPSAnd2hpdGUnXG4gICAgICBzZWxmLmNvbG9yRCA9ICdibGFjaydcbiAgICAgIHNlbGYuY29sb3JkID0gJ3doaXRlJ1xuICAgICAgc2VsZi5jb2xvckUgPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9yZSA9ICd3aGl0ZSdcbiAgICAgIHNlbGYuY29sb3JGID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcmYgPSAnd2hpdGUnXG4gICAgICBzZWxmLmNvbG9yRyA9ICcjZjU2ZDExJ1xuICAgICAgc2VsZi5jb2xvcmcgPSAnI2Y1NmQxMSdcbiAgICAgIHNlbGYuY29sb3JIID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcmggPSAnd2hpdGUnXG4gICAgfSxcbiAgICBjbGFzc0goKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuY29sb3JBID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcmEgPSAnd2hpdGUnXG4gICAgICBzZWxmLmNvbG9yQiA9ICdibGFjaydcbiAgICAgIHNlbGYuY29sb3JiID0gJ3doaXRlJ1xuICAgICAgc2VsZi5jb2xvckMgPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9yYyA9ICd3aGl0ZSdcbiAgICAgIHNlbGYuY29sb3JEID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcmQgPSAnd2hpdGUnXG4gICAgICBzZWxmLmNvbG9yRSA9ICdibGFjaydcbiAgICAgIHNlbGYuY29sb3JlID0gJ3doaXRlJ1xuICAgICAgc2VsZi5jb2xvckYgPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9yZiA9ICd3aGl0ZSdcbiAgICAgIHNlbGYuY29sb3JHID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcmcgPSAnd2hpdGUnXG4gICAgICBzZWxmLmNvbG9ySCA9ICcjZjU2ZDExJ1xuICAgICAgc2VsZi5jb2xvcmggPSAnI2Y1NmQxMSdcbiAgICB9XG4gIH1cbiAgb25TaG93KCkge1xuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgc2VsZi5XaWR0aCA9IHJlcy53aW5kb3dXaWR0aFxuICAgICAgfVxuICAgIH0pXG4gICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS9nZXRTZWxlY3QnLFxuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBzZWxmLmNvbW1vZGl0eSA9IHJlcy5kYXRhXG4gICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgY29tbW9kaXR5OiByZXMuZGF0YVxuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSwgJ3Jlcy5kYXRhJylcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInBob3RvcG9zdGVyIiwiaW5kaWNhdG9yRG90cyIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJkdXJhdGlvbiIsImluZGljYXRvckFjdGl2ZUNvbG9yIiwiaW1hZ2UiLCJ0aXRsZSIsInByaWNlIiwic2VsZWN0ZWQiLCJXaWR0aCIsImNvbG9yQSIsImNvbG9yQiIsImNvbG9yQyIsImNvbG9yRCIsImNvbG9yRSIsImNvbG9yRiIsImNvbG9yRyIsImNvbG9ySCIsImNvbG9yYSIsImNvbG9yYiIsImNvbG9yYyIsImNvbG9yZCIsImNvbG9yZSIsImNvbG9yZiIsImNvbG9yZyIsImNvbG9yaCIsImljb24iLCJzYWx0IiwiZWRpYmxlT2lsIiwicmljZSIsImJlYW5zIiwic2F1Y2UiLCJob3RQb3QiLCJzbmFja3MiLCJ1c2UiLCJpbWdVcmxzIiwiY29tbW9kaXR5IiwibWV0aG9kcyIsImdvb2RzIiwiZSIsInNlbGYiLCJpbmRleCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsInN1Y2Nlc3MiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwic2hvd1RvYXN0Iiwic2VhcmNoIiwibmF2aWdhdGVUbyIsImNoYW5nZUluZGljYXRvckRvdHMiLCJzZXREYXRhIiwiY2hhbmdlQXV0b3BsYXkiLCJpbnRlcnZhbENoYW5nZSIsImRldGFpbCIsInZhbHVlIiwiZHVyYXRpb25DaGFuZ2UiLCJwYWdlMSIsInBhZ2UyIiwicGFnZTMiLCJwYWdlNCIsInBhZ2U1IiwicGFnZTYiLCJwYWdlNyIsInBhZ2U4IiwiaWQiLCJjbGFzc0EiLCJjbGFzc0IiLCJjbGFzc0MiLCJjbGFzc0QiLCJjbGFzc0UiLCJjbGFzc0YiLCJjbGFzc0ciLCJjbGFzc0giLCJnZXRTeXN0ZW1JbmZvIiwid2luZG93V2lkdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsbUJBQWEsc0JBRFI7QUFFTEMscUJBQWUsSUFGVjtBQUdMQyxnQkFBVSxJQUhMO0FBSUxDLGdCQUFVLElBSkw7QUFLTEMsZ0JBQVUsR0FMTDtBQU1MQyw0QkFBc0IsU0FOakI7QUFPTEMsYUFBTyxFQVBGO0FBUUxDLGFBQU8sRUFSRjtBQVNMQyxhQUFPLEdBVEY7QUFVTEMsZ0JBQVUsRUFWTDtBQVdMQyxhQUFPLENBWEY7QUFZTEMsY0FBUSxTQVpIO0FBYUxDLGNBQVEsRUFiSDtBQWNMQyxjQUFRLEVBZEg7QUFlTEMsY0FBUSxFQWZIO0FBZ0JMQyxjQUFRLEVBaEJIO0FBaUJMQyxjQUFRLEVBakJIO0FBa0JMQyxjQUFRLEVBbEJIO0FBbUJMQyxjQUFRLEVBbkJIO0FBb0JMQyxjQUFRLFNBcEJIO0FBcUJMQyxjQUFRLE9BckJIO0FBc0JMQyxjQUFRLE9BdEJIO0FBdUJMQyxjQUFRLE9BdkJIO0FBd0JMQyxjQUFRLE9BeEJIO0FBeUJMQyxjQUFRLE9BekJIO0FBMEJMQyxjQUFRLE9BMUJIO0FBMkJMQyxjQUFRLE9BM0JIO0FBNEJMQyxZQUFNO0FBQ0pDLGNBQU0sbUJBREY7QUFFSkMsbUJBQVcsd0JBRlA7QUFHSkMsY0FBTSxtQkFIRjtBQUlKQyxlQUFPLG9CQUpIO0FBS0pDLGVBQU8sb0JBTEg7QUFNSkMsZ0JBQVEscUJBTko7QUFPSkMsZ0JBQVEscUJBUEo7QUFRSkMsYUFBSztBQVJELE9BNUJEO0FBc0NMQyxlQUFTLENBQ1Asa0dBRE8sRUFFUCx3RUFGTyxFQUdQLGtFQUhPLENBdENKO0FBMkNMQyxpQkFBVztBQTNDTixLLFFBNkNQQyxPLEdBQVU7QUFDUkMsV0FEUSxpQkFDRkMsQ0FERSxFQUNDO0FBQ1AsWUFBSUMsT0FBTyxJQUFYO0FBQ0EsWUFBTUMsUUFBUUYsRUFBRUcsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JGLEtBQXRDO0FBQ0EsWUFBSUwsWUFBWUksS0FBS0osU0FBTCxDQUFlSyxLQUFmLENBQWhCO0FBQ0EsdUJBQUtHLE9BQUwsQ0FBYTtBQUNYQyxlQUFLLGtDQURNO0FBRVhDLGtCQUFRLE1BRkc7QUFHWGhELGdCQUFNO0FBQ0pRLG1CQUFPOEIsVUFBVTlCLEtBRGI7QUFFSkMsbUJBQU82QixVQUFVN0IsS0FGYjtBQUdKRixtQkFBTytCLFVBQVUvQjtBQUhiLFdBSEs7QUFRWDBDLG1CQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJDLG9CQUFRQyxHQUFSLENBQVksU0FBWjtBQUNEO0FBVlUsU0FBYjtBQVlBLHVCQUFLQyxTQUFMLENBQWU7QUFDYjdDLGlCQUFPLE1BRE07QUFFYm9CLGdCQUFNLFNBRk87QUFHYnZCLG9CQUFVO0FBSEcsU0FBZjtBQUtELE9BdEJPO0FBdUJSaUQsWUF2QlEsb0JBdUJDO0FBQ1AsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZFIsZUFBSztBQURTLFNBQWhCO0FBR0QsT0EzQk87O0FBNEJSUywyQkFBcUIsNkJBQVNmLENBQVQsRUFBWTtBQUMvQixhQUFLZ0IsT0FBTCxDQUFhO0FBQ1h2RCx5QkFBZSxDQUFDLEtBQUtGLElBQUwsQ0FBVUU7QUFEZixTQUFiO0FBR0QsT0FoQ087QUFpQ1J3RCxzQkFBZ0Isd0JBQVNqQixDQUFULEVBQVk7QUFDMUIsYUFBS2dCLE9BQUwsQ0FBYTtBQUNYdEQsb0JBQVUsQ0FBQyxLQUFLSCxJQUFMLENBQVVHO0FBRFYsU0FBYjtBQUdELE9BckNPO0FBc0NSd0Qsc0JBQWdCLHdCQUFTbEIsQ0FBVCxFQUFZO0FBQzFCLGFBQUtnQixPQUFMLENBQWE7QUFDWHJELG9CQUFVcUMsRUFBRW1CLE1BQUYsQ0FBU0M7QUFEUixTQUFiO0FBR0QsT0ExQ087QUEyQ1JDLHNCQUFnQix3QkFBU3JCLENBQVQsRUFBWTtBQUMxQixhQUFLZ0IsT0FBTCxDQUFhO0FBQ1hwRCxvQkFBVW9DLEVBQUVtQixNQUFGLENBQVNDO0FBRFIsU0FBYjtBQUdELE9BL0NPO0FBZ0RSRSxXQWhEUSxtQkFnREE7QUFDTix1QkFBS1IsVUFBTCxDQUFnQjtBQUNkUixlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQXBETztBQXFEUmlCLFdBckRRLG1CQXFEQTtBQUNOLHVCQUFLVCxVQUFMLENBQWdCO0FBQ2RSLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BekRPO0FBMERSa0IsV0ExRFEsbUJBMERBO0FBQ04sdUJBQUtWLFVBQUwsQ0FBZ0I7QUFDZFIsZUFBSztBQURTLFNBQWhCO0FBR0QsT0E5RE87QUErRFJtQixXQS9EUSxtQkErREE7QUFDTix1QkFBS1gsVUFBTCxDQUFnQjtBQUNkUixlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQW5FTztBQW9FUm9CLFdBcEVRLG1CQW9FQTtBQUNOLHVCQUFLWixVQUFMLENBQWdCO0FBQ2RSLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BeEVPO0FBeUVScUIsV0F6RVEsbUJBeUVBO0FBQ04sdUJBQUtiLFVBQUwsQ0FBZ0I7QUFDZFIsZUFBSztBQURTLFNBQWhCO0FBR0QsT0E3RU87QUE4RVJzQixXQTlFUSxtQkE4RUE7QUFDTix1QkFBS2QsVUFBTCxDQUFnQjtBQUNkUixlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQWxGTztBQW1GUnVCLFdBbkZRLG1CQW1GQTtBQUNOLHVCQUFLZixVQUFMLENBQWdCO0FBQ2RSLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BdkZPO0FBd0ZSYSxZQXhGUSxrQkF3RkRuQixDQXhGQyxFQXdGRTtBQUNSLFlBQUlDLE9BQU8sSUFBWDtBQUNBLFlBQU1DLFFBQVFGLEVBQUVHLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCRixLQUF0QztBQUNBLHVCQUFLWSxVQUFMLENBQWdCO0FBQ2RSLHNDQUEwQkwsS0FBS0osU0FBTCxDQUFlSyxLQUFmLEVBQXNCNEI7QUFEbEMsU0FBaEI7QUFHQXBCLGdCQUFRQyxHQUFSLENBQVlWLEtBQUtKLFNBQUwsQ0FBZUssS0FBZixFQUFzQjRCLEVBQWxDLEVBQXNDLElBQXRDO0FBQ0QsT0EvRk87QUFnR1JDLFlBaEdRLG9CQWdHQztBQUNQLFlBQUk5QixPQUFPLElBQVg7QUFDQUEsYUFBSzlCLE1BQUwsR0FBYyxTQUFkO0FBQ0E4QixhQUFLdEIsTUFBTCxHQUFjLFNBQWQ7QUFDQXNCLGFBQUs3QixNQUFMLEdBQWMsT0FBZDtBQUNBNkIsYUFBS3JCLE1BQUwsR0FBYyxPQUFkO0FBQ0FxQixhQUFLNUIsTUFBTCxHQUFjLE9BQWQ7QUFDQTRCLGFBQUtwQixNQUFMLEdBQWMsT0FBZDtBQUNBb0IsYUFBSzNCLE1BQUwsR0FBYyxPQUFkO0FBQ0EyQixhQUFLbkIsTUFBTCxHQUFjLE9BQWQ7QUFDQW1CLGFBQUsxQixNQUFMLEdBQWMsT0FBZDtBQUNBMEIsYUFBS2xCLE1BQUwsR0FBYyxPQUFkO0FBQ0FrQixhQUFLekIsTUFBTCxHQUFjLE9BQWQ7QUFDQXlCLGFBQUtqQixNQUFMLEdBQWMsT0FBZDtBQUNBaUIsYUFBS3hCLE1BQUwsR0FBYyxPQUFkO0FBQ0F3QixhQUFLaEIsTUFBTCxHQUFjLE9BQWQ7QUFDQWdCLGFBQUt2QixNQUFMLEdBQWMsT0FBZDtBQUNBdUIsYUFBS2YsTUFBTCxHQUFjLE9BQWQ7QUFDRCxPQWxITztBQW1IUjhDLFlBbkhRLG9CQW1IQztBQUNQLFlBQUkvQixPQUFPLElBQVg7QUFDQUEsYUFBSzlCLE1BQUwsR0FBYyxPQUFkO0FBQ0E4QixhQUFLdEIsTUFBTCxHQUFjLE9BQWQ7QUFDQXNCLGFBQUs3QixNQUFMLEdBQWMsU0FBZDtBQUNBNkIsYUFBS3JCLE1BQUwsR0FBYyxTQUFkO0FBQ0FxQixhQUFLNUIsTUFBTCxHQUFjLE9BQWQ7QUFDQTRCLGFBQUtwQixNQUFMLEdBQWMsT0FBZDtBQUNBb0IsYUFBSzNCLE1BQUwsR0FBYyxPQUFkO0FBQ0EyQixhQUFLbkIsTUFBTCxHQUFjLE9BQWQ7QUFDQW1CLGFBQUsxQixNQUFMLEdBQWMsT0FBZDtBQUNBMEIsYUFBS2xCLE1BQUwsR0FBYyxPQUFkO0FBQ0FrQixhQUFLekIsTUFBTCxHQUFjLE9BQWQ7QUFDQXlCLGFBQUtqQixNQUFMLEdBQWMsT0FBZDtBQUNBaUIsYUFBS3hCLE1BQUwsR0FBYyxPQUFkO0FBQ0F3QixhQUFLaEIsTUFBTCxHQUFjLE9BQWQ7QUFDQWdCLGFBQUt2QixNQUFMLEdBQWMsT0FBZDtBQUNBdUIsYUFBS2YsTUFBTCxHQUFjLE9BQWQ7QUFDRCxPQXJJTztBQXNJUitDLFlBdElRLG9CQXNJQztBQUNQLFlBQUloQyxPQUFPLElBQVg7QUFDQUEsYUFBSzlCLE1BQUwsR0FBYyxPQUFkO0FBQ0E4QixhQUFLdEIsTUFBTCxHQUFjLE9BQWQ7QUFDQXNCLGFBQUs3QixNQUFMLEdBQWMsT0FBZDtBQUNBNkIsYUFBS3JCLE1BQUwsR0FBYyxPQUFkO0FBQ0FxQixhQUFLNUIsTUFBTCxHQUFjLFNBQWQ7QUFDQTRCLGFBQUtwQixNQUFMLEdBQWMsU0FBZDtBQUNBb0IsYUFBSzNCLE1BQUwsR0FBYyxPQUFkO0FBQ0EyQixhQUFLbkIsTUFBTCxHQUFjLE9BQWQ7QUFDQW1CLGFBQUsxQixNQUFMLEdBQWMsT0FBZDtBQUNBMEIsYUFBS2xCLE1BQUwsR0FBYyxPQUFkO0FBQ0FrQixhQUFLekIsTUFBTCxHQUFjLE9BQWQ7QUFDQXlCLGFBQUtqQixNQUFMLEdBQWMsT0FBZDtBQUNBaUIsYUFBS3hCLE1BQUwsR0FBYyxPQUFkO0FBQ0F3QixhQUFLaEIsTUFBTCxHQUFjLE9BQWQ7QUFDQWdCLGFBQUt2QixNQUFMLEdBQWMsT0FBZDtBQUNBdUIsYUFBS2YsTUFBTCxHQUFjLE9BQWQ7QUFDRCxPQXhKTztBQXlKUmdELFlBekpRLG9CQXlKQztBQUNQLFlBQUlqQyxPQUFPLElBQVg7QUFDQUEsYUFBSzlCLE1BQUwsR0FBYyxPQUFkO0FBQ0E4QixhQUFLdEIsTUFBTCxHQUFjLE9BQWQ7QUFDQXNCLGFBQUs3QixNQUFMLEdBQWMsT0FBZDtBQUNBNkIsYUFBS3JCLE1BQUwsR0FBYyxPQUFkO0FBQ0FxQixhQUFLNUIsTUFBTCxHQUFjLE9BQWQ7QUFDQTRCLGFBQUtwQixNQUFMLEdBQWMsT0FBZDtBQUNBb0IsYUFBSzNCLE1BQUwsR0FBYyxTQUFkO0FBQ0EyQixhQUFLbkIsTUFBTCxHQUFjLFNBQWQ7QUFDQW1CLGFBQUsxQixNQUFMLEdBQWMsT0FBZDtBQUNBMEIsYUFBS2xCLE1BQUwsR0FBYyxPQUFkO0FBQ0FrQixhQUFLekIsTUFBTCxHQUFjLE9BQWQ7QUFDQXlCLGFBQUtqQixNQUFMLEdBQWMsT0FBZDtBQUNBaUIsYUFBS3hCLE1BQUwsR0FBYyxPQUFkO0FBQ0F3QixhQUFLaEIsTUFBTCxHQUFjLE9BQWQ7QUFDQWdCLGFBQUt2QixNQUFMLEdBQWMsT0FBZDtBQUNBdUIsYUFBS2YsTUFBTCxHQUFjLE9BQWQ7QUFDRCxPQTNLTztBQTRLUmlELFlBNUtRLG9CQTRLQztBQUNQLFlBQUlsQyxPQUFPLElBQVg7QUFDQUEsYUFBSzlCLE1BQUwsR0FBYyxPQUFkO0FBQ0E4QixhQUFLdEIsTUFBTCxHQUFjLE9BQWQ7QUFDQXNCLGFBQUs3QixNQUFMLEdBQWMsT0FBZDtBQUNBNkIsYUFBS3JCLE1BQUwsR0FBYyxPQUFkO0FBQ0FxQixhQUFLNUIsTUFBTCxHQUFjLE9BQWQ7QUFDQTRCLGFBQUtwQixNQUFMLEdBQWMsT0FBZDtBQUNBb0IsYUFBSzNCLE1BQUwsR0FBYyxPQUFkO0FBQ0EyQixhQUFLbkIsTUFBTCxHQUFjLE9BQWQ7QUFDQW1CLGFBQUsxQixNQUFMLEdBQWMsU0FBZDtBQUNBMEIsYUFBS2xCLE1BQUwsR0FBYyxTQUFkO0FBQ0FrQixhQUFLekIsTUFBTCxHQUFjLE9BQWQ7QUFDQXlCLGFBQUtqQixNQUFMLEdBQWMsT0FBZDtBQUNBaUIsYUFBS3hCLE1BQUwsR0FBYyxPQUFkO0FBQ0F3QixhQUFLaEIsTUFBTCxHQUFjLE9BQWQ7QUFDQWdCLGFBQUt2QixNQUFMLEdBQWMsT0FBZDtBQUNBdUIsYUFBS2YsTUFBTCxHQUFjLE9BQWQ7QUFDRCxPQTlMTztBQStMUmtELFlBL0xRLG9CQStMQztBQUNQLFlBQUluQyxPQUFPLElBQVg7QUFDQUEsYUFBSzlCLE1BQUwsR0FBYyxPQUFkO0FBQ0E4QixhQUFLdEIsTUFBTCxHQUFjLE9BQWQ7QUFDQXNCLGFBQUs3QixNQUFMLEdBQWMsT0FBZDtBQUNBNkIsYUFBS3JCLE1BQUwsR0FBYyxPQUFkO0FBQ0FxQixhQUFLNUIsTUFBTCxHQUFjLE9BQWQ7QUFDQTRCLGFBQUtwQixNQUFMLEdBQWMsT0FBZDtBQUNBb0IsYUFBSzNCLE1BQUwsR0FBYyxPQUFkO0FBQ0EyQixhQUFLbkIsTUFBTCxHQUFjLE9BQWQ7QUFDQW1CLGFBQUsxQixNQUFMLEdBQWMsT0FBZDtBQUNBMEIsYUFBS2xCLE1BQUwsR0FBYyxPQUFkO0FBQ0FrQixhQUFLekIsTUFBTCxHQUFjLFNBQWQ7QUFDQXlCLGFBQUtqQixNQUFMLEdBQWMsU0FBZDtBQUNBaUIsYUFBS3hCLE1BQUwsR0FBYyxPQUFkO0FBQ0F3QixhQUFLaEIsTUFBTCxHQUFjLE9BQWQ7QUFDQWdCLGFBQUt2QixNQUFMLEdBQWMsT0FBZDtBQUNBdUIsYUFBS2YsTUFBTCxHQUFjLE9BQWQ7QUFDRCxPQWpOTztBQWtOUm1ELFlBbE5RLG9CQWtOQztBQUNQLFlBQUlwQyxPQUFPLElBQVg7QUFDQUEsYUFBSzlCLE1BQUwsR0FBYyxPQUFkO0FBQ0E4QixhQUFLdEIsTUFBTCxHQUFjLE9BQWQ7QUFDQXNCLGFBQUs3QixNQUFMLEdBQWMsT0FBZDtBQUNBNkIsYUFBS3JCLE1BQUwsR0FBYyxPQUFkO0FBQ0FxQixhQUFLNUIsTUFBTCxHQUFjLE9BQWQ7QUFDQTRCLGFBQUtwQixNQUFMLEdBQWMsT0FBZDtBQUNBb0IsYUFBSzNCLE1BQUwsR0FBYyxPQUFkO0FBQ0EyQixhQUFLbkIsTUFBTCxHQUFjLE9BQWQ7QUFDQW1CLGFBQUsxQixNQUFMLEdBQWMsT0FBZDtBQUNBMEIsYUFBS2xCLE1BQUwsR0FBYyxPQUFkO0FBQ0FrQixhQUFLekIsTUFBTCxHQUFjLE9BQWQ7QUFDQXlCLGFBQUtqQixNQUFMLEdBQWMsT0FBZDtBQUNBaUIsYUFBS3hCLE1BQUwsR0FBYyxTQUFkO0FBQ0F3QixhQUFLaEIsTUFBTCxHQUFjLFNBQWQ7QUFDQWdCLGFBQUt2QixNQUFMLEdBQWMsT0FBZDtBQUNBdUIsYUFBS2YsTUFBTCxHQUFjLE9BQWQ7QUFDRCxPQXBPTztBQXFPUm9ELFlBck9RLG9CQXFPQztBQUNQLFlBQUlyQyxPQUFPLElBQVg7QUFDQUEsYUFBSzlCLE1BQUwsR0FBYyxPQUFkO0FBQ0E4QixhQUFLdEIsTUFBTCxHQUFjLE9BQWQ7QUFDQXNCLGFBQUs3QixNQUFMLEdBQWMsT0FBZDtBQUNBNkIsYUFBS3JCLE1BQUwsR0FBYyxPQUFkO0FBQ0FxQixhQUFLNUIsTUFBTCxHQUFjLE9BQWQ7QUFDQTRCLGFBQUtwQixNQUFMLEdBQWMsT0FBZDtBQUNBb0IsYUFBSzNCLE1BQUwsR0FBYyxPQUFkO0FBQ0EyQixhQUFLbkIsTUFBTCxHQUFjLE9BQWQ7QUFDQW1CLGFBQUsxQixNQUFMLEdBQWMsT0FBZDtBQUNBMEIsYUFBS2xCLE1BQUwsR0FBYyxPQUFkO0FBQ0FrQixhQUFLekIsTUFBTCxHQUFjLE9BQWQ7QUFDQXlCLGFBQUtqQixNQUFMLEdBQWMsT0FBZDtBQUNBaUIsYUFBS3hCLE1BQUwsR0FBYyxPQUFkO0FBQ0F3QixhQUFLaEIsTUFBTCxHQUFjLE9BQWQ7QUFDQWdCLGFBQUt2QixNQUFMLEdBQWMsU0FBZDtBQUNBdUIsYUFBS2YsTUFBTCxHQUFjLFNBQWQ7QUFDRDtBQXZQTyxLOzs7Ozs2QkF5UEQsQ0FDUjs7OzZCQUNRO0FBQ1AsVUFBSWUsT0FBTyxJQUFYO0FBQ0EscUJBQUtzQyxhQUFMLENBQW1CO0FBQ2pCL0IsZUFEaUIsbUJBQ1RDLEdBRFMsRUFDSjtBQUNYUixlQUFLL0IsS0FBTCxHQUFhdUMsSUFBSStCLFdBQWpCO0FBQ0Q7QUFIZ0IsT0FBbkI7QUFLQSxxQkFBS25DLE9BQUwsQ0FBYTtBQUNYQyxhQUFLLGlDQURNO0FBRVhDLGdCQUFRLEtBRkc7QUFHWEMsaUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQlIsZUFBS0osU0FBTCxHQUFpQlksSUFBSWxELElBQXJCO0FBQ0EwQyxlQUFLZSxPQUFMLENBQWE7QUFDWG5CLHVCQUFXWSxJQUFJbEQ7QUFESixXQUFiO0FBR0FtRCxrQkFBUUMsR0FBUixDQUFZRixJQUFJbEQsSUFBaEIsRUFBc0IsVUFBdEI7QUFDRDtBQVRVLE9BQWI7QUFXRDs7OztFQTlUZ0MsZUFBS2tGLEk7O2tCQUFuQnJGLEsiLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfotoXluIInXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBwaG90b3Bvc3RlcjogJy4uL2ltYWdlcy9wb3N0ZXIuanBnJyxcbiAgICBpbmRpY2F0b3JEb3RzOiB0cnVlLFxuICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgIGludGVydmFsOiAzMDAwLFxuICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgaW5kaWNhdG9yQWN0aXZlQ29sb3I6ICcjZTg4ODRkJyxcbiAgICBpbWFnZTogJycsXG4gICAgdGl0bGU6ICcnLFxuICAgIHByaWNlOiAwLjAsXG4gICAgc2VsZWN0ZWQ6ICcnLFxuICAgIFdpZHRoOiAwLFxuICAgIGNvbG9yQTogJyNmNTZkMTEnLFxuICAgIGNvbG9yQjogJycsXG4gICAgY29sb3JDOiAnJyxcbiAgICBjb2xvckQ6ICcnLFxuICAgIGNvbG9yRTogJycsXG4gICAgY29sb3JGOiAnJyxcbiAgICBjb2xvckc6ICcnLFxuICAgIGNvbG9ySDogJycsXG4gICAgY29sb3JhOiAnI2Y1NmQxMScsXG4gICAgY29sb3JiOiAnd2hpdGUnLFxuICAgIGNvbG9yYzogJ3doaXRlJyxcbiAgICBjb2xvcmQ6ICd3aGl0ZScsXG4gICAgY29sb3JlOiAnd2hpdGUnLFxuICAgIGNvbG9yZjogJ3doaXRlJyxcbiAgICBjb2xvcmc6ICd3aGl0ZScsXG4gICAgY29sb3JoOiAnd2hpdGUnLFxuICAgIGljb246IHtcbiAgICAgIHNhbHQ6ICcuLi9pbWFnZS9zYWx0LnBuZycsXG4gICAgICBlZGlibGVPaWw6ICcuLi9pbWFnZS9lZGlibGVPaWwucG5nJyxcbiAgICAgIHJpY2U6ICcuLi9pbWFnZS9yaWNlLnBuZycsXG4gICAgICBiZWFuczogJy4uL2ltYWdlL2JlYW5zLnBuZycsXG4gICAgICBzYXVjZTogJy4uL2ltYWdlL3NhdWNlLnBuZycsXG4gICAgICBob3RQb3Q6ICcuLi9pbWFnZS9ob3RQb3QucG5nJyxcbiAgICAgIHNuYWNrczogJy4uL2ltYWdlL3NuYWNrcy5wbmcnLFxuICAgICAgdXNlOiAnLi4vaW1hZ2UvdXNlLnBuZydcbiAgICB9LFxuICAgIGltZ1VybHM6IFtcbiAgICAgICdodHRwczovL2ltZzExLjM2MGJ1eWltZy5jb20vYmFiZWwvamZzL3QxMDI3Ni8zNjIvMTI4NzgyMjA0Ni85MzQxMC9mNzVhNzY2NC81OWRmNTE4YU4zN2Y4NDg5Yi5qcGcnLFxuICAgICAgJ2h0dHBzOi8vaW1nLmFsaWNkbi5jb20vdGZzL1RCMTZqOXBoMkJOVEtKankwRmRYWGNQcFZYYS01MjAtMjgwLmpwZ19xOTAnLFxuICAgICAgJ2h0dHBzOi8vaW1nLmFsaWNkbi5jb20vc2ltYmEvaW1nL1RCMVNuMDFYN1Q4NXVKalNaRmhTdXdQRVZYYS5qcGcnXG4gICAgXSxcbiAgICBjb21tb2RpdHk6IFtdXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBnb29kcyhlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGNvbnN0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICAgIGxldCBjb21tb2RpdHkgPSBzZWxmLmNvbW1vZGl0eVtpbmRleF1cbiAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS9jYXJ0Q3JlYXRlJyxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICB0aXRsZTogY29tbW9kaXR5LnRpdGxlLFxuICAgICAgICAgIHByaWNlOiBjb21tb2RpdHkucHJpY2UsXG4gICAgICAgICAgaW1hZ2U6IGNvbW1vZGl0eS5pbWFnZVxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnc3VjY2VzcycpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgIHRpdGxlOiAn5Yqg5YWl5oiQ5YqfJyxcbiAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICBkdXJhdGlvbjogMTAwMFxuICAgICAgfSlcbiAgICB9LFxuICAgIHNlYXJjaCgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vY2xhc3Mvc2VhcmNoJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIGNoYW5nZUluZGljYXRvckRvdHM6IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGluZGljYXRvckRvdHM6ICF0aGlzLmRhdGEuaW5kaWNhdG9yRG90c1xuICAgICAgfSlcbiAgICB9LFxuICAgIGNoYW5nZUF1dG9wbGF5OiBmdW5jdGlvbihlKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBhdXRvcGxheTogIXRoaXMuZGF0YS5hdXRvcGxheVxuICAgICAgfSlcbiAgICB9LFxuICAgIGludGVydmFsQ2hhbmdlOiBmdW5jdGlvbihlKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBpbnRlcnZhbDogZS5kZXRhaWwudmFsdWVcbiAgICAgIH0pXG4gICAgfSxcbiAgICBkdXJhdGlvbkNoYW5nZTogZnVuY3Rpb24oZSkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgZHVyYXRpb246IGUuZGV0YWlsLnZhbHVlXG4gICAgICB9KVxuICAgIH0sXG4gICAgcGFnZTEoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL2NsYXNzL3NhbHQnXG4gICAgICB9KVxuICAgIH0sXG4gICAgcGFnZTIoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL2NsYXNzL2VkaWJsZU9pbCdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBwYWdlMygpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vY2xhc3MvcmljZSdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBwYWdlNCgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vY2xhc3MvYmVhbnMnXG4gICAgICB9KVxuICAgIH0sXG4gICAgcGFnZTUoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL2NsYXNzL3NhdWNlJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIHBhZ2U2KCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9jbGFzcy9ob3RQb3QnXG4gICAgICB9KVxuICAgIH0sXG4gICAgcGFnZTcoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL2NsYXNzL3NuYWNrcydcbiAgICAgIH0pXG4gICAgfSxcbiAgICBwYWdlOCgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vY2xhc3MvdXNlJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIGRldGFpbChlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGNvbnN0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC4vY2xhc3MvZGV0YWlsP2lkPSR7c2VsZi5jb21tb2RpdHlbaW5kZXhdLmlkfWBcbiAgICAgIH0pXG4gICAgICBjb25zb2xlLmxvZyhzZWxmLmNvbW1vZGl0eVtpbmRleF0uaWQsICdpZCcpXG4gICAgfSxcbiAgICBjbGFzc0EoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuY29sb3JBID0gJyNmNTZkMTEnXG4gICAgICBzZWxmLmNvbG9yYSA9ICcjZjU2ZDExJ1xuICAgICAgc2VsZi5jb2xvckIgPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9yYiA9ICd3aGl0ZSdcbiAgICAgIHNlbGYuY29sb3JDID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcmMgPSAnd2hpdGUnXG4gICAgICBzZWxmLmNvbG9yRCA9ICdibGFjaydcbiAgICAgIHNlbGYuY29sb3JkID0gJ3doaXRlJ1xuICAgICAgc2VsZi5jb2xvckUgPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9yZSA9ICd3aGl0ZSdcbiAgICAgIHNlbGYuY29sb3JGID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcmYgPSAnd2hpdGUnXG4gICAgICBzZWxmLmNvbG9yRyA9ICdibGFjaydcbiAgICAgIHNlbGYuY29sb3JnID0gJ3doaXRlJ1xuICAgICAgc2VsZi5jb2xvckggPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9yaCA9ICd3aGl0ZSdcbiAgICB9LFxuICAgIGNsYXNzQigpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5jb2xvckEgPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9yYSA9ICd3aGl0ZSdcbiAgICAgIHNlbGYuY29sb3JCID0gJyNmNTZkMTEnXG4gICAgICBzZWxmLmNvbG9yYiA9ICcjZjU2ZDExJ1xuICAgICAgc2VsZi5jb2xvckMgPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9yYyA9ICd3aGl0ZSdcbiAgICAgIHNlbGYuY29sb3JEID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcmQgPSAnd2hpdGUnXG4gICAgICBzZWxmLmNvbG9yRSA9ICdibGFjaydcbiAgICAgIHNlbGYuY29sb3JlID0gJ3doaXRlJ1xuICAgICAgc2VsZi5jb2xvckYgPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9yZiA9ICd3aGl0ZSdcbiAgICAgIHNlbGYuY29sb3JHID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcmcgPSAnd2hpdGUnXG4gICAgICBzZWxmLmNvbG9ySCA9ICdibGFjaydcbiAgICAgIHNlbGYuY29sb3JoID0gJ3doaXRlJ1xuICAgIH0sXG4gICAgY2xhc3NDKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmNvbG9yQSA9ICdibGFjaydcbiAgICAgIHNlbGYuY29sb3JhID0gJ3doaXRlJ1xuICAgICAgc2VsZi5jb2xvckIgPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9yYiA9ICd3aGl0ZSdcbiAgICAgIHNlbGYuY29sb3JDID0gJyNmNTZkMTEnXG4gICAgICBzZWxmLmNvbG9yYyA9ICcjZjU2ZDExJ1xuICAgICAgc2VsZi5jb2xvckQgPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9yZCA9ICd3aGl0ZSdcbiAgICAgIHNlbGYuY29sb3JFID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcmUgPSAnd2hpdGUnXG4gICAgICBzZWxmLmNvbG9yRiA9ICdibGFjaydcbiAgICAgIHNlbGYuY29sb3JmID0gJ3doaXRlJ1xuICAgICAgc2VsZi5jb2xvckcgPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9yZyA9ICd3aGl0ZSdcbiAgICAgIHNlbGYuY29sb3JIID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcmggPSAnd2hpdGUnXG4gICAgfSxcbiAgICBjbGFzc0QoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuY29sb3JBID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcmEgPSAnd2hpdGUnXG4gICAgICBzZWxmLmNvbG9yQiA9ICdibGFjaydcbiAgICAgIHNlbGYuY29sb3JiID0gJ3doaXRlJ1xuICAgICAgc2VsZi5jb2xvckMgPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9yYyA9ICd3aGl0ZSdcbiAgICAgIHNlbGYuY29sb3JEID0gJyNmNTZkMTEnXG4gICAgICBzZWxmLmNvbG9yZCA9ICcjZjU2ZDExJ1xuICAgICAgc2VsZi5jb2xvckUgPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9yZSA9ICd3aGl0ZSdcbiAgICAgIHNlbGYuY29sb3JGID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcmYgPSAnd2hpdGUnXG4gICAgICBzZWxmLmNvbG9yRyA9ICdibGFjaydcbiAgICAgIHNlbGYuY29sb3JnID0gJ3doaXRlJ1xuICAgICAgc2VsZi5jb2xvckggPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9yaCA9ICd3aGl0ZSdcbiAgICB9LFxuICAgIGNsYXNzRSgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5jb2xvckEgPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9yYSA9ICd3aGl0ZSdcbiAgICAgIHNlbGYuY29sb3JCID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcmIgPSAnd2hpdGUnXG4gICAgICBzZWxmLmNvbG9yQyA9ICdibGFjaydcbiAgICAgIHNlbGYuY29sb3JjID0gJ3doaXRlJ1xuICAgICAgc2VsZi5jb2xvckQgPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9yZCA9ICd3aGl0ZSdcbiAgICAgIHNlbGYuY29sb3JFID0gJyNmNTZkMTEnXG4gICAgICBzZWxmLmNvbG9yZSA9ICcjZjU2ZDExJ1xuICAgICAgc2VsZi5jb2xvckYgPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9yZiA9ICd3aGl0ZSdcbiAgICAgIHNlbGYuY29sb3JHID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcmcgPSAnd2hpdGUnXG4gICAgICBzZWxmLmNvbG9ySCA9ICdibGFjaydcbiAgICAgIHNlbGYuY29sb3JoID0gJ3doaXRlJ1xuICAgIH0sXG4gICAgY2xhc3NGKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmNvbG9yQSA9ICdibGFjaydcbiAgICAgIHNlbGYuY29sb3JhID0gJ3doaXRlJ1xuICAgICAgc2VsZi5jb2xvckIgPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9yYiA9ICd3aGl0ZSdcbiAgICAgIHNlbGYuY29sb3JDID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcmMgPSAnd2hpdGUnXG4gICAgICBzZWxmLmNvbG9yRCA9ICdibGFjaydcbiAgICAgIHNlbGYuY29sb3JkID0gJ3doaXRlJ1xuICAgICAgc2VsZi5jb2xvckUgPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9yZSA9ICd3aGl0ZSdcbiAgICAgIHNlbGYuY29sb3JGID0gJyNmNTZkMTEnXG4gICAgICBzZWxmLmNvbG9yZiA9ICcjZjU2ZDExJ1xuICAgICAgc2VsZi5jb2xvckcgPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9yZyA9ICd3aGl0ZSdcbiAgICAgIHNlbGYuY29sb3JIID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcmggPSAnd2hpdGUnXG4gICAgfSxcbiAgICBjbGFzc0coKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuY29sb3JBID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcmEgPSAnd2hpdGUnXG4gICAgICBzZWxmLmNvbG9yQiA9ICdibGFjaydcbiAgICAgIHNlbGYuY29sb3JiID0gJ3doaXRlJ1xuICAgICAgc2VsZi5jb2xvckMgPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9yYyA9ICd3aGl0ZSdcbiAgICAgIHNlbGYuY29sb3JEID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcmQgPSAnd2hpdGUnXG4gICAgICBzZWxmLmNvbG9yRSA9ICdibGFjaydcbiAgICAgIHNlbGYuY29sb3JlID0gJ3doaXRlJ1xuICAgICAgc2VsZi5jb2xvckYgPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9yZiA9ICd3aGl0ZSdcbiAgICAgIHNlbGYuY29sb3JHID0gJyNmNTZkMTEnXG4gICAgICBzZWxmLmNvbG9yZyA9ICcjZjU2ZDExJ1xuICAgICAgc2VsZi5jb2xvckggPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9yaCA9ICd3aGl0ZSdcbiAgICB9LFxuICAgIGNsYXNzSCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5jb2xvckEgPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9yYSA9ICd3aGl0ZSdcbiAgICAgIHNlbGYuY29sb3JCID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcmIgPSAnd2hpdGUnXG4gICAgICBzZWxmLmNvbG9yQyA9ICdibGFjaydcbiAgICAgIHNlbGYuY29sb3JjID0gJ3doaXRlJ1xuICAgICAgc2VsZi5jb2xvckQgPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9yZCA9ICd3aGl0ZSdcbiAgICAgIHNlbGYuY29sb3JFID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcmUgPSAnd2hpdGUnXG4gICAgICBzZWxmLmNvbG9yRiA9ICdibGFjaydcbiAgICAgIHNlbGYuY29sb3JmID0gJ3doaXRlJ1xuICAgICAgc2VsZi5jb2xvckcgPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9yZyA9ICd3aGl0ZSdcbiAgICAgIHNlbGYuY29sb3JIID0gJyNmNTZkMTEnXG4gICAgICBzZWxmLmNvbG9yaCA9ICcjZjU2ZDExJ1xuICAgIH1cbiAgfVxuICBvblNob3coKSB7XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHdlcHkuZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBzZWxmLldpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICB9XG4gICAgfSlcbiAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL2dldFNlbGVjdCcsXG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIHNlbGYuY29tbW9kaXR5ID0gcmVzLmRhdGFcbiAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICBjb21tb2RpdHk6IHJlcy5kYXRhXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhLCAncmVzLmRhdGEnKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==
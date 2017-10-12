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
      photohome: '../images/homeclick.svg',
      photoshop: '../images/shop.svg',
      photomy: '../images/my.svg',
      homecolor: '#e8884d',
      shopcolor: '',
      mycolor: '',
      titlehome: '首页',
      titleshop: '购物车',
      titlemy: '我的'
    }, _this.methods = {
      hometap: function hometap() {
        var self = this;
        self.homecolor = '#e8884d';
        self.shopcolor = 'black';
        self.mycolor = 'black';
        self.photohome = '../images/homeclick.svg';
        self.photoshop = '../images/shop.svg';
        self.photomy = '../images/my.svg';
      },
      shoptap: function shoptap() {
        var self = this;
        self.homecolor = 'black';
        self.shopcolor = '#e8884d';
        self.mycolor = 'black';
        self.photohome = '../images/home.svg';
        self.photoshop = '../images/shopclick.svg';
        self.photomy = '../images/my.svg';
      },
      mytap: function mytap() {
        var self = this;
        self.homecolor = 'black';
        self.shopcolor = 'black';
        self.mycolor = '#e8884d';
        self.photohome = '../images/home.svg';
        self.photoshop = '../images/shop.svg';
        self.photomy = '../images/myclick.svg';
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/home'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInBob3RvcG9zdGVyIiwicGhvdG9ob21lIiwicGhvdG9zaG9wIiwicGhvdG9teSIsImhvbWVjb2xvciIsInNob3Bjb2xvciIsIm15Y29sb3IiLCJ0aXRsZWhvbWUiLCJ0aXRsZXNob3AiLCJ0aXRsZW15IiwibWV0aG9kcyIsImhvbWV0YXAiLCJzZWxmIiwic2hvcHRhcCIsIm15dGFwIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxtQkFBYSxzQkFEUjtBQUVMQyxpQkFBVyx5QkFGTjtBQUdMQyxpQkFBVyxvQkFITjtBQUlMQyxlQUFTLGtCQUpKO0FBS0xDLGlCQUFXLFNBTE47QUFNTEMsaUJBQVcsRUFOTjtBQU9MQyxlQUFTLEVBUEo7QUFRTEMsaUJBQVcsSUFSTjtBQVNMQyxpQkFBVyxLQVROO0FBVUxDLGVBQVM7QUFWSixLLFFBWVBDLE8sR0FBVTtBQUNSQyxhQURRLHFCQUNFO0FBQ1IsWUFBSUMsT0FBTyxJQUFYO0FBQ0FBLGFBQUtSLFNBQUwsR0FBaUIsU0FBakI7QUFDQVEsYUFBS1AsU0FBTCxHQUFpQixPQUFqQjtBQUNBTyxhQUFLTixPQUFMLEdBQWUsT0FBZjtBQUNBTSxhQUFLWCxTQUFMLEdBQWlCLHlCQUFqQjtBQUNBVyxhQUFLVixTQUFMLEdBQWlCLG9CQUFqQjtBQUNBVSxhQUFLVCxPQUFMLEdBQWUsa0JBQWY7QUFDRCxPQVRPO0FBVVJVLGFBVlEscUJBVUU7QUFDUixZQUFJRCxPQUFPLElBQVg7QUFDQUEsYUFBS1IsU0FBTCxHQUFpQixPQUFqQjtBQUNBUSxhQUFLUCxTQUFMLEdBQWlCLFNBQWpCO0FBQ0FPLGFBQUtOLE9BQUwsR0FBZSxPQUFmO0FBQ0FNLGFBQUtYLFNBQUwsR0FBaUIsb0JBQWpCO0FBQ0FXLGFBQUtWLFNBQUwsR0FBaUIseUJBQWpCO0FBQ0FVLGFBQUtULE9BQUwsR0FBZSxrQkFBZjtBQUNELE9BbEJPO0FBbUJSVyxXQW5CUSxtQkFtQkE7QUFDTixZQUFJRixPQUFPLElBQVg7QUFDQUEsYUFBS1IsU0FBTCxHQUFpQixPQUFqQjtBQUNBUSxhQUFLUCxTQUFMLEdBQWlCLE9BQWpCO0FBQ0FPLGFBQUtOLE9BQUwsR0FBZSxTQUFmO0FBQ0FNLGFBQUtYLFNBQUwsR0FBaUIsb0JBQWpCO0FBQ0FXLGFBQUtWLFNBQUwsR0FBaUIsb0JBQWpCO0FBQ0FVLGFBQUtULE9BQUwsR0FBZSx1QkFBZjtBQUNEO0FBM0JPLEs7Ozs7RUFoQnVCLGVBQUtZLEk7O2tCQUFuQm5CLEsiLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfotoXluIInXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBwaG90b3Bvc3RlcjogJy4uL2ltYWdlcy9wb3N0ZXIuanBnJyxcbiAgICBwaG90b2hvbWU6ICcuLi9pbWFnZXMvaG9tZWNsaWNrLnN2ZycsXG4gICAgcGhvdG9zaG9wOiAnLi4vaW1hZ2VzL3Nob3Auc3ZnJyxcbiAgICBwaG90b215OiAnLi4vaW1hZ2VzL215LnN2ZycsXG4gICAgaG9tZWNvbG9yOiAnI2U4ODg0ZCcsXG4gICAgc2hvcGNvbG9yOiAnJyxcbiAgICBteWNvbG9yOiAnJyxcbiAgICB0aXRsZWhvbWU6ICfpppbpobUnLFxuICAgIHRpdGxlc2hvcDogJ+i0reeJqei9picsXG4gICAgdGl0bGVteTogJ+aIkeeahCdcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGhvbWV0YXAoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuaG9tZWNvbG9yID0gJyNlODg4NGQnXG4gICAgICBzZWxmLnNob3Bjb2xvciA9ICdibGFjaydcbiAgICAgIHNlbGYubXljb2xvciA9ICdibGFjaydcbiAgICAgIHNlbGYucGhvdG9ob21lID0gJy4uL2ltYWdlcy9ob21lY2xpY2suc3ZnJ1xuICAgICAgc2VsZi5waG90b3Nob3AgPSAnLi4vaW1hZ2VzL3Nob3Auc3ZnJ1xuICAgICAgc2VsZi5waG90b215ID0gJy4uL2ltYWdlcy9teS5zdmcnXG4gICAgfSxcbiAgICBzaG9wdGFwKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmhvbWVjb2xvciA9ICdibGFjaydcbiAgICAgIHNlbGYuc2hvcGNvbG9yID0gJyNlODg4NGQnXG4gICAgICBzZWxmLm15Y29sb3IgPSAnYmxhY2snXG4gICAgICBzZWxmLnBob3RvaG9tZSA9ICcuLi9pbWFnZXMvaG9tZS5zdmcnXG4gICAgICBzZWxmLnBob3Rvc2hvcCA9ICcuLi9pbWFnZXMvc2hvcGNsaWNrLnN2ZydcbiAgICAgIHNlbGYucGhvdG9teSA9ICcuLi9pbWFnZXMvbXkuc3ZnJ1xuICAgIH0sXG4gICAgbXl0YXAoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuaG9tZWNvbG9yID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5zaG9wY29sb3IgPSAnYmxhY2snXG4gICAgICBzZWxmLm15Y29sb3IgPSAnI2U4ODg0ZCdcbiAgICAgIHNlbGYucGhvdG9ob21lID0gJy4uL2ltYWdlcy9ob21lLnN2ZydcbiAgICAgIHNlbGYucGhvdG9zaG9wID0gJy4uL2ltYWdlcy9zaG9wLnN2ZydcbiAgICAgIHNlbGYucGhvdG9teSA9ICcuLi9pbWFnZXMvbXljbGljay5zdmcnXG4gICAgfVxuICB9XG59XG4iXX0=
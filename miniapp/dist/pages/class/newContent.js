'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

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
      navigationBarTitleText: '发表动态'
    }, _this.data = {
      height: 0,
      width: 0,
      src: [],
      photo: '../../image/addPhoto.png',
      newsText: ''
    }, _this.methods = {
      chooseImage: function chooseImage() {
        var self = this;
        console.log('addPhoto');
        _wepy2.default.chooseImage({
          count: 9, // 默认9
          sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
          success: function success(res) {
            // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
            var arr = self.src;
            var arr1 = arr.concat(res.tempFilePaths);
            self.src = arr1;
            self.setData({
              src: arr1
            });
          }
        });
      },

      formSubmit: function formSubmit(e) {
        var self = this;
        self.newsText = e.detail.value;
        console.log('form发生了submit事件，携带数据为：', e.detail.value);
      },
      news: function news(e) {
        var self = this;
        console.log('text:', self.newsText);
        try {
          _wepy2.default.setStorageSync('text', self.newsText);
          _wepy2.default.setStorageSync('src', self.src);
        } catch (e) {}
        _wepy2.default.showToast({
          title: '加入成功',
          icon: 'success',
          duration: 1000
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      _wepy2.default.getSystemInfo({
        success: function success(res) {
          self.height = res.windowHeight;
          self.width = res.windowWidth;
        }
      });
    }
  }, {
    key: 'onShow',
    value: function onShow() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/class/newContent'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld0NvbnRlbnQuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImhlaWdodCIsIndpZHRoIiwic3JjIiwicGhvdG8iLCJuZXdzVGV4dCIsIm1ldGhvZHMiLCJjaG9vc2VJbWFnZSIsInNlbGYiLCJjb25zb2xlIiwibG9nIiwiY291bnQiLCJzaXplVHlwZSIsInNvdXJjZVR5cGUiLCJzdWNjZXNzIiwicmVzIiwiYXJyIiwiYXJyMSIsImNvbmNhdCIsInRlbXBGaWxlUGF0aHMiLCJzZXREYXRhIiwiZm9ybVN1Ym1pdCIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsIm5ld3MiLCJzZXRTdG9yYWdlU3luYyIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwiZ2V0U3lzdGVtSW5mbyIsIndpbmRvd0hlaWdodCIsIndpbmRvd1dpZHRoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGNBQVEsQ0FESDtBQUVMQyxhQUFPLENBRkY7QUFHTEMsV0FBSyxFQUhBO0FBSUxDLGFBQU8sMEJBSkY7QUFLTEMsZ0JBQVU7QUFMTCxLLFFBT1BDLE8sR0FBVTtBQUNSQyxpQkFEUSx5QkFDTTtBQUNaLFlBQUlDLE9BQU8sSUFBWDtBQUNBQyxnQkFBUUMsR0FBUixDQUFZLFVBQVo7QUFDQSx1QkFBS0gsV0FBTCxDQUFpQjtBQUNmSSxpQkFBTyxDQURRLEVBQ0w7QUFDVkMsb0JBQVUsQ0FBQyxVQUFELEVBQWEsWUFBYixDQUZLLEVBRXVCO0FBQ3RDQyxzQkFBWSxDQUFDLE9BQUQsRUFBVSxRQUFWLENBSEcsRUFHa0I7QUFDakNDLG1CQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckI7QUFDQSxnQkFBSUMsTUFBTVIsS0FBS0wsR0FBZjtBQUNBLGdCQUFJYyxPQUFPRCxJQUFJRSxNQUFKLENBQVdILElBQUlJLGFBQWYsQ0FBWDtBQUNBWCxpQkFBS0wsR0FBTCxHQUFXYyxJQUFYO0FBQ0FULGlCQUFLWSxPQUFMLENBQWE7QUFDWGpCLG1CQUFLYztBQURNLGFBQWI7QUFHRDtBQVpjLFNBQWpCO0FBY0QsT0FsQk87O0FBbUJSSSxrQkFBWSxvQkFBU0MsQ0FBVCxFQUFZO0FBQ3RCLFlBQUlkLE9BQU8sSUFBWDtBQUNBQSxhQUFLSCxRQUFMLEdBQWdCaUIsRUFBRUMsTUFBRixDQUFTQyxLQUF6QjtBQUNBZixnQkFBUUMsR0FBUixDQUFZLHdCQUFaLEVBQXNDWSxFQUFFQyxNQUFGLENBQVNDLEtBQS9DO0FBQ0QsT0F2Qk87QUF3QlJDLFVBeEJRLGdCQXdCSEgsQ0F4QkcsRUF3QkE7QUFDTixZQUFJZCxPQUFPLElBQVg7QUFDQUMsZ0JBQVFDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCRixLQUFLSCxRQUExQjtBQUNBLFlBQUk7QUFDRix5QkFBS3FCLGNBQUwsQ0FBb0IsTUFBcEIsRUFBNEJsQixLQUFLSCxRQUFqQztBQUNBLHlCQUFLcUIsY0FBTCxDQUFvQixLQUFwQixFQUEyQmxCLEtBQUtMLEdBQWhDO0FBQ0QsU0FIRCxDQUdFLE9BQU9tQixDQUFQLEVBQVUsQ0FDWDtBQUNELHVCQUFLSyxTQUFMLENBQWU7QUFDYkMsaUJBQU8sTUFETTtBQUViQyxnQkFBTSxTQUZPO0FBR2JDLG9CQUFVO0FBSEcsU0FBZjtBQUtEO0FBckNPLEs7Ozs7OzZCQXVDRDtBQUNQLFVBQUl0QixPQUFPLElBQVg7QUFDQSxxQkFBS3VCLGFBQUwsQ0FBbUI7QUFDakJqQixlQURpQixtQkFDVEMsR0FEUyxFQUNKO0FBQ1hQLGVBQUtQLE1BQUwsR0FBY2MsSUFBSWlCLFlBQWxCO0FBQ0F4QixlQUFLTixLQUFMLEdBQWFhLElBQUlrQixXQUFqQjtBQUNEO0FBSmdCLE9BQW5CO0FBTUQ7Ozs2QkFDUSxDQUFFOzs7O0VBM0RzQixlQUFLQyxJOztrQkFBbkJyQyxLIiwiZmlsZSI6Im5ld0NvbnRlbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Y+R6KGo5Yqo5oCBJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgaGVpZ2h0OiAwLFxuICAgIHdpZHRoOiAwLFxuICAgIHNyYzogW10sXG4gICAgcGhvdG86ICcuLi8uLi9pbWFnZS9hZGRQaG90by5wbmcnLFxuICAgIG5ld3NUZXh0OiAnJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgY2hvb3NlSW1hZ2UoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGNvbnNvbGUubG9nKCdhZGRQaG90bycpXG4gICAgICB3ZXB5LmNob29zZUltYWdlKHtcbiAgICAgICAgY291bnQ6IDksIC8vIOm7mOiupDlcbiAgICAgICAgc2l6ZVR5cGU6IFsnb3JpZ2luYWwnLCAnY29tcHJlc3NlZCddLCAvLyDlj6/ku6XmjIflrprmmK/ljp/lm77ov5jmmK/ljovnvKnlm77vvIzpu5jorqTkuozogIXpg73mnIlcbiAgICAgICAgc291cmNlVHlwZTogWydhbGJ1bScsICdjYW1lcmEnXSwgLy8g5Y+v5Lul5oyH5a6a5p2l5rqQ5piv55u45YaM6L+Y5piv55u45py677yM6buY6K6k5LqM6ICF6YO95pyJXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIC8vIOi/lOWbnumAieWumueFp+eJh+eahOacrOWcsOaWh+S7tui3r+W+hOWIl+ihqO+8jHRlbXBGaWxlUGF0aOWPr+S7peS9nOS4umltZ+agh+etvueahHNyY+WxnuaAp+aYvuekuuWbvueJh1xuICAgICAgICAgIGxldCBhcnIgPSBzZWxmLnNyY1xuICAgICAgICAgIGxldCBhcnIxID0gYXJyLmNvbmNhdChyZXMudGVtcEZpbGVQYXRocylcbiAgICAgICAgICBzZWxmLnNyYyA9IGFycjFcbiAgICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgICAgc3JjOiBhcnIxXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIGZvcm1TdWJtaXQ6IGZ1bmN0aW9uKGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5uZXdzVGV4dCA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICBjb25zb2xlLmxvZygnZm9ybeWPkeeUn+S6hnN1Ym1pdOS6i+S7tu+8jOaQuuW4puaVsOaNruS4uu+8micsIGUuZGV0YWlsLnZhbHVlKVxuICAgIH0sXG4gICAgbmV3cyhlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGNvbnNvbGUubG9nKCd0ZXh0OicsIHNlbGYubmV3c1RleHQpXG4gICAgICB0cnkge1xuICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCd0ZXh0Jywgc2VsZi5uZXdzVGV4dClcbiAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnc3JjJywgc2VsZi5zcmMpXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICB9XG4gICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgIHRpdGxlOiAn5Yqg5YWl5oiQ5YqfJyxcbiAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICBkdXJhdGlvbjogMTAwMFxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHdlcHkuZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBzZWxmLmhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgICAgICAgc2VsZi53aWR0aCA9IHJlcy53aW5kb3dXaWR0aFxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgb25TaG93KCkge31cbn1cbiJdfQ==
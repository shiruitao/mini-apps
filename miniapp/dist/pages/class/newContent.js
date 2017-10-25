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
      news: function news(e) {
        var self = this;
        // let news = self.news
        try {
          _wepy2.default.setStorageSync('src', self.src);
          _wepy2.default.setStorageSync('text', self.newsText);
        } catch (e) {}
        _wepy2.default.showToast({
          title: '加入成功',
          icon: 'success',
          duration: 1000
        });
      },

      formSubmit: function formSubmit(e) {
        var self = this;
        self.newsText = e.detail.value;
        console.log('form发生了submit事件，携带数据为：', e.detail.value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld0NvbnRlbnQuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImhlaWdodCIsIndpZHRoIiwic3JjIiwicGhvdG8iLCJuZXdzVGV4dCIsIm1ldGhvZHMiLCJjaG9vc2VJbWFnZSIsInNlbGYiLCJjb25zb2xlIiwibG9nIiwiY291bnQiLCJzaXplVHlwZSIsInNvdXJjZVR5cGUiLCJzdWNjZXNzIiwicmVzIiwiYXJyIiwiYXJyMSIsImNvbmNhdCIsInRlbXBGaWxlUGF0aHMiLCJzZXREYXRhIiwibmV3cyIsImUiLCJzZXRTdG9yYWdlU3luYyIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwiZm9ybVN1Ym1pdCIsImRldGFpbCIsInZhbHVlIiwiZ2V0U3lzdGVtSW5mbyIsIndpbmRvd0hlaWdodCIsIndpbmRvd1dpZHRoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGNBQVEsQ0FESDtBQUVMQyxhQUFPLENBRkY7QUFHTEMsV0FBSyxFQUhBO0FBSUxDLGFBQU8sMEJBSkY7QUFLTEMsZ0JBQVU7QUFMTCxLLFFBT1BDLE8sR0FBVTtBQUNSQyxpQkFEUSx5QkFDTTtBQUNaLFlBQUlDLE9BQU8sSUFBWDtBQUNBQyxnQkFBUUMsR0FBUixDQUFZLFVBQVo7QUFDQSx1QkFBS0gsV0FBTCxDQUFpQjtBQUNmSSxpQkFBTyxDQURRLEVBQ0w7QUFDVkMsb0JBQVUsQ0FBQyxVQUFELEVBQWEsWUFBYixDQUZLLEVBRXVCO0FBQ3RDQyxzQkFBWSxDQUFDLE9BQUQsRUFBVSxRQUFWLENBSEcsRUFHa0I7QUFDakNDLG1CQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckI7QUFDQSxnQkFBSUMsTUFBTVIsS0FBS0wsR0FBZjtBQUNBLGdCQUFJYyxPQUFPRCxJQUFJRSxNQUFKLENBQVdILElBQUlJLGFBQWYsQ0FBWDtBQUNBWCxpQkFBS0wsR0FBTCxHQUFXYyxJQUFYO0FBQ0FULGlCQUFLWSxPQUFMLENBQWE7QUFDWGpCLG1CQUFLYztBQURNLGFBQWI7QUFHRDtBQVpjLFNBQWpCO0FBY0QsT0FsQk87QUFtQlJJLFVBbkJRLGdCQW1CSEMsQ0FuQkcsRUFtQkE7QUFDTixZQUFJZCxPQUFPLElBQVg7QUFDQTtBQUNBLFlBQUk7QUFDRix5QkFBS2UsY0FBTCxDQUFvQixLQUFwQixFQUEyQmYsS0FBS0wsR0FBaEM7QUFDQSx5QkFBS29CLGNBQUwsQ0FBb0IsTUFBcEIsRUFBNEJmLEtBQUtILFFBQWpDO0FBQ0QsU0FIRCxDQUdFLE9BQU9pQixDQUFQLEVBQVUsQ0FDWDtBQUNELHVCQUFLRSxTQUFMLENBQWU7QUFDYkMsaUJBQU8sTUFETTtBQUViQyxnQkFBTSxTQUZPO0FBR2JDLG9CQUFVO0FBSEcsU0FBZjtBQUtELE9BaENPOztBQWlDUkMsa0JBQVksb0JBQVNOLENBQVQsRUFBWTtBQUN0QixZQUFJZCxPQUFPLElBQVg7QUFDQUEsYUFBS0gsUUFBTCxHQUFnQmlCLEVBQUVPLE1BQUYsQ0FBU0MsS0FBekI7QUFDQXJCLGdCQUFRQyxHQUFSLENBQVksd0JBQVosRUFBc0NZLEVBQUVPLE1BQUYsQ0FBU0MsS0FBL0M7QUFDRDtBQXJDTyxLOzs7Ozs2QkF1Q0Q7QUFDUCxVQUFJdEIsT0FBTyxJQUFYO0FBQ0EscUJBQUt1QixhQUFMLENBQW1CO0FBQ2pCakIsZUFEaUIsbUJBQ1RDLEdBRFMsRUFDSjtBQUNYUCxlQUFLUCxNQUFMLEdBQWNjLElBQUlpQixZQUFsQjtBQUNBeEIsZUFBS04sS0FBTCxHQUFhYSxJQUFJa0IsV0FBakI7QUFDRDtBQUpnQixPQUFuQjtBQU1EOzs7NkJBQ1EsQ0FBRTs7OztFQTNEc0IsZUFBS0MsSTs7a0JBQW5CckMsSyIsImZpbGUiOiJuZXdDb250ZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WPkeihqOWKqOaAgSdcbiAgfVxuICBkYXRhID0ge1xuICAgIGhlaWdodDogMCxcbiAgICB3aWR0aDogMCxcbiAgICBzcmM6IFtdLFxuICAgIHBob3RvOiAnLi4vLi4vaW1hZ2UvYWRkUGhvdG8ucG5nJyxcbiAgICBuZXdzVGV4dDogJydcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGNob29zZUltYWdlKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBjb25zb2xlLmxvZygnYWRkUGhvdG8nKVxuICAgICAgd2VweS5jaG9vc2VJbWFnZSh7XG4gICAgICAgIGNvdW50OiA5LCAvLyDpu5jorqQ5XG4gICAgICAgIHNpemVUeXBlOiBbJ29yaWdpbmFsJywgJ2NvbXByZXNzZWQnXSwgLy8g5Y+v5Lul5oyH5a6a5piv5Y6f5Zu+6L+Y5piv5Y6L57yp5Zu+77yM6buY6K6k5LqM6ICF6YO95pyJXG4gICAgICAgIHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ10sIC8vIOWPr+S7peaMh+Wumuadpea6kOaYr+ebuOWGjOi/mOaYr+ebuOacuu+8jOm7mOiupOS6jOiAhemDveaciVxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAvLyDov5Tlm57pgInlrprnhafniYfnmoTmnKzlnLDmlofku7bot6/lvoTliJfooajvvIx0ZW1wRmlsZVBhdGjlj6/ku6XkvZzkuLppbWfmoIfnrb7nmoRzcmPlsZ7mgKfmmL7npLrlm77niYdcbiAgICAgICAgICBsZXQgYXJyID0gc2VsZi5zcmNcbiAgICAgICAgICBsZXQgYXJyMSA9IGFyci5jb25jYXQocmVzLnRlbXBGaWxlUGF0aHMpXG4gICAgICAgICAgc2VsZi5zcmMgPSBhcnIxXG4gICAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICAgIHNyYzogYXJyMVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICBuZXdzKGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgLy8gbGV0IG5ld3MgPSBzZWxmLm5ld3NcbiAgICAgIHRyeSB7XG4gICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ3NyYycsIHNlbGYuc3JjKVxuICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCd0ZXh0Jywgc2VsZi5uZXdzVGV4dClcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIH1cbiAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgdGl0bGU6ICfliqDlhaXmiJDlip8nLFxuICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgIGR1cmF0aW9uOiAxMDAwXG4gICAgICB9KVxuICAgIH0sXG4gICAgZm9ybVN1Ym1pdDogZnVuY3Rpb24oZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLm5ld3NUZXh0ID0gZS5kZXRhaWwudmFsdWVcbiAgICAgIGNvbnNvbGUubG9nKCdmb3Jt5Y+R55Sf5LqGc3VibWl05LqL5Lu277yM5pC65bim5pWw5o2u5Li677yaJywgZS5kZXRhaWwudmFsdWUpXG4gICAgfVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgc2VsZi5oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XG4gICAgICAgIHNlbGYud2lkdGggPSByZXMud2luZG93V2lkdGhcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIG9uU2hvdygpIHt9XG59XG4iXX0=
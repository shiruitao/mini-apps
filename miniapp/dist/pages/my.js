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
      navigationBarTitleText: '个人中心'
    }, _this.data = {
      height: 0,
      width: 0,
      head: '../my/head.png',
      name: '',
      indent: '../my/indent.png',
      address: '../my/address.png',
      shop: '../images/shop.png',
      phone: '../my/phone.png'

    }, _this.methods = {
      pageIndent: function pageIndent() {
        _wepy2.default.navigateTo({
          url: './my/indent'
        });
      },
      pageAddress: function pageAddress() {
        _wepy2.default.navigateTo({
          url: './my/address'
        });
      },
      shop: function shop() {
        _wepy2.default.switchTab({
          url: './shop'
        });
      },
      contact: function contact() {
        _wepy2.default.showModal({
          title: '手机:',
          content: '18331290663'
          // success: function(res) {
          //   if (res.confirm) {
          //     console.log('用户点击确定')
          //   } 
          //   else if (res.cancel) {
          //     console.log('用户点击取消')
          //   }
          // }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      _wepy2.default.getUserInfo({
        success: function success(res) {
          self.name = res.userInfo.nickName;
          self.head = res.userInfo.avatarUrl;
        }
      });
      _wepy2.default.getSystemInfo({
        success: function success(res) {
          self.height = res.windowHeight;
          self.width = res.windowWidth;
        }
      });
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      var self = this;
      _wepy2.default.getUserInfo({
        success: function success(res) {
          self.name = res.userInfo.nickName;
          self.head = res.userInfo.avatarUrl;
        }
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/my'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJoZWlnaHQiLCJ3aWR0aCIsImhlYWQiLCJuYW1lIiwiaW5kZW50IiwiYWRkcmVzcyIsInNob3AiLCJwaG9uZSIsIm1ldGhvZHMiLCJwYWdlSW5kZW50IiwibmF2aWdhdGVUbyIsInVybCIsInBhZ2VBZGRyZXNzIiwic3dpdGNoVGFiIiwiY29udGFjdCIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsInNlbGYiLCJnZXRVc2VySW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJ1c2VySW5mbyIsIm5pY2tOYW1lIiwiYXZhdGFyVXJsIiwiZ2V0U3lzdGVtSW5mbyIsIndpbmRvd0hlaWdodCIsIndpbmRvd1dpZHRoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGNBQVEsQ0FESDtBQUVMQyxhQUFPLENBRkY7QUFHTEMsWUFBTSxnQkFIRDtBQUlMQyxZQUFNLEVBSkQ7QUFLTEMsY0FBUSxrQkFMSDtBQU1MQyxlQUFTLG1CQU5KO0FBT0xDLFlBQU0sb0JBUEQ7QUFRTEMsYUFBTzs7QUFSRixLLFFBV1BDLE8sR0FBVTtBQUNSQyxnQkFEUSx3QkFDSztBQUNYLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BTE87QUFNUkMsaUJBTlEseUJBTU07QUFDWix1QkFBS0YsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQVZPO0FBV1JMLFVBWFEsa0JBV0Q7QUFDTCx1QkFBS08sU0FBTCxDQUFlO0FBQ2JGLGVBQUs7QUFEUSxTQUFmO0FBR0QsT0FmTztBQWdCUkcsYUFoQlEscUJBZ0JFO0FBQ1IsdUJBQUtDLFNBQUwsQ0FBZTtBQUNiQyxpQkFBTyxLQURNO0FBRWJDLG1CQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZhLFNBQWY7QUFZRDtBQTdCTyxLOzs7Ozs2QkErQkQ7QUFDUCxVQUFJQyxPQUFPLElBQVg7QUFDQSxxQkFBS0MsV0FBTCxDQUFpQjtBQUNmQyxpQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCSCxlQUFLZixJQUFMLEdBQVlrQixJQUFJQyxRQUFKLENBQWFDLFFBQXpCO0FBQ0FMLGVBQUtoQixJQUFMLEdBQVltQixJQUFJQyxRQUFKLENBQWFFLFNBQXpCO0FBQ0Q7QUFKYyxPQUFqQjtBQU1BLHFCQUFLQyxhQUFMLENBQW1CO0FBQ2pCTCxlQURpQixtQkFDVEMsR0FEUyxFQUNKO0FBQ1hILGVBQUtsQixNQUFMLEdBQWNxQixJQUFJSyxZQUFsQjtBQUNBUixlQUFLakIsS0FBTCxHQUFhb0IsSUFBSU0sV0FBakI7QUFDRDtBQUpnQixPQUFuQjtBQU1EOzs7NkJBQ1E7QUFDUCxVQUFJVCxPQUFPLElBQVg7QUFDQSxxQkFBS0MsV0FBTCxDQUFpQjtBQUNmQyxpQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCSCxlQUFLZixJQUFMLEdBQVlrQixJQUFJQyxRQUFKLENBQWFDLFFBQXpCO0FBQ0FMLGVBQUtoQixJQUFMLEdBQVltQixJQUFJQyxRQUFKLENBQWFFLFNBQXpCO0FBQ0Q7QUFKYyxPQUFqQjtBQU1EOzs7O0VBckVnQyxlQUFLSSxJOztrQkFBbkJoQyxLIiwiZmlsZSI6Im15LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+S4quS6uuS4reW/gydcbiAgfVxuICBkYXRhID0ge1xuICAgIGhlaWdodDogMCxcbiAgICB3aWR0aDogMCxcbiAgICBoZWFkOiAnLi4vbXkvaGVhZC5wbmcnLFxuICAgIG5hbWU6ICcnLFxuICAgIGluZGVudDogJy4uL215L2luZGVudC5wbmcnLFxuICAgIGFkZHJlc3M6ICcuLi9teS9hZGRyZXNzLnBuZycsXG4gICAgc2hvcDogJy4uL2ltYWdlcy9zaG9wLnBuZycsXG4gICAgcGhvbmU6ICcuLi9teS9waG9uZS5wbmcnXG5cbiAgfVxuICBtZXRob2RzID0ge1xuICAgIHBhZ2VJbmRlbnQoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL215L2luZGVudCdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBwYWdlQWRkcmVzcygpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vbXkvYWRkcmVzcydcbiAgICAgIH0pXG4gICAgfSxcbiAgICBzaG9wKCkge1xuICAgICAgd2VweS5zd2l0Y2hUYWIoe1xuICAgICAgICB1cmw6ICcuL3Nob3AnXG4gICAgICB9KVxuICAgIH0sXG4gICAgY29udGFjdCgpIHtcbiAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgdGl0bGU6ICfmiYvmnLo6JyxcbiAgICAgICAgY29udGVudDogJzE4MzMxMjkwNjYzJyxcbiAgICAgICAgLy8gc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIC8vICAgaWYgKHJlcy5jb25maXJtKSB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZygn55So5oi354K55Ye756Gu5a6aJylcbiAgICAgICAgLy8gICB9IFxuICAgICAgICAvLyAgIGVsc2UgaWYgKHJlcy5jYW5jZWwpIHtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCfnlKjmiLfngrnlh7vlj5bmtognKVxuICAgICAgICAvLyAgIH1cbiAgICAgICAgLy8gfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHdlcHkuZ2V0VXNlckluZm8oe1xuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIHNlbGYubmFtZSA9IHJlcy51c2VySW5mby5uaWNrTmFtZVxuICAgICAgICBzZWxmLmhlYWQgPSByZXMudXNlckluZm8uYXZhdGFyVXJsXG4gICAgICB9XG4gICAgfSlcbiAgICB3ZXB5LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgc2VsZi5oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XG4gICAgICAgIHNlbGYud2lkdGggPSByZXMud2luZG93V2lkdGhcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIG9uU2hvdygpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBzZWxmLm5hbWUgPSByZXMudXNlckluZm8ubmlja05hbWVcbiAgICAgICAgc2VsZi5oZWFkID0gcmVzLnVzZXJJbmZvLmF2YXRhclVybFxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==
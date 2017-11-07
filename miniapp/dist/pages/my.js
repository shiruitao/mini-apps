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

var my = function (_wepy$page) {
  _inherits(my, _wepy$page);

  function my() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, my);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = my.__proto__ || Object.getPrototypeOf(my)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '个人中心'
    }, _this.data = {
      height: 0,
      width: 0,
      head: '../my/head.png',
      name: '这里是昵称🇨🇳',
      order: '../my/order.png',
      address: '../my/address.png',
      shop: '../images/shop.png',
      phone: '../my/phone.png',
      arrow: '../my/arrow.png'
    }, _this.methods = {
      pageOrder: function pageOrder() {
        _wepy2.default.navigateTo({
          url: './class/order'
        });
      },
      pageAddress: function pageAddress() {
        _wepy2.default.chooseAddress({
          success: function success(res) {
            console.log(JSON.stringify(res));
          },
          fail: function fail(err) {
            console.log(JSON.stringify(err));
          }
        });
        // wepy.navigateTo({
        //   url: './my/address'
        // })
      },
      pageContact: function pageContact() {
        _wepy2.default.setClipboardData({
          data: '18331290663',
          success: function success(res) {
            _wepy2.default.showActionSheet({
              itemList: ['18331290663'],
              success: function success(res) {
                if (res.tapIndex === 0) {
                  _wepy2.default.showToast({
                    title: '已复制',
                    icon: 'success',
                    duration: 1000
                  });
                }
              }
            });
          }
        });
        // wepy.showModal({
        //   title: '手机:',
        //   content: '18331290663'
        // })
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(my, [{
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
    value: function onShow() {}
  }]);

  return my;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(my , 'pages/my'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LmpzIl0sIm5hbWVzIjpbIm15IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJoZWlnaHQiLCJ3aWR0aCIsImhlYWQiLCJuYW1lIiwib3JkZXIiLCJhZGRyZXNzIiwic2hvcCIsInBob25lIiwiYXJyb3ciLCJtZXRob2RzIiwicGFnZU9yZGVyIiwibmF2aWdhdGVUbyIsInVybCIsInBhZ2VBZGRyZXNzIiwiY2hvb3NlQWRkcmVzcyIsInN1Y2Nlc3MiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsImZhaWwiLCJlcnIiLCJwYWdlQ29udGFjdCIsInNldENsaXBib2FyZERhdGEiLCJzaG93QWN0aW9uU2hlZXQiLCJpdGVtTGlzdCIsInRhcEluZGV4Iiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiZHVyYXRpb24iLCJzZWxmIiwiZ2V0VXNlckluZm8iLCJ1c2VySW5mbyIsIm5pY2tOYW1lIiwiYXZhdGFyVXJsIiwiZ2V0U3lzdGVtSW5mbyIsIndpbmRvd0hlaWdodCIsIndpbmRvd1dpZHRoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsRTs7Ozs7Ozs7Ozs7Ozs7OEtBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGNBQVEsQ0FESDtBQUVMQyxhQUFPLENBRkY7QUFHTEMsWUFBTSxnQkFIRDtBQUlMQyxZQUFNLFdBSkQ7QUFLTEMsYUFBTyxpQkFMRjtBQU1MQyxlQUFTLG1CQU5KO0FBT0xDLFlBQU0sb0JBUEQ7QUFRTEMsYUFBTyxpQkFSRjtBQVNMQyxhQUFPO0FBVEYsSyxRQVdQQyxPLEdBQVU7QUFDUkMsZUFEUSx1QkFDSTtBQUNWLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BTE87QUFNUkMsaUJBTlEseUJBTU07QUFDWix1QkFBS0MsYUFBTCxDQUFtQjtBQUNqQkMsbUJBQVMsaUJBQVVDLEdBQVYsRUFBZTtBQUN0QkMsb0JBQVFDLEdBQVIsQ0FBWUMsS0FBS0MsU0FBTCxDQUFlSixHQUFmLENBQVo7QUFDRCxXQUhnQjtBQUlqQkssZ0JBQU0sY0FBVUMsR0FBVixFQUFlO0FBQ25CTCxvQkFBUUMsR0FBUixDQUFZQyxLQUFLQyxTQUFMLENBQWVFLEdBQWYsQ0FBWjtBQUNEO0FBTmdCLFNBQW5CO0FBUUE7QUFDQTtBQUNBO0FBQ0QsT0FsQk87QUFtQlJDLGlCQW5CUSx5QkFtQk07QUFDWix1QkFBS0MsZ0JBQUwsQ0FBc0I7QUFDcEJ6QixnQkFBTSxhQURjO0FBRXBCZ0IsbUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQiwyQkFBS1MsZUFBTCxDQUFxQjtBQUNuQkMsd0JBQVUsQ0FBQyxhQUFELENBRFM7QUFFbkJYLHVCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckIsb0JBQUlBLElBQUlXLFFBQUosS0FBaUIsQ0FBckIsRUFBd0I7QUFDdEIsaUNBQUtDLFNBQUwsQ0FBZTtBQUNiQywyQkFBTyxLQURNO0FBRWJDLDBCQUFNLFNBRk87QUFHYkMsOEJBQVU7QUFIRyxtQkFBZjtBQUtEO0FBQ0Y7QUFWa0IsYUFBckI7QUFZRDtBQWZtQixTQUF0QjtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNEO0FBekNPLEs7Ozs7OzZCQTJDRDtBQUNQLFVBQUlDLE9BQU8sSUFBWDtBQUNBLHFCQUFLQyxXQUFMLENBQWlCO0FBQ2ZsQixpQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCZ0IsZUFBSzdCLElBQUwsR0FBWWEsSUFBSWtCLFFBQUosQ0FBYUMsUUFBekI7QUFDQUgsZUFBSzlCLElBQUwsR0FBWWMsSUFBSWtCLFFBQUosQ0FBYUUsU0FBekI7QUFDRDtBQUpjLE9BQWpCO0FBTUEscUJBQUtDLGFBQUwsQ0FBbUI7QUFDakJ0QixlQURpQixtQkFDVEMsR0FEUyxFQUNKO0FBQ1hnQixlQUFLaEMsTUFBTCxHQUFjZ0IsSUFBSXNCLFlBQWxCO0FBQ0FOLGVBQUsvQixLQUFMLEdBQWFlLElBQUl1QixXQUFqQjtBQUNEO0FBSmdCLE9BQW5CO0FBTUQ7Ozs2QkFDUSxDQUFFOzs7O0VBekVtQixlQUFLQyxJOztrQkFBaEI1QyxFIiwiZmlsZSI6Im15LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgbXkgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+S4quS6uuS4reW/gydcbiAgfVxuICBkYXRhID0ge1xuICAgIGhlaWdodDogMCxcbiAgICB3aWR0aDogMCxcbiAgICBoZWFkOiAnLi4vbXkvaGVhZC5wbmcnLFxuICAgIG5hbWU6ICfov5nph4zmmK/mmLXnp7Dwn4eo8J+HsycsXG4gICAgb3JkZXI6ICcuLi9teS9vcmRlci5wbmcnLFxuICAgIGFkZHJlc3M6ICcuLi9teS9hZGRyZXNzLnBuZycsXG4gICAgc2hvcDogJy4uL2ltYWdlcy9zaG9wLnBuZycsXG4gICAgcGhvbmU6ICcuLi9teS9waG9uZS5wbmcnLFxuICAgIGFycm93OiAnLi4vbXkvYXJyb3cucG5nJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgcGFnZU9yZGVyKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9jbGFzcy9vcmRlcidcbiAgICAgIH0pXG4gICAgfSxcbiAgICBwYWdlQWRkcmVzcygpIHtcbiAgICAgIHdlcHkuY2hvb3NlQWRkcmVzcyh7XG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXMpKVxuICAgICAgICB9LFxuICAgICAgICBmYWlsOiBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyKSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC8vIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAvLyAgIHVybDogJy4vbXkvYWRkcmVzcydcbiAgICAgIC8vIH0pXG4gICAgfSxcbiAgICBwYWdlQ29udGFjdCgpIHtcbiAgICAgIHdlcHkuc2V0Q2xpcGJvYXJkRGF0YSh7XG4gICAgICAgIGRhdGE6ICcxODMzMTI5MDY2MycsXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIHdlcHkuc2hvd0FjdGlvblNoZWV0KHtcbiAgICAgICAgICAgIGl0ZW1MaXN0OiBbJzE4MzMxMjkwNjYzJ10sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgaWYgKHJlcy50YXBJbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5bey5aSN5Yi2JyxcbiAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAvLyB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAvLyAgIHRpdGxlOiAn5omL5py6OicsXG4gICAgICAvLyAgIGNvbnRlbnQ6ICcxODMzMTI5MDY2MydcbiAgICAgIC8vIH0pXG4gICAgfVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBzZWxmLm5hbWUgPSByZXMudXNlckluZm8ubmlja05hbWVcbiAgICAgICAgc2VsZi5oZWFkID0gcmVzLnVzZXJJbmZvLmF2YXRhclVybFxuICAgICAgfVxuICAgIH0pXG4gICAgd2VweS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHNlbGYuaGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxuICAgICAgICBzZWxmLndpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBvblNob3coKSB7fVxufVxuIl19
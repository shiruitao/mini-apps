'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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
      navigationBarTitleText: '购物车'
    }, _this.data = {
      carts: [],
      delete: '../my/delete.png',
      totalPrice: 0.0,
      num: 1,
      cartNum: 0,
      selectAllStatus: true,
      height: 0,
      width: 0,
      obj: {
        name: 'hello'
      }
    }, _this.methods = {
      selectList: function selectList(e) {
        var self = this;
        var index = e.currentTarget.dataset.index;
        var carts = self.carts;
        var selected = self.carts[index].selected;
        self.carts[index].selected = !selected;
        self.setData({
          carts: carts
        });
        self.methods.getTotalPrice(self);
      },
      getTotalPrice: function getTotalPrice(self) {
        var total = 0;
        for (var i = 0; i < self.carts.length; i++) {
          if (self.carts[i].selected) {
            total += self.carts[i].num * self.carts[i].price;
          }
        }
        self.setData({
          totalPrice: total.toFixed(1)
        });
        self.totalPrice = total.toFixed(1);
      },
      deleteList: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
          var self, index;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  self = this;
                  index = e.currentTarget.dataset.index;
                  _context.next = 4;
                  return _wepy2.default.request({
                    url: 'http://127.0.0.1:7001/cartDelete',
                    method: 'POST',
                    data: {
                      id: self.carts[index].id
                    }
                  });

                case 4:
                  _context.next = 6;
                  return _wepy2.default.request({
                    url: 'http://127.0.0.1:7001/cartGet',
                    success: function success(res) {
                      console.log(res.data, 'res.data');
                      self.carts = res.data;
                      self.setData({
                        carts: res.data
                      });
                      console.log(self.carts.length, '长度');
                      self.methods.getTotalPrice(self);
                    }
                  });

                case 6:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function deleteList(_x) {
          return _ref2.apply(this, arguments);
        }

        return deleteList;
      }(),
      selectAll: function selectAll() {
        var self = this;
        var selectAllStatus = self.selectAllStatus;
        selectAllStatus = !selectAllStatus;
        var carts = self.carts;
        for (var i = 0; i < carts.length; i++) {
          carts[i].selected = selectAllStatus;
        }
        self.selectAllStatus = selectAllStatus;
        self.methods.getTotalPrice(self);
      },
      addCount: function addCount(e) {
        var self = this;
        var index = e.currentTarget.dataset.index;
        var carts = self.carts;
        console.log(self.carts);
        var num = carts[index].num;
        num = num + 1;
        carts[index].num = num;
        _wepy2.default.request({
          url: 'http://127.0.0.1:7001/cartUpdate',
          method: 'POST',
          data: {
            id: carts[index].id,
            num: carts[index].num
          }
        });
        self.setData({
          carts: carts
        });
        self.methods.getTotalPrice(self);
      },
      minusCount: function minusCount(e) {
        var self = this;
        var index = e.currentTarget.dataset.index;
        var carts = self.carts;
        var num = carts[index].num;
        if (num <= 1) {
          return false;
        }
        num = num - 1;
        carts[index].num = num;
        _wepy2.default.request({
          url: 'http://127.0.0.1:7001/cartUpdate',
          method: 'POST',
          data: {
            id: self.carts[index].id,
            num: carts[index].num
          }
        });
        self.setData({
          carts: carts
        });
        self.methods.getTotalPrice(self);
      },
      bill: function bill() {
        // let self = this
        _wepy2.default.navigateTo({
          url: './class/submit'
        });
        // wepy.showModal({
        //   title: '仅支持货到付款',
        //   content: `共计: ${self.totalPrice}元`
        // })
      },
      cartsCount: function cartsCount() {
        var self = this;
        var NUM = self.cartNum;
        for (var i = 0; self.carts[i] < self.carts.length; i++) {
          if (self.carts[i].selected === true) {
            NUM += 1;
          }
        }
        self.setData({
          cartNum: NUM
        });
        self.cartNum = NUM;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onShow',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var self;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                self = this;
                _context2.next = 3;
                return _wepy2.default.request({
                  url: 'http://127.0.0.1:7001/cartGet',
                  success: function success(res) {
                    self.carts = res.data;
                    self.setData({
                      carts: res.data
                    });
                    self.methods.getTotalPrice(self);
                    console.log(self.carts, 'cart-onShow');
                    console.log(self.carts.length, '长度');
                    var NUM = 0;
                    for (var i = 0; i < self.carts.length; i++) {
                      if (self.carts[i].selected === 1) {
                        NUM += 1;
                      }
                    }
                    self.setData({
                      cartNum: NUM
                    });
                    self.cartNum = NUM;
                    console.log(NUM, 'NUM');
                  }
                });

              case 3:
                this.$apply();

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onShow() {
        return _ref3.apply(this, arguments);
      }

      return onShow;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      _wepy2.default.request({
        url: 'http://127.0.0.1:7001/cartGet',
        success: function success(res) {
          self.carts = res.data;
          self.setData({
            carts: res.data
          });
          self.methods.getTotalPrice(self);
        }
      });
      _wepy2.default.getSystemInfo({
        success: function success(res) {
          self.height = res.windowHeight;
          self.width = res.windowWidth;
        }
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/shop'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3AuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImNhcnRzIiwiZGVsZXRlIiwidG90YWxQcmljZSIsIm51bSIsImNhcnROdW0iLCJzZWxlY3RBbGxTdGF0dXMiLCJoZWlnaHQiLCJ3aWR0aCIsIm9iaiIsIm5hbWUiLCJtZXRob2RzIiwic2VsZWN0TGlzdCIsImUiLCJzZWxmIiwiaW5kZXgiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInNlbGVjdGVkIiwic2V0RGF0YSIsImdldFRvdGFsUHJpY2UiLCJ0b3RhbCIsImkiLCJsZW5ndGgiLCJwcmljZSIsInRvRml4ZWQiLCJkZWxldGVMaXN0IiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsImlkIiwic3VjY2VzcyIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJzZWxlY3RBbGwiLCJhZGRDb3VudCIsIm1pbnVzQ291bnQiLCJiaWxsIiwibmF2aWdhdGVUbyIsImNhcnRzQ291bnQiLCJOVU0iLCIkYXBwbHkiLCJnZXRTeXN0ZW1JbmZvIiwid2luZG93SGVpZ2h0Iiwid2luZG93V2lkdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxhQUFPLEVBREY7QUFFTEMsY0FBUSxrQkFGSDtBQUdMQyxrQkFBWSxHQUhQO0FBSUxDLFdBQUssQ0FKQTtBQUtMQyxlQUFTLENBTEo7QUFNTEMsdUJBQWlCLElBTlo7QUFPTEMsY0FBUSxDQVBIO0FBUUxDLGFBQU8sQ0FSRjtBQVNMQyxXQUFLO0FBQ0hDLGNBQU07QUFESDtBQVRBLEssUUFhUEMsTyxHQUFVO0FBQ1JDLGdCQURRLHNCQUNHQyxDQURILEVBQ007QUFDWixZQUFJQyxPQUFPLElBQVg7QUFDQSxZQUFNQyxRQUFRRixFQUFFRyxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkYsS0FBdEM7QUFDQSxZQUFJZCxRQUFRYSxLQUFLYixLQUFqQjtBQUNBLFlBQU1pQixXQUFXSixLQUFLYixLQUFMLENBQVdjLEtBQVgsRUFBa0JHLFFBQW5DO0FBQ0FKLGFBQUtiLEtBQUwsQ0FBV2MsS0FBWCxFQUFrQkcsUUFBbEIsR0FBNkIsQ0FBQ0EsUUFBOUI7QUFDQUosYUFBS0ssT0FBTCxDQUFhO0FBQ1hsQixpQkFBT0E7QUFESSxTQUFiO0FBR0FhLGFBQUtILE9BQUwsQ0FBYVMsYUFBYixDQUEyQk4sSUFBM0I7QUFDRCxPQVhPO0FBYVJNLG1CQWJRLHlCQWFNTixJQWJOLEVBYVk7QUFDbEIsWUFBSU8sUUFBUSxDQUFaO0FBQ0EsYUFBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlSLEtBQUtiLEtBQUwsQ0FBV3NCLE1BQS9CLEVBQXVDRCxHQUF2QyxFQUE0QztBQUMxQyxjQUFJUixLQUFLYixLQUFMLENBQVdxQixDQUFYLEVBQWNKLFFBQWxCLEVBQTRCO0FBQzFCRyxxQkFBU1AsS0FBS2IsS0FBTCxDQUFXcUIsQ0FBWCxFQUFjbEIsR0FBZCxHQUFvQlUsS0FBS2IsS0FBTCxDQUFXcUIsQ0FBWCxFQUFjRSxLQUEzQztBQUNEO0FBQ0Y7QUFDRFYsYUFBS0ssT0FBTCxDQUFhO0FBQ1hoQixzQkFBWWtCLE1BQU1JLE9BQU4sQ0FBYyxDQUFkO0FBREQsU0FBYjtBQUdBWCxhQUFLWCxVQUFMLEdBQWtCa0IsTUFBTUksT0FBTixDQUFjLENBQWQsQ0FBbEI7QUFDRCxPQXhCTztBQTBCRkMsZ0JBMUJFO0FBQUEsNkZBMEJTYixDQTFCVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUEyQkZDLHNCQTNCRSxHQTJCSyxJQTNCTDtBQTRCQUMsdUJBNUJBLEdBNEJRRixFQUFFRyxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkYsS0E1QmhDO0FBQUE7QUFBQSx5QkE2QkEsZUFBS1ksT0FBTCxDQUFhO0FBQ2pCQyx5QkFBSyxrQ0FEWTtBQUVqQkMsNEJBQVEsTUFGUztBQUdqQjdCLDBCQUFNO0FBQ0o4QiwwQkFBSWhCLEtBQUtiLEtBQUwsQ0FBV2MsS0FBWCxFQUFrQmU7QUFEbEI7QUFIVyxtQkFBYixDQTdCQTs7QUFBQTtBQUFBO0FBQUEseUJBb0NBLGVBQUtILE9BQUwsQ0FBYTtBQUNqQkMseUJBQUssK0JBRFk7QUFFakJHLDZCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJDLDhCQUFRQyxHQUFSLENBQVlGLElBQUloQyxJQUFoQixFQUFzQixVQUF0QjtBQUNBYywyQkFBS2IsS0FBTCxHQUFhK0IsSUFBSWhDLElBQWpCO0FBQ0FjLDJCQUFLSyxPQUFMLENBQWE7QUFDWGxCLCtCQUFPK0IsSUFBSWhDO0FBREEsdUJBQWI7QUFHQWlDLDhCQUFRQyxHQUFSLENBQVlwQixLQUFLYixLQUFMLENBQVdzQixNQUF2QixFQUErQixJQUEvQjtBQUNBVCwyQkFBS0gsT0FBTCxDQUFhUyxhQUFiLENBQTJCTixJQUEzQjtBQUNEO0FBVmdCLG1CQUFiLENBcENBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBa0RScUIsZUFsRFEsdUJBa0RJO0FBQ1YsWUFBSXJCLE9BQU8sSUFBWDtBQUNBLFlBQUlSLGtCQUFrQlEsS0FBS1IsZUFBM0I7QUFDQUEsMEJBQWtCLENBQUNBLGVBQW5CO0FBQ0EsWUFBSUwsUUFBUWEsS0FBS2IsS0FBakI7QUFDQSxhQUFLLElBQUlxQixJQUFJLENBQWIsRUFBZ0JBLElBQUlyQixNQUFNc0IsTUFBMUIsRUFBa0NELEdBQWxDLEVBQXVDO0FBQ3JDckIsZ0JBQU1xQixDQUFOLEVBQVNKLFFBQVQsR0FBb0JaLGVBQXBCO0FBQ0Q7QUFDRFEsYUFBS1IsZUFBTCxHQUF1QkEsZUFBdkI7QUFDQVEsYUFBS0gsT0FBTCxDQUFhUyxhQUFiLENBQTJCTixJQUEzQjtBQUNELE9BNURPO0FBOERSc0IsY0E5RFEsb0JBOERDdkIsQ0E5REQsRUE4REk7QUFDVixZQUFJQyxPQUFPLElBQVg7QUFDQSxZQUFNQyxRQUFRRixFQUFFRyxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkYsS0FBdEM7QUFDQSxZQUFJZCxRQUFRYSxLQUFLYixLQUFqQjtBQUNBZ0MsZ0JBQVFDLEdBQVIsQ0FBWXBCLEtBQUtiLEtBQWpCO0FBQ0EsWUFBSUcsTUFBTUgsTUFBTWMsS0FBTixFQUFhWCxHQUF2QjtBQUNBQSxjQUFNQSxNQUFNLENBQVo7QUFDQUgsY0FBTWMsS0FBTixFQUFhWCxHQUFiLEdBQW1CQSxHQUFuQjtBQUNBLHVCQUFLdUIsT0FBTCxDQUFhO0FBQ1hDLGVBQUssa0NBRE07QUFFWEMsa0JBQVEsTUFGRztBQUdYN0IsZ0JBQU07QUFDSjhCLGdCQUFJN0IsTUFBTWMsS0FBTixFQUFhZSxFQURiO0FBRUoxQixpQkFBS0gsTUFBTWMsS0FBTixFQUFhWDtBQUZkO0FBSEssU0FBYjtBQVFBVSxhQUFLSyxPQUFMLENBQWE7QUFDWGxCLGlCQUFPQTtBQURJLFNBQWI7QUFHQWEsYUFBS0gsT0FBTCxDQUFhUyxhQUFiLENBQTJCTixJQUEzQjtBQUNELE9BbEZPO0FBb0ZSdUIsZ0JBcEZRLHNCQW9GR3hCLENBcEZILEVBb0ZNO0FBQ1osWUFBSUMsT0FBTyxJQUFYO0FBQ0EsWUFBTUMsUUFBUUYsRUFBRUcsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JGLEtBQXRDO0FBQ0EsWUFBSWQsUUFBUWEsS0FBS2IsS0FBakI7QUFDQSxZQUFJRyxNQUFNSCxNQUFNYyxLQUFOLEVBQWFYLEdBQXZCO0FBQ0EsWUFBSUEsT0FBTyxDQUFYLEVBQWM7QUFDWixpQkFBTyxLQUFQO0FBQ0Q7QUFDREEsY0FBTUEsTUFBTSxDQUFaO0FBQ0FILGNBQU1jLEtBQU4sRUFBYVgsR0FBYixHQUFtQkEsR0FBbkI7QUFDQSx1QkFBS3VCLE9BQUwsQ0FBYTtBQUNYQyxlQUFLLGtDQURNO0FBRVhDLGtCQUFRLE1BRkc7QUFHWDdCLGdCQUFNO0FBQ0o4QixnQkFBSWhCLEtBQUtiLEtBQUwsQ0FBV2MsS0FBWCxFQUFrQmUsRUFEbEI7QUFFSjFCLGlCQUFLSCxNQUFNYyxLQUFOLEVBQWFYO0FBRmQ7QUFISyxTQUFiO0FBUUFVLGFBQUtLLE9BQUwsQ0FBYTtBQUNYbEIsaUJBQU9BO0FBREksU0FBYjtBQUdBYSxhQUFLSCxPQUFMLENBQWFTLGFBQWIsQ0FBMkJOLElBQTNCO0FBQ0QsT0ExR087QUE0R1J3QixVQTVHUSxrQkE0R0Q7QUFDTDtBQUNBLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RYLGVBQUs7QUFEUyxTQUFoQjtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0QsT0FySE87QUFzSFJZLGdCQXRIUSx3QkFzSEs7QUFDWCxZQUFJMUIsT0FBTyxJQUFYO0FBQ0EsWUFBSTJCLE1BQU0zQixLQUFLVCxPQUFmO0FBQ0EsYUFBSyxJQUFJaUIsSUFBSSxDQUFiLEVBQWdCUixLQUFLYixLQUFMLENBQVdxQixDQUFYLElBQWdCUixLQUFLYixLQUFMLENBQVdzQixNQUEzQyxFQUFtREQsR0FBbkQsRUFBd0Q7QUFDdEQsY0FBSVIsS0FBS2IsS0FBTCxDQUFXcUIsQ0FBWCxFQUFjSixRQUFkLEtBQTJCLElBQS9CLEVBQXFDO0FBQ25DdUIsbUJBQU8sQ0FBUDtBQUNEO0FBQ0Y7QUFDRDNCLGFBQUtLLE9BQUwsQ0FBYTtBQUNYZCxtQkFBU29DO0FBREUsU0FBYjtBQUdBM0IsYUFBS1QsT0FBTCxHQUFlb0MsR0FBZjtBQUNEO0FBbElPLEs7Ozs7Ozs7Ozs7OztBQXNJSjNCLG9CLEdBQU8sSTs7dUJBQ0wsZUFBS2EsT0FBTCxDQUFhO0FBQ2pCQyx1QkFBSywrQkFEWTtBQUVqQkcsMkJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQmxCLHlCQUFLYixLQUFMLEdBQWErQixJQUFJaEMsSUFBakI7QUFDQWMseUJBQUtLLE9BQUwsQ0FBYTtBQUNYbEIsNkJBQU8rQixJQUFJaEM7QUFEQSxxQkFBYjtBQUdBYyx5QkFBS0gsT0FBTCxDQUFhUyxhQUFiLENBQTJCTixJQUEzQjtBQUNBbUIsNEJBQVFDLEdBQVIsQ0FBWXBCLEtBQUtiLEtBQWpCLEVBQXdCLGFBQXhCO0FBQ0FnQyw0QkFBUUMsR0FBUixDQUFZcEIsS0FBS2IsS0FBTCxDQUFXc0IsTUFBdkIsRUFBK0IsSUFBL0I7QUFDQSx3QkFBSWtCLE1BQU0sQ0FBVjtBQUNBLHlCQUFLLElBQUluQixJQUFJLENBQWIsRUFBZ0JBLElBQUlSLEtBQUtiLEtBQUwsQ0FBV3NCLE1BQS9CLEVBQXVDRCxHQUF2QyxFQUE0QztBQUMxQywwQkFBSVIsS0FBS2IsS0FBTCxDQUFXcUIsQ0FBWCxFQUFjSixRQUFkLEtBQTJCLENBQS9CLEVBQWtDO0FBQ2hDdUIsK0JBQU8sQ0FBUDtBQUNEO0FBQ0Y7QUFDRDNCLHlCQUFLSyxPQUFMLENBQWE7QUFDWGQsK0JBQVNvQztBQURFLHFCQUFiO0FBR0EzQix5QkFBS1QsT0FBTCxHQUFlb0MsR0FBZjtBQUNBUiw0QkFBUUMsR0FBUixDQUFZTyxHQUFaLEVBQWlCLEtBQWpCO0FBQ0Q7QUFyQmdCLGlCQUFiLEM7OztBQXVCTixxQkFBS0MsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQUVPO0FBQ1AsVUFBSTVCLE9BQU8sSUFBWDtBQUNBLHFCQUFLYSxPQUFMLENBQWE7QUFDWEMsYUFBSywrQkFETTtBQUVYRyxpQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCbEIsZUFBS2IsS0FBTCxHQUFhK0IsSUFBSWhDLElBQWpCO0FBQ0FjLGVBQUtLLE9BQUwsQ0FBYTtBQUNYbEIsbUJBQU8rQixJQUFJaEM7QUFEQSxXQUFiO0FBR0FjLGVBQUtILE9BQUwsQ0FBYVMsYUFBYixDQUEyQk4sSUFBM0I7QUFDRDtBQVJVLE9BQWI7QUFVQSxxQkFBSzZCLGFBQUwsQ0FBbUI7QUFDakJaLGVBRGlCLG1CQUNUQyxHQURTLEVBQ0o7QUFDWGxCLGVBQUtQLE1BQUwsR0FBY3lCLElBQUlZLFlBQWxCO0FBQ0E5QixlQUFLTixLQUFMLEdBQWF3QixJQUFJYSxXQUFqQjtBQUNEO0FBSmdCLE9BQW5CO0FBTUQ7Ozs7RUFuTWdDLGVBQUtDLEk7O2tCQUFuQmpELEsiLCJmaWxlIjoic2hvcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfotK3nianovaYnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBjYXJ0czogW10sXG4gICAgZGVsZXRlOiAnLi4vbXkvZGVsZXRlLnBuZycsXG4gICAgdG90YWxQcmljZTogMC4wLFxuICAgIG51bTogMSxcbiAgICBjYXJ0TnVtOiAwLFxuICAgIHNlbGVjdEFsbFN0YXR1czogdHJ1ZSxcbiAgICBoZWlnaHQ6IDAsXG4gICAgd2lkdGg6IDAsXG4gICAgb2JqOiB7XG4gICAgICBuYW1lOiAnaGVsbG8nXG4gICAgfVxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgc2VsZWN0TGlzdChlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGNvbnN0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICAgIGxldCBjYXJ0cyA9IHNlbGYuY2FydHNcbiAgICAgIGNvbnN0IHNlbGVjdGVkID0gc2VsZi5jYXJ0c1tpbmRleF0uc2VsZWN0ZWRcbiAgICAgIHNlbGYuY2FydHNbaW5kZXhdLnNlbGVjdGVkID0gIXNlbGVjdGVkXG4gICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICBjYXJ0czogY2FydHNcbiAgICAgIH0pXG4gICAgICBzZWxmLm1ldGhvZHMuZ2V0VG90YWxQcmljZShzZWxmKVxuICAgIH0sXG5cbiAgICBnZXRUb3RhbFByaWNlKHNlbGYpIHtcbiAgICAgIGxldCB0b3RhbCA9IDBcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZi5jYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoc2VsZi5jYXJ0c1tpXS5zZWxlY3RlZCkge1xuICAgICAgICAgIHRvdGFsICs9IHNlbGYuY2FydHNbaV0ubnVtICogc2VsZi5jYXJ0c1tpXS5wcmljZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICB0b3RhbFByaWNlOiB0b3RhbC50b0ZpeGVkKDEpXG4gICAgICB9KVxuICAgICAgc2VsZi50b3RhbFByaWNlID0gdG90YWwudG9GaXhlZCgxKVxuICAgIH0sXG5cbiAgICBhc3luYyBkZWxldGVMaXN0KGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgY29uc3QgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleFxuICAgICAgYXdhaXQgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL2NhcnREZWxldGUnLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGlkOiBzZWxmLmNhcnRzW2luZGV4XS5pZFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgYXdhaXQgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL2NhcnRHZXQnLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSwgJ3Jlcy5kYXRhJylcbiAgICAgICAgICBzZWxmLmNhcnRzID0gcmVzLmRhdGFcbiAgICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgICAgY2FydHM6IHJlcy5kYXRhXG4gICAgICAgICAgfSlcbiAgICAgICAgICBjb25zb2xlLmxvZyhzZWxmLmNhcnRzLmxlbmd0aCwgJ+mVv+W6picpXG4gICAgICAgICAgc2VsZi5tZXRob2RzLmdldFRvdGFsUHJpY2Uoc2VsZilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuXG4gICAgc2VsZWN0QWxsKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBsZXQgc2VsZWN0QWxsU3RhdHVzID0gc2VsZi5zZWxlY3RBbGxTdGF0dXNcbiAgICAgIHNlbGVjdEFsbFN0YXR1cyA9ICFzZWxlY3RBbGxTdGF0dXNcbiAgICAgIGxldCBjYXJ0cyA9IHNlbGYuY2FydHNcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY2FydHNbaV0uc2VsZWN0ZWQgPSBzZWxlY3RBbGxTdGF0dXNcbiAgICAgIH1cbiAgICAgIHNlbGYuc2VsZWN0QWxsU3RhdHVzID0gc2VsZWN0QWxsU3RhdHVzXG4gICAgICBzZWxmLm1ldGhvZHMuZ2V0VG90YWxQcmljZShzZWxmKVxuICAgIH0sXG5cbiAgICBhZGRDb3VudChlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGNvbnN0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICAgIGxldCBjYXJ0cyA9IHNlbGYuY2FydHNcbiAgICAgIGNvbnNvbGUubG9nKHNlbGYuY2FydHMpXG4gICAgICBsZXQgbnVtID0gY2FydHNbaW5kZXhdLm51bVxuICAgICAgbnVtID0gbnVtICsgMVxuICAgICAgY2FydHNbaW5kZXhdLm51bSA9IG51bVxuICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL2NhcnRVcGRhdGUnLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGlkOiBjYXJ0c1tpbmRleF0uaWQsXG4gICAgICAgICAgbnVtOiBjYXJ0c1tpbmRleF0ubnVtXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICBjYXJ0czogY2FydHNcbiAgICAgIH0pXG4gICAgICBzZWxmLm1ldGhvZHMuZ2V0VG90YWxQcmljZShzZWxmKVxuICAgIH0sXG5cbiAgICBtaW51c0NvdW50KGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgY29uc3QgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleFxuICAgICAgbGV0IGNhcnRzID0gc2VsZi5jYXJ0c1xuICAgICAgbGV0IG51bSA9IGNhcnRzW2luZGV4XS5udW1cbiAgICAgIGlmIChudW0gPD0gMSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIG51bSA9IG51bSAtIDFcbiAgICAgIGNhcnRzW2luZGV4XS5udW0gPSBudW1cbiAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS9jYXJ0VXBkYXRlJyxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBpZDogc2VsZi5jYXJ0c1tpbmRleF0uaWQsXG4gICAgICAgICAgbnVtOiBjYXJ0c1tpbmRleF0ubnVtXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICBjYXJ0czogY2FydHNcbiAgICAgIH0pXG4gICAgICBzZWxmLm1ldGhvZHMuZ2V0VG90YWxQcmljZShzZWxmKVxuICAgIH0sXG5cbiAgICBiaWxsKCkge1xuICAgICAgLy8gbGV0IHNlbGYgPSB0aGlzXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL2NsYXNzL3N1Ym1pdCdcbiAgICAgIH0pXG4gICAgICAvLyB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAvLyAgIHRpdGxlOiAn5LuF5pSv5oyB6LSn5Yiw5LuY5qy+JyxcbiAgICAgIC8vICAgY29udGVudDogYOWFseiuoTogJHtzZWxmLnRvdGFsUHJpY2V95YWDYFxuICAgICAgLy8gfSlcbiAgICB9LFxuICAgIGNhcnRzQ291bnQoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGxldCBOVU0gPSBzZWxmLmNhcnROdW1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBzZWxmLmNhcnRzW2ldIDwgc2VsZi5jYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoc2VsZi5jYXJ0c1tpXS5zZWxlY3RlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIE5VTSArPSAxXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgIGNhcnROdW06IE5VTVxuICAgICAgfSlcbiAgICAgIHNlbGYuY2FydE51bSA9IE5VTVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIG9uU2hvdygpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL2NhcnRHZXQnLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIHNlbGYuY2FydHMgPSByZXMuZGF0YVxuICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgIGNhcnRzOiByZXMuZGF0YVxuICAgICAgICB9KVxuICAgICAgICBzZWxmLm1ldGhvZHMuZ2V0VG90YWxQcmljZShzZWxmKVxuICAgICAgICBjb25zb2xlLmxvZyhzZWxmLmNhcnRzLCAnY2FydC1vblNob3cnKVxuICAgICAgICBjb25zb2xlLmxvZyhzZWxmLmNhcnRzLmxlbmd0aCwgJ+mVv+W6picpXG4gICAgICAgIHZhciBOVU0gPSAwXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZi5jYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChzZWxmLmNhcnRzW2ldLnNlbGVjdGVkID09PSAxKSB7XG4gICAgICAgICAgICBOVU0gKz0gMVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgIGNhcnROdW06IE5VTVxuICAgICAgICB9KVxuICAgICAgICBzZWxmLmNhcnROdW0gPSBOVU1cbiAgICAgICAgY29uc29sZS5sb2coTlVNLCAnTlVNJylcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuJGFwcGx5KClcbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS9jYXJ0R2V0JyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBzZWxmLmNhcnRzID0gcmVzLmRhdGFcbiAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICBjYXJ0czogcmVzLmRhdGFcbiAgICAgICAgfSlcbiAgICAgICAgc2VsZi5tZXRob2RzLmdldFRvdGFsUHJpY2Uoc2VsZilcbiAgICAgIH1cbiAgICB9KVxuICAgIHdlcHkuZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBzZWxmLmhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgICAgICAgc2VsZi53aWR0aCA9IHJlcy53aW5kb3dXaWR0aFxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==
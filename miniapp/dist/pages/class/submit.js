'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var submit = function (_wepy$page) {
  _inherits(submit, _wepy$page);

  function submit() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, submit);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = submit.__proto__ || Object.getPrototypeOf(submit)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigetionBarTitleText: '确认订单'
    }, _this.data = {
      address: '添加收货地址',
      width: 0,
      height: 0,
      total: 0.0,
      commodity: []
    }, _this.methods = {
      address: function address() {
        var self = this;
        _wepy2.default.chooseAddress({
          success: function success(res) {
            self.address = res;
            console.log(JSON.stringify(res), '地址是什么样的');
          },
          fail: function fail(err) {
            console.log(JSON.stringify(err));
          }
        });
      },
      submit: function submit() {
        var self = this;
        if (self.address.errMsg !== 'chooseAddress:ok') {
          _wepy2.default.showToast({
            title: '请选择收货地址',
            image: '../../images/warn.png',
            duration: 1000
          });
        } else {
          _wepy2.default.showModal({
            title: '提示',
            content: '仅支持货到付款,是否确定下单',
            success: function success(res) {
              if (res.confirm) {
                console.log(self.commodity.length, '长度');
                for (var i = 0; i < self.commodity.length; i++) {
                  _wepy2.default.request({
                    url: 'http://127.0.0.1:7001/orderCreate',
                    method: 'POST',
                    data: {
                      title: self.commodity[i].title,
                      price: self.commodity[i].price,
                      image: self.commodity[i].image,
                      num: self.commodity[i].num,
                      name: self.address.userName,
                      phone: self.address.telNumber,
                      address: '' + (self.address.provinceName + self.address.cityName + self.address.countyName + self.address.detailInfo)
                    }
                  });
                }
                _wepy2.default.navigateTo({
                  url: './order'
                });
                _wepy2.default.request({
                  url: 'http://127.0.0.1:7001/cartDelete',
                  method: 'POST'
                });
              } else if (res.cancel) {
                _wepy2.default.showToast({
                  title: '已取消',
                  icon: 'success',
                  duration: 1000
                });
              }
            }
          });
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(submit, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var self, count;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                self = this;
                count = self.total;

                _wepy2.default.getSystemInfo({
                  success: function success(res) {
                    self.height = res.windowHeight;
                    self.width = res.windowWidth;
                  }
                });
                _context.next = 5;
                return _wepy2.default.request({
                  url: 'http://127.0.0.1:7001/cartSubmit',
                  method: 'POST',
                  data: {
                    selected: true
                  },
                  success: function success(res) {
                    self.setData({
                      commodity: res.data
                    });
                    self.commodity = res.data;

                    console.log(res.data[0].num, 'num');
                    console.log(res.data[0].price, '长度11');
                    for (var i = 0; i < res.data.length; i++) {
                      count += res.data[i].num * res.data[i].price;
                    }
                    self.setData({
                      total: count.toFixed(1)
                    });
                    self.total = count.toFixed(1);
                    console.log(self.total, 'total');
                  }
                });

              case 5:
                this.$apply();

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad() {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);

  return submit;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(submit , 'pages/class/submit'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Ym1pdC5qcyJdLCJuYW1lcyI6WyJzdWJtaXQiLCJjb25maWciLCJuYXZpZ2V0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImFkZHJlc3MiLCJ3aWR0aCIsImhlaWdodCIsInRvdGFsIiwiY29tbW9kaXR5IiwibWV0aG9kcyIsInNlbGYiLCJjaG9vc2VBZGRyZXNzIiwic3VjY2VzcyIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwiZmFpbCIsImVyciIsImVyck1zZyIsInNob3dUb2FzdCIsInRpdGxlIiwiaW1hZ2UiLCJkdXJhdGlvbiIsInNob3dNb2RhbCIsImNvbnRlbnQiLCJjb25maXJtIiwibGVuZ3RoIiwiaSIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJwcmljZSIsIm51bSIsIm5hbWUiLCJ1c2VyTmFtZSIsInBob25lIiwidGVsTnVtYmVyIiwicHJvdmluY2VOYW1lIiwiY2l0eU5hbWUiLCJjb3VudHlOYW1lIiwiZGV0YWlsSW5mbyIsIm5hdmlnYXRlVG8iLCJjYW5jZWwiLCJpY29uIiwiY291bnQiLCJnZXRTeXN0ZW1JbmZvIiwid2luZG93SGVpZ2h0Iiwid2luZG93V2lkdGgiLCJzZWxlY3RlZCIsInNldERhdGEiLCJ0b0ZpeGVkIiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxNOzs7Ozs7Ozs7Ozs7OztzTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsZUFBUyxRQURKO0FBRUxDLGFBQU8sQ0FGRjtBQUdMQyxjQUFRLENBSEg7QUFJTEMsYUFBTyxHQUpGO0FBS0xDLGlCQUFXO0FBTE4sSyxRQU9QQyxPLEdBQVU7QUFDUkwsYUFEUSxxQkFDRTtBQUNSLFlBQUlNLE9BQU8sSUFBWDtBQUNBLHVCQUFLQyxhQUFMLENBQW1CO0FBQ2pCQyxtQkFBUyxpQkFBVUMsR0FBVixFQUFlO0FBQ3RCSCxpQkFB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O0FBREoscUJBQWI7QUFHQU8seUJBQUtGLFNBQUwsR0FBaUJLLElBQUlWLElBQXJCOztBQUVBVyw0QkFBUUMsR0FBUixDQUFZRixJQUFJVixJQUFKLENBQVMsQ0FBVCxFQUFZK0IsR0FBeEIsRUFBNkIsS0FBN0I7QUFDQXBCLDRCQUFRQyxHQUFSLENBQVlGLElBQUlWLElBQUosQ0FBUyxDQUFULEVBQVk4QixLQUF4QixFQUErQixNQUEvQjtBQUNBLHlCQUFLLElBQUlKLElBQUksQ0FBYixFQUFnQkEsSUFBSWhCLElBQUlWLElBQUosQ0FBU3lCLE1BQTdCLEVBQXFDQyxHQUFyQyxFQUEwQztBQUN4Q2lCLCtCQUFTakMsSUFBSVYsSUFBSixDQUFTMEIsQ0FBVCxFQUFZSyxHQUFaLEdBQWtCckIsSUFBSVYsSUFBSixDQUFTMEIsQ0FBVCxFQUFZSSxLQUF2QztBQUNEO0FBQ0R2Qix5QkFBS3lDLE9BQUwsQ0FBYTtBQUNYNUMsNkJBQU91QyxNQUFNTSxPQUFOLENBQWMsQ0FBZDtBQURJLHFCQUFiO0FBR0ExQyx5QkFBS0gsS0FBTCxHQUFhdUMsTUFBTU0sT0FBTixDQUFjLENBQWQsQ0FBYjtBQUNBdEMsNEJBQVFDLEdBQVIsQ0FBWUwsS0FBS0gsS0FBakIsRUFBd0IsT0FBeEI7QUFDRDtBQXRCZ0IsaUJBQWIsQzs7O0FBd0JOLHFCQUFLOEMsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTFHZ0MsZUFBS0MsSTs7a0JBQXBCdEQsTSIsImZpbGUiOiJzdWJtaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBzdWJtaXQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdldGlvbkJhclRpdGxlVGV4dDogJ+ehruiupOiuouWNlSdcbiAgfVxuICBkYXRhID0ge1xuICAgIGFkZHJlc3M6ICfmt7vliqDmlLbotKflnLDlnYAnLFxuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMCxcbiAgICB0b3RhbDogMC4wLFxuICAgIGNvbW1vZGl0eTogW11cbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGFkZHJlc3MoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHdlcHkuY2hvb3NlQWRkcmVzcyh7XG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICBzZWxmLmFkZHJlc3MgPSByZXNcbiAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXMpLCAn5Zyw5Z2A5piv5LuA5LmI5qC355qEJylcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycikpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICBzdWJtaXQoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGlmIChzZWxmLmFkZHJlc3MuZXJyTXNnICE9PSAnY2hvb3NlQWRkcmVzczpvaycpIHtcbiAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiAn6K+36YCJ5oup5pS26LSn5Zyw5Z2AJyxcbiAgICAgICAgICBpbWFnZTogJy4uLy4uL2ltYWdlcy93YXJuLnBuZycsXG4gICAgICAgICAgZHVyYXRpb246IDEwMDBcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgY29udGVudDogJ+S7heaUr+aMgei0p+WIsOS7mOasvizmmK/lkKbnoa7lrprkuIvljZUnLFxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGYuY29tbW9kaXR5Lmxlbmd0aCwgJ+mVv+W6picpXG4gICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZi5jb21tb2RpdHkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL29yZGVyQ3JlYXRlJyxcbiAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogc2VsZi5jb21tb2RpdHlbaV0udGl0bGUsXG4gICAgICAgICAgICAgICAgICAgIHByaWNlOiBzZWxmLmNvbW1vZGl0eVtpXS5wcmljZSxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IHNlbGYuY29tbW9kaXR5W2ldLmltYWdlLFxuICAgICAgICAgICAgICAgICAgICBudW06IHNlbGYuY29tbW9kaXR5W2ldLm51bSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogc2VsZi5hZGRyZXNzLnVzZXJOYW1lLFxuICAgICAgICAgICAgICAgICAgICBwaG9uZTogc2VsZi5hZGRyZXNzLnRlbE51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzczogYCR7c2VsZi5hZGRyZXNzLnByb3ZpbmNlTmFtZSArIHNlbGYuYWRkcmVzcy5jaXR5TmFtZSArIHNlbGYuYWRkcmVzcy5jb3VudHlOYW1lICsgc2VsZi5hZGRyZXNzLmRldGFpbEluZm99YFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICB1cmw6ICcuL29yZGVyJ1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS9jYXJ0RGVsZXRlJyxcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJ1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXMuY2FuY2VsKSB7XG4gICAgICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+W3suWPlua2iCcsXG4gICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBhc3luYyBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgbGV0IGNvdW50ID0gc2VsZi50b3RhbFxuICAgIHdlcHkuZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBzZWxmLmhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgICAgICAgc2VsZi53aWR0aCA9IHJlcy53aW5kb3dXaWR0aFxuICAgICAgfVxuICAgIH0pXG4gICAgYXdhaXQgd2VweS5yZXF1ZXN0KHtcbiAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS9jYXJ0U3VibWl0JyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgZGF0YToge1xuICAgICAgICBzZWxlY3RlZDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgIGNvbW1vZGl0eTogcmVzLmRhdGFcbiAgICAgICAgfSlcbiAgICAgICAgc2VsZi5jb21tb2RpdHkgPSByZXMuZGF0YVxuXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhWzBdLm51bSwgJ251bScpXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhWzBdLnByaWNlLCAn6ZW/5bqmMTEnKVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlcy5kYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY291bnQgKz0gcmVzLmRhdGFbaV0ubnVtICogcmVzLmRhdGFbaV0ucHJpY2VcbiAgICAgICAgfVxuICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgIHRvdGFsOiBjb3VudC50b0ZpeGVkKDEpXG4gICAgICAgIH0pXG4gICAgICAgIHNlbGYudG90YWwgPSBjb3VudC50b0ZpeGVkKDEpXG4gICAgICAgIGNvbnNvbGUubG9nKHNlbGYudG90YWwsICd0b3RhbCcpXG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLiRhcHBseSgpXG4gIH1cbn1cbiJdfQ==
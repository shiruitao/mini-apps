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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Ym1pdC5qcyJdLCJuYW1lcyI6WyJzdWJtaXQiLCJjb25maWciLCJuYXZpZ2V0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImFkZHJlc3MiLCJ3aWR0aCIsImhlaWdodCIsInRvdGFsIiwiY29tbW9kaXR5IiwibWV0aG9kcyIsInNlbGYiLCJjaG9vc2VBZGRyZXNzIiwic3VjY2VzcyIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwiZmFpbCIsImVyciIsImVyck1zZyIsInNob3dUb2FzdCIsInRpdGxlIiwiaW1hZ2UiLCJkdXJhdGlvbiIsImNvdW50IiwiZ2V0U3lzdGVtSW5mbyIsIndpbmRvd0hlaWdodCIsIndpbmRvd1dpZHRoIiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsInNlbGVjdGVkIiwic2V0RGF0YSIsIm51bSIsInByaWNlIiwiaSIsImxlbmd0aCIsInRvRml4ZWQiLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxlQUFTLFFBREo7QUFFTEMsYUFBTyxDQUZGO0FBR0xDLGNBQVEsQ0FISDtBQUlMQyxhQUFPLEdBSkY7QUFLTEMsaUJBQVc7QUFMTixLLFFBT1BDLE8sR0FBVTtBQUNSTCxhQURRLHFCQUNFO0FBQ1IsWUFBSU0sT0FBTyxJQUFYO0FBQ0EsdUJBQUtDLGFBQUwsQ0FBbUI7QUFDakJDLG1CQUFTLGlCQUFVQyxHQUFWLEVBQWU7QUFDdEJILGlCQUFLTixPQUFMLEdBQWVTLEdBQWY7QUFDQUMsb0JBQVFDLEdBQVIsQ0FBWUMsS0FBS0MsU0FBTCxDQUFlSixHQUFmLENBQVosRUFBaUMsU0FBakM7QUFDRCxXQUpnQjtBQUtqQkssZ0JBQU0sY0FBVUMsR0FBVixFQUFlO0FBQ25CTCxvQkFBUUMsR0FBUixDQUFZQyxLQUFLQyxTQUFMLENBQWVFLEdBQWYsQ0FBWjtBQUNEO0FBUGdCLFNBQW5CO0FBU0QsT0FaTztBQWFSbkIsWUFiUSxvQkFhQztBQUNQLFlBQUlVLE9BQU8sSUFBWDtBQUNBLFlBQUlBLEtBQUtOLE9BQUwsQ0FBYWdCLE1BQWIsS0FBd0Isa0JBQTVCLEVBQWdEO0FBQzlDLHlCQUFLQyxTQUFMLENBQWU7QUFDYkMsbUJBQU8sU0FETTtBQUViQyxtQkFBTyx1QkFGTTtBQUdiQyxzQkFBVTtBQUhHLFdBQWY7QUFLRDtBQUNGO0FBdEJPLEs7Ozs7Ozs7Ozs7OztBQXlCSmQsb0IsR0FBTyxJO0FBQ1BlLHFCLEdBQVFmLEtBQUtILEs7O0FBQ2pCLCtCQUFLbUIsYUFBTCxDQUFtQjtBQUNqQmQseUJBRGlCLG1CQUNUQyxHQURTLEVBQ0o7QUFDWEgseUJBQUtKLE1BQUwsR0FBY08sSUFBSWMsWUFBbEI7QUFDQWpCLHlCQUFLTCxLQUFMLEdBQWFRLElBQUllLFdBQWpCO0FBQ0Q7QUFKZ0IsaUJBQW5COzt1QkFNTSxlQUFLQyxPQUFMLENBQWE7QUFDakJDLHVCQUFLLGtDQURZO0FBRWpCQywwQkFBUSxNQUZTO0FBR2pCNUIsd0JBQU07QUFDSjZCLDhCQUFVO0FBRE4sbUJBSFc7QUFNakJwQiwyQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCSCx5QkFBS3VCLE9BQUwsQ0FBYTtBQUNYekIsaUNBQVdLLElBQUlWO0FBREoscUJBQWI7QUFHQU8seUJBQUtGLFNBQUwsR0FBaUJLLElBQUlWLElBQXJCOztBQUVBVyw0QkFBUUMsR0FBUixDQUFZRixJQUFJVixJQUFKLENBQVMsQ0FBVCxFQUFZK0IsR0FBeEIsRUFBNkIsS0FBN0I7QUFDQXBCLDRCQUFRQyxHQUFSLENBQVlGLElBQUlWLElBQUosQ0FBUyxDQUFULEVBQVlnQyxLQUF4QixFQUErQixNQUEvQjtBQUNBLHlCQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSXZCLElBQUlWLElBQUosQ0FBU2tDLE1BQTdCLEVBQXFDRCxHQUFyQyxFQUEwQztBQUN4Q1gsK0JBQVNaLElBQUlWLElBQUosQ0FBU2lDLENBQVQsRUFBWUYsR0FBWixHQUFrQnJCLElBQUlWLElBQUosQ0FBU2lDLENBQVQsRUFBWUQsS0FBdkM7QUFDRDtBQUNEekIseUJBQUt1QixPQUFMLENBQWE7QUFDWDFCLDZCQUFPa0IsTUFBTWEsT0FBTixDQUFjLENBQWQ7QUFESSxxQkFBYjtBQUdBNUIseUJBQUtILEtBQUwsR0FBYWtCLE1BQU1hLE9BQU4sQ0FBYyxDQUFkLENBQWI7QUFDQXhCLDRCQUFRQyxHQUFSLENBQVlMLEtBQUtILEtBQWpCLEVBQXdCLE9BQXhCO0FBQ0Q7QUF0QmdCLGlCQUFiLEM7OztBQXdCTixxQkFBS2dDLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFwRWdDLGVBQUtDLEk7O2tCQUFwQnhDLE0iLCJmaWxlIjoic3VibWl0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc3VibWl0IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnZXRpb25CYXJUaXRsZVRleHQ6ICfnoa7orqTorqLljZUnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBhZGRyZXNzOiAn5re75Yqg5pS26LSn5Zyw5Z2AJyxcbiAgICB3aWR0aDogMCxcbiAgICBoZWlnaHQ6IDAsXG4gICAgdG90YWw6IDAuMCxcbiAgICBjb21tb2RpdHk6IFtdXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBhZGRyZXNzKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICB3ZXB5LmNob29zZUFkZHJlc3Moe1xuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgc2VsZi5hZGRyZXNzID0gcmVzXG4gICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzKSwgJ+WcsOWdgOaYr+S7gOS5iOagt+eahCcpXG4gICAgICAgIH0sXG4gICAgICAgIGZhaWw6IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnIpKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgc3VibWl0KCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBpZiAoc2VsZi5hZGRyZXNzLmVyck1zZyAhPT0gJ2Nob29zZUFkZHJlc3M6b2snKSB7XG4gICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICB0aXRsZTogJ+ivt+mAieaLqeaUtui0p+WcsOWdgCcsXG4gICAgICAgICAgaW1hZ2U6ICcuLi8uLi9pbWFnZXMvd2Fybi5wbmcnLFxuICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGFzeW5jIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBsZXQgY291bnQgPSBzZWxmLnRvdGFsXG4gICAgd2VweS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHNlbGYuaGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxuICAgICAgICBzZWxmLndpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICB9XG4gICAgfSlcbiAgICBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL2NhcnRTdWJtaXQnLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHNlbGVjdGVkOiB0cnVlXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgY29tbW9kaXR5OiByZXMuZGF0YVxuICAgICAgICB9KVxuICAgICAgICBzZWxmLmNvbW1vZGl0eSA9IHJlcy5kYXRhXG5cbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGFbMF0ubnVtLCAnbnVtJylcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGFbMF0ucHJpY2UsICfplb/luqYxMScpXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzLmRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb3VudCArPSByZXMuZGF0YVtpXS5udW0gKiByZXMuZGF0YVtpXS5wcmljZVxuICAgICAgICB9XG4gICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgdG90YWw6IGNvdW50LnRvRml4ZWQoMSlcbiAgICAgICAgfSlcbiAgICAgICAgc2VsZi50b3RhbCA9IGNvdW50LnRvRml4ZWQoMSlcbiAgICAgICAgY29uc29sZS5sb2coc2VsZi50b3RhbCwgJ3RvdGFsJylcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuJGFwcGx5KClcbiAgfVxufVxuIl19
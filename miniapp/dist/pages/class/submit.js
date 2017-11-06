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
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(submit, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var self, count, i;
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
                  }
                });

              case 5:
                this.$apply();
                console.log(self.commodity, 'commodity');
                console.log(self.commodity.length, '长度11');
                for (i = 0; i < self.commodity.length; i++) {
                  count += self.commodity[i].num * self.commodity[i].price;
                }
                self.total = count.toFixed(1);
                console.log(self.total, 'total');

              case 11:
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Ym1pdC5qcyJdLCJuYW1lcyI6WyJzdWJtaXQiLCJjb25maWciLCJuYXZpZ2V0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImFkZHJlc3MiLCJ3aWR0aCIsImhlaWdodCIsInRvdGFsIiwiY29tbW9kaXR5IiwibWV0aG9kcyIsInNlbGYiLCJjaG9vc2VBZGRyZXNzIiwic3VjY2VzcyIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwiZmFpbCIsImVyciIsImNvdW50IiwiZ2V0U3lzdGVtSW5mbyIsIndpbmRvd0hlaWdodCIsIndpbmRvd1dpZHRoIiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsInNlbGVjdGVkIiwic2V0RGF0YSIsIiRhcHBseSIsImxlbmd0aCIsImkiLCJudW0iLCJwcmljZSIsInRvRml4ZWQiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxlQUFTLFFBREo7QUFFTEMsYUFBTyxDQUZGO0FBR0xDLGNBQVEsQ0FISDtBQUlMQyxhQUFPLEdBSkY7QUFLTEMsaUJBQVc7QUFMTixLLFFBT1BDLE8sR0FBVTtBQUNSTCxhQURRLHFCQUNFO0FBQ1IsWUFBSU0sT0FBTyxJQUFYO0FBQ0EsdUJBQUtDLGFBQUwsQ0FBbUI7QUFDakJDLG1CQUFTLGlCQUFVQyxHQUFWLEVBQWU7QUFDdEJILGlCQUFLTixPQUFMLEdBQWVTLEdBQWY7QUFDQUMsb0JBQVFDLEdBQVIsQ0FBWUMsS0FBS0MsU0FBTCxDQUFlSixHQUFmLENBQVosRUFBaUMsU0FBakM7QUFDRCxXQUpnQjtBQUtqQkssZ0JBQU0sY0FBVUMsR0FBVixFQUFlO0FBQ25CTCxvQkFBUUMsR0FBUixDQUFZQyxLQUFLQyxTQUFMLENBQWVFLEdBQWYsQ0FBWjtBQUNEO0FBUGdCLFNBQW5CO0FBU0Q7QUFaTyxLOzs7Ozs7Ozs7Ozs7QUFlSlQsb0IsR0FBTyxJO0FBQ1BVLHFCLEdBQVFWLEtBQUtILEs7O0FBQ2pCLCtCQUFLYyxhQUFMLENBQW1CO0FBQ2pCVCx5QkFEaUIsbUJBQ1RDLEdBRFMsRUFDSjtBQUNYSCx5QkFBS0osTUFBTCxHQUFjTyxJQUFJUyxZQUFsQjtBQUNBWix5QkFBS0wsS0FBTCxHQUFhUSxJQUFJVSxXQUFqQjtBQUNEO0FBSmdCLGlCQUFuQjs7dUJBTU0sZUFBS0MsT0FBTCxDQUFhO0FBQ2pCQyx1QkFBSyxrQ0FEWTtBQUVqQkMsMEJBQVEsTUFGUztBQUdqQnZCLHdCQUFNO0FBQ0p3Qiw4QkFBVTtBQUROLG1CQUhXO0FBTWpCZiwyQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCSCx5QkFBS2tCLE9BQUwsQ0FBYTtBQUNYcEIsaUNBQVdLLElBQUlWO0FBREoscUJBQWI7QUFHQU8seUJBQUtGLFNBQUwsR0FBaUJLLElBQUlWLElBQXJCO0FBQ0Q7QUFYZ0IsaUJBQWIsQzs7O0FBYU4scUJBQUswQixNQUFMO0FBQ0FmLHdCQUFRQyxHQUFSLENBQVlMLEtBQUtGLFNBQWpCLEVBQTRCLFdBQTVCO0FBQ0FNLHdCQUFRQyxHQUFSLENBQVlMLEtBQUtGLFNBQUwsQ0FBZXNCLE1BQTNCLEVBQW1DLE1BQW5DO0FBQ0EscUJBQVNDLENBQVQsR0FBYSxDQUFiLEVBQWdCQSxJQUFJckIsS0FBS0YsU0FBTCxDQUFlc0IsTUFBbkMsRUFBMkNDLEdBQTNDLEVBQWdEO0FBQzlDWCwyQkFBU1YsS0FBS0YsU0FBTCxDQUFldUIsQ0FBZixFQUFrQkMsR0FBbEIsR0FBd0J0QixLQUFLRixTQUFMLENBQWV1QixDQUFmLEVBQWtCRSxLQUFuRDtBQUNEO0FBQ0R2QixxQkFBS0gsS0FBTCxHQUFhYSxNQUFNYyxPQUFOLENBQWMsQ0FBZCxDQUFiO0FBQ0FwQix3QkFBUUMsR0FBUixDQUFZTCxLQUFLSCxLQUFqQixFQUF3QixPQUF4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXREZ0MsZUFBSzRCLEk7O2tCQUFwQm5DLE0iLCJmaWxlIjoic3VibWl0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc3VibWl0IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnZXRpb25CYXJUaXRsZVRleHQ6ICfnoa7orqTorqLljZUnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBhZGRyZXNzOiAn5re75Yqg5pS26LSn5Zyw5Z2AJyxcbiAgICB3aWR0aDogMCxcbiAgICBoZWlnaHQ6IDAsXG4gICAgdG90YWw6IDAuMCxcbiAgICBjb21tb2RpdHk6IFtdXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBhZGRyZXNzKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICB3ZXB5LmNob29zZUFkZHJlc3Moe1xuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgc2VsZi5hZGRyZXNzID0gcmVzXG4gICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzKSwgJ+WcsOWdgOaYr+S7gOS5iOagt+eahCcpXG4gICAgICAgIH0sXG4gICAgICAgIGZhaWw6IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnIpKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBhc3luYyBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgbGV0IGNvdW50ID0gc2VsZi50b3RhbFxuICAgIHdlcHkuZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBzZWxmLmhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgICAgICAgc2VsZi53aWR0aCA9IHJlcy53aW5kb3dXaWR0aFxuICAgICAgfVxuICAgIH0pXG4gICAgYXdhaXQgd2VweS5yZXF1ZXN0KHtcbiAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS9jYXJ0U3VibWl0JyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgZGF0YToge1xuICAgICAgICBzZWxlY3RlZDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgIGNvbW1vZGl0eTogcmVzLmRhdGFcbiAgICAgICAgfSlcbiAgICAgICAgc2VsZi5jb21tb2RpdHkgPSByZXMuZGF0YVxuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy4kYXBwbHkoKVxuICAgIGNvbnNvbGUubG9nKHNlbGYuY29tbW9kaXR5LCAnY29tbW9kaXR5JylcbiAgICBjb25zb2xlLmxvZyhzZWxmLmNvbW1vZGl0eS5sZW5ndGgsICfplb/luqYxMScpXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxmLmNvbW1vZGl0eS5sZW5ndGg7IGkrKykge1xuICAgICAgY291bnQgKz0gc2VsZi5jb21tb2RpdHlbaV0ubnVtICogc2VsZi5jb21tb2RpdHlbaV0ucHJpY2VcbiAgICB9XG4gICAgc2VsZi50b3RhbCA9IGNvdW50LnRvRml4ZWQoMSlcbiAgICBjb25zb2xlLmxvZyhzZWxmLnRvdGFsLCAndG90YWwnKVxuICB9XG59XG4iXX0=
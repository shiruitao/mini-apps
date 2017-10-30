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
        var self = this;
        _wepy2.default.showModal({
          title: '仅支持货到付款',
          content: '\u5171\u8BA1: ' + self.totalPrice + '\u5143'
        });
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
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/shop'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3AuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImNhcnRzIiwiZGVsZXRlIiwidG90YWxQcmljZSIsIm51bSIsImNhcnROdW0iLCJzZWxlY3RBbGxTdGF0dXMiLCJvYmoiLCJuYW1lIiwibWV0aG9kcyIsInNlbGVjdExpc3QiLCJlIiwic2VsZiIsImluZGV4IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJzZWxlY3RlZCIsInNldERhdGEiLCJnZXRUb3RhbFByaWNlIiwidG90YWwiLCJpIiwibGVuZ3RoIiwicHJpY2UiLCJ0b0ZpeGVkIiwiZGVsZXRlTGlzdCIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJpZCIsInN1Y2Nlc3MiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwic2VsZWN0QWxsIiwiYWRkQ291bnQiLCJtaW51c0NvdW50IiwiYmlsbCIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsImNhcnRzQ291bnQiLCJOVU0iLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxhQUFPLEVBREY7QUFFTEMsY0FBUSxrQkFGSDtBQUdMQyxrQkFBWSxHQUhQO0FBSUxDLFdBQUssQ0FKQTtBQUtMQyxlQUFTLENBTEo7QUFNTEMsdUJBQWlCLElBTlo7QUFPTEMsV0FBSztBQUNIQyxjQUFNO0FBREg7QUFQQSxLLFFBV1BDLE8sR0FBVTtBQUNSQyxnQkFEUSxzQkFDR0MsQ0FESCxFQUNNO0FBQ1osWUFBSUMsT0FBTyxJQUFYO0FBQ0EsWUFBTUMsUUFBUUYsRUFBRUcsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JGLEtBQXRDO0FBQ0EsWUFBSVosUUFBUVcsS0FBS1gsS0FBakI7QUFDQSxZQUFNZSxX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QUlvQixNQUFNLENBQVY7QUFDQSx5QkFBSyxJQUFJckIsSUFBSSxDQUFiLEVBQWdCQSxJQUFJUixLQUFLWCxLQUFMLENBQVdvQixNQUEvQixFQUF1Q0QsR0FBdkMsRUFBNEM7QUFDMUMsMEJBQUlSLEtBQUtYLEtBQUwsQ0FBV21CLENBQVgsRUFBY0osUUFBZCxLQUEyQixDQUEvQixFQUFrQztBQUNoQ3lCLCtCQUFPLENBQVA7QUFDRDtBQUNGO0FBQ0Q3Qix5QkFBS0ssT0FBTCxDQUFhO0FBQ1haLCtCQUFTb0M7QUFERSxxQkFBYjtBQUdBN0IseUJBQUtQLE9BQUwsR0FBZW9DLEdBQWY7QUFDQVYsNEJBQVFDLEdBQVIsQ0FBWVMsR0FBWixFQUFpQixLQUFqQjtBQUNEO0FBckJnQixpQkFBYixDOzs7QUF1Qk4scUJBQUtDLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFFTztBQUNQLFVBQUk5QixPQUFPLElBQVg7QUFDQSxxQkFBS2EsT0FBTCxDQUFhO0FBQ1hDLGFBQUssK0JBRE07QUFFWEcsaUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQmxCLGVBQUtYLEtBQUwsR0FBYTZCLElBQUk5QixJQUFqQjtBQUNBWSxlQUFLSyxPQUFMLENBQWE7QUFDWGhCLG1CQUFPNkIsSUFBSTlCO0FBREEsV0FBYjtBQUdBWSxlQUFLSCxPQUFMLENBQWFTLGFBQWIsQ0FBMkJOLElBQTNCO0FBQ0Q7QUFSVSxPQUFiO0FBVUQ7Ozs7RUF4TGdDLGVBQUsrQixJOztrQkFBbkI5QyxLIiwiZmlsZSI6InNob3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6LSt54mp6L2mJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgY2FydHM6IFtdLFxuICAgIGRlbGV0ZTogJy4uL215L2RlbGV0ZS5wbmcnLFxuICAgIHRvdGFsUHJpY2U6IDAuMCxcbiAgICBudW06IDEsXG4gICAgY2FydE51bTogMCxcbiAgICBzZWxlY3RBbGxTdGF0dXM6IHRydWUsXG4gICAgb2JqOiB7XG4gICAgICBuYW1lOiAnaGVsbG8nXG4gICAgfVxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgc2VsZWN0TGlzdChlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGNvbnN0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICAgIGxldCBjYXJ0cyA9IHNlbGYuY2FydHNcbiAgICAgIGNvbnN0IHNlbGVjdGVkID0gc2VsZi5jYXJ0c1tpbmRleF0uc2VsZWN0ZWRcbiAgICAgIHNlbGYuY2FydHNbaW5kZXhdLnNlbGVjdGVkID0gIXNlbGVjdGVkXG4gICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICBjYXJ0czogY2FydHNcbiAgICAgIH0pXG4gICAgICBzZWxmLm1ldGhvZHMuZ2V0VG90YWxQcmljZShzZWxmKVxuICAgIH0sXG5cbiAgICBnZXRUb3RhbFByaWNlKHNlbGYpIHtcbiAgICAgIGxldCB0b3RhbCA9IDBcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZi5jYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoc2VsZi5jYXJ0c1tpXS5zZWxlY3RlZCkge1xuICAgICAgICAgIHRvdGFsICs9IHNlbGYuY2FydHNbaV0ubnVtICogc2VsZi5jYXJ0c1tpXS5wcmljZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICB0b3RhbFByaWNlOiB0b3RhbC50b0ZpeGVkKDEpXG4gICAgICB9KVxuICAgICAgc2VsZi50b3RhbFByaWNlID0gdG90YWwudG9GaXhlZCgxKVxuICAgIH0sXG5cbiAgICBhc3luYyBkZWxldGVMaXN0KGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgY29uc3QgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleFxuICAgICAgYXdhaXQgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL2NhcnREZWxldGUnLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGlkOiBzZWxmLmNhcnRzW2luZGV4XS5pZFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgYXdhaXQgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL2NhcnRHZXQnLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSwgJ3Jlcy5kYXRhJylcbiAgICAgICAgICBzZWxmLmNhcnRzID0gcmVzLmRhdGFcbiAgICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgICAgY2FydHM6IHJlcy5kYXRhXG4gICAgICAgICAgfSlcbiAgICAgICAgICBjb25zb2xlLmxvZyhzZWxmLmNhcnRzLmxlbmd0aCwgJ+mVv+W6picpXG4gICAgICAgICAgc2VsZi5tZXRob2RzLmdldFRvdGFsUHJpY2Uoc2VsZilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuXG4gICAgc2VsZWN0QWxsKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBsZXQgc2VsZWN0QWxsU3RhdHVzID0gc2VsZi5zZWxlY3RBbGxTdGF0dXNcbiAgICAgIHNlbGVjdEFsbFN0YXR1cyA9ICFzZWxlY3RBbGxTdGF0dXNcbiAgICAgIGxldCBjYXJ0cyA9IHNlbGYuY2FydHNcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY2FydHNbaV0uc2VsZWN0ZWQgPSBzZWxlY3RBbGxTdGF0dXNcbiAgICAgIH1cbiAgICAgIHNlbGYuc2VsZWN0QWxsU3RhdHVzID0gc2VsZWN0QWxsU3RhdHVzXG4gICAgICBzZWxmLm1ldGhvZHMuZ2V0VG90YWxQcmljZShzZWxmKVxuICAgIH0sXG5cbiAgICBhZGRDb3VudChlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGNvbnN0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICAgIGxldCBjYXJ0cyA9IHNlbGYuY2FydHNcbiAgICAgIGNvbnNvbGUubG9nKHNlbGYuY2FydHMpXG4gICAgICBsZXQgbnVtID0gY2FydHNbaW5kZXhdLm51bVxuICAgICAgbnVtID0gbnVtICsgMVxuICAgICAgY2FydHNbaW5kZXhdLm51bSA9IG51bVxuICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL2NhcnRVcGRhdGUnLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGlkOiBjYXJ0c1tpbmRleF0uaWQsXG4gICAgICAgICAgbnVtOiBjYXJ0c1tpbmRleF0ubnVtXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICBjYXJ0czogY2FydHNcbiAgICAgIH0pXG4gICAgICBzZWxmLm1ldGhvZHMuZ2V0VG90YWxQcmljZShzZWxmKVxuICAgIH0sXG5cbiAgICBtaW51c0NvdW50KGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgY29uc3QgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleFxuICAgICAgbGV0IGNhcnRzID0gc2VsZi5jYXJ0c1xuICAgICAgbGV0IG51bSA9IGNhcnRzW2luZGV4XS5udW1cbiAgICAgIGlmIChudW0gPD0gMSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIG51bSA9IG51bSAtIDFcbiAgICAgIGNhcnRzW2luZGV4XS5udW0gPSBudW1cbiAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS9jYXJ0VXBkYXRlJyxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBpZDogc2VsZi5jYXJ0c1tpbmRleF0uaWQsXG4gICAgICAgICAgbnVtOiBjYXJ0c1tpbmRleF0ubnVtXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICBjYXJ0czogY2FydHNcbiAgICAgIH0pXG4gICAgICBzZWxmLm1ldGhvZHMuZ2V0VG90YWxQcmljZShzZWxmKVxuICAgIH0sXG5cbiAgICBiaWxsKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgIHRpdGxlOiAn5LuF5pSv5oyB6LSn5Yiw5LuY5qy+JyxcbiAgICAgICAgY29udGVudDogYOWFseiuoTogJHtzZWxmLnRvdGFsUHJpY2V95YWDYFxuICAgICAgfSlcbiAgICB9LFxuICAgIGNhcnRzQ291bnQoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGxldCBOVU0gPSBzZWxmLmNhcnROdW1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBzZWxmLmNhcnRzW2ldIDwgc2VsZi5jYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoc2VsZi5jYXJ0c1tpXS5zZWxlY3RlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIE5VTSArPSAxXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgIGNhcnROdW06IE5VTVxuICAgICAgfSlcbiAgICAgIHNlbGYuY2FydE51bSA9IE5VTVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIG9uU2hvdygpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL2NhcnRHZXQnLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIHNlbGYuY2FydHMgPSByZXMuZGF0YVxuICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgIGNhcnRzOiByZXMuZGF0YVxuICAgICAgICB9KVxuICAgICAgICBzZWxmLm1ldGhvZHMuZ2V0VG90YWxQcmljZShzZWxmKVxuICAgICAgICBjb25zb2xlLmxvZyhzZWxmLmNhcnRzLCAnY2FydC1vblNob3cnKVxuICAgICAgICBjb25zb2xlLmxvZyhzZWxmLmNhcnRzLmxlbmd0aCwgJ+mVv+W6picpXG4gICAgICAgIHZhciBOVU0gPSAwXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZi5jYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChzZWxmLmNhcnRzW2ldLnNlbGVjdGVkID09PSAxKSB7XG4gICAgICAgICAgICBOVU0gKz0gMVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgIGNhcnROdW06IE5VTVxuICAgICAgICB9KVxuICAgICAgICBzZWxmLmNhcnROdW0gPSBOVU1cbiAgICAgICAgY29uc29sZS5sb2coTlVNLCAnTlVNJylcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuJGFwcGx5KClcbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS9jYXJ0R2V0JyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBzZWxmLmNhcnRzID0gcmVzLmRhdGFcbiAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICBjYXJ0czogcmVzLmRhdGFcbiAgICAgICAgfSlcbiAgICAgICAgc2VsZi5tZXRob2RzLmdldFRvdGFsUHJpY2Uoc2VsZilcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=
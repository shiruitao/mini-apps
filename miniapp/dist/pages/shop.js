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
      hasList: false,
      totalPrice: 0.0,
      num: 1,
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3AuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImNhcnRzIiwiZGVsZXRlIiwiaGFzTGlzdCIsInRvdGFsUHJpY2UiLCJudW0iLCJzZWxlY3RBbGxTdGF0dXMiLCJvYmoiLCJuYW1lIiwibWV0aG9kcyIsInNlbGVjdExpc3QiLCJlIiwic2VsZiIsImluZGV4IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJzZWxlY3RlZCIsInNldERhdGEiLCJnZXRUb3RhbFByaWNlIiwidG90YWwiLCJpIiwibGVuZ3RoIiwicHJpY2UiLCJ0b0ZpeGVkIiwiZGVsZXRlTGlzdCIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJpZCIsInN1Y2Nlc3MiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwic2VsZWN0QWxsIiwiYWRkQ291bnQiLCJtaW51c0NvdW50IiwiYmlsbCIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGFBQU8sRUFERjtBQUVMQyxjQUFRLGtCQUZIO0FBR0xDLGVBQVMsS0FISjtBQUlMQyxrQkFBWSxHQUpQO0FBS0xDLFdBQUssQ0FMQTtBQU1MQyx1QkFBaUIsSUFOWjtBQU9MQyxXQUFLO0FBQ0hDLGNBQU07QUFESDtBQVBBLEssUUFXUEMsTyxHQUFVO0FBQ1JDLGdCQURRLHNCQUNHQyxDQURILEVBQ007QUFDWixZQUFJQyxPQUFPLElBQVg7QUFDQSxZQUFNQyxRQUFRRixFQUFFRyxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkYsS0FBdEM7QUFDQSxZQUFJWixRQUFRVyxLQUFLWCxLQUFqQjtBQUNBLFlBQU1lLFdBQVdKLEtBQUtYLEtBQUwsQ0FB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LENBQTJCTixJQUEzQjtBQUNELE9BMUdPO0FBNEdSd0IsVUE1R1Esa0JBNEdEO0FBQ0wsWUFBSXhCLE9BQU8sSUFBWDtBQUNBLHVCQUFLeUIsU0FBTCxDQUFlO0FBQ2JDLGlCQUFPLFNBRE07QUFFYkMsc0NBQWdCM0IsS0FBS1IsVUFBckI7QUFGYSxTQUFmO0FBSUQ7QUFsSE8sSzs7Ozs7Ozs7Ozs7O0FBc0hKUSxvQixHQUFPLEk7O3VCQUNMLGVBQUthLE9BQUwsQ0FBYTtBQUNqQkMsdUJBQUssK0JBRFk7QUFFakJHLDJCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJsQix5QkFBS1gsS0FBTCxHQUFhNkIsSUFBSTlCLElBQWpCO0FBQ0FZLHlCQUFLSyxPQUFMLENBQWE7QUFDWGhCLDZCQUFPNkIsSUFBSTlCO0FBREEscUJBQWI7QUFHQVkseUJBQUtILE9BQUwsQ0FBYVMsYUFBYixDQUEyQk4sSUFBM0I7QUFDQW1CLDRCQUFRQyxHQUFSLENBQVlwQixLQUFLWCxLQUFqQixFQUF3QixhQUF4QjtBQUNEO0FBVGdCLGlCQUFiLEM7OztBQVdOLHFCQUFLdUMsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQUVPO0FBQ1AsVUFBSTVCLE9BQU8sSUFBWDtBQUNBLHFCQUFLYSxPQUFMLENBQWE7QUFDWEMsYUFBSywrQkFETTtBQUVYRyxpQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCbEIsZUFBS1gsS0FBTCxHQUFhNkIsSUFBSTlCLElBQWpCO0FBQ0FZLGVBQUtLLE9BQUwsQ0FBYTtBQUNYaEIsbUJBQU82QixJQUFJOUI7QUFEQSxXQUFiO0FBR0FZLGVBQUtILE9BQUwsQ0FBYVMsYUFBYixDQUEyQk4sSUFBM0I7QUFDRDtBQVJVLE9BQWI7QUFVRDs7OztFQS9KZ0MsZUFBSzZCLEk7O2tCQUFuQjVDLEsiLCJmaWxlIjoic2hvcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfotK3nianovaYnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBjYXJ0czogW10sXG4gICAgZGVsZXRlOiAnLi4vbXkvZGVsZXRlLnBuZycsXG4gICAgaGFzTGlzdDogZmFsc2UsXG4gICAgdG90YWxQcmljZTogMC4wLFxuICAgIG51bTogMSxcbiAgICBzZWxlY3RBbGxTdGF0dXM6IHRydWUsXG4gICAgb2JqOiB7XG4gICAgICBuYW1lOiAnaGVsbG8nXG4gICAgfVxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgc2VsZWN0TGlzdChlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGNvbnN0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICAgIGxldCBjYXJ0cyA9IHNlbGYuY2FydHNcbiAgICAgIGNvbnN0IHNlbGVjdGVkID0gc2VsZi5jYXJ0c1tpbmRleF0uc2VsZWN0ZWRcbiAgICAgIHNlbGYuY2FydHNbaW5kZXhdLnNlbGVjdGVkID0gIXNlbGVjdGVkXG4gICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICBjYXJ0czogY2FydHNcbiAgICAgIH0pXG4gICAgICBzZWxmLm1ldGhvZHMuZ2V0VG90YWxQcmljZShzZWxmKVxuICAgIH0sXG5cbiAgICBnZXRUb3RhbFByaWNlKHNlbGYpIHtcbiAgICAgIGxldCB0b3RhbCA9IDBcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZi5jYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoc2VsZi5jYXJ0c1tpXS5zZWxlY3RlZCkge1xuICAgICAgICAgIHRvdGFsICs9IHNlbGYuY2FydHNbaV0ubnVtICogc2VsZi5jYXJ0c1tpXS5wcmljZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICB0b3RhbFByaWNlOiB0b3RhbC50b0ZpeGVkKDEpXG4gICAgICB9KVxuICAgICAgc2VsZi50b3RhbFByaWNlID0gdG90YWwudG9GaXhlZCgxKVxuICAgIH0sXG5cbiAgICBhc3luYyBkZWxldGVMaXN0KGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgY29uc3QgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleFxuICAgICAgYXdhaXQgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL2NhcnREZWxldGUnLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGlkOiBzZWxmLmNhcnRzW2luZGV4XS5pZFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgYXdhaXQgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL2NhcnRHZXQnLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSwgJ3Jlcy5kYXRhJylcbiAgICAgICAgICBzZWxmLmNhcnRzID0gcmVzLmRhdGFcbiAgICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgICAgY2FydHM6IHJlcy5kYXRhXG4gICAgICAgICAgfSlcbiAgICAgICAgICBjb25zb2xlLmxvZyhzZWxmLmNhcnRzLmxlbmd0aCwgJ+mVv+W6picpXG4gICAgICAgICAgc2VsZi5tZXRob2RzLmdldFRvdGFsUHJpY2Uoc2VsZilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuXG4gICAgc2VsZWN0QWxsKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBsZXQgc2VsZWN0QWxsU3RhdHVzID0gc2VsZi5zZWxlY3RBbGxTdGF0dXNcbiAgICAgIHNlbGVjdEFsbFN0YXR1cyA9ICFzZWxlY3RBbGxTdGF0dXNcbiAgICAgIGxldCBjYXJ0cyA9IHNlbGYuY2FydHNcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY2FydHNbaV0uc2VsZWN0ZWQgPSBzZWxlY3RBbGxTdGF0dXNcbiAgICAgIH1cbiAgICAgIHNlbGYuc2VsZWN0QWxsU3RhdHVzID0gc2VsZWN0QWxsU3RhdHVzXG4gICAgICBzZWxmLm1ldGhvZHMuZ2V0VG90YWxQcmljZShzZWxmKVxuICAgIH0sXG5cbiAgICBhZGRDb3VudChlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGNvbnN0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICAgIGxldCBjYXJ0cyA9IHNlbGYuY2FydHNcbiAgICAgIGNvbnNvbGUubG9nKHNlbGYuY2FydHMpXG4gICAgICBsZXQgbnVtID0gY2FydHNbaW5kZXhdLm51bVxuICAgICAgbnVtID0gbnVtICsgMVxuICAgICAgY2FydHNbaW5kZXhdLm51bSA9IG51bVxuICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL2NhcnRVcGRhdGUnLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGlkOiBjYXJ0c1tpbmRleF0uaWQsXG4gICAgICAgICAgbnVtOiBjYXJ0c1tpbmRleF0ubnVtXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICBjYXJ0czogY2FydHNcbiAgICAgIH0pXG4gICAgICBzZWxmLm1ldGhvZHMuZ2V0VG90YWxQcmljZShzZWxmKVxuICAgIH0sXG5cbiAgICBtaW51c0NvdW50KGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgY29uc3QgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleFxuICAgICAgbGV0IGNhcnRzID0gc2VsZi5jYXJ0c1xuICAgICAgbGV0IG51bSA9IGNhcnRzW2luZGV4XS5udW1cbiAgICAgIGlmIChudW0gPD0gMSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIG51bSA9IG51bSAtIDFcbiAgICAgIGNhcnRzW2luZGV4XS5udW0gPSBudW1cbiAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS9jYXJ0VXBkYXRlJyxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBpZDogc2VsZi5jYXJ0c1tpbmRleF0uaWQsXG4gICAgICAgICAgbnVtOiBjYXJ0c1tpbmRleF0ubnVtXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICBjYXJ0czogY2FydHNcbiAgICAgIH0pXG4gICAgICBzZWxmLm1ldGhvZHMuZ2V0VG90YWxQcmljZShzZWxmKVxuICAgIH0sXG5cbiAgICBiaWxsKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgIHRpdGxlOiAn5LuF5pSv5oyB6LSn5Yiw5LuY5qy+JyxcbiAgICAgICAgY29udGVudDogYOWFseiuoTogJHtzZWxmLnRvdGFsUHJpY2V95YWDYFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBvblNob3coKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgYXdhaXQgd2VweS5yZXF1ZXN0KHtcbiAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS9jYXJ0R2V0JyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBzZWxmLmNhcnRzID0gcmVzLmRhdGFcbiAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICBjYXJ0czogcmVzLmRhdGFcbiAgICAgICAgfSlcbiAgICAgICAgc2VsZi5tZXRob2RzLmdldFRvdGFsUHJpY2Uoc2VsZilcbiAgICAgICAgY29uc29sZS5sb2coc2VsZi5jYXJ0cywgJ2NhcnQtb25TaG93JylcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuJGFwcGx5KClcbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS9jYXJ0R2V0JyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBzZWxmLmNhcnRzID0gcmVzLmRhdGFcbiAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICBjYXJ0czogcmVzLmRhdGFcbiAgICAgICAgfSlcbiAgICAgICAgc2VsZi5tZXRob2RzLmdldFRvdGFsUHJpY2Uoc2VsZilcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=
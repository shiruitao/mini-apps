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
      navigationBarTitleText: '购物车'
    }, _this.data = {
      carts: [],
      delete: '../my/delete.png',
      hasList: false,
      totalPrice: 0.0,
      selectAllStatus: true,
      num: 1,
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
      deleteList: function deleteList(e) {
        var self = this;
        var index = e.currentTarget.dataset.index;
        var carts = self.data.carts;
        carts.splice(index, 1);
        self.setData({
          carts: carts
        });
        if (!carts.length) {
          try {
            _wepy2.default.removeStorageSync('commodity');
          } catch (e) {}
          self.hasList = false;
          console.log(self.hasList);
        } else {
          self.methods.getTotalPrice(self);
        }
      },
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
        var carts = self.data.carts;
        var num = carts[index].num;
        num = num + 1;
        carts[index].num = num;
        self.setData({
          carts: carts
        });
        self.methods.getTotalPrice(self);
      },
      minusCount: function minusCount(e) {
        var self = this;
        var index = e.currentTarget.dataset.index;
        var carts = self.data.carts;
        var num = carts[index].num;
        if (num <= 1) {
          return false;
        }
        num = num - 1;
        carts[index].num = num;
        self.setData({
          carts: carts
        });
        self.methods.getTotalPrice(self);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onShow',
    value: function onShow() {
      var _ = require('./../npm/lodash/lodash.js');
      var self = this;
      try {
        var value = _wepy2.default.getStorageSync('commodity');
        if (value) {
          self.hasList = true;
          value = _.toArray(value);
          value = { image: value[0], title: value[1], price: value[2], num: value[3], selected: value[4] };
          var carts = self.carts;
          carts.push(value);
          self.carts = carts;
          self.setData({
            carts: carts
          });
        }
      } catch (e) {}
      self.methods.getTotalPrice(self);
      try {
        _wepy2.default.removeStorageSync('commodity');
      } catch (e) {}
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/shop'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3AuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImNhcnRzIiwiZGVsZXRlIiwiaGFzTGlzdCIsInRvdGFsUHJpY2UiLCJzZWxlY3RBbGxTdGF0dXMiLCJudW0iLCJvYmoiLCJuYW1lIiwibWV0aG9kcyIsInNlbGVjdExpc3QiLCJlIiwic2VsZiIsImluZGV4IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJzZWxlY3RlZCIsInNldERhdGEiLCJnZXRUb3RhbFByaWNlIiwidG90YWwiLCJpIiwibGVuZ3RoIiwicHJpY2UiLCJ0b0ZpeGVkIiwiZGVsZXRlTGlzdCIsInNwbGljZSIsInJlbW92ZVN0b3JhZ2VTeW5jIiwiY29uc29sZSIsImxvZyIsInNlbGVjdEFsbCIsImFkZENvdW50IiwibWludXNDb3VudCIsIl8iLCJyZXF1aXJlIiwidmFsdWUiLCJnZXRTdG9yYWdlU3luYyIsInRvQXJyYXkiLCJpbWFnZSIsInRpdGxlIiwicHVzaCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxhQUFPLEVBREY7QUFFTEMsY0FBUSxrQkFGSDtBQUdMQyxlQUFTLEtBSEo7QUFJTEMsa0JBQVksR0FKUDtBQUtMQyx1QkFBaUIsSUFMWjtBQU1MQyxXQUFLLENBTkE7QUFPTEMsV0FBSztBQUNIQyxjQUFNO0FBREg7QUFQQSxLLFFBV1BDLE8sR0FBVTtBQUNSQyxnQkFEUSxzQkFDR0MsQ0FESCxFQUNNO0FBQ1osWUFBSUMsT0FBTyxJQUFYO0FBQ0EsWUFBTUMsUUFBUUYsRUFBRUcsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JGLEtBQXRDO0FBQ0EsWUFBSVosUUFBUVcsS0FBS1gsS0FBakI7QUFDQSxZQUFNZSxXQUFXSixLQUFLWCxL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T1UsQ0FBUCxFQUFVLENBQ1g7QUFDREMsV0FBS0gsT0FBTCxDQUFhUyxhQUFiLENBQTJCTixJQUEzQjtBQUNBLFVBQUk7QUFDRix1QkFBS2MsaUJBQUwsQ0FBdUIsV0FBdkI7QUFDRCxPQUZELENBRUUsT0FBT2YsQ0FBUCxFQUFVLENBQ1g7QUFDRjs7OzZCQUNRLENBQ1I7Ozs7RUFoSWdDLGVBQUs2QixJOztrQkFBbkIzQyxLIiwiZmlsZSI6InNob3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6LSt54mp6L2mJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgY2FydHM6IFtdLFxuICAgIGRlbGV0ZTogJy4uL215L2RlbGV0ZS5wbmcnLFxuICAgIGhhc0xpc3Q6IGZhbHNlLFxuICAgIHRvdGFsUHJpY2U6IDAuMCxcbiAgICBzZWxlY3RBbGxTdGF0dXM6IHRydWUsXG4gICAgbnVtOiAxLFxuICAgIG9iajoge1xuICAgICAgbmFtZTogJ2hlbGxvJ1xuICAgIH1cbiAgfVxuICBtZXRob2RzID0ge1xuICAgIHNlbGVjdExpc3QoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBjb25zdCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XG4gICAgICBsZXQgY2FydHMgPSBzZWxmLmNhcnRzXG4gICAgICBjb25zdCBzZWxlY3RlZCA9IHNlbGYuY2FydHNbaW5kZXhdLnNlbGVjdGVkXG4gICAgICBzZWxmLmNhcnRzW2luZGV4XS5zZWxlY3RlZCA9ICFzZWxlY3RlZFxuICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgY2FydHM6IGNhcnRzXG4gICAgICB9KVxuICAgICAgc2VsZi5tZXRob2RzLmdldFRvdGFsUHJpY2Uoc2VsZilcbiAgICB9LFxuXG4gICAgZ2V0VG90YWxQcmljZShzZWxmKSB7XG4gICAgICBsZXQgdG90YWwgPSAwXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGYuY2FydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHNlbGYuY2FydHNbaV0uc2VsZWN0ZWQpIHtcbiAgICAgICAgICB0b3RhbCArPSBzZWxmLmNhcnRzW2ldLm51bSAqIHNlbGYuY2FydHNbaV0ucHJpY2VcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgdG90YWxQcmljZTogdG90YWwudG9GaXhlZCgxKVxuICAgICAgfSlcbiAgICAgIHNlbGYudG90YWxQcmljZSA9IHRvdGFsLnRvRml4ZWQoMSlcbiAgICB9LFxuXG4gICAgZGVsZXRlTGlzdChlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGNvbnN0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICAgIGxldCBjYXJ0cyA9IHNlbGYuZGF0YS5jYXJ0c1xuICAgICAgY2FydHMuc3BsaWNlKGluZGV4LCAxKVxuICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgY2FydHM6IGNhcnRzXG4gICAgICB9KVxuICAgICAgaWYgKCFjYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB3ZXB5LnJlbW92ZVN0b3JhZ2VTeW5jKCdjb21tb2RpdHknKVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIH1cbiAgICAgICAgc2VsZi5oYXNMaXN0ID0gZmFsc2VcbiAgICAgICAgY29uc29sZS5sb2coc2VsZi5oYXNMaXN0KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5tZXRob2RzLmdldFRvdGFsUHJpY2Uoc2VsZilcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc2VsZWN0QWxsKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBsZXQgc2VsZWN0QWxsU3RhdHVzID0gc2VsZi5zZWxlY3RBbGxTdGF0dXNcbiAgICAgIHNlbGVjdEFsbFN0YXR1cyA9ICFzZWxlY3RBbGxTdGF0dXNcbiAgICAgIGxldCBjYXJ0cyA9IHNlbGYuY2FydHNcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY2FydHNbaV0uc2VsZWN0ZWQgPSBzZWxlY3RBbGxTdGF0dXNcbiAgICAgIH1cbiAgICAgIHNlbGYuc2VsZWN0QWxsU3RhdHVzID0gc2VsZWN0QWxsU3RhdHVzXG4gICAgICBzZWxmLm1ldGhvZHMuZ2V0VG90YWxQcmljZShzZWxmKVxuICAgIH0sXG5cbiAgICBhZGRDb3VudChlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGNvbnN0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICAgIGxldCBjYXJ0cyA9IHNlbGYuZGF0YS5jYXJ0c1xuICAgICAgbGV0IG51bSA9IGNhcnRzW2luZGV4XS5udW1cbiAgICAgIG51bSA9IG51bSArIDFcbiAgICAgIGNhcnRzW2luZGV4XS5udW0gPSBudW1cbiAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgIGNhcnRzOiBjYXJ0c1xuICAgICAgfSlcbiAgICAgIHNlbGYubWV0aG9kcy5nZXRUb3RhbFByaWNlKHNlbGYpXG4gICAgfSxcblxuICAgIG1pbnVzQ291bnQoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBjb25zdCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XG4gICAgICBsZXQgY2FydHMgPSBzZWxmLmRhdGEuY2FydHNcbiAgICAgIGxldCBudW0gPSBjYXJ0c1tpbmRleF0ubnVtXG4gICAgICBpZiAobnVtIDw9IDEpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICBudW0gPSBudW0gLSAxXG4gICAgICBjYXJ0c1tpbmRleF0ubnVtID0gbnVtXG4gICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICBjYXJ0czogY2FydHNcbiAgICAgIH0pXG4gICAgICBzZWxmLm1ldGhvZHMuZ2V0VG90YWxQcmljZShzZWxmKVxuICAgIH1cbiAgfVxuXG4gIG9uU2hvdygpIHtcbiAgICBjb25zdCBfID0gcmVxdWlyZSgnbG9kYXNoJylcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB0cnkge1xuICAgICAgdmFyIHZhbHVlID0gd2VweS5nZXRTdG9yYWdlU3luYygnY29tbW9kaXR5JylcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICBzZWxmLmhhc0xpc3QgPSB0cnVlXG4gICAgICAgIHZhbHVlID0gXy50b0FycmF5KHZhbHVlKVxuICAgICAgICB2YWx1ZSA9IHtpbWFnZTogdmFsdWVbMF0sIHRpdGxlOiB2YWx1ZVsxXSwgcHJpY2U6IHZhbHVlWzJdLCBudW06IHZhbHVlWzNdLCBzZWxlY3RlZDogdmFsdWVbNF19XG4gICAgICAgIGxldCBjYXJ0cyA9IHNlbGYuY2FydHNcbiAgICAgICAgY2FydHMucHVzaCh2YWx1ZSlcbiAgICAgICAgc2VsZi5jYXJ0cyA9IGNhcnRzXG4gICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgY2FydHM6IGNhcnRzXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgIH1cbiAgICBzZWxmLm1ldGhvZHMuZ2V0VG90YWxQcmljZShzZWxmKVxuICAgIHRyeSB7XG4gICAgICB3ZXB5LnJlbW92ZVN0b3JhZ2VTeW5jKCdjb21tb2RpdHknKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICB9XG59XG4iXX0=
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
        _wepy2.default.getStorageSync('commodity');
      } catch (e) {}
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3AuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImNhcnRzIiwiZGVsZXRlIiwiaGFzTGlzdCIsInRvdGFsUHJpY2UiLCJzZWxlY3RBbGxTdGF0dXMiLCJudW0iLCJvYmoiLCJuYW1lIiwibWV0aG9kcyIsInNlbGVjdExpc3QiLCJlIiwic2VsZiIsImluZGV4IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJzZWxlY3RlZCIsInNldERhdGEiLCJnZXRUb3RhbFByaWNlIiwidG90YWwiLCJpIiwibGVuZ3RoIiwicHJpY2UiLCJ0b0ZpeGVkIiwiZGVsZXRlTGlzdCIsInNwbGljZSIsInJlbW92ZVN0b3JhZ2VTeW5jIiwiY29uc29sZSIsImxvZyIsInNlbGVjdEFsbCIsImFkZENvdW50IiwibWludXNDb3VudCIsIl8iLCJyZXF1aXJlIiwiZ2V0U3RvcmFnZVN5bmMiLCJ2YWx1ZSIsInRvQXJyYXkiLCJpbWFnZSIsInRpdGxlIiwicHVzaCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxhQUFPLEVBREY7QUFFTEMsY0FBUSxrQkFGSDtBQUdMQyxlQUFTLEtBSEo7QUFJTEMsa0JBQVksR0FKUDtBQUtMQyx1QkFBaUIsSUFMWjtBQU1MQyxXQUFLLENBTkE7QUFPTEMsV0FBSztBQUNIQyxjQUFNO0FBREg7QUFQQSxLLFFBV1BDLE8sR0FBVTtBQUNSQyxnQkFEUSxzQkFDR0MsQ0FESCxFQUNNO0FBQ1osWUFBSUMsT0FBTyxJQUFYO0FBQ0EsWUFBTUMsUUFBUUYsRUFBRUcsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JGLEtBQXRDO0FBQ0EsWUFBSVosUUFBUVcsS0FBS1gsS0FBakI7QUFDQSxZQUFNZSxXQUFXSixLQUFLWCxL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YUEsS0FBYjtBQUNBVyxlQUFLSyxPQUFMLENBQWE7QUFDWGhCLG1CQUFPQTtBQURJLFdBQWI7QUFHRDtBQUNGLE9BYkQsQ0FhRSxPQUFPVSxDQUFQLEVBQVUsQ0FDWDtBQUNEQyxXQUFLSCxPQUFMLENBQWFTLGFBQWIsQ0FBMkJOLElBQTNCO0FBQ0EsVUFBSTtBQUNGLHVCQUFLYyxpQkFBTCxDQUF1QixXQUF2QjtBQUNELE9BRkQsQ0FFRSxPQUFPZixDQUFQLEVBQVUsQ0FDWDtBQUNGOzs7NkJBQ1EsQ0FDUjs7OztFQW5JZ0MsZUFBSzZCLEk7O2tCQUFuQjNDLEsiLCJmaWxlIjoic2hvcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfotK3nianovaYnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBjYXJ0czogW10sXG4gICAgZGVsZXRlOiAnLi4vbXkvZGVsZXRlLnBuZycsXG4gICAgaGFzTGlzdDogZmFsc2UsXG4gICAgdG90YWxQcmljZTogMC4wLFxuICAgIHNlbGVjdEFsbFN0YXR1czogdHJ1ZSxcbiAgICBudW06IDEsXG4gICAgb2JqOiB7XG4gICAgICBuYW1lOiAnaGVsbG8nXG4gICAgfVxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgc2VsZWN0TGlzdChlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGNvbnN0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICAgIGxldCBjYXJ0cyA9IHNlbGYuY2FydHNcbiAgICAgIGNvbnN0IHNlbGVjdGVkID0gc2VsZi5jYXJ0c1tpbmRleF0uc2VsZWN0ZWRcbiAgICAgIHNlbGYuY2FydHNbaW5kZXhdLnNlbGVjdGVkID0gIXNlbGVjdGVkXG4gICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICBjYXJ0czogY2FydHNcbiAgICAgIH0pXG4gICAgICBzZWxmLm1ldGhvZHMuZ2V0VG90YWxQcmljZShzZWxmKVxuICAgIH0sXG4gICAgZ2V0VG90YWxQcmljZShzZWxmKSB7XG4gICAgICBsZXQgdG90YWwgPSAwXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGYuY2FydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHNlbGYuY2FydHNbaV0uc2VsZWN0ZWQpIHtcbiAgICAgICAgICB0b3RhbCArPSBzZWxmLmNhcnRzW2ldLm51bSAqIHNlbGYuY2FydHNbaV0ucHJpY2VcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgdG90YWxQcmljZTogdG90YWwudG9GaXhlZCgxKVxuICAgICAgfSlcbiAgICAgIHNlbGYudG90YWxQcmljZSA9IHRvdGFsLnRvRml4ZWQoMSlcbiAgICB9LFxuICAgIGRlbGV0ZUxpc3QoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBjb25zdCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XG4gICAgICBsZXQgY2FydHMgPSBzZWxmLmRhdGEuY2FydHNcbiAgICAgIGNhcnRzLnNwbGljZShpbmRleCwgMSlcbiAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgIGNhcnRzOiBjYXJ0c1xuICAgICAgfSlcbiAgICAgIGlmICghY2FydHMubGVuZ3RoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgd2VweS5yZW1vdmVTdG9yYWdlU3luYygnY29tbW9kaXR5JylcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB9XG4gICAgICAgIHNlbGYuaGFzTGlzdCA9IGZhbHNlXG4gICAgICAgIGNvbnNvbGUubG9nKHNlbGYuaGFzTGlzdClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYubWV0aG9kcy5nZXRUb3RhbFByaWNlKHNlbGYpXG4gICAgICB9XG4gICAgfSxcblxuICAgIHNlbGVjdEFsbCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgbGV0IHNlbGVjdEFsbFN0YXR1cyA9IHNlbGYuc2VsZWN0QWxsU3RhdHVzXG4gICAgICBzZWxlY3RBbGxTdGF0dXMgPSAhc2VsZWN0QWxsU3RhdHVzXG4gICAgICBsZXQgY2FydHMgPSBzZWxmLmNhcnRzXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNhcnRzW2ldLnNlbGVjdGVkID0gc2VsZWN0QWxsU3RhdHVzXG4gICAgICB9XG4gICAgICBzZWxmLnNlbGVjdEFsbFN0YXR1cyA9IHNlbGVjdEFsbFN0YXR1c1xuICAgICAgc2VsZi5tZXRob2RzLmdldFRvdGFsUHJpY2Uoc2VsZilcbiAgICB9LFxuXG4gICAgYWRkQ291bnQoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBjb25zdCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XG4gICAgICBsZXQgY2FydHMgPSBzZWxmLmRhdGEuY2FydHNcbiAgICAgIGxldCBudW0gPSBjYXJ0c1tpbmRleF0ubnVtXG4gICAgICBudW0gPSBudW0gKyAxXG4gICAgICBjYXJ0c1tpbmRleF0ubnVtID0gbnVtXG4gICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICBjYXJ0czogY2FydHNcbiAgICAgIH0pXG4gICAgICBzZWxmLm1ldGhvZHMuZ2V0VG90YWxQcmljZShzZWxmKVxuICAgIH0sXG5cbiAgICBtaW51c0NvdW50KGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgY29uc3QgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleFxuICAgICAgbGV0IGNhcnRzID0gc2VsZi5kYXRhLmNhcnRzXG4gICAgICBsZXQgbnVtID0gY2FydHNbaW5kZXhdLm51bVxuICAgICAgaWYgKG51bSA8PSAxKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgbnVtID0gbnVtIC0gMVxuICAgICAgY2FydHNbaW5kZXhdLm51bSA9IG51bVxuICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgY2FydHM6IGNhcnRzXG4gICAgICB9KVxuICAgICAgc2VsZi5tZXRob2RzLmdldFRvdGFsUHJpY2Uoc2VsZilcbiAgICB9XG5cbiAgfVxuXG4gIG9uU2hvdygpIHtcbiAgICBjb25zdCBfID0gcmVxdWlyZSgnbG9kYXNoJylcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB0cnkge1xuICAgICAgd2VweS5nZXRTdG9yYWdlU3luYygnY29tbW9kaXR5JylcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICB2YXIgdmFsdWUgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdjb21tb2RpdHknKVxuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHNlbGYuaGFzTGlzdCA9IHRydWVcbiAgICAgICAgdmFsdWUgPSBfLnRvQXJyYXkodmFsdWUpXG4gICAgICAgIHZhbHVlID0ge2ltYWdlOiB2YWx1ZVswXSwgdGl0bGU6IHZhbHVlWzFdLCBwcmljZTogdmFsdWVbMl0sIG51bTogdmFsdWVbM10sIHNlbGVjdGVkOiB2YWx1ZVs0XX1cbiAgICAgICAgbGV0IGNhcnRzID0gc2VsZi5jYXJ0c1xuICAgICAgICBjYXJ0cy5wdXNoKHZhbHVlKVxuICAgICAgICBzZWxmLmNhcnRzID0gY2FydHNcbiAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICBjYXJ0czogY2FydHNcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgfVxuICAgIHNlbGYubWV0aG9kcy5nZXRUb3RhbFByaWNlKHNlbGYpXG4gICAgdHJ5IHtcbiAgICAgIHdlcHkucmVtb3ZlU3RvcmFnZVN5bmMoJ2NvbW1vZGl0eScpXG4gICAgfSBjYXRjaCAoZSkge1xuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gIH1cbn1cbiJdfQ==
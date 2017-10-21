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

// import carts from '../commodity/commodity.js'
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
      hasList: false, // 列表是否有数据
      totalPrice: 0.0, // 总价，初始为0
      selectAllStatus: true, // 全选状态，默认全选
      num: 1,
      obj: {
        name: 'hello'
      }
    }, _this.methods = {
      /**
       * 当前商品选中事件
       */
      selectList: function selectList(e) {
        var self = this;
        var index = e.currentTarget.dataset.index; // 获取data- 传进来的index
        var carts = self.carts; // 获取购物车列表
        var selected = self.carts[index].selected; // 获取当前商品的选中状态
        self.carts[index].selected = !selected; // 改变状态
        self.setData({
          carts: carts
        });
        self.methods.getTotalPrice(self); // 重新获取总价
      },
      getTotalPrice: function getTotalPrice(self) {
        var total = 0;
        for (var i = 0; i < self.carts.length; i++) {
          // 循环列表得到每个数据
          if (self.carts[i].selected) {
            // 判断选中才会计算价格
            total += self.carts[i].num * self.carts[i].price; // 所有价格加起来
          }
        }
        self.setData({ // 最后赋值到data中渲染到页面
          totalPrice: total.toFixed(1)
        });
        self.totalPrice = total.toFixed(1);
      },

      /**
       * 删除购物车当前商品
       */
      deleteList: function deleteList(e) {
        var self = this;
        var index = e.currentTarget.dataset.index;
        var carts = self.data.carts;
        carts.splice(index, 1);
        self.setData({
          carts: carts
        });
        if (!carts.length) {
          self.setData({
            hasList: false
          });
        } else {
          self.methods.getTotalPrice(self);
        }
      },


      /**
       * 购物车全选事件
       */
      selectAll: function selectAll() {
        var self = this;
        var selectAllStatus = self.selectAllStatus; // 是否全选状态
        selectAllStatus = !selectAllStatus;
        var carts = self.carts;
        for (var i = 0; i < carts.length; i++) {
          carts[i].selected = selectAllStatus; // 改变所有商品状态
        }
        self.selectAllStatus = selectAllStatus;
        // carts: carts
        self.methods.getTotalPrice(self); // 重新获取总价
      },


      /**
       * 绑定加数量事件
       */
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


      /**
       * 绑定减数量事件
       */
      minusCount: function minusCount(e) {
        var self = this;
        var index = e.currentTarget.dataset.index;
        // const obj = e.currentTarget.dataset.obj
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

    /**
     * 计算总价
     */
    value: function onShow() {
      var _ = require('./../npm/lodash/lodash.js');
      var self = this;
      self.hasList = true;
      try {
        _wepy2.default.getStorageSync('commodity');
      } catch (e) {
        // Do something when catch error
      }
      try {
        var value = _wepy2.default.getStorageSync('commodity');
        console.log(value, 'value');
        if (value) {
          value = _.toArray(value);
          value = { image: value[0], title: value[1], price: value[2], num: value[3], selected: value[4] };
          self.carts.push(value);
        }
      } catch (e) {
        // Do something when catch error
      }
      self.methods.getTotalPrice(self);
      try {
        _wepy2.default.removeStorageSync('commodity');
      } catch (e) {
        // Do something when catch error
      }
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      // let self = this
      // console.log(self.carts, 'carts')
      // self.methods.getTotalPrice(self)
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/shop'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3AuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImNhcnRzIiwiZGVsZXRlIiwiaGFzTGlzdCIsInRvdGFsUHJpY2UiLCJzZWxlY3RBbGxTdGF0dXMiLCJudW0iLCJvYmoiLCJuYW1lIiwibWV0aG9kcyIsInNlbGVjdExpc3QiLCJlIiwic2VsZiIsImluZGV4IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJzZWxlY3RlZCIsInNldERhdGEiLCJnZXRUb3RhbFByaWNlIiwidG90YWwiLCJpIiwibGVuZ3RoIiwicHJpY2UiLCJ0b0ZpeGVkIiwiZGVsZXRlTGlzdCIsInNwbGljZSIsInNlbGVjdEFsbCIsImFkZENvdW50IiwibWludXNDb3VudCIsIl8iLCJyZXF1aXJlIiwiZ2V0U3RvcmFnZVN5bmMiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJ0b0FycmF5IiwiaW1hZ2UiLCJ0aXRsZSIsInB1c2giLCJyZW1vdmVTdG9yYWdlU3luYyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFDQTtJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGFBQU8sRUFERjtBQUVMQyxjQUFRLGtCQUZIO0FBR0xDLGVBQVMsS0FISixFQUdvQjtBQUN6QkMsa0JBQVksR0FKUCxFQUlzQjtBQUMzQkMsdUJBQWlCLElBTFosRUFLcUI7QUFDMUJDLFdBQUssQ0FOQTtBQU9MQyxXQUFLO0FBQ0hDLGNBQU07QUFESDtBQVBBLEssUUFXUEMsTyxHQUFVO0FBQ1I7OztBQUdBQyxnQkFKUSxzQkFJR0MsQ0FKSCxFQUlNO0FBQ1osWUFBSUMsT0FBTyxJQUFYO0FBQ0EsWUFBTUMsUUFBUUYsRUFBRUcsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JGLEtBQXRDLENBRlksQ0FFbUM7QUFDL0MsWUFB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QU4sQ0FBMUMsRUFBb0QxQixLQUFLMEIsTUFBTSxDQUFOLENBQXpELEVBQW1FaEIsVUFBVWdCLE1BQU0sQ0FBTixDQUE3RSxFQUFSO0FBQ0FwQixlQUFLWCxLQUFMLENBQVdxQyxJQUFYLENBQWdCTixLQUFoQjtBQUNEO0FBQ0YsT0FSRCxDQVFFLE9BQU9yQixDQUFQLEVBQVU7QUFDVjtBQUNEO0FBQ0RDLFdBQUtILE9BQUwsQ0FBYVMsYUFBYixDQUEyQk4sSUFBM0I7QUFDQSxVQUFJO0FBQ0YsdUJBQUsyQixpQkFBTCxDQUF1QixXQUF2QjtBQUNELE9BRkQsQ0FFRSxPQUFPNUIsQ0FBUCxFQUFVO0FBQ1Y7QUFDRDtBQUNGOzs7NkJBQ1E7QUFDUDtBQUNBO0FBQ0E7QUFDRDs7OztFQXJKZ0MsZUFBSzZCLEk7O2tCQUFuQjNDLEsiLCJmaWxlIjoic2hvcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbi8vIGltcG9ydCBjYXJ0cyBmcm9tICcuLi9jb21tb2RpdHkvY29tbW9kaXR5LmpzJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+i0reeJqei9pidcbiAgfVxuICBkYXRhID0ge1xuICAgIGNhcnRzOiBbXSxcbiAgICBkZWxldGU6ICcuLi9teS9kZWxldGUucG5nJyxcbiAgICBoYXNMaXN0OiBmYWxzZSwgICAgICAgICAgLy8g5YiX6KGo5piv5ZCm5pyJ5pWw5o2uXG4gICAgdG90YWxQcmljZTogMC4wLCAgICAgICAgICAgLy8g5oC75Lu377yM5Yid5aeL5Li6MFxuICAgIHNlbGVjdEFsbFN0YXR1czogdHJ1ZSwgICAgLy8g5YWo6YCJ54q25oCB77yM6buY6K6k5YWo6YCJXG4gICAgbnVtOiAxLFxuICAgIG9iajoge1xuICAgICAgbmFtZTogJ2hlbGxvJ1xuICAgIH1cbiAgfVxuICBtZXRob2RzID0ge1xuICAgIC8qKlxuICAgICAqIOW9k+WJjeWVhuWTgemAieS4reS6i+S7tlxuICAgICAqL1xuICAgIHNlbGVjdExpc3QoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBjb25zdCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4ICAgIC8vIOiOt+WPlmRhdGEtIOS8oOi/m+adpeeahGluZGV4XG4gICAgICBsZXQgY2FydHMgPSBzZWxmLmNhcnRzICAgICAgICAgICAgICAgICAgICAvLyDojrflj5botK3nianovabliJfooahcbiAgICAgIGNvbnN0IHNlbGVjdGVkID0gc2VsZi5jYXJ0c1tpbmRleF0uc2VsZWN0ZWQgICAgICAgICAvLyDojrflj5blvZPliY3llYblk4HnmoTpgInkuK3nirbmgIFcbiAgICAgIHNlbGYuY2FydHNbaW5kZXhdLnNlbGVjdGVkID0gIXNlbGVjdGVkICAgICAgICAgICAgICAvLyDmlLnlj5jnirbmgIFcbiAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgIGNhcnRzOiBjYXJ0c1xuICAgICAgfSlcbiAgICAgIHNlbGYubWV0aG9kcy5nZXRUb3RhbFByaWNlKHNlbGYpICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g6YeN5paw6I635Y+W5oC75Lu3XG4gICAgfSxcbiAgICBnZXRUb3RhbFByaWNlKHNlbGYpIHtcbiAgICAgIGxldCB0b3RhbCA9IDBcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZi5jYXJ0cy5sZW5ndGg7IGkrKykgeyAgICAgICAgIC8vIOW+queOr+WIl+ihqOW+l+WIsOavj+S4quaVsOaNrlxuICAgICAgICBpZiAoc2VsZi5jYXJ0c1tpXS5zZWxlY3RlZCkgeyAgICAgICAgICAgICAgICAgICAgIC8vIOWIpOaWremAieS4reaJjeS8muiuoeeul+S7t+agvFxuICAgICAgICAgIHRvdGFsICs9IHNlbGYuY2FydHNbaV0ubnVtICogc2VsZi5jYXJ0c1tpXS5wcmljZSAgIC8vIOaJgOacieS7t+agvOWKoOi1t+adpVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzZWxmLnNldERhdGEoeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5pyA5ZCO6LWL5YC85YiwZGF0YeS4rea4suafk+WIsOmhtemdolxuICAgICAgICB0b3RhbFByaWNlOiB0b3RhbC50b0ZpeGVkKDEpXG4gICAgICB9KVxuICAgICAgc2VsZi50b3RhbFByaWNlID0gdG90YWwudG9GaXhlZCgxKVxuICAgIH0sXG4gICAgLyoqXG4gICAgICog5Yig6Zmk6LSt54mp6L2m5b2T5YmN5ZWG5ZOBXG4gICAgICovXG4gICAgZGVsZXRlTGlzdChlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGNvbnN0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICAgIGxldCBjYXJ0cyA9IHNlbGYuZGF0YS5jYXJ0c1xuICAgICAgY2FydHMuc3BsaWNlKGluZGV4LCAxKVxuICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgY2FydHM6IGNhcnRzXG4gICAgICB9KVxuICAgICAgaWYgKCFjYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICBoYXNMaXN0OiBmYWxzZVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5tZXRob2RzLmdldFRvdGFsUHJpY2Uoc2VsZilcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog6LSt54mp6L2m5YWo6YCJ5LqL5Lu2XG4gICAgICovXG4gICAgc2VsZWN0QWxsKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBsZXQgc2VsZWN0QWxsU3RhdHVzID0gc2VsZi5zZWxlY3RBbGxTdGF0dXMgICAgLy8g5piv5ZCm5YWo6YCJ54q25oCBXG4gICAgICBzZWxlY3RBbGxTdGF0dXMgPSAhc2VsZWN0QWxsU3RhdHVzXG4gICAgICBsZXQgY2FydHMgPSBzZWxmLmNhcnRzXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNhcnRzW2ldLnNlbGVjdGVkID0gc2VsZWN0QWxsU3RhdHVzICAgICAgICAgICAgICAvLyDmlLnlj5jmiYDmnInllYblk4HnirbmgIFcbiAgICAgIH1cbiAgICAgIHNlbGYuc2VsZWN0QWxsU3RhdHVzID0gc2VsZWN0QWxsU3RhdHVzXG4gICAgICAvLyBjYXJ0czogY2FydHNcbiAgICAgIHNlbGYubWV0aG9kcy5nZXRUb3RhbFByaWNlKHNlbGYpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g6YeN5paw6I635Y+W5oC75Lu3XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOe7keWumuWKoOaVsOmHj+S6i+S7tlxuICAgICAqL1xuICAgIGFkZENvdW50KGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgY29uc3QgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleFxuICAgICAgbGV0IGNhcnRzID0gc2VsZi5kYXRhLmNhcnRzXG4gICAgICBsZXQgbnVtID0gY2FydHNbaW5kZXhdLm51bVxuICAgICAgbnVtID0gbnVtICsgMVxuICAgICAgY2FydHNbaW5kZXhdLm51bSA9IG51bVxuICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgY2FydHM6IGNhcnRzXG4gICAgICB9KVxuICAgICAgc2VsZi5tZXRob2RzLmdldFRvdGFsUHJpY2Uoc2VsZilcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog57uR5a6a5YeP5pWw6YeP5LqL5Lu2XG4gICAgICovXG4gICAgbWludXNDb3VudChlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGNvbnN0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICAgIC8vIGNvbnN0IG9iaiA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0Lm9ialxuICAgICAgbGV0IGNhcnRzID0gc2VsZi5kYXRhLmNhcnRzXG4gICAgICBsZXQgbnVtID0gY2FydHNbaW5kZXhdLm51bVxuICAgICAgaWYgKG51bSA8PSAxKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgbnVtID0gbnVtIC0gMVxuICAgICAgY2FydHNbaW5kZXhdLm51bSA9IG51bVxuICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgY2FydHM6IGNhcnRzXG4gICAgICB9KVxuICAgICAgc2VsZi5tZXRob2RzLmdldFRvdGFsUHJpY2Uoc2VsZilcbiAgICB9XG5cbiAgfVxuICAvKipcbiAgICog6K6h566X5oC75Lu3XG4gICAqL1xuICBvblNob3coKSB7XG4gICAgY29uc3QgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpXG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgc2VsZi5oYXNMaXN0ID0gdHJ1ZVxuICAgIHRyeSB7XG4gICAgICB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdjb21tb2RpdHknKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIERvIHNvbWV0aGluZyB3aGVuIGNhdGNoIGVycm9yXG4gICAgfVxuICAgIHRyeSB7XG4gICAgICB2YXIgdmFsdWUgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdjb21tb2RpdHknKVxuICAgICAgY29uc29sZS5sb2codmFsdWUsICd2YWx1ZScpXG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdmFsdWUgPSBfLnRvQXJyYXkodmFsdWUpXG4gICAgICAgIHZhbHVlID0ge2ltYWdlOiB2YWx1ZVswXSwgdGl0bGU6IHZhbHVlWzFdLCBwcmljZTogdmFsdWVbMl0sIG51bTogdmFsdWVbM10sIHNlbGVjdGVkOiB2YWx1ZVs0XX1cbiAgICAgICAgc2VsZi5jYXJ0cy5wdXNoKHZhbHVlKVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIERvIHNvbWV0aGluZyB3aGVuIGNhdGNoIGVycm9yXG4gICAgfVxuICAgIHNlbGYubWV0aG9kcy5nZXRUb3RhbFByaWNlKHNlbGYpXG4gICAgdHJ5IHtcbiAgICAgIHdlcHkucmVtb3ZlU3RvcmFnZVN5bmMoJ2NvbW1vZGl0eScpXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gRG8gc29tZXRoaW5nIHdoZW4gY2F0Y2ggZXJyb3JcbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIC8vIGxldCBzZWxmID0gdGhpc1xuICAgIC8vIGNvbnNvbGUubG9nKHNlbGYuY2FydHMsICdjYXJ0cycpXG4gICAgLy8gc2VsZi5tZXRob2RzLmdldFRvdGFsUHJpY2Uoc2VsZilcbiAgfVxufVxuIl19
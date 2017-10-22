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
        console.log(carts);
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
    value: function onLoad() {
      // let self = this
      // console.log(self.carts, 'carts')
      // self.methods.getTotalPrice(self)
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/shop'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3AuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImNhcnRzIiwiZGVsZXRlIiwiaGFzTGlzdCIsInRvdGFsUHJpY2UiLCJzZWxlY3RBbGxTdGF0dXMiLCJudW0iLCJvYmoiLCJuYW1lIiwibWV0aG9kcyIsInNlbGVjdExpc3QiLCJlIiwic2VsZiIsImluZGV4IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJzZWxlY3RlZCIsInNldERhdGEiLCJnZXRUb3RhbFByaWNlIiwidG90YWwiLCJpIiwibGVuZ3RoIiwicHJpY2UiLCJ0b0ZpeGVkIiwiZGVsZXRlTGlzdCIsInNwbGljZSIsImNvbnNvbGUiLCJsb2ciLCJzZWxlY3RBbGwiLCJhZGRDb3VudCIsIm1pbnVzQ291bnQiLCJfIiwicmVxdWlyZSIsImdldFN0b3JhZ2VTeW5jIiwidmFsdWUiLCJ0b0FycmF5IiwiaW1hZ2UiLCJ0aXRsZSIsInB1c2giLCJyZW1vdmVTdG9yYWdlU3luYyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFDQTtJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGFBQU8sRUFERjtBQUVMQyxjQUFRLGtCQUZIO0FBR0xDLGVBQVMsS0FISixFQUdvQjtBQUN6QkMsa0JBQVksR0FKUCxFQUlzQjtBQUMzQkMsdUJBQWlCLElBTFosRUFLcUI7QUFDMUJDLFdBQUssQ0FOQTtBQU9MQyxXQUFLO0FBQ0hDLGNBQU07QUFESDtBQVBBLEssUUFXUEMsTyxHQUFVO0FBQ1I7OztBQUdBQyxnQkFKUSxzQkFJR0MsQ0FKSCxFQUlNO0FBQ1osWUFBSUMsT0FBTyxJQUFYO0FBQ0EsWUFBTUMsUUFBUUYsRUFBRUcsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JGLEtBQXRDLENBRlksQ0FFbUM7QUFDL0MsWUFB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TixDQUF6QixFQUFtQ1osT0FBT1ksTUFBTSxDQUFOLENBQTFDLEVBQW9ENUIsS0FBSzRCLE1BQU0sQ0FBTixDQUF6RCxFQUFtRWxCLFVBQVVrQixNQUFNLENBQU4sQ0FBN0UsRUFBUjtBQUNBLGNBQUlqQyxRQUFRVyxLQUFLWCxLQUFqQjtBQUNBQSxnQkFBTXFDLElBQU4sQ0FBV0osS0FBWDtBQUNBdEIsZUFBS1gsS0FBTCxHQUFhQSxLQUFiO0FBQ0FXLGVBQUtLLE9BQUwsQ0FBYTtBQUNYaEIsbUJBQU9BO0FBREksV0FBYjtBQUdEO0FBQ0YsT0FiRCxDQWFFLE9BQU9VLENBQVAsRUFBVSxDQUNYO0FBQ0RDLFdBQUtILE9BQUwsQ0FBYVMsYUFBYixDQUEyQk4sSUFBM0I7QUFDQSxVQUFJO0FBQ0YsdUJBQUsyQixpQkFBTCxDQUF1QixXQUF2QjtBQUNELE9BRkQsQ0FFRSxPQUFPNUIsQ0FBUCxFQUFVLENBQ1g7QUFDRjs7OzZCQUNRO0FBQ1A7QUFDQTtBQUNBO0FBQ0Q7Ozs7RUF4SmdDLGVBQUs2QixJOztrQkFBbkIzQyxLIiwiZmlsZSI6InNob3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4vLyBpbXBvcnQgY2FydHMgZnJvbSAnLi4vY29tbW9kaXR5L2NvbW1vZGl0eS5qcydcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfotK3nianovaYnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBjYXJ0czogW10sXG4gICAgZGVsZXRlOiAnLi4vbXkvZGVsZXRlLnBuZycsXG4gICAgaGFzTGlzdDogZmFsc2UsICAgICAgICAgIC8vIOWIl+ihqOaYr+WQpuacieaVsOaNrlxuICAgIHRvdGFsUHJpY2U6IDAuMCwgICAgICAgICAgIC8vIOaAu+S7t++8jOWIneWni+S4ujBcbiAgICBzZWxlY3RBbGxTdGF0dXM6IHRydWUsICAgIC8vIOWFqOmAieeKtuaAge+8jOm7mOiupOWFqOmAiVxuICAgIG51bTogMSxcbiAgICBvYmo6IHtcbiAgICAgIG5hbWU6ICdoZWxsbydcbiAgICB9XG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICAvKipcbiAgICAgKiDlvZPliY3llYblk4HpgInkuK3kuovku7ZcbiAgICAgKi9cbiAgICBzZWxlY3RMaXN0KGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgY29uc3QgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleCAgICAvLyDojrflj5ZkYXRhLSDkvKDov5vmnaXnmoRpbmRleFxuICAgICAgbGV0IGNhcnRzID0gc2VsZi5jYXJ0cyAgICAgICAgICAgICAgICAgICAgLy8g6I635Y+W6LSt54mp6L2m5YiX6KGoXG4gICAgICBjb25zdCBzZWxlY3RlZCA9IHNlbGYuY2FydHNbaW5kZXhdLnNlbGVjdGVkICAgICAgICAgLy8g6I635Y+W5b2T5YmN5ZWG5ZOB55qE6YCJ5Lit54q25oCBXG4gICAgICBzZWxmLmNhcnRzW2luZGV4XS5zZWxlY3RlZCA9ICFzZWxlY3RlZCAgICAgICAgICAgICAgLy8g5pS55Y+Y54q25oCBXG4gICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICBjYXJ0czogY2FydHNcbiAgICAgIH0pXG4gICAgICBzZWxmLm1ldGhvZHMuZ2V0VG90YWxQcmljZShzZWxmKSAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOmHjeaWsOiOt+WPluaAu+S7t1xuICAgIH0sXG4gICAgZ2V0VG90YWxQcmljZShzZWxmKSB7XG4gICAgICBsZXQgdG90YWwgPSAwXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGYuY2FydHMubGVuZ3RoOyBpKyspIHsgICAgICAgICAvLyDlvqrnjq/liJfooajlvpfliLDmr4/kuKrmlbDmja5cbiAgICAgICAgaWYgKHNlbGYuY2FydHNbaV0uc2VsZWN0ZWQpIHsgICAgICAgICAgICAgICAgICAgICAvLyDliKTmlq3pgInkuK3miY3kvJrorqHnrpfku7fmoLxcbiAgICAgICAgICB0b3RhbCArPSBzZWxmLmNhcnRzW2ldLm51bSAqIHNlbGYuY2FydHNbaV0ucHJpY2UgICAvLyDmiYDmnInku7fmoLzliqDotbfmnaVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc2VsZi5zZXREYXRhKHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOacgOWQjui1i+WAvOWIsGRhdGHkuK3muLLmn5PliLDpobXpnaJcbiAgICAgICAgdG90YWxQcmljZTogdG90YWwudG9GaXhlZCgxKVxuICAgICAgfSlcbiAgICAgIHNlbGYudG90YWxQcmljZSA9IHRvdGFsLnRvRml4ZWQoMSlcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOWIoOmZpOi0reeJqei9puW9k+WJjeWVhuWTgVxuICAgICAqL1xuICAgIGRlbGV0ZUxpc3QoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBjb25zdCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XG4gICAgICBsZXQgY2FydHMgPSBzZWxmLmRhdGEuY2FydHNcbiAgICAgIGNhcnRzLnNwbGljZShpbmRleCwgMSlcbiAgICAgIGNvbnNvbGUubG9nKGNhcnRzKVxuICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgY2FydHM6IGNhcnRzXG4gICAgICB9KVxuICAgICAgaWYgKCFjYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICBoYXNMaXN0OiBmYWxzZVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5tZXRob2RzLmdldFRvdGFsUHJpY2Uoc2VsZilcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog6LSt54mp6L2m5YWo6YCJ5LqL5Lu2XG4gICAgICovXG4gICAgc2VsZWN0QWxsKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBsZXQgc2VsZWN0QWxsU3RhdHVzID0gc2VsZi5zZWxlY3RBbGxTdGF0dXMgICAgLy8g5piv5ZCm5YWo6YCJ54q25oCBXG4gICAgICBzZWxlY3RBbGxTdGF0dXMgPSAhc2VsZWN0QWxsU3RhdHVzXG4gICAgICBsZXQgY2FydHMgPSBzZWxmLmNhcnRzXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNhcnRzW2ldLnNlbGVjdGVkID0gc2VsZWN0QWxsU3RhdHVzICAgICAgICAgICAgICAvLyDmlLnlj5jmiYDmnInllYblk4HnirbmgIFcbiAgICAgIH1cbiAgICAgIHNlbGYuc2VsZWN0QWxsU3RhdHVzID0gc2VsZWN0QWxsU3RhdHVzXG4gICAgICAvLyBjYXJ0czogY2FydHNcbiAgICAgIHNlbGYubWV0aG9kcy5nZXRUb3RhbFByaWNlKHNlbGYpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g6YeN5paw6I635Y+W5oC75Lu3XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOe7keWumuWKoOaVsOmHj+S6i+S7tlxuICAgICAqL1xuICAgIGFkZENvdW50KGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgY29uc3QgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleFxuICAgICAgbGV0IGNhcnRzID0gc2VsZi5kYXRhLmNhcnRzXG4gICAgICBsZXQgbnVtID0gY2FydHNbaW5kZXhdLm51bVxuICAgICAgbnVtID0gbnVtICsgMVxuICAgICAgY2FydHNbaW5kZXhdLm51bSA9IG51bVxuICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgY2FydHM6IGNhcnRzXG4gICAgICB9KVxuICAgICAgc2VsZi5tZXRob2RzLmdldFRvdGFsUHJpY2Uoc2VsZilcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog57uR5a6a5YeP5pWw6YeP5LqL5Lu2XG4gICAgICovXG4gICAgbWludXNDb3VudChlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGNvbnN0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICAgIGxldCBjYXJ0cyA9IHNlbGYuZGF0YS5jYXJ0c1xuICAgICAgbGV0IG51bSA9IGNhcnRzW2luZGV4XS5udW1cbiAgICAgIGlmIChudW0gPD0gMSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIG51bSA9IG51bSAtIDFcbiAgICAgIGNhcnRzW2luZGV4XS5udW0gPSBudW1cbiAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgIGNhcnRzOiBjYXJ0c1xuICAgICAgfSlcbiAgICAgIHNlbGYubWV0aG9kcy5nZXRUb3RhbFByaWNlKHNlbGYpXG4gICAgfVxuXG4gIH1cbiAgLyoqXG4gICAqIOiuoeeul+aAu+S7t1xuICAgKi9cbiAgb25TaG93KCkge1xuICAgIGNvbnN0IF8gPSByZXF1aXJlKCdsb2Rhc2gnKVxuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHNlbGYuaGFzTGlzdCA9IHRydWVcbiAgICB0cnkge1xuICAgICAgd2VweS5nZXRTdG9yYWdlU3luYygnY29tbW9kaXR5JylcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBEbyBzb21ldGhpbmcgd2hlbiBjYXRjaCBlcnJvclxuICAgIH1cbiAgICB0cnkge1xuICAgICAgdmFyIHZhbHVlID0gd2VweS5nZXRTdG9yYWdlU3luYygnY29tbW9kaXR5JylcbiAgICAgIGNvbnNvbGUubG9nKHZhbHVlLCAndmFsdWUnKVxuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHZhbHVlID0gXy50b0FycmF5KHZhbHVlKVxuICAgICAgICB2YWx1ZSA9IHtpbWFnZTogdmFsdWVbMF0sIHRpdGxlOiB2YWx1ZVsxXSwgcHJpY2U6IHZhbHVlWzJdLCBudW06IHZhbHVlWzNdLCBzZWxlY3RlZDogdmFsdWVbNF19XG4gICAgICAgIGxldCBjYXJ0cyA9IHNlbGYuY2FydHNcbiAgICAgICAgY2FydHMucHVzaCh2YWx1ZSlcbiAgICAgICAgc2VsZi5jYXJ0cyA9IGNhcnRzXG4gICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgY2FydHM6IGNhcnRzXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgIH1cbiAgICBzZWxmLm1ldGhvZHMuZ2V0VG90YWxQcmljZShzZWxmKVxuICAgIHRyeSB7XG4gICAgICB3ZXB5LnJlbW92ZVN0b3JhZ2VTeW5jKCdjb21tb2RpdHknKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIC8vIGxldCBzZWxmID0gdGhpc1xuICAgIC8vIGNvbnNvbGUubG9nKHNlbGYuY2FydHMsICdjYXJ0cycpXG4gICAgLy8gc2VsZi5tZXRob2RzLmdldFRvdGFsUHJpY2Uoc2VsZilcbiAgfVxufVxuIl19
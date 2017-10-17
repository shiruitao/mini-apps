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
      carts: [
        // { id: 1, title: '苹果', image: '../images/Yosemite 2.jpg', num: 4, price: 1, selected: true },
        // { id: 2, title: '草莓', image: '../images/Yosemite 3.jpg', num: 1, price: 3.6, selected: true }
      ],
      hasList: false, // 列表是否有数据
      totalPrice: 0.0, // 总价，初始为0
      selectAllStatus: true, // 全选状态，默认全选
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
        // let self = this
        // let carts = self.data.carts                  // 获取购物车列表
        var total = 0;
        for (var i = 0; i < self.carts.length; i++) {
          // 循环列表得到每个数据
          if (self.carts[i].selected) {
            // 判断选中才会计算价格
            total += self.carts[i].num * self.carts[i].price; // 所有价格加起来
          }
        }
        self.setData({ // 最后赋值到data中渲染到页面
          // carts: carts,
          totalPrice: total.toFixed(1)
        });
        self.totalPrice = total.toFixed(1);
        console.log(self.totalPrice, 2);
        // carts = carts
        // console.log(total)
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
      selectAll: function selectAll(e) {
        var self = this;
        var selectAllStatus = self.data.selectAllStatus; // 是否全选状态
        selectAllStatus = !selectAllStatus;
        var carts = self.data.carts;

        for (var i = 0; i < carts.length; i++) {
          carts[i].selected = selectAllStatus; // 改变所有商品状态
        }
        self.setData({
          selectAllStatus: selectAllStatus,
          carts: carts
        });
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
        var obj = e.currentTarget.dataset.obj;
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
    key: 'onLoad',

    /**
     * 计算总价
     */
    value: function onLoad() {
      var self = this;
      self.hasList = true;
      self.methods.getTotalPrice(self);
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/shop'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3AuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImNhcnRzIiwiaGFzTGlzdCIsInRvdGFsUHJpY2UiLCJzZWxlY3RBbGxTdGF0dXMiLCJvYmoiLCJuYW1lIiwibWV0aG9kcyIsInNlbGVjdExpc3QiLCJlIiwic2VsZiIsImluZGV4IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJzZWxlY3RlZCIsInNldERhdGEiLCJnZXRUb3RhbFByaWNlIiwidG90YWwiLCJpIiwibGVuZ3RoIiwibnVtIiwicHJpY2UiLCJ0b0ZpeGVkIiwiY29uc29sZSIsImxvZyIsImRlbGV0ZUxpc3QiLCJzcGxpY2UiLCJzZWxlY3RBbGwiLCJhZGRDb3VudCIsIm1pbnVzQ291bnQiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsYUFBTztBQUNMO0FBQ0E7QUFGSyxPQURGO0FBS0xDLGVBQVMsS0FMSixFQUtvQjtBQUN6QkMsa0JBQVksR0FOUCxFQU1zQjtBQUMzQkMsdUJBQWlCLElBUFosRUFPcUI7QUFDMUJDLFdBQUs7QUFDSEMsY0FBTTtBQURIO0FBUkEsSyxRQVlQQyxPLEdBQVU7QUFDUjs7O0FBR0FDLGdCQUpRLHNCQUlHQyxDQUpILEVBSU07QUFDWixZQUFJQyxPQUFPLElBQVg7QUFDQSxZQUFNQyxRQUFRRixFQUFFRyxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkYsS0FBdEMsQ0FGWSxDQUVtQztBQUMvQyxZQUFJVixRQUFRUyxLQUFLVCxLQUFqQixDQUhZLENBRzhCO0FBQzFDLFlBQU1hLFdBQVdKLEtBQUtULEtBQUwsQ0FBV1UsS0FBWCxFQUFrQkcsUUFBbkMsQ0FKWSxDQUl3QztBQUNwREosYUFBS1QsS0FBTCxDQUFXVSxLQUFY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O0FBQ1hkLGlCQUFPQTtBQURJLFNBQWI7QUFHQVMsYUFBS0gsT0FBTCxDQUFhUyxhQUFiLENBQTJCTixJQUEzQjtBQUNELE9BdEZPOzs7QUF3RlI7OztBQUdBbUIsZ0JBM0ZRLHNCQTJGR3BCLENBM0ZILEVBMkZNO0FBQ1osWUFBSUMsT0FBTyxJQUFYO0FBQ0EsWUFBTUMsUUFBUUYsRUFBRUcsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JGLEtBQXRDO0FBQ0EsWUFBTU4sTUFBTUksRUFBRUcsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JSLEdBQXBDO0FBQ0EsWUFBSUosUUFBUVMsS0FBS1YsSUFBTCxDQUFVQyxLQUF0QjtBQUNBLFlBQUltQixNQUFNbkIsTUFBTVUsS0FBTixFQUFhUyxHQUF2QjtBQUNBLFlBQUlBLE9BQU8sQ0FBWCxFQUFjO0FBQ1osaUJBQU8sS0FBUDtBQUNEO0FBQ0RBLGNBQU1BLE1BQU0sQ0FBWjtBQUNBbkIsY0FBTVUsS0FBTixFQUFhUyxHQUFiLEdBQW1CQSxHQUFuQjtBQUNBVixhQUFLSyxPQUFMLENBQWE7QUFDWGQsaUJBQU9BO0FBREksU0FBYjtBQUdBUyxhQUFLSCxPQUFMLENBQWFTLGFBQWIsQ0FBMkJOLElBQTNCO0FBQ0Q7QUExR08sSzs7Ozs7O0FBNkdWOzs7NkJBR1M7QUFDUCxVQUFJQSxPQUFPLElBQVg7QUFDQUEsV0FBS1IsT0FBTCxHQUFlLElBQWY7QUFDQVEsV0FBS0gsT0FBTCxDQUFhUyxhQUFiLENBQTJCTixJQUEzQjtBQUNEOzs7O0VBcElnQyxlQUFLb0IsSTs7a0JBQW5CakMsSyIsImZpbGUiOiJzaG9wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+i0reeJqei9pidcbiAgfVxuICBkYXRhID0ge1xuICAgIGNhcnRzOiBbXG4gICAgICAvLyB7IGlkOiAxLCB0aXRsZTogJ+iLueaenCcsIGltYWdlOiAnLi4vaW1hZ2VzL1lvc2VtaXRlIDIuanBnJywgbnVtOiA0LCBwcmljZTogMSwgc2VsZWN0ZWQ6IHRydWUgfSxcbiAgICAgIC8vIHsgaWQ6IDIsIHRpdGxlOiAn6I2J6I6TJywgaW1hZ2U6ICcuLi9pbWFnZXMvWW9zZW1pdGUgMy5qcGcnLCBudW06IDEsIHByaWNlOiAzLjYsIHNlbGVjdGVkOiB0cnVlIH1cbiAgICBdLFxuICAgIGhhc0xpc3Q6IGZhbHNlLCAgICAgICAgICAvLyDliJfooajmmK/lkKbmnInmlbDmja5cbiAgICB0b3RhbFByaWNlOiAwLjAsICAgICAgICAgICAvLyDmgLvku7fvvIzliJ3lp4vkuLowXG4gICAgc2VsZWN0QWxsU3RhdHVzOiB0cnVlLCAgICAvLyDlhajpgInnirbmgIHvvIzpu5jorqTlhajpgIlcbiAgICBvYmo6IHtcbiAgICAgIG5hbWU6ICdoZWxsbydcbiAgICB9XG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICAvKipcbiAgICAgKiDlvZPliY3llYblk4HpgInkuK3kuovku7ZcbiAgICAgKi9cbiAgICBzZWxlY3RMaXN0KGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgY29uc3QgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleCAgICAvLyDojrflj5ZkYXRhLSDkvKDov5vmnaXnmoRpbmRleFxuICAgICAgbGV0IGNhcnRzID0gc2VsZi5jYXJ0cyAgICAgICAgICAgICAgICAgICAgLy8g6I635Y+W6LSt54mp6L2m5YiX6KGoXG4gICAgICBjb25zdCBzZWxlY3RlZCA9IHNlbGYuY2FydHNbaW5kZXhdLnNlbGVjdGVkICAgICAgICAgLy8g6I635Y+W5b2T5YmN5ZWG5ZOB55qE6YCJ5Lit54q25oCBXG4gICAgICBzZWxmLmNhcnRzW2luZGV4XS5zZWxlY3RlZCA9ICFzZWxlY3RlZCAgICAgICAgICAgICAgLy8g5pS55Y+Y54q25oCBXG4gICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICBjYXJ0czogY2FydHNcbiAgICAgIH0pXG4gICAgICBzZWxmLm1ldGhvZHMuZ2V0VG90YWxQcmljZShzZWxmKSAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOmHjeaWsOiOt+WPluaAu+S7t1xuICAgIH0sXG4gICAgZ2V0VG90YWxQcmljZShzZWxmKSB7XG4gICAgICAvLyBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIC8vIGxldCBjYXJ0cyA9IHNlbGYuZGF0YS5jYXJ0cyAgICAgICAgICAgICAgICAgIC8vIOiOt+WPlui0reeJqei9puWIl+ihqFxuICAgICAgbGV0IHRvdGFsID0gMFxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxmLmNhcnRzLmxlbmd0aDsgaSsrKSB7ICAgICAgICAgLy8g5b6q546v5YiX6KGo5b6X5Yiw5q+P5Liq5pWw5o2uXG4gICAgICAgIGlmIChzZWxmLmNhcnRzW2ldLnNlbGVjdGVkKSB7ICAgICAgICAgICAgICAgICAgICAgLy8g5Yik5pat6YCJ5Lit5omN5Lya6K6h566X5Lu35qC8XG4gICAgICAgICAgdG90YWwgKz0gc2VsZi5jYXJ0c1tpXS5udW0gKiBzZWxmLmNhcnRzW2ldLnByaWNlICAgLy8g5omA5pyJ5Lu35qC85Yqg6LW35p2lXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNlbGYuc2V0RGF0YSh7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDmnIDlkI7otYvlgLzliLBkYXRh5Lit5riy5p+T5Yiw6aG16Z2iXG4gICAgICAgIC8vIGNhcnRzOiBjYXJ0cyxcbiAgICAgICAgdG90YWxQcmljZTogdG90YWwudG9GaXhlZCgxKVxuICAgICAgfSlcbiAgICAgIHNlbGYudG90YWxQcmljZSA9IHRvdGFsLnRvRml4ZWQoMSlcbiAgICAgIGNvbnNvbGUubG9nKHNlbGYudG90YWxQcmljZSwgMilcbiAgICAgIC8vIGNhcnRzID0gY2FydHNcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRvdGFsKVxuICAgIH0sXG4gICAgLyoqXG4gICAgICog5Yig6Zmk6LSt54mp6L2m5b2T5YmN5ZWG5ZOBXG4gICAgICovXG4gICAgZGVsZXRlTGlzdChlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGNvbnN0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICAgIGxldCBjYXJ0cyA9IHNlbGYuZGF0YS5jYXJ0c1xuICAgICAgY2FydHMuc3BsaWNlKGluZGV4LCAxKVxuICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgY2FydHM6IGNhcnRzXG4gICAgICB9KVxuICAgICAgaWYgKCFjYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICBoYXNMaXN0OiBmYWxzZVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5tZXRob2RzLmdldFRvdGFsUHJpY2Uoc2VsZilcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog6LSt54mp6L2m5YWo6YCJ5LqL5Lu2XG4gICAgICovXG4gICAgc2VsZWN0QWxsKGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgbGV0IHNlbGVjdEFsbFN0YXR1cyA9IHNlbGYuZGF0YS5zZWxlY3RBbGxTdGF0dXMgICAgLy8g5piv5ZCm5YWo6YCJ54q25oCBXG4gICAgICBzZWxlY3RBbGxTdGF0dXMgPSAhc2VsZWN0QWxsU3RhdHVzXG4gICAgICBsZXQgY2FydHMgPSBzZWxmLmRhdGEuY2FydHNcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjYXJ0c1tpXS5zZWxlY3RlZCA9IHNlbGVjdEFsbFN0YXR1cyAgICAgICAgICAgICAgLy8g5pS55Y+Y5omA5pyJ5ZWG5ZOB54q25oCBXG4gICAgICB9XG4gICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICBzZWxlY3RBbGxTdGF0dXM6IHNlbGVjdEFsbFN0YXR1cyxcbiAgICAgICAgY2FydHM6IGNhcnRzXG4gICAgICB9KVxuICAgICAgc2VsZi5tZXRob2RzLmdldFRvdGFsUHJpY2Uoc2VsZikgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDph43mlrDojrflj5bmgLvku7dcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog57uR5a6a5Yqg5pWw6YeP5LqL5Lu2XG4gICAgICovXG4gICAgYWRkQ291bnQoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBjb25zdCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XG4gICAgICBsZXQgY2FydHMgPSBzZWxmLmRhdGEuY2FydHNcbiAgICAgIGxldCBudW0gPSBjYXJ0c1tpbmRleF0ubnVtXG4gICAgICBudW0gPSBudW0gKyAxXG4gICAgICBjYXJ0c1tpbmRleF0ubnVtID0gbnVtXG4gICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICBjYXJ0czogY2FydHNcbiAgICAgIH0pXG4gICAgICBzZWxmLm1ldGhvZHMuZ2V0VG90YWxQcmljZShzZWxmKVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDnu5Hlrprlh4/mlbDph4/kuovku7ZcbiAgICAgKi9cbiAgICBtaW51c0NvdW50KGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgY29uc3QgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleFxuICAgICAgY29uc3Qgb2JqID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQub2JqXG4gICAgICBsZXQgY2FydHMgPSBzZWxmLmRhdGEuY2FydHNcbiAgICAgIGxldCBudW0gPSBjYXJ0c1tpbmRleF0ubnVtXG4gICAgICBpZiAobnVtIDw9IDEpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICBudW0gPSBudW0gLSAxXG4gICAgICBjYXJ0c1tpbmRleF0ubnVtID0gbnVtXG4gICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICBjYXJ0czogY2FydHNcbiAgICAgIH0pXG4gICAgICBzZWxmLm1ldGhvZHMuZ2V0VG90YWxQcmljZShzZWxmKVxuICAgIH1cblxuICB9XG4gIC8qKlxuICAgKiDorqHnrpfmgLvku7dcbiAgICovXG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBzZWxmLmhhc0xpc3QgPSB0cnVlXG4gICAgc2VsZi5tZXRob2RzLmdldFRvdGFsUHJpY2Uoc2VsZilcbiAgfVxufVxuIl19
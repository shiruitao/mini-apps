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
      carts: [{ id: 1, title: '苹果', image: '../images/Yosemite 2.jpg', num: 4, price: 1, selected: true }, { id: 2, title: '草莓', image: '../images/Yosemite 3.jpg', num: 1, price: 3, selected: true }],
      hasList: true, // 列表是否有数据
      totalPrice: 0, // 总价，初始为0
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
        var carts = self.data.carts; // 获取购物车列表
        var selected = carts[index].selected; // 获取当前商品的选中状态
        carts[index].selected = !selected; // 改变状态
        self.setData({
          carts: carts
        });
        self.methods.getTotalPrice(self); // 重新获取总价
      },
      getTotalPrice: function getTotalPrice(self) {
        var carts = self.data.carts; // 获取购物车列表
        var total = 0;
        for (var i = 0; i < carts.length; i++) {
          // 循环列表得到每个数据
          if (carts[i].selected) {
            // 判断选中才会计算价格
            total += carts[i].num * carts[i].price; // 所有价格加起来
          }
        }
        self.setData({ // 最后赋值到data中渲染到页面
          carts: carts,
          totalPrice: total.toFixed(2)
        });
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
    key: 'onShow',
    value: function onShow() {}

    /**
     * 计算总价
     */

  }, {
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      self.setData({
        hasList: true
      });
      self.getTotalPrice();
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/shop'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3AuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImNhcnRzIiwiaWQiLCJ0aXRsZSIsImltYWdlIiwibnVtIiwicHJpY2UiLCJzZWxlY3RlZCIsImhhc0xpc3QiLCJ0b3RhbFByaWNlIiwic2VsZWN0QWxsU3RhdHVzIiwib2JqIiwibmFtZSIsIm1ldGhvZHMiLCJzZWxlY3RMaXN0IiwiZSIsInNlbGYiLCJpbmRleCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0Iiwic2V0RGF0YSIsImdldFRvdGFsUHJpY2UiLCJ0b3RhbCIsImkiLCJsZW5ndGgiLCJ0b0ZpeGVkIiwiZGVsZXRlTGlzdCIsInNwbGljZSIsInNlbGVjdEFsbCIsImFkZENvdW50IiwibWludXNDb3VudCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxhQUFPLENBQ0wsRUFBRUMsSUFBSSxDQUFOLEVBQVNDLE9BQU8sSUFBaEIsRUFBc0JDLE9BQU8sMEJBQTdCLEVBQXlEQyxLQUFLLENBQTlELEVBQWlFQyxPQUFPLENBQXhFLEVBQTJFQyxVQUFVLElBQXJGLEVBREssRUFFTCxFQUFFTCxJQUFJLENBQU4sRUFBU0MsT0FBTyxJQUFoQixFQUFzQkMsT0FBTywwQkFBN0IsRUFBeURDLEtBQUssQ0FBOUQsRUFBaUVDLE9BQU8sQ0FBeEUsRUFBMkVDLFVBQVUsSUFBckYsRUFGSyxDQURGO0FBS0xDLGVBQVMsSUFMSixFQUttQjtBQUN4QkMsa0JBQVksQ0FOUCxFQU1vQjtBQUN6QkMsdUJBQWlCLElBUFosRUFPcUI7QUFDMUJDLFdBQUs7QUFDSEMsY0FBTTtBQURIO0FBUkEsSyxRQVlQQyxPLEdBQVU7QUFDUjs7O0FBR0FDLGdCQUpRLHNCQUlHQyxDQUpILEVB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QUNBLFlBQUlJLE1BQU1KLE1BQU1nQixLQUFOLEVBQWFaLEdBQXZCO0FBQ0FBLGNBQU1BLE1BQU0sQ0FBWjtBQUNBSixjQUFNZ0IsS0FBTixFQUFhWixHQUFiLEdBQW1CQSxHQUFuQjtBQUNBVyxhQUFLSSxPQUFMLENBQWE7QUFDWG5CLGlCQUFPQTtBQURJLFNBQWI7QUFHQWUsYUFBS0gsT0FBTCxDQUFhUSxhQUFiLENBQTJCTCxJQUEzQjtBQUNELE9BbEZPOzs7QUFvRlI7OztBQUdBYyxnQkF2RlEsc0JBdUZHZixDQXZGSCxFQXVGTTtBQUNaLFlBQUlDLE9BQU8sSUFBWDtBQUNBLFlBQU1DLFFBQVFGLEVBQUVHLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCRixLQUF0QztBQUNBLFlBQU1OLE1BQU1JLEVBQUVHLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCUixHQUFwQztBQUNBLFlBQUlWLFFBQVFlLEtBQUtoQixJQUFMLENBQVVDLEtBQXRCO0FBQ0EsWUFBSUksTUFBTUosTUFBTWdCLEtBQU4sRUFBYVosR0FBdkI7QUFDQSxZQUFJQSxPQUFPLENBQVgsRUFBYztBQUNaLGlCQUFPLEtBQVA7QUFDRDtBQUNEQSxjQUFNQSxNQUFNLENBQVo7QUFDQUosY0FBTWdCLEtBQU4sRUFBYVosR0FBYixHQUFtQkEsR0FBbkI7QUFDQVcsYUFBS0ksT0FBTCxDQUFhO0FBQ1huQixpQkFBT0E7QUFESSxTQUFiO0FBR0FlLGFBQUtILE9BQUwsQ0FBYVEsYUFBYixDQUEyQkwsSUFBM0I7QUFDRDtBQXRHTyxLOzs7Ozs2QkF3R0QsQ0FFUjs7QUFFRDs7Ozs7OzZCQUdTO0FBQ1AsVUFBSUEsT0FBTyxJQUFYO0FBQ0FBLFdBQUtJLE9BQUwsQ0FBYTtBQUNYWixpQkFBUztBQURFLE9BQWI7QUFHQVEsV0FBS0ssYUFBTDtBQUNEOzs7O0VBcklnQyxlQUFLVSxJOztrQkFBbkJsQyxLIiwiZmlsZSI6InNob3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6LSt54mp6L2mJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgY2FydHM6IFtcbiAgICAgIHsgaWQ6IDEsIHRpdGxlOiAn6Iu55p6cJywgaW1hZ2U6ICcuLi9pbWFnZXMvWW9zZW1pdGUgMi5qcGcnLCBudW06IDQsIHByaWNlOiAxLCBzZWxlY3RlZDogdHJ1ZSB9LFxuICAgICAgeyBpZDogMiwgdGl0bGU6ICfojYnojpMnLCBpbWFnZTogJy4uL2ltYWdlcy9Zb3NlbWl0ZSAzLmpwZycsIG51bTogMSwgcHJpY2U6IDMsIHNlbGVjdGVkOiB0cnVlIH1cbiAgICBdLFxuICAgIGhhc0xpc3Q6IHRydWUsICAgICAgICAgIC8vIOWIl+ihqOaYr+WQpuacieaVsOaNrlxuICAgIHRvdGFsUHJpY2U6IDAsICAgICAgICAgICAvLyDmgLvku7fvvIzliJ3lp4vkuLowXG4gICAgc2VsZWN0QWxsU3RhdHVzOiB0cnVlLCAgICAvLyDlhajpgInnirbmgIHvvIzpu5jorqTlhajpgIlcbiAgICBvYmo6IHtcbiAgICAgIG5hbWU6ICdoZWxsbydcbiAgICB9XG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICAvKipcbiAgICAgKiDlvZPliY3llYblk4HpgInkuK3kuovku7ZcbiAgICAgKi9cbiAgICBzZWxlY3RMaXN0KGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgY29uc3QgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleCAgICAvLyDojrflj5ZkYXRhLSDkvKDov5vmnaXnmoRpbmRleFxuICAgICAgbGV0IGNhcnRzID0gc2VsZi5kYXRhLmNhcnRzICAgICAgICAgICAgICAgICAgICAvLyDojrflj5botK3nianovabliJfooahcbiAgICAgIGNvbnN0IHNlbGVjdGVkID0gY2FydHNbaW5kZXhdLnNlbGVjdGVkICAgICAgICAgLy8g6I635Y+W5b2T5YmN5ZWG5ZOB55qE6YCJ5Lit54q25oCBXG4gICAgICBjYXJ0c1tpbmRleF0uc2VsZWN0ZWQgPSAhc2VsZWN0ZWQgICAgICAgICAgICAgIC8vIOaUueWPmOeKtuaAgVxuICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgY2FydHM6IGNhcnRzXG4gICAgICB9KVxuICAgICAgc2VsZi5tZXRob2RzLmdldFRvdGFsUHJpY2Uoc2VsZikgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDph43mlrDojrflj5bmgLvku7dcbiAgICB9LFxuICAgIGdldFRvdGFsUHJpY2Uoc2VsZikge1xuICAgICAgbGV0IGNhcnRzID0gc2VsZi5kYXRhLmNhcnRzICAgICAgICAgICAgICAgICAgLy8g6I635Y+W6LSt54mp6L2m5YiX6KGoXG4gICAgICBsZXQgdG90YWwgPSAwXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcnRzLmxlbmd0aDsgaSsrKSB7ICAgICAgICAgLy8g5b6q546v5YiX6KGo5b6X5Yiw5q+P5Liq5pWw5o2uXG4gICAgICAgIGlmIChjYXJ0c1tpXS5zZWxlY3RlZCkgeyAgICAgICAgICAgICAgICAgICAgIC8vIOWIpOaWremAieS4reaJjeS8muiuoeeul+S7t+agvFxuICAgICAgICAgIHRvdGFsICs9IGNhcnRzW2ldLm51bSAqIGNhcnRzW2ldLnByaWNlICAgLy8g5omA5pyJ5Lu35qC85Yqg6LW35p2lXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNlbGYuc2V0RGF0YSh7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDmnIDlkI7otYvlgLzliLBkYXRh5Lit5riy5p+T5Yiw6aG16Z2iXG4gICAgICAgIGNhcnRzOiBjYXJ0cyxcbiAgICAgICAgdG90YWxQcmljZTogdG90YWwudG9GaXhlZCgyKVxuICAgICAgfSlcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5Yig6Zmk6LSt54mp6L2m5b2T5YmN5ZWG5ZOBXG4gICAgICovXG4gICAgZGVsZXRlTGlzdChlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGNvbnN0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICAgIGxldCBjYXJ0cyA9IHNlbGYuZGF0YS5jYXJ0c1xuICAgICAgY2FydHMuc3BsaWNlKGluZGV4LCAxKVxuICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgY2FydHM6IGNhcnRzXG4gICAgICB9KVxuICAgICAgaWYgKCFjYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICBoYXNMaXN0OiBmYWxzZVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5tZXRob2RzLmdldFRvdGFsUHJpY2Uoc2VsZilcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog6LSt54mp6L2m5YWo6YCJ5LqL5Lu2XG4gICAgICovXG4gICAgc2VsZWN0QWxsKGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgbGV0IHNlbGVjdEFsbFN0YXR1cyA9IHNlbGYuZGF0YS5zZWxlY3RBbGxTdGF0dXMgICAgLy8g5piv5ZCm5YWo6YCJ54q25oCBXG4gICAgICBzZWxlY3RBbGxTdGF0dXMgPSAhc2VsZWN0QWxsU3RhdHVzXG4gICAgICBsZXQgY2FydHMgPSBzZWxmLmRhdGEuY2FydHNcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjYXJ0c1tpXS5zZWxlY3RlZCA9IHNlbGVjdEFsbFN0YXR1cyAgICAgICAgICAgICAgLy8g5pS55Y+Y5omA5pyJ5ZWG5ZOB54q25oCBXG4gICAgICB9XG4gICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICBzZWxlY3RBbGxTdGF0dXM6IHNlbGVjdEFsbFN0YXR1cyxcbiAgICAgICAgY2FydHM6IGNhcnRzXG4gICAgICB9KVxuICAgICAgc2VsZi5tZXRob2RzLmdldFRvdGFsUHJpY2Uoc2VsZikgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDph43mlrDojrflj5bmgLvku7dcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog57uR5a6a5Yqg5pWw6YeP5LqL5Lu2XG4gICAgICovXG4gICAgYWRkQ291bnQoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBjb25zdCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XG4gICAgICBsZXQgY2FydHMgPSBzZWxmLmRhdGEuY2FydHNcbiAgICAgIGxldCBudW0gPSBjYXJ0c1tpbmRleF0ubnVtXG4gICAgICBudW0gPSBudW0gKyAxXG4gICAgICBjYXJ0c1tpbmRleF0ubnVtID0gbnVtXG4gICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICBjYXJ0czogY2FydHNcbiAgICAgIH0pXG4gICAgICBzZWxmLm1ldGhvZHMuZ2V0VG90YWxQcmljZShzZWxmKVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDnu5Hlrprlh4/mlbDph4/kuovku7ZcbiAgICAgKi9cbiAgICBtaW51c0NvdW50KGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgY29uc3QgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleFxuICAgICAgY29uc3Qgb2JqID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQub2JqXG4gICAgICBsZXQgY2FydHMgPSBzZWxmLmRhdGEuY2FydHNcbiAgICAgIGxldCBudW0gPSBjYXJ0c1tpbmRleF0ubnVtXG4gICAgICBpZiAobnVtIDw9IDEpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICBudW0gPSBudW0gLSAxXG4gICAgICBjYXJ0c1tpbmRleF0ubnVtID0gbnVtXG4gICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICBjYXJ0czogY2FydHNcbiAgICAgIH0pXG4gICAgICBzZWxmLm1ldGhvZHMuZ2V0VG90YWxQcmljZShzZWxmKVxuICAgIH1cbiAgfVxuICBvblNob3coKSB7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiDorqHnrpfmgLvku7dcbiAgICovXG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBzZWxmLnNldERhdGEoe1xuICAgICAgaGFzTGlzdDogdHJ1ZVxuICAgIH0pXG4gICAgc2VsZi5nZXRUb3RhbFByaWNlKClcbiAgfVxufVxuIl19
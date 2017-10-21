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

    /**
     * 计算总价
     */
    value: function onShow() {
      var _ = require('./../npm/lodash/lodash.js');
      var self = this;
      self.hasList = true;
      // self.carts = carts
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3AuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImNhcnRzIiwiZGVsZXRlIiwiaGFzTGlzdCIsInRvdGFsUHJpY2UiLCJzZWxlY3RBbGxTdGF0dXMiLCJudW0iLCJvYmoiLCJuYW1lIiwibWV0aG9kcyIsInNlbGVjdExpc3QiLCJlIiwic2VsZiIsImluZGV4IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJzZWxlY3RlZCIsInNldERhdGEiLCJnZXRUb3RhbFByaWNlIiwidG90YWwiLCJpIiwibGVuZ3RoIiwicHJpY2UiLCJ0b0ZpeGVkIiwiZGVsZXRlTGlzdCIsInNwbGljZSIsInNlbGVjdEFsbCIsImFkZENvdW50IiwibWludXNDb3VudCIsIl8iLCJyZXF1aXJlIiwidmFsdWUiLCJnZXRTdG9yYWdlU3luYyIsImNvbnNvbGUiLCJsb2ciLCJ0b0FycmF5IiwiaW1hZ2UiLCJ0aXRsZSIsInB1c2giLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBQ0E7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxhQUFPLEVBREY7QUFFTEMsY0FBUSxrQkFGSDtBQUdMQyxlQUFTLEtBSEosRUFHb0I7QUFDekJDLGtCQUFZLEdBSlAsRUFJc0I7QUFDM0JDLHVCQUFpQixJQUxaLEVBS3FCO0FBQzFCQyxXQUFLLENBTkE7QUFPTEMsV0FBSztBQUNIQyxjQUFNO0FBREg7QUFQQSxLLFFBV1BDLE8sR0FBVTtBQUNSOzs7QUFHQUMsZ0JBSlEsc0JBSUdDLENBSkgsRUFJTTtBQUNaLFlBQUlDLE9BQU8sSUFBWDtBQUNBLFlBQU1DLFFBQVFGLEVBQUVHLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCRixLQUF0QyxDQUZZLENBRW1DO0FBQy9DLFlBQUlaLFFBQVFXLEtBQUtYLEtBQWpC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QUFVZSxNQUFNLENBQU4sQ0FBN0UsRUFBUjtBQUNBbkIsZUFBS1gsS0FBTCxDQUFXcUMsSUFBWCxDQUFnQlAsS0FBaEI7QUFDRDtBQUNGLE9BUkQsQ0FRRSxPQUFPcEIsQ0FBUCxFQUFVO0FBQ1Y7QUFDRDtBQUNEQyxXQUFLSCxPQUFMLENBQWFTLGFBQWIsQ0FBMkJOLElBQTNCO0FBQ0Q7Ozs2QkFDUTtBQUNQO0FBQ0E7QUFDQTtBQUNEOzs7O0VBNUlnQyxlQUFLMkIsSTs7a0JBQW5CMUMsSyIsImZpbGUiOiJzaG9wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuLy8gaW1wb3J0IGNhcnRzIGZyb20gJy4uL2NvbW1vZGl0eS9jb21tb2RpdHkuanMnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6LSt54mp6L2mJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgY2FydHM6IFtdLFxuICAgIGRlbGV0ZTogJy4uL215L2RlbGV0ZS5wbmcnLFxuICAgIGhhc0xpc3Q6IGZhbHNlLCAgICAgICAgICAvLyDliJfooajmmK/lkKbmnInmlbDmja5cbiAgICB0b3RhbFByaWNlOiAwLjAsICAgICAgICAgICAvLyDmgLvku7fvvIzliJ3lp4vkuLowXG4gICAgc2VsZWN0QWxsU3RhdHVzOiB0cnVlLCAgICAvLyDlhajpgInnirbmgIHvvIzpu5jorqTlhajpgIlcbiAgICBudW06IDEsXG4gICAgb2JqOiB7XG4gICAgICBuYW1lOiAnaGVsbG8nXG4gICAgfVxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgLyoqXG4gICAgICog5b2T5YmN5ZWG5ZOB6YCJ5Lit5LqL5Lu2XG4gICAgICovXG4gICAgc2VsZWN0TGlzdChlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGNvbnN0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXggICAgLy8g6I635Y+WZGF0YS0g5Lyg6L+b5p2l55qEaW5kZXhcbiAgICAgIGxldCBjYXJ0cyA9IHNlbGYuY2FydHMgICAgICAgICAgICAgICAgICAgIC8vIOiOt+WPlui0reeJqei9puWIl+ihqFxuICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBzZWxmLmNhcnRzW2luZGV4XS5zZWxlY3RlZCAgICAgICAgIC8vIOiOt+WPluW9k+WJjeWVhuWTgeeahOmAieS4reeKtuaAgVxuICAgICAgc2VsZi5jYXJ0c1tpbmRleF0uc2VsZWN0ZWQgPSAhc2VsZWN0ZWQgICAgICAgICAgICAgIC8vIOaUueWPmOeKtuaAgVxuICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgY2FydHM6IGNhcnRzXG4gICAgICB9KVxuICAgICAgc2VsZi5tZXRob2RzLmdldFRvdGFsUHJpY2Uoc2VsZikgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDph43mlrDojrflj5bmgLvku7dcbiAgICB9LFxuICAgIGdldFRvdGFsUHJpY2Uoc2VsZikge1xuICAgICAgbGV0IHRvdGFsID0gMFxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxmLmNhcnRzLmxlbmd0aDsgaSsrKSB7ICAgICAgICAgLy8g5b6q546v5YiX6KGo5b6X5Yiw5q+P5Liq5pWw5o2uXG4gICAgICAgIGlmIChzZWxmLmNhcnRzW2ldLnNlbGVjdGVkKSB7ICAgICAgICAgICAgICAgICAgICAgLy8g5Yik5pat6YCJ5Lit5omN5Lya6K6h566X5Lu35qC8XG4gICAgICAgICAgdG90YWwgKz0gc2VsZi5jYXJ0c1tpXS5udW0gKiBzZWxmLmNhcnRzW2ldLnByaWNlICAgLy8g5omA5pyJ5Lu35qC85Yqg6LW35p2lXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNlbGYuc2V0RGF0YSh7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDmnIDlkI7otYvlgLzliLBkYXRh5Lit5riy5p+T5Yiw6aG16Z2iXG4gICAgICAgIHRvdGFsUHJpY2U6IHRvdGFsLnRvRml4ZWQoMSlcbiAgICAgIH0pXG4gICAgICBzZWxmLnRvdGFsUHJpY2UgPSB0b3RhbC50b0ZpeGVkKDEpXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDliKDpmaTotK3nianovablvZPliY3llYblk4FcbiAgICAgKi9cbiAgICBkZWxldGVMaXN0KGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgY29uc3QgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleFxuICAgICAgbGV0IGNhcnRzID0gc2VsZi5kYXRhLmNhcnRzXG4gICAgICBjYXJ0cy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICBjYXJ0czogY2FydHNcbiAgICAgIH0pXG4gICAgICBpZiAoIWNhcnRzLmxlbmd0aCkge1xuICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgIGhhc0xpc3Q6IGZhbHNlXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLm1ldGhvZHMuZ2V0VG90YWxQcmljZShzZWxmKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDotK3nianovablhajpgInkuovku7ZcbiAgICAgKi9cbiAgICBzZWxlY3RBbGwoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGxldCBzZWxlY3RBbGxTdGF0dXMgPSBzZWxmLnNlbGVjdEFsbFN0YXR1cyAgICAvLyDmmK/lkKblhajpgInnirbmgIFcbiAgICAgIHNlbGVjdEFsbFN0YXR1cyA9ICFzZWxlY3RBbGxTdGF0dXNcbiAgICAgIGxldCBjYXJ0cyA9IHNlbGYuY2FydHNcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY2FydHNbaV0uc2VsZWN0ZWQgPSBzZWxlY3RBbGxTdGF0dXMgICAgICAgICAgICAgIC8vIOaUueWPmOaJgOacieWVhuWTgeeKtuaAgVxuICAgICAgfVxuICAgICAgc2VsZi5zZWxlY3RBbGxTdGF0dXMgPSBzZWxlY3RBbGxTdGF0dXNcbiAgICAgIC8vIGNhcnRzOiBjYXJ0c1xuICAgICAgc2VsZi5tZXRob2RzLmdldFRvdGFsUHJpY2Uoc2VsZikgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDph43mlrDojrflj5bmgLvku7dcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog57uR5a6a5Yqg5pWw6YeP5LqL5Lu2XG4gICAgICovXG4gICAgYWRkQ291bnQoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBjb25zdCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XG4gICAgICBsZXQgY2FydHMgPSBzZWxmLmRhdGEuY2FydHNcbiAgICAgIGxldCBudW0gPSBjYXJ0c1tpbmRleF0ubnVtXG4gICAgICBudW0gPSBudW0gKyAxXG4gICAgICBjYXJ0c1tpbmRleF0ubnVtID0gbnVtXG4gICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICBjYXJ0czogY2FydHNcbiAgICAgIH0pXG4gICAgICBzZWxmLm1ldGhvZHMuZ2V0VG90YWxQcmljZShzZWxmKVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDnu5Hlrprlh4/mlbDph4/kuovku7ZcbiAgICAgKi9cbiAgICBtaW51c0NvdW50KGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgY29uc3QgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleFxuICAgICAgY29uc3Qgb2JqID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQub2JqXG4gICAgICBsZXQgY2FydHMgPSBzZWxmLmRhdGEuY2FydHNcbiAgICAgIGxldCBudW0gPSBjYXJ0c1tpbmRleF0ubnVtXG4gICAgICBpZiAobnVtIDw9IDEpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICBudW0gPSBudW0gLSAxXG4gICAgICBjYXJ0c1tpbmRleF0ubnVtID0gbnVtXG4gICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICBjYXJ0czogY2FydHNcbiAgICAgIH0pXG4gICAgICBzZWxmLm1ldGhvZHMuZ2V0VG90YWxQcmljZShzZWxmKVxuICAgIH1cblxuICB9XG4gIC8qKlxuICAgKiDorqHnrpfmgLvku7dcbiAgICovXG4gIG9uU2hvdygpIHtcbiAgICBjb25zdCBfID0gcmVxdWlyZSgnbG9kYXNoJylcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBzZWxmLmhhc0xpc3QgPSB0cnVlXG4gICAgLy8gc2VsZi5jYXJ0cyA9IGNhcnRzXG4gICAgdHJ5IHtcbiAgICAgIHZhciB2YWx1ZSA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2NvbW1vZGl0eScpXG4gICAgICBjb25zb2xlLmxvZyh2YWx1ZSwgJ3ZhbHVlJylcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB2YWx1ZSA9IF8udG9BcnJheSh2YWx1ZSlcbiAgICAgICAgdmFsdWUgPSB7aW1hZ2U6IHZhbHVlWzBdLCB0aXRsZTogdmFsdWVbMV0sIHByaWNlOiB2YWx1ZVsyXSwgbnVtOiB2YWx1ZVszXSwgc2VsZWN0ZWQ6IHZhbHVlWzRdfVxuICAgICAgICBzZWxmLmNhcnRzLnB1c2godmFsdWUpXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gRG8gc29tZXRoaW5nIHdoZW4gY2F0Y2ggZXJyb3JcbiAgICB9XG4gICAgc2VsZi5tZXRob2RzLmdldFRvdGFsUHJpY2Uoc2VsZilcbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgLy8gbGV0IHNlbGYgPSB0aGlzXG4gICAgLy8gY29uc29sZS5sb2coc2VsZi5jYXJ0cywgJ2NhcnRzJylcbiAgICAvLyBzZWxmLm1ldGhvZHMuZ2V0VG90YWxQcmljZShzZWxmKVxuICB9XG59XG4iXX0=
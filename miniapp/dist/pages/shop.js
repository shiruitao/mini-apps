'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _commodity = require('./../commodity/commodity.js');

var _commodity2 = _interopRequireDefault(_commodity);

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
    key: 'onShow',

    /**
     * 计算总价
     */
    value: function onShow() {
      var self = this;
      self.selected = true;
      self.carts = _commodity2.default;
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      self.hasList = true;
      self.methods.getTotalPrice(self);
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/shop'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3AuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImNhcnRzIiwiaGFzTGlzdCIsInRvdGFsUHJpY2UiLCJzZWxlY3RBbGxTdGF0dXMiLCJudW0iLCJvYmoiLCJuYW1lIiwibWV0aG9kcyIsInNlbGVjdExpc3QiLCJlIiwic2VsZiIsImluZGV4IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJzZWxlY3RlZCIsInNldERhdGEiLCJnZXRUb3RhbFByaWNlIiwidG90YWwiLCJpIiwibGVuZ3RoIiwicHJpY2UiLCJ0b0ZpeGVkIiwiY29uc29sZSIsImxvZyIsImRlbGV0ZUxpc3QiLCJzcGxpY2UiLCJzZWxlY3RBbGwiLCJhZGRDb3VudCIsIm1pbnVzQ291bnQiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxhQUFPLEVBREY7QUFFTEMsZUFBUyxLQUZKLEVBRW9CO0FBQ3pCQyxrQkFBWSxHQUhQLEVBR3NCO0FBQzNCQyx1QkFBaUIsSUFKWixFQUlxQjtBQUMxQkMsV0FBSyxDQUxBO0FBTUxDLFdBQUs7QUFDSEMsY0FBTTtBQURIO0FBTkEsSyxRQVVQQyxPLEdBQVU7QUFDUjs7O0FBR0FDLGdCQUpRLHNCQUlHQyxDQUpILEVBSU07QUFDWixZQUFJQyxPQUFPLElBQVg7QUFDQSxZQUFNQyxRQUFRRixFQUFFRyxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkYsS0FBdEMsQ0FGWSxDQUVtQztBQUMvQyxZQUFJWCxRQUFRVSxLQUFLVixLQUFqQixDQUhZLENBRzhCO0FBQzFDLFlBQU1jLFdBQVdKLEtBQUtWLEtBQUwsQ0FBV1csS0FBWCxFQUFrQkcsUUFBbkMsQ0FKWSxDQUl3QztBQUNwREosYUFBS1YsS0FBTCxD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LENBQWE7QUFDWGYsaUJBQU9BO0FBREksU0FBYjtBQUdBVSxhQUFLSCxPQUFMLENBQWFTLGFBQWIsQ0FBMkJOLElBQTNCO0FBQ0QsT0F0Rk87OztBQXdGUjs7O0FBR0FrQixnQkEzRlEsc0JBMkZHbkIsQ0EzRkgsRUEyRk07QUFDWixZQUFJQyxPQUFPLElBQVg7QUFDQSxZQUFNQyxRQUFRRixFQUFFRyxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkYsS0FBdEM7QUFDQSxZQUFNTixNQUFNSSxFQUFFRyxhQUFGLENBQWdCQyxPQUFoQixDQUF3QlIsR0FBcEM7QUFDQSxZQUFJTCxRQUFRVSxLQUFLWCxJQUFMLENBQVVDLEtBQXRCO0FBQ0EsWUFBSUksTUFBTUosTUFBTVcsS0FBTixFQUFhUCxHQUF2QjtBQUNBLFlBQUlBLE9BQU8sQ0FBWCxFQUFjO0FBQ1osaUJBQU8sS0FBUDtBQUNEO0FBQ0RBLGNBQU1BLE1BQU0sQ0FBWjtBQUNBSixjQUFNVyxLQUFOLEVBQWFQLEdBQWIsR0FBbUJBLEdBQW5CO0FBQ0FNLGFBQUtLLE9BQUwsQ0FBYTtBQUNYZixpQkFBT0E7QUFESSxTQUFiO0FBR0FVLGFBQUtILE9BQUwsQ0FBYVMsYUFBYixDQUEyQk4sSUFBM0I7QUFDRDtBQTFHTyxLOzs7Ozs7QUE2R1Y7Ozs2QkFHUztBQUNQLFVBQUlBLE9BQU8sSUFBWDtBQUNBQSxXQUFLSSxRQUFMLEdBQWdCLElBQWhCO0FBQ0FKLFdBQUtWLEtBQUw7QUFDRDs7OzZCQUNRO0FBQ1AsVUFBSVUsT0FBTyxJQUFYO0FBQ0FBLFdBQUtULE9BQUwsR0FBZSxJQUFmO0FBQ0FTLFdBQUtILE9BQUwsQ0FBYVMsYUFBYixDQUEyQk4sSUFBM0I7QUFDRDs7OztFQXZJZ0MsZUFBS21CLEk7O2tCQUFuQmpDLEsiLCJmaWxlIjoic2hvcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBjYXJ0cyBmcm9tICcuLi9jb21tb2RpdHkvY29tbW9kaXR5LmpzJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+i0reeJqei9pidcbiAgfVxuICBkYXRhID0ge1xuICAgIGNhcnRzOiBbXSxcbiAgICBoYXNMaXN0OiBmYWxzZSwgICAgICAgICAgLy8g5YiX6KGo5piv5ZCm5pyJ5pWw5o2uXG4gICAgdG90YWxQcmljZTogMC4wLCAgICAgICAgICAgLy8g5oC75Lu377yM5Yid5aeL5Li6MFxuICAgIHNlbGVjdEFsbFN0YXR1czogdHJ1ZSwgICAgLy8g5YWo6YCJ54q25oCB77yM6buY6K6k5YWo6YCJXG4gICAgbnVtOiAxLFxuICAgIG9iajoge1xuICAgICAgbmFtZTogJ2hlbGxvJ1xuICAgIH1cbiAgfVxuICBtZXRob2RzID0ge1xuICAgIC8qKlxuICAgICAqIOW9k+WJjeWVhuWTgemAieS4reS6i+S7tlxuICAgICAqL1xuICAgIHNlbGVjdExpc3QoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBjb25zdCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4ICAgIC8vIOiOt+WPlmRhdGEtIOS8oOi/m+adpeeahGluZGV4XG4gICAgICBsZXQgY2FydHMgPSBzZWxmLmNhcnRzICAgICAgICAgICAgICAgICAgICAvLyDojrflj5botK3nianovabliJfooahcbiAgICAgIGNvbnN0IHNlbGVjdGVkID0gc2VsZi5jYXJ0c1tpbmRleF0uc2VsZWN0ZWQgICAgICAgICAvLyDojrflj5blvZPliY3llYblk4HnmoTpgInkuK3nirbmgIFcbiAgICAgIHNlbGYuY2FydHNbaW5kZXhdLnNlbGVjdGVkID0gIXNlbGVjdGVkICAgICAgICAgICAgICAvLyDmlLnlj5jnirbmgIFcbiAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgIGNhcnRzOiBjYXJ0c1xuICAgICAgfSlcbiAgICAgIHNlbGYubWV0aG9kcy5nZXRUb3RhbFByaWNlKHNlbGYpICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g6YeN5paw6I635Y+W5oC75Lu3XG4gICAgfSxcbiAgICBnZXRUb3RhbFByaWNlKHNlbGYpIHtcbiAgICAgIC8vIGxldCBzZWxmID0gdGhpc1xuICAgICAgLy8gbGV0IGNhcnRzID0gc2VsZi5kYXRhLmNhcnRzICAgICAgICAgICAgICAgICAgLy8g6I635Y+W6LSt54mp6L2m5YiX6KGoXG4gICAgICBsZXQgdG90YWwgPSAwXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGYuY2FydHMubGVuZ3RoOyBpKyspIHsgICAgICAgICAvLyDlvqrnjq/liJfooajlvpfliLDmr4/kuKrmlbDmja5cbiAgICAgICAgaWYgKHNlbGYuY2FydHNbaV0uc2VsZWN0ZWQpIHsgICAgICAgICAgICAgICAgICAgICAvLyDliKTmlq3pgInkuK3miY3kvJrorqHnrpfku7fmoLxcbiAgICAgICAgICB0b3RhbCArPSBzZWxmLmNhcnRzW2ldLm51bSAqIHNlbGYuY2FydHNbaV0ucHJpY2UgICAvLyDmiYDmnInku7fmoLzliqDotbfmnaVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc2VsZi5zZXREYXRhKHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOacgOWQjui1i+WAvOWIsGRhdGHkuK3muLLmn5PliLDpobXpnaJcbiAgICAgICAgLy8gY2FydHM6IGNhcnRzLFxuICAgICAgICB0b3RhbFByaWNlOiB0b3RhbC50b0ZpeGVkKDEpXG4gICAgICB9KVxuICAgICAgc2VsZi50b3RhbFByaWNlID0gdG90YWwudG9GaXhlZCgxKVxuICAgICAgY29uc29sZS5sb2coc2VsZi50b3RhbFByaWNlLCAyKVxuICAgICAgLy8gY2FydHMgPSBjYXJ0c1xuICAgICAgLy8gY29uc29sZS5sb2codG90YWwpXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDliKDpmaTotK3nianovablvZPliY3llYblk4FcbiAgICAgKi9cbiAgICBkZWxldGVMaXN0KGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgY29uc3QgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleFxuICAgICAgbGV0IGNhcnRzID0gc2VsZi5kYXRhLmNhcnRzXG4gICAgICBjYXJ0cy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICBjYXJ0czogY2FydHNcbiAgICAgIH0pXG4gICAgICBpZiAoIWNhcnRzLmxlbmd0aCkge1xuICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgIGhhc0xpc3Q6IGZhbHNlXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLm1ldGhvZHMuZ2V0VG90YWxQcmljZShzZWxmKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDotK3nianovablhajpgInkuovku7ZcbiAgICAgKi9cbiAgICBzZWxlY3RBbGwoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBsZXQgc2VsZWN0QWxsU3RhdHVzID0gc2VsZi5kYXRhLnNlbGVjdEFsbFN0YXR1cyAgICAvLyDmmK/lkKblhajpgInnirbmgIFcbiAgICAgIHNlbGVjdEFsbFN0YXR1cyA9ICFzZWxlY3RBbGxTdGF0dXNcbiAgICAgIGxldCBjYXJ0cyA9IHNlbGYuZGF0YS5jYXJ0c1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNhcnRzW2ldLnNlbGVjdGVkID0gc2VsZWN0QWxsU3RhdHVzICAgICAgICAgICAgICAvLyDmlLnlj5jmiYDmnInllYblk4HnirbmgIFcbiAgICAgIH1cbiAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgIHNlbGVjdEFsbFN0YXR1czogc2VsZWN0QWxsU3RhdHVzLFxuICAgICAgICBjYXJ0czogY2FydHNcbiAgICAgIH0pXG4gICAgICBzZWxmLm1ldGhvZHMuZ2V0VG90YWxQcmljZShzZWxmKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOmHjeaWsOiOt+WPluaAu+S7t1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDnu5HlrprliqDmlbDph4/kuovku7ZcbiAgICAgKi9cbiAgICBhZGRDb3VudChlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGNvbnN0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICAgIGxldCBjYXJ0cyA9IHNlbGYuZGF0YS5jYXJ0c1xuICAgICAgbGV0IG51bSA9IGNhcnRzW2luZGV4XS5udW1cbiAgICAgIG51bSA9IG51bSArIDFcbiAgICAgIGNhcnRzW2luZGV4XS5udW0gPSBudW1cbiAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgIGNhcnRzOiBjYXJ0c1xuICAgICAgfSlcbiAgICAgIHNlbGYubWV0aG9kcy5nZXRUb3RhbFByaWNlKHNlbGYpXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOe7keWumuWHj+aVsOmHj+S6i+S7tlxuICAgICAqL1xuICAgIG1pbnVzQ291bnQoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBjb25zdCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XG4gICAgICBjb25zdCBvYmogPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5vYmpcbiAgICAgIGxldCBjYXJ0cyA9IHNlbGYuZGF0YS5jYXJ0c1xuICAgICAgbGV0IG51bSA9IGNhcnRzW2luZGV4XS5udW1cbiAgICAgIGlmIChudW0gPD0gMSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIG51bSA9IG51bSAtIDFcbiAgICAgIGNhcnRzW2luZGV4XS5udW0gPSBudW1cbiAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgIGNhcnRzOiBjYXJ0c1xuICAgICAgfSlcbiAgICAgIHNlbGYubWV0aG9kcy5nZXRUb3RhbFByaWNlKHNlbGYpXG4gICAgfVxuXG4gIH1cbiAgLyoqXG4gICAqIOiuoeeul+aAu+S7t1xuICAgKi9cbiAgb25TaG93KCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHNlbGYuc2VsZWN0ZWQgPSB0cnVlXG4gICAgc2VsZi5jYXJ0cyA9IGNhcnRzXG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHNlbGYuaGFzTGlzdCA9IHRydWVcbiAgICBzZWxmLm1ldGhvZHMuZ2V0VG90YWxQcmljZShzZWxmKVxuICB9XG59XG4iXX0=
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var detail = function (_wepy$page) {
  _inherits(detail, _wepy$page);

  function detail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, detail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = detail.__proto__ || Object.getPrototypeOf(detail)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '商品详情'
    }, _this.data = {
      src: 'https://img.alicdn.com/tfs/TB16j9ph2BNTKJjy0FdXXcPpVXa-520-280.jpg_q90'
    }, _this.methods = {
      carts: function carts(e) {
        var self = this;
        var index = e.currentTarget.dataset.index;
        var commodity = self.commodity[index];
        console.log(commodity);
        _wepy2.default.request({
          url: 'http://127.0.0.1:7001/cartCreate',
          method: 'POST',
          data: {
            title: commodity.title,
            price: commodity.price,
            image: commodity.image
          },
          success: function success(res) {
            console.log('success');
          }
        });
        _wepy2.default.showToast({
          title: '加入成功',
          icon: 'success',
          duration: 1000
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(detail, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      _wepy2.default.getSystemInfo({
        success: function success(res) {
          self.height = res.windowHeight;
          self.width = res.windowWidth;
        }
      });
      _wepy2.default.request({
        url: 'http://127.0.0.1:7001/get',
        method: 'GET',
        success: function success(res) {
          self.commodity = res.data;
          self.setData({
            commodity: res.data
          });
        }
      });
    }
  }]);

  return detail;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(detail , 'pages/class/detail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5qcyJdLCJuYW1lcyI6WyJkZXRhaWwiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNyYyIsIm1ldGhvZHMiLCJjYXJ0cyIsImUiLCJzZWxmIiwiaW5kZXgiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImNvbW1vZGl0eSIsImNvbnNvbGUiLCJsb2ciLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwidGl0bGUiLCJwcmljZSIsImltYWdlIiwic3VjY2VzcyIsInJlcyIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsImdldFN5c3RlbUluZm8iLCJoZWlnaHQiLCJ3aW5kb3dIZWlnaHQiLCJ3aWR0aCIsIndpbmRvd1dpZHRoIiwic2V0RGF0YSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxXQUFLO0FBREEsSyxRQUdQQyxPLEdBQVU7QUFDUkMsV0FEUSxpQkFDRkMsQ0FERSxFQUNDO0FBQ1AsWUFBSUMsT0FBTyxJQUFYO0FBQ0EsWUFBTUMsUUFBUUYsRUFBRUcsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JGLEtBQXRDO0FBQ0EsWUFBSUcsWUFBWUosS0FBS0ksU0FBTCxDQUFlSCxLQUFmLENBQWhCO0FBQ0FJLGdCQUFRQyxHQUFSLENBQVlGLFNBQVo7QUFDQSx1QkFBS0csT0FBTCxDQUFhO0FBQ1hDLGVBQUssa0NBRE07QUFFWEMsa0JBQVEsTUFGRztBQUdYZCxnQkFBTTtBQUNKZSxtQkFBT04sVUFBVU0sS0FEYjtBQUVKQyxtQkFBT1AsVUFBVU8sS0FGYjtBQUdKQyxtQkFBT1IsVUFBVVE7QUFIYixXQUhLO0FBUVhDLG1CQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJULG9CQUFRQyxHQUFSLENBQVksU0FBWjtBQUNEO0FBVlUsU0FBYjtBQVlBLHVCQUFLUyxTQUFMLENBQWU7QUFDYkwsaUJBQU8sTUFETTtBQUViTSxnQkFBTSxTQUZPO0FBR2JDLG9CQUFVO0FBSEcsU0FBZjtBQUtEO0FBdkJPLEs7Ozs7OzZCQXlCRDtBQUNQLFVBQUlqQixPQUFPLElBQVg7QUFDQSxxQkFBS2tCLGFBQUwsQ0FBbUI7QUFDakJMLGVBRGlCLG1CQUNUQyxHQURTLEVBQ0o7QUFDWGQsZUFBS21CLE1BQUwsR0FBY0wsSUFBSU0sWUFBbEI7QUFDQXBCLGVBQUtxQixLQUFMLEdBQWFQLElBQUlRLFdBQWpCO0FBQ0Q7QUFKZ0IsT0FBbkI7QUFNQSxxQkFBS2YsT0FBTCxDQUFhO0FBQ1hDLGFBQUssMkJBRE07QUFFWEMsZ0JBQVEsS0FGRztBQUdYSSxpQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCZCxlQUFLSSxTQUFMLEdBQWlCVSxJQUFJbkIsSUFBckI7QUFDQUssZUFBS3VCLE9BQUwsQ0FBYTtBQUNYbkIsdUJBQVdVLElBQUluQjtBQURKLFdBQWI7QUFHRDtBQVJVLE9BQWI7QUFVRDs7OztFQWxEaUMsZUFBSzZCLEk7O2tCQUFwQmhDLE0iLCJmaWxlIjoiZGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZGV0YWlsIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfllYblk4Hor6bmg4UnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBzcmM6ICdodHRwczovL2ltZy5hbGljZG4uY29tL3Rmcy9UQjE2ajlwaDJCTlRLSmp5MEZkWFhjUHBWWGEtNTIwLTI4MC5qcGdfcTkwJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgY2FydHMoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBjb25zdCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XG4gICAgICBsZXQgY29tbW9kaXR5ID0gc2VsZi5jb21tb2RpdHlbaW5kZXhdXG4gICAgICBjb25zb2xlLmxvZyhjb21tb2RpdHkpXG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvY2FydENyZWF0ZScsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgdGl0bGU6IGNvbW1vZGl0eS50aXRsZSxcbiAgICAgICAgICBwcmljZTogY29tbW9kaXR5LnByaWNlLFxuICAgICAgICAgIGltYWdlOiBjb21tb2RpdHkuaW1hZ2VcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3MnKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICB0aXRsZTogJ+WKoOWFpeaIkOWKnycsXG4gICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgZHVyYXRpb246IDEwMDBcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgc2VsZi5oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XG4gICAgICAgIHNlbGYud2lkdGggPSByZXMud2luZG93V2lkdGhcbiAgICAgIH1cbiAgICB9KVxuICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvZ2V0JyxcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgc2VsZi5jb21tb2RpdHkgPSByZXMuZGF0YVxuICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgIGNvbW1vZGl0eTogcmVzLmRhdGFcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=
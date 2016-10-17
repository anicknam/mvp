"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      moviesToRender: window.movieData
    };
    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          null,
          React.createElement(MovieList, { movies: this.state.moviesToRender })
        )
      );
    }
  }]);

  return App;
}(React.Component);

;

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvQXBwLmpzIl0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJtb3ZpZXNUb1JlbmRlciIsIndpbmRvdyIsIm1vdmllRGF0YSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQWFDLEtBQWIsRUFBb0I7QUFBQTs7QUFBQSwwR0FDWkEsS0FEWTs7QUFHbEIsVUFBS0MsS0FBTCxHQUFhO0FBQ1pDLHNCQUFnQkMsT0FBT0M7QUFEWCxLQUFiO0FBSGtCO0FBTW5COzs7OzZCQUVTO0FBQ1QsYUFDRTtBQUFBO0FBQUE7QUFDRztBQUFBO0FBQUE7QUFDRSw4QkFBQyxTQUFELElBQVcsUUFBUSxLQUFLSCxLQUFMLENBQVdDLGNBQTlCO0FBREY7QUFESCxPQURGO0FBT0E7Ozs7RUFqQmVHLE1BQU1DLFM7O0FBbUJ2Qjs7QUFJREMsU0FBU0MsTUFBVCxDQUFnQixvQkFBQyxHQUFELE9BQWhCLEVBQXlCQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQXpCIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgXHRtb3ZpZXNUb1JlbmRlcjogd2luZG93Lm1vdmllRGF0YVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gIFx0cmV0dXJuIChcbiAgXHQgIDxkaXY+XG4gICAgICAgIDxkaXY+IFxuICAgICAgICAgIDxNb3ZpZUxpc3QgbW92aWVzPXt0aGlzLnN0YXRlLm1vdmllc1RvUmVuZGVyfS8+XG4gICAgICAgIDwvZGl2PlxuICBcdCAgPC9kaXY+XG4gIFx0KVxuICB9XG5cbn07XG5cblxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikpO1xuIl19
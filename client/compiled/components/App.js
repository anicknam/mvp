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
    key: "submitHandler",
    value: function submitHandler(e) {
      e.preventDefault();

      var newMovieEntry = {
        title: this.refs.title.value,
        year: this.refs.year.value,
        genre: this.refs.genre.value
      };

      var currMoviesToRender = this.state.moviesToRender;
      currMoviesToRender.splice(0, 0, newMovieEntry);
      this.setState({
        moviesToRender: currMoviesToRender
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          null,
          React.createElement(
            "form",
            { className: "submit-form", onSubmit: this.submitHandler.bind(this) },
            React.createElement(
              "label",
              { className: "label" },
              "Title"
            ),
            React.createElement("input", { type: "text", name: "title", ref: "title" }),
            React.createElement(
              "label",
              { className: "label" },
              "Year"
            ),
            React.createElement("input", { type: "text", name: "year", ref: "year" }),
            React.createElement(
              "label",
              { className: "label" },
              "Genre"
            ),
            React.createElement("input", { type: "text", name: "genre", ref: "genre" }),
            React.createElement(
              "button",
              null,
              "Add Movie"
            )
          )
        ),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvQXBwLmpzIl0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJtb3ZpZXNUb1JlbmRlciIsIndpbmRvdyIsIm1vdmllRGF0YSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm5ld01vdmllRW50cnkiLCJ0aXRsZSIsInJlZnMiLCJ2YWx1ZSIsInllYXIiLCJnZW5yZSIsImN1cnJNb3ZpZXNUb1JlbmRlciIsInNwbGljZSIsInNldFN0YXRlIiwic3VibWl0SGFuZGxlciIsImJpbmQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFhQyxLQUFiLEVBQW9CO0FBQUE7O0FBQUEsMEdBQ1pBLEtBRFk7O0FBR2xCLFVBQUtDLEtBQUwsR0FBYTtBQUNaQyxzQkFBZ0JDLE9BQU9DO0FBRFgsS0FBYjtBQUhrQjtBQU1uQjs7OztrQ0FHY0MsQyxFQUFHO0FBQ2pCQSxRQUFFQyxjQUFGOztBQUVBLFVBQUlDLGdCQUFnQjtBQUNqQkMsZUFBTyxLQUFLQyxJQUFMLENBQVVELEtBQVYsQ0FBZ0JFLEtBRE47QUFFakJDLGNBQU0sS0FBS0YsSUFBTCxDQUFVRSxJQUFWLENBQWVELEtBRko7QUFHakJFLGVBQU8sS0FBS0gsSUFBTCxDQUFVRyxLQUFWLENBQWdCRjtBQUhOLE9BQXBCOztBQU1DLFVBQUlHLHFCQUFxQixLQUFLWixLQUFMLENBQVdDLGNBQXBDO0FBQ0FXLHlCQUFtQkMsTUFBbkIsQ0FBMEIsQ0FBMUIsRUFBNEIsQ0FBNUIsRUFBOEJQLGFBQTlCO0FBQ0EsV0FBS1EsUUFBTCxDQUFjO0FBQ2JiLHdCQUFnQlc7QUFESCxPQUFkO0FBR0Q7Ozs2QkFFUztBQUNULGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGNBQU0sV0FBVSxhQUFoQixFQUE4QixVQUFVLEtBQUtHLGFBQUwsQ0FBbUJDLElBQW5CLENBQXdCLElBQXhCLENBQXhDO0FBQ0U7QUFBQTtBQUFBLGdCQUFPLFdBQVUsT0FBakI7QUFBQTtBQUFBLGFBREY7QUFFRSwyQ0FBTyxNQUFLLE1BQVosRUFBbUIsTUFBSyxPQUF4QixFQUFnQyxLQUFJLE9BQXBDLEdBRkY7QUFHRTtBQUFBO0FBQUEsZ0JBQU8sV0FBVSxPQUFqQjtBQUFBO0FBQUEsYUFIRjtBQUlFLDJDQUFPLE1BQUssTUFBWixFQUFtQixNQUFLLE1BQXhCLEVBQStCLEtBQUksTUFBbkMsR0FKRjtBQUtFO0FBQUE7QUFBQSxnQkFBTyxXQUFVLE9BQWpCO0FBQUE7QUFBQSxhQUxGO0FBTUUsMkNBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQUssT0FBeEIsRUFBZ0MsS0FBSSxPQUFwQyxHQU5GO0FBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBGO0FBREYsU0FERjtBQWNHO0FBQUE7QUFBQTtBQUNFLDhCQUFDLFNBQUQsSUFBVyxRQUFRLEtBQUtoQixLQUFMLENBQVdDLGNBQTlCO0FBREY7QUFkSCxPQURGO0FBb0JBOzs7O0VBL0NlZ0IsTUFBTUMsUzs7QUFpRHZCOztBQUlEQyxTQUFTQyxNQUFULENBQWdCLG9CQUFDLEdBQUQsT0FBaEIsRUFBeUJDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICBcdG1vdmllc1RvUmVuZGVyOiB3aW5kb3cubW92aWVEYXRhXG4gICAgfVxuICB9XG5cblxuICBzdWJtaXRIYW5kbGVyIChlKSB7XG4gIFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIFx0dmFyIG5ld01vdmllRW50cnkgPSB7XG4gICAgICB0aXRsZTogdGhpcy5yZWZzLnRpdGxlLnZhbHVlLFxuICAgICAgeWVhcjogdGhpcy5yZWZzLnllYXIudmFsdWUsXG4gICAgICBnZW5yZTogdGhpcy5yZWZzLmdlbnJlLnZhbHVlXG4gIFx0fTtcblxuICAgIHZhciBjdXJyTW92aWVzVG9SZW5kZXIgPSB0aGlzLnN0YXRlLm1vdmllc1RvUmVuZGVyO1xuICAgIGN1cnJNb3ZpZXNUb1JlbmRlci5zcGxpY2UoMCwwLG5ld01vdmllRW50cnkpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgIFx0bW92aWVzVG9SZW5kZXI6IGN1cnJNb3ZpZXNUb1JlbmRlclxuICAgIH0pXG4gIH1cblxuICByZW5kZXIgKCkge1xuICBcdHJldHVybiAoXG4gIFx0ICA8ZGl2PlxuICBcdCAgICA8ZGl2PiBcbiAgXHQgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJzdWJtaXQtZm9ybVwiIG9uU3VibWl0PXt0aGlzLnN1Ym1pdEhhbmRsZXIuYmluZCh0aGlzKX0+XG4gIFx0ICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWxcIj5UaXRsZTwvbGFiZWw+XG4gIFx0ICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGl0bGVcIiByZWY9XCJ0aXRsZVwiLz5cbiAgXHQgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiPlllYXI8L2xhYmVsPlxuICBcdCAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInllYXJcIiByZWY9XCJ5ZWFyXCIvPlxuICBcdCAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCI+R2VucmU8L2xhYmVsPlxuICBcdCAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImdlbnJlXCIgcmVmPVwiZ2VucmVcIi8+XG4gIFx0ICAgICAgICA8YnV0dG9uPkFkZCBNb3ZpZTwvYnV0dG9uPlxuICBcdCAgICAgIDwvZm9ybT5cbiAgXHQgICAgPC9kaXY+XG4gICAgICAgIFxuXG4gICAgICAgIDxkaXY+IFxuICAgICAgICAgIDxNb3ZpZUxpc3QgbW92aWVzPXt0aGlzLnN0YXRlLm1vdmllc1RvUmVuZGVyfS8+XG4gICAgICAgIDwvZGl2PlxuICBcdCAgPC9kaXY+XG4gIFx0KVxuICB9XG5cbn07XG5cblxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikpO1xuIl19
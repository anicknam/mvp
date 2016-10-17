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

    _this.serverURL = 'http://127.0.0.1:8080/movies';

    _this.state = {
      moviesToRender: window.movieData
    };
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.getAllMovies(function (movies) {
        _this2.setState({
          moviesToRender: movies
        });
      });
    }
  }, {
    key: "getAllMovies",
    value: function getAllMovies(cb) {
      $.get(this.serverURL).done(function (movies) {
        cb(movies);
      }).fail(function (err) {
        throw err;
      });
    }
  }, {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvQXBwLmpzIl0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic2VydmVyVVJMIiwic3RhdGUiLCJtb3ZpZXNUb1JlbmRlciIsIndpbmRvdyIsIm1vdmllRGF0YSIsImdldEFsbE1vdmllcyIsIm1vdmllcyIsInNldFN0YXRlIiwiY2IiLCIkIiwiZ2V0IiwiZG9uZSIsImZhaWwiLCJlcnIiLCJlIiwicHJldmVudERlZmF1bHQiLCJuZXdNb3ZpZUVudHJ5IiwidGl0bGUiLCJyZWZzIiwidmFsdWUiLCJ5ZWFyIiwiZ2VucmUiLCJjdXJyTW92aWVzVG9SZW5kZXIiLCJzcGxpY2UiLCJzdWJtaXRIYW5kbGVyIiwiYmluZCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQWFDLEtBQWIsRUFBb0I7QUFBQTs7QUFBQSwwR0FDWkEsS0FEWTs7QUFFbEIsVUFBS0MsU0FBTCxHQUFpQiw4QkFBakI7O0FBRUEsVUFBS0MsS0FBTCxHQUFhO0FBQ1pDLHNCQUFnQkMsT0FBT0M7QUFEWCxLQUFiO0FBSmtCO0FBT25COzs7O3dDQUVvQjtBQUFBOztBQUNuQixXQUFLQyxZQUFMLENBQWtCLFVBQUNDLE1BQUQsRUFBWTtBQUM3QixlQUFLQyxRQUFMLENBQWM7QUFDYkwsMEJBQWdCSTtBQURILFNBQWQ7QUFHQSxPQUpEO0FBS0Q7OztpQ0FHYUUsRSxFQUFJO0FBQ2hCQyxRQUFFQyxHQUFGLENBQU0sS0FBS1YsU0FBWCxFQUFzQlcsSUFBdEIsQ0FBMkIsVUFBQ0wsTUFBRCxFQUFZO0FBQ3JDRSxXQUFHRixNQUFIO0FBQ0QsT0FGRCxFQUVHTSxJQUZILENBRVEsVUFBQ0MsR0FBRCxFQUFTO0FBQ2hCLGNBQU1BLEdBQU47QUFDQSxPQUpEO0FBS0Q7OztrQ0FFY0MsQyxFQUFHO0FBQ2pCQSxRQUFFQyxjQUFGOztBQUVBLFVBQUlDLGdCQUFnQjtBQUNqQkMsZUFBTyxLQUFLQyxJQUFMLENBQVVELEtBQVYsQ0FBZ0JFLEtBRE47QUFFakJDLGNBQU0sS0FBS0YsSUFBTCxDQUFVRSxJQUFWLENBQWVELEtBRko7QUFHakJFLGVBQU8sS0FBS0gsSUFBTCxDQUFVRyxLQUFWLENBQWdCRjtBQUhOLE9BQXBCOztBQU1DLFVBQUlHLHFCQUFxQixLQUFLckIsS0FBTCxDQUFXQyxjQUFwQztBQUNBb0IseUJBQW1CQyxNQUFuQixDQUEwQixDQUExQixFQUE0QixDQUE1QixFQUE4QlAsYUFBOUI7QUFDQSxXQUFLVCxRQUFMLENBQWM7QUFDYkwsd0JBQWdCb0I7QUFESCxPQUFkO0FBR0Q7Ozs2QkFFUztBQUNULGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGNBQU0sV0FBVSxhQUFoQixFQUE4QixVQUFVLEtBQUtFLGFBQUwsQ0FBbUJDLElBQW5CLENBQXdCLElBQXhCLENBQXhDO0FBQ0U7QUFBQTtBQUFBLGdCQUFPLFdBQVUsT0FBakI7QUFBQTtBQUFBLGFBREY7QUFFRSwyQ0FBTyxNQUFLLE1BQVosRUFBbUIsTUFBSyxPQUF4QixFQUFnQyxLQUFJLE9BQXBDLEdBRkY7QUFHRTtBQUFBO0FBQUEsZ0JBQU8sV0FBVSxPQUFqQjtBQUFBO0FBQUEsYUFIRjtBQUlFLDJDQUFPLE1BQUssTUFBWixFQUFtQixNQUFLLE1BQXhCLEVBQStCLEtBQUksTUFBbkMsR0FKRjtBQUtFO0FBQUE7QUFBQSxnQkFBTyxXQUFVLE9BQWpCO0FBQUE7QUFBQSxhQUxGO0FBTUUsMkNBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQUssT0FBeEIsRUFBZ0MsS0FBSSxPQUFwQyxHQU5GO0FBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBGO0FBREYsU0FERjtBQWNHO0FBQUE7QUFBQTtBQUNFLDhCQUFDLFNBQUQsSUFBVyxRQUFRLEtBQUt4QixLQUFMLENBQVdDLGNBQTlCO0FBREY7QUFkSCxPQURGO0FBb0JBOzs7O0VBaEVld0IsTUFBTUMsUzs7QUFrRXZCOztBQUlEQyxTQUFTQyxNQUFULENBQWdCLG9CQUFDLEdBQUQsT0FBaEIsRUFBeUJDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc2VydmVyVVJMID0gJ2h0dHA6Ly8xMjcuMC4wLjE6ODA4MC9tb3ZpZXMnO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICBcdG1vdmllc1RvUmVuZGVyOiB3aW5kb3cubW92aWVEYXRhXG4gICAgfVxuICB9XG4gIFxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgdGhpcy5nZXRBbGxNb3ZpZXMoKG1vdmllcykgPT4ge1xuICAgIFx0dGhpcy5zZXRTdGF0ZSh7XG4gICAgXHRcdG1vdmllc1RvUmVuZGVyOiBtb3ZpZXNcbiAgICBcdH0pXG4gICAgfSk7XG4gIH1cblxuXG4gIGdldEFsbE1vdmllcyAoY2IpIHtcbiAgICAkLmdldCh0aGlzLnNlcnZlclVSTCkuZG9uZSgobW92aWVzKSA9PiB7XG4gICAgICBjYihtb3ZpZXMpO1xuICAgIH0pLmZhaWwoKGVycikgPT4ge1xuICAgIFx0dGhyb3cgZXJyO1xuICAgIH0pXG4gIH1cblxuICBzdWJtaXRIYW5kbGVyIChlKSB7XG4gIFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIFx0dmFyIG5ld01vdmllRW50cnkgPSB7XG4gICAgICB0aXRsZTogdGhpcy5yZWZzLnRpdGxlLnZhbHVlLFxuICAgICAgeWVhcjogdGhpcy5yZWZzLnllYXIudmFsdWUsXG4gICAgICBnZW5yZTogdGhpcy5yZWZzLmdlbnJlLnZhbHVlXG4gIFx0fTtcblxuICAgIHZhciBjdXJyTW92aWVzVG9SZW5kZXIgPSB0aGlzLnN0YXRlLm1vdmllc1RvUmVuZGVyO1xuICAgIGN1cnJNb3ZpZXNUb1JlbmRlci5zcGxpY2UoMCwwLG5ld01vdmllRW50cnkpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgIFx0bW92aWVzVG9SZW5kZXI6IGN1cnJNb3ZpZXNUb1JlbmRlclxuICAgIH0pXG4gIH1cblxuICByZW5kZXIgKCkge1xuICBcdHJldHVybiAoXG4gIFx0ICA8ZGl2PlxuICBcdCAgICA8ZGl2PiBcbiAgXHQgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJzdWJtaXQtZm9ybVwiIG9uU3VibWl0PXt0aGlzLnN1Ym1pdEhhbmRsZXIuYmluZCh0aGlzKX0+XG4gIFx0ICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWxcIj5UaXRsZTwvbGFiZWw+XG4gIFx0ICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGl0bGVcIiByZWY9XCJ0aXRsZVwiLz5cbiAgXHQgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiPlllYXI8L2xhYmVsPlxuICBcdCAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInllYXJcIiByZWY9XCJ5ZWFyXCIvPlxuICBcdCAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCI+R2VucmU8L2xhYmVsPlxuICBcdCAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImdlbnJlXCIgcmVmPVwiZ2VucmVcIi8+XG4gIFx0ICAgICAgICA8YnV0dG9uPkFkZCBNb3ZpZTwvYnV0dG9uPlxuICBcdCAgICAgIDwvZm9ybT5cbiAgXHQgICAgPC9kaXY+XG4gICAgICAgIFxuXG4gICAgICAgIDxkaXY+IFxuICAgICAgICAgIDxNb3ZpZUxpc3QgbW92aWVzPXt0aGlzLnN0YXRlLm1vdmllc1RvUmVuZGVyfS8+XG4gICAgICAgIDwvZGl2PlxuICBcdCAgPC9kaXY+XG4gIFx0KVxuICB9XG5cbn07XG5cblxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikpO1xuIl19
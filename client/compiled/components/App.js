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
      var _this3 = this;

      e.preventDefault();

      var newMovieEntry = {
        title: this.refs.title.value,
        year: this.refs.year.value,
        genre: this.refs.genre.value
      };

      $.ajax({
        type: "POST",
        url: this.serverURL,
        data: JSON.stringify(newMovieEntry),
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function success(data) {
          _this3.getAllMovies(function (movies) {
            _this3.setState({
              moviesToRender: movies
            });
          });
        },
        error: function error(_error) {
          throw _error;
        }
      });

      // var currMoviesToRender = this.state.moviesToRender;
      // currMoviesToRender.splice(0,0,newMovieEntry);
      // this.setState({
      // 	moviesToRender: currMoviesToRender
      // })
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvQXBwLmpzIl0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic2VydmVyVVJMIiwic3RhdGUiLCJtb3ZpZXNUb1JlbmRlciIsIndpbmRvdyIsIm1vdmllRGF0YSIsImdldEFsbE1vdmllcyIsIm1vdmllcyIsInNldFN0YXRlIiwiY2IiLCIkIiwiZ2V0IiwiZG9uZSIsImZhaWwiLCJlcnIiLCJlIiwicHJldmVudERlZmF1bHQiLCJuZXdNb3ZpZUVudHJ5IiwidGl0bGUiLCJyZWZzIiwidmFsdWUiLCJ5ZWFyIiwiZ2VucmUiLCJhamF4IiwidHlwZSIsInVybCIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YVR5cGUiLCJjb250ZW50VHlwZSIsInN1Y2Nlc3MiLCJlcnJvciIsInN1Ym1pdEhhbmRsZXIiLCJiaW5kIiwiUmVhY3QiLCJDb21wb25lbnQiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osZUFBYUMsS0FBYixFQUFvQjtBQUFBOztBQUFBLDBHQUNaQSxLQURZOztBQUVsQixVQUFLQyxTQUFMLEdBQWlCLDhCQUFqQjs7QUFFQSxVQUFLQyxLQUFMLEdBQWE7QUFDWkMsc0JBQWdCQyxPQUFPQztBQURYLEtBQWI7QUFKa0I7QUFPbkI7Ozs7d0NBRW9CO0FBQUE7O0FBQ25CLFdBQUtDLFlBQUwsQ0FBa0IsVUFBQ0MsTUFBRCxFQUFZO0FBQzdCLGVBQUtDLFFBQUwsQ0FBYztBQUNiTCwwQkFBZ0JJO0FBREgsU0FBZDtBQUdBLE9BSkQ7QUFLRDs7O2lDQUdhRSxFLEVBQUk7QUFDaEJDLFFBQUVDLEdBQUYsQ0FBTSxLQUFLVixTQUFYLEVBQXNCVyxJQUF0QixDQUEyQixVQUFDTCxNQUFELEVBQVk7QUFDckNFLFdBQUdGLE1BQUg7QUFDRCxPQUZELEVBRUdNLElBRkgsQ0FFUSxVQUFDQyxHQUFELEVBQVM7QUFDaEIsY0FBTUEsR0FBTjtBQUNBLE9BSkQ7QUFLRDs7O2tDQUVjQyxDLEVBQUc7QUFBQTs7QUFDakJBLFFBQUVDLGNBQUY7O0FBRUEsVUFBSUMsZ0JBQWdCO0FBQ2pCQyxlQUFPLEtBQUtDLElBQUwsQ0FBVUQsS0FBVixDQUFnQkUsS0FETjtBQUVqQkMsY0FBTSxLQUFLRixJQUFMLENBQVVFLElBQVYsQ0FBZUQsS0FGSjtBQUdqQkUsZUFBTyxLQUFLSCxJQUFMLENBQVVHLEtBQVYsQ0FBZ0JGO0FBSE4sT0FBcEI7O0FBTUFWLFFBQUVhLElBQUYsQ0FBTztBQUNFQyxjQUFNLE1BRFI7QUFFRUMsYUFBSyxLQUFLeEIsU0FGWjtBQUdFeUIsY0FBTUMsS0FBS0MsU0FBTCxDQUFlWCxhQUFmLENBSFI7QUFJRVksa0JBQVUsTUFKWjtBQUtFQyxxQkFBYSxpQ0FMZjtBQU1FQyxpQkFBUyxpQkFBQ0wsSUFBRCxFQUFVO0FBQ2xCLGlCQUFLcEIsWUFBTCxDQUFrQixVQUFDQyxNQUFELEVBQVk7QUFDN0IsbUJBQUtDLFFBQUwsQ0FBYztBQUNiTCw4QkFBZ0JJO0FBREgsYUFBZDtBQUdBLFdBSkQ7QUFLQSxTQVpIO0FBYUV5QixlQUFPLGVBQUNBLE1BQUQsRUFBVztBQUNqQixnQkFBTUEsTUFBTjtBQUNBO0FBZkgsT0FBUDs7QUFrQkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEOzs7NkJBRVM7QUFDVCxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxjQUFNLFdBQVUsYUFBaEIsRUFBOEIsVUFBVSxLQUFLQyxhQUFMLENBQW1CQyxJQUFuQixDQUF3QixJQUF4QixDQUF4QztBQUNFO0FBQUE7QUFBQSxnQkFBTyxXQUFVLE9BQWpCO0FBQUE7QUFBQSxhQURGO0FBRUUsMkNBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQUssT0FBeEIsRUFBZ0MsS0FBSSxPQUFwQyxHQUZGO0FBR0U7QUFBQTtBQUFBLGdCQUFPLFdBQVUsT0FBakI7QUFBQTtBQUFBLGFBSEY7QUFJRSwyQ0FBTyxNQUFLLE1BQVosRUFBbUIsTUFBSyxNQUF4QixFQUErQixLQUFJLE1BQW5DLEdBSkY7QUFLRTtBQUFBO0FBQUEsZ0JBQU8sV0FBVSxPQUFqQjtBQUFBO0FBQUEsYUFMRjtBQU1FLDJDQUFPLE1BQUssTUFBWixFQUFtQixNQUFLLE9BQXhCLEVBQWdDLEtBQUksT0FBcEMsR0FORjtBQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRjtBQURGLFNBREY7QUFjRztBQUFBO0FBQUE7QUFDRSw4QkFBQyxTQUFELElBQVcsUUFBUSxLQUFLaEMsS0FBTCxDQUFXQyxjQUE5QjtBQURGO0FBZEgsT0FERjtBQW9CQTs7OztFQWxGZWdDLE1BQU1DLFM7O0FBb0Z2Qjs7QUFJREMsU0FBU0MsTUFBVCxDQUFnQixvQkFBQyxHQUFELE9BQWhCLEVBQXlCQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQXpCIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnNlcnZlclVSTCA9ICdodHRwOi8vMTI3LjAuMC4xOjgwODAvbW92aWVzJztcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgXHRtb3ZpZXNUb1JlbmRlcjogd2luZG93Lm1vdmllRGF0YVxuICAgIH1cbiAgfVxuICBcbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIHRoaXMuZ2V0QWxsTW92aWVzKChtb3ZpZXMpID0+IHtcbiAgICBcdHRoaXMuc2V0U3RhdGUoe1xuICAgIFx0XHRtb3ZpZXNUb1JlbmRlcjogbW92aWVzXG4gICAgXHR9KVxuICAgIH0pO1xuICB9XG5cblxuICBnZXRBbGxNb3ZpZXMgKGNiKSB7XG4gICAgJC5nZXQodGhpcy5zZXJ2ZXJVUkwpLmRvbmUoKG1vdmllcykgPT4ge1xuICAgICAgY2IobW92aWVzKTtcbiAgICB9KS5mYWlsKChlcnIpID0+IHtcbiAgICBcdHRocm93IGVycjtcbiAgICB9KVxuICB9XG5cbiAgc3VibWl0SGFuZGxlciAoZSkge1xuICBcdGUucHJldmVudERlZmF1bHQoKTtcblxuICBcdHZhciBuZXdNb3ZpZUVudHJ5ID0ge1xuICAgICAgdGl0bGU6IHRoaXMucmVmcy50aXRsZS52YWx1ZSxcbiAgICAgIHllYXI6IHRoaXMucmVmcy55ZWFyLnZhbHVlLFxuICAgICAgZ2VucmU6IHRoaXMucmVmcy5nZW5yZS52YWx1ZVxuICBcdH07XG5cbiAgXHQkLmFqYXgoe1xuICBcdCAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICBcdCAgICAgICAgIHVybDogdGhpcy5zZXJ2ZXJVUkwsXG4gIFx0ICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkobmV3TW92aWVFbnRyeSksXG4gIFx0ICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxuICBcdCAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcbiAgXHQgICAgICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICBcdCAgICAgICAgIFx0dGhpcy5nZXRBbGxNb3ZpZXMoKG1vdmllcykgPT4ge1xuICBcdCAgICAgICAgIFx0XHR0aGlzLnNldFN0YXRlKHtcbiAgXHQgICAgICAgICBcdFx0XHRtb3ZpZXNUb1JlbmRlcjogbW92aWVzXG4gIFx0ICAgICAgICAgXHRcdH0pXG4gIFx0ICAgICAgICAgXHR9KTtcbiAgXHQgICAgICAgICB9LFxuICBcdCAgICAgICAgIGVycm9yOiAoZXJyb3IpID0+IHtcbiAgXHQgICAgICAgICBcdHRocm93IGVycm9yO1xuICBcdCAgICAgICAgIH1cbiAgXHR9KTtcblxuICAgIC8vIHZhciBjdXJyTW92aWVzVG9SZW5kZXIgPSB0aGlzLnN0YXRlLm1vdmllc1RvUmVuZGVyO1xuICAgIC8vIGN1cnJNb3ZpZXNUb1JlbmRlci5zcGxpY2UoMCwwLG5ld01vdmllRW50cnkpO1xuICAgIC8vIHRoaXMuc2V0U3RhdGUoe1xuICAgIC8vIFx0bW92aWVzVG9SZW5kZXI6IGN1cnJNb3ZpZXNUb1JlbmRlclxuICAgIC8vIH0pXG4gIH1cblxuICByZW5kZXIgKCkge1xuICBcdHJldHVybiAoXG4gIFx0ICA8ZGl2PlxuICBcdCAgICA8ZGl2PiBcbiAgXHQgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJzdWJtaXQtZm9ybVwiIG9uU3VibWl0PXt0aGlzLnN1Ym1pdEhhbmRsZXIuYmluZCh0aGlzKX0+XG4gIFx0ICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWxcIj5UaXRsZTwvbGFiZWw+XG4gIFx0ICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGl0bGVcIiByZWY9XCJ0aXRsZVwiLz5cbiAgXHQgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiPlllYXI8L2xhYmVsPlxuICBcdCAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInllYXJcIiByZWY9XCJ5ZWFyXCIvPlxuICBcdCAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCI+R2VucmU8L2xhYmVsPlxuICBcdCAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImdlbnJlXCIgcmVmPVwiZ2VucmVcIi8+XG4gIFx0ICAgICAgICA8YnV0dG9uPkFkZCBNb3ZpZTwvYnV0dG9uPlxuICBcdCAgICAgIDwvZm9ybT5cbiAgXHQgICAgPC9kaXY+XG4gICAgICAgIFxuXG4gICAgICAgIDxkaXY+IFxuICAgICAgICAgIDxNb3ZpZUxpc3QgbW92aWVzPXt0aGlzLnN0YXRlLm1vdmllc1RvUmVuZGVyfS8+XG4gICAgICAgIDwvZGl2PlxuICBcdCAgPC9kaXY+XG4gIFx0KVxuICB9XG5cbn07XG5cblxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikpO1xuIl19
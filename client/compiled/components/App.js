"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import React from 'react';

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.serverURL = 'http://127.0.0.1:8000/api/movies';

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
    }
  }, {
    key: "searchHandler",
    value: function searchHandler(title) {}
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

window.App = App;
//export default App;
// ReactDOM.render(<App />, document.getElementById("app"));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvQXBwLmpzIl0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic2VydmVyVVJMIiwic3RhdGUiLCJtb3ZpZXNUb1JlbmRlciIsIndpbmRvdyIsIm1vdmllRGF0YSIsImdldEFsbE1vdmllcyIsIm1vdmllcyIsInNldFN0YXRlIiwiY2IiLCIkIiwiZ2V0IiwiZG9uZSIsImZhaWwiLCJlcnIiLCJlIiwicHJldmVudERlZmF1bHQiLCJuZXdNb3ZpZUVudHJ5IiwidGl0bGUiLCJyZWZzIiwidmFsdWUiLCJ5ZWFyIiwiZ2VucmUiLCJhamF4IiwidHlwZSIsInVybCIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YVR5cGUiLCJjb250ZW50VHlwZSIsInN1Y2Nlc3MiLCJlcnJvciIsInN1Ym1pdEhhbmRsZXIiLCJiaW5kIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7SUFFTUEsRzs7O0FBQ0osZUFBYUMsS0FBYixFQUFvQjtBQUFBOztBQUFBLDBHQUNaQSxLQURZOztBQUVsQixVQUFLQyxTQUFMLEdBQWlCLGtDQUFqQjs7QUFFQSxVQUFLQyxLQUFMLEdBQWE7QUFDWkMsc0JBQWdCQyxPQUFPQztBQURYLEtBQWI7QUFKa0I7QUFPbkI7Ozs7d0NBRW9CO0FBQUE7O0FBQ25CLFdBQUtDLFlBQUwsQ0FBa0IsVUFBQ0MsTUFBRCxFQUFZO0FBQzdCLGVBQUtDLFFBQUwsQ0FBYztBQUNiTCwwQkFBZ0JJO0FBREgsU0FBZDtBQUdBLE9BSkQ7QUFLRDs7O2lDQUdhRSxFLEVBQUk7QUFDaEJDLFFBQUVDLEdBQUYsQ0FBTSxLQUFLVixTQUFYLEVBQXNCVyxJQUF0QixDQUEyQixVQUFDTCxNQUFELEVBQVk7QUFDckNFLFdBQUdGLE1BQUg7QUFDRCxPQUZELEVBRUdNLElBRkgsQ0FFUSxVQUFDQyxHQUFELEVBQVM7QUFDaEIsY0FBTUEsR0FBTjtBQUNBLE9BSkQ7QUFLRDs7O2tDQUVjQyxDLEVBQUc7QUFBQTs7QUFDakJBLFFBQUVDLGNBQUY7O0FBRUEsVUFBSUMsZ0JBQWdCO0FBQ2pCQyxlQUFPLEtBQUtDLElBQUwsQ0FBVUQsS0FBVixDQUFnQkUsS0FETjtBQUVqQkMsY0FBTSxLQUFLRixJQUFMLENBQVVFLElBQVYsQ0FBZUQsS0FGSjtBQUdqQkUsZUFBTyxLQUFLSCxJQUFMLENBQVVHLEtBQVYsQ0FBZ0JGO0FBSE4sT0FBcEI7O0FBTUFWLFFBQUVhLElBQUYsQ0FBTztBQUNFQyxjQUFNLE1BRFI7QUFFRUMsYUFBSyxLQUFLeEIsU0FGWjtBQUdFeUIsY0FBTUMsS0FBS0MsU0FBTCxDQUFlWCxhQUFmLENBSFI7QUFJRVksa0JBQVUsTUFKWjtBQUtFQyxxQkFBYSxpQ0FMZjtBQU1FQyxpQkFBUyxpQkFBQ0wsSUFBRCxFQUFVO0FBQ2xCLGlCQUFLcEIsWUFBTCxDQUFrQixVQUFDQyxNQUFELEVBQVk7QUFDN0IsbUJBQUtDLFFBQUwsQ0FBYztBQUNiTCw4QkFBZ0JJO0FBREgsYUFBZDtBQUdBLFdBSkQ7QUFLQSxTQVpIO0FBYUV5QixlQUFPLGVBQUNBLE1BQUQsRUFBVztBQUNqQixnQkFBTUEsTUFBTjtBQUNBO0FBZkgsT0FBUDtBQWtCQTs7O2tDQUdjZCxLLEVBQU8sQ0FFckI7Ozs2QkFFUztBQUNULGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGNBQU0sV0FBVSxhQUFoQixFQUE4QixVQUFVLEtBQUtlLGFBQUwsQ0FBbUJDLElBQW5CLENBQXdCLElBQXhCLENBQXhDO0FBQ0U7QUFBQTtBQUFBLGdCQUFPLFdBQVUsT0FBakI7QUFBQTtBQUFBLGFBREY7QUFFRSwyQ0FBTyxNQUFLLE1BQVosRUFBbUIsTUFBSyxPQUF4QixFQUFnQyxLQUFJLE9BQXBDLEdBRkY7QUFHRTtBQUFBO0FBQUEsZ0JBQU8sV0FBVSxPQUFqQjtBQUFBO0FBQUEsYUFIRjtBQUlFLDJDQUFPLE1BQUssTUFBWixFQUFtQixNQUFLLE1BQXhCLEVBQStCLEtBQUksTUFBbkMsR0FKRjtBQUtFO0FBQUE7QUFBQSxnQkFBTyxXQUFVLE9BQWpCO0FBQUE7QUFBQSxhQUxGO0FBTUUsMkNBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQUssT0FBeEIsRUFBZ0MsS0FBSSxPQUFwQyxHQU5GO0FBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBGO0FBREYsU0FERjtBQWNHO0FBQUE7QUFBQTtBQUNFLDhCQUFDLFNBQUQsSUFBVyxRQUFRLEtBQUtoQyxLQUFMLENBQVdDLGNBQTlCO0FBREY7QUFkSCxPQURGO0FBb0JBOzs7O0VBbEZlZ0MsTUFBTUMsUzs7QUFvRnZCOztBQUVEaEMsT0FBT0wsR0FBUCxHQUFhQSxHQUFiO0FBQ0E7QUFDQSIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnNlcnZlclVSTCA9ICdodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL21vdmllcyc7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgIFx0bW92aWVzVG9SZW5kZXI6IHdpbmRvdy5tb3ZpZURhdGFcbiAgICB9XG4gIH1cbiAgXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICB0aGlzLmdldEFsbE1vdmllcygobW92aWVzKSA9PiB7XG4gICAgXHR0aGlzLnNldFN0YXRlKHtcbiAgICBcdFx0bW92aWVzVG9SZW5kZXI6IG1vdmllc1xuICAgIFx0fSlcbiAgICB9KTtcbiAgfVxuXG5cbiAgZ2V0QWxsTW92aWVzIChjYikge1xuICAgICQuZ2V0KHRoaXMuc2VydmVyVVJMKS5kb25lKChtb3ZpZXMpID0+IHtcbiAgICAgIGNiKG1vdmllcyk7XG4gICAgfSkuZmFpbCgoZXJyKSA9PiB7XG4gICAgXHR0aHJvdyBlcnI7XG4gICAgfSlcbiAgfVxuXG4gIHN1Ym1pdEhhbmRsZXIgKGUpIHtcbiAgXHRlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgXHR2YXIgbmV3TW92aWVFbnRyeSA9IHtcbiAgICAgIHRpdGxlOiB0aGlzLnJlZnMudGl0bGUudmFsdWUsXG4gICAgICB5ZWFyOiB0aGlzLnJlZnMueWVhci52YWx1ZSxcbiAgICAgIGdlbnJlOiB0aGlzLnJlZnMuZ2VucmUudmFsdWVcbiAgXHR9O1xuXG4gIFx0JC5hamF4KHtcbiAgXHQgICAgICAgICB0eXBlOiBcIlBPU1RcIixcbiAgXHQgICAgICAgICB1cmw6IHRoaXMuc2VydmVyVVJMLFxuICBcdCAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KG5ld01vdmllRW50cnkpLFxuICBcdCAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcbiAgXHQgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXG4gIFx0ICAgICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcbiAgXHQgICAgICAgICBcdHRoaXMuZ2V0QWxsTW92aWVzKChtb3ZpZXMpID0+IHtcbiAgXHQgICAgICAgICBcdFx0dGhpcy5zZXRTdGF0ZSh7XG4gIFx0ICAgICAgICAgXHRcdFx0bW92aWVzVG9SZW5kZXI6IG1vdmllc1xuICBcdCAgICAgICAgIFx0XHR9KVxuICBcdCAgICAgICAgIFx0fSk7XG4gIFx0ICAgICAgICAgfSxcbiAgXHQgICAgICAgICBlcnJvcjogKGVycm9yKSA9PiB7XG4gIFx0ICAgICAgICAgXHR0aHJvdyBlcnJvcjtcbiAgXHQgICAgICAgICB9XG4gIFx0fSk7XG5cbiAgfVxuXG5cbiAgc2VhcmNoSGFuZGxlciAodGl0bGUpIHtcblxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgXHRyZXR1cm4gKFxuICBcdCAgPGRpdj5cbiAgXHQgICAgPGRpdj4gXG4gIFx0ICAgICAgPGZvcm0gY2xhc3NOYW1lPVwic3VibWl0LWZvcm1cIiBvblN1Ym1pdD17dGhpcy5zdWJtaXRIYW5kbGVyLmJpbmQodGhpcyl9PlxuICBcdCAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCI+VGl0bGU8L2xhYmVsPlxuICBcdCAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRpdGxlXCIgcmVmPVwidGl0bGVcIi8+XG4gIFx0ICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWxcIj5ZZWFyPC9sYWJlbD5cbiAgXHQgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ5ZWFyXCIgcmVmPVwieWVhclwiLz5cbiAgXHQgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiPkdlbnJlPC9sYWJlbD5cbiAgXHQgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJnZW5yZVwiIHJlZj1cImdlbnJlXCIvPlxuICBcdCAgICAgICAgPGJ1dHRvbj5BZGQgTW92aWU8L2J1dHRvbj5cbiAgXHQgICAgICA8L2Zvcm0+XG4gIFx0ICAgIDwvZGl2PlxuICAgICAgICBcblxuICAgICAgICA8ZGl2PiBcbiAgICAgICAgICA8TW92aWVMaXN0IG1vdmllcz17dGhpcy5zdGF0ZS5tb3ZpZXNUb1JlbmRlcn0vPlxuICAgICAgICA8L2Rpdj5cbiAgXHQgIDwvZGl2PlxuICBcdClcbiAgfVxuXG59O1xuXG53aW5kb3cuQXBwID0gQXBwXG4vL2V4cG9ydCBkZWZhdWx0IEFwcDtcbi8vIFJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKSk7XG4iXX0=
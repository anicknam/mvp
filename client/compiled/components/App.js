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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvQXBwLmpzIl0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic2VydmVyVVJMIiwic3RhdGUiLCJtb3ZpZXNUb1JlbmRlciIsIndpbmRvdyIsIm1vdmllRGF0YSIsImdldEFsbE1vdmllcyIsIm1vdmllcyIsInNldFN0YXRlIiwiY2IiLCIkIiwiZ2V0IiwiZG9uZSIsImZhaWwiLCJlcnIiLCJlIiwicHJldmVudERlZmF1bHQiLCJuZXdNb3ZpZUVudHJ5IiwidGl0bGUiLCJyZWZzIiwidmFsdWUiLCJ5ZWFyIiwiZ2VucmUiLCJhamF4IiwidHlwZSIsInVybCIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YVR5cGUiLCJjb250ZW50VHlwZSIsInN1Y2Nlc3MiLCJlcnJvciIsInN1Ym1pdEhhbmRsZXIiLCJiaW5kIiwiUmVhY3QiLCJDb21wb25lbnQiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osZUFBYUMsS0FBYixFQUFvQjtBQUFBOztBQUFBLDBHQUNaQSxLQURZOztBQUVsQixVQUFLQyxTQUFMLEdBQWlCLDhCQUFqQjs7QUFFQSxVQUFLQyxLQUFMLEdBQWE7QUFDWkMsc0JBQWdCQyxPQUFPQztBQURYLEtBQWI7QUFKa0I7QUFPbkI7Ozs7d0NBRW9CO0FBQUE7O0FBQ25CLFdBQUtDLFlBQUwsQ0FBa0IsVUFBQ0MsTUFBRCxFQUFZO0FBQzdCLGVBQUtDLFFBQUwsQ0FBYztBQUNiTCwwQkFBZ0JJO0FBREgsU0FBZDtBQUdBLE9BSkQ7QUFLRDs7O2lDQUdhRSxFLEVBQUk7QUFDaEJDLFFBQUVDLEdBQUYsQ0FBTSxLQUFLVixTQUFYLEVBQXNCVyxJQUF0QixDQUEyQixVQUFDTCxNQUFELEVBQVk7QUFDckNFLFdBQUdGLE1BQUg7QUFDRCxPQUZELEVBRUdNLElBRkgsQ0FFUSxVQUFDQyxHQUFELEVBQVM7QUFDaEIsY0FBTUEsR0FBTjtBQUNBLE9BSkQ7QUFLRDs7O2tDQUVjQyxDLEVBQUc7QUFBQTs7QUFDakJBLFFBQUVDLGNBQUY7O0FBRUEsVUFBSUMsZ0JBQWdCO0FBQ2pCQyxlQUFPLEtBQUtDLElBQUwsQ0FBVUQsS0FBVixDQUFnQkUsS0FETjtBQUVqQkMsY0FBTSxLQUFLRixJQUFMLENBQVVFLElBQVYsQ0FBZUQsS0FGSjtBQUdqQkUsZUFBTyxLQUFLSCxJQUFMLENBQVVHLEtBQVYsQ0FBZ0JGO0FBSE4sT0FBcEI7O0FBTUFWLFFBQUVhLElBQUYsQ0FBTztBQUNFQyxjQUFNLE1BRFI7QUFFRUMsYUFBSyxLQUFLeEIsU0FGWjtBQUdFeUIsY0FBTUMsS0FBS0MsU0FBTCxDQUFlWCxhQUFmLENBSFI7QUFJRVksa0JBQVUsTUFKWjtBQUtFQyxxQkFBYSxpQ0FMZjtBQU1FQyxpQkFBUyxpQkFBQ0wsSUFBRCxFQUFVO0FBQ2xCLGlCQUFLcEIsWUFBTCxDQUFrQixVQUFDQyxNQUFELEVBQVk7QUFDN0IsbUJBQUtDLFFBQUwsQ0FBYztBQUNiTCw4QkFBZ0JJO0FBREgsYUFBZDtBQUdBLFdBSkQ7QUFLQSxTQVpIO0FBYUV5QixlQUFPLGVBQUNBLE1BQUQsRUFBVztBQUNqQixnQkFBTUEsTUFBTjtBQUNBO0FBZkgsT0FBUDtBQWtCQTs7OzZCQUVTO0FBQ1QsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsY0FBTSxXQUFVLGFBQWhCLEVBQThCLFVBQVUsS0FBS0MsYUFBTCxDQUFtQkMsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBeEM7QUFDRTtBQUFBO0FBQUEsZ0JBQU8sV0FBVSxPQUFqQjtBQUFBO0FBQUEsYUFERjtBQUVFLDJDQUFPLE1BQUssTUFBWixFQUFtQixNQUFLLE9BQXhCLEVBQWdDLEtBQUksT0FBcEMsR0FGRjtBQUdFO0FBQUE7QUFBQSxnQkFBTyxXQUFVLE9BQWpCO0FBQUE7QUFBQSxhQUhGO0FBSUUsMkNBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQUssTUFBeEIsRUFBK0IsS0FBSSxNQUFuQyxHQUpGO0FBS0U7QUFBQTtBQUFBLGdCQUFPLFdBQVUsT0FBakI7QUFBQTtBQUFBLGFBTEY7QUFNRSwyQ0FBTyxNQUFLLE1BQVosRUFBbUIsTUFBSyxPQUF4QixFQUFnQyxLQUFJLE9BQXBDLEdBTkY7QUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEY7QUFERixTQURGO0FBY0c7QUFBQTtBQUFBO0FBQ0UsOEJBQUMsU0FBRCxJQUFXLFFBQVEsS0FBS2hDLEtBQUwsQ0FBV0MsY0FBOUI7QUFERjtBQWRILE9BREY7QUFvQkE7Ozs7RUE3RWVnQyxNQUFNQyxTOztBQStFdkI7O0FBSURDLFNBQVNDLE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF5QkMsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUF6QiIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zZXJ2ZXJVUkwgPSAnaHR0cDovLzEyNy4wLjAuMTo4MDgwL21vdmllcyc7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgIFx0bW92aWVzVG9SZW5kZXI6IHdpbmRvdy5tb3ZpZURhdGFcbiAgICB9XG4gIH1cbiAgXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICB0aGlzLmdldEFsbE1vdmllcygobW92aWVzKSA9PiB7XG4gICAgXHR0aGlzLnNldFN0YXRlKHtcbiAgICBcdFx0bW92aWVzVG9SZW5kZXI6IG1vdmllc1xuICAgIFx0fSlcbiAgICB9KTtcbiAgfVxuXG5cbiAgZ2V0QWxsTW92aWVzIChjYikge1xuICAgICQuZ2V0KHRoaXMuc2VydmVyVVJMKS5kb25lKChtb3ZpZXMpID0+IHtcbiAgICAgIGNiKG1vdmllcyk7XG4gICAgfSkuZmFpbCgoZXJyKSA9PiB7XG4gICAgXHR0aHJvdyBlcnI7XG4gICAgfSlcbiAgfVxuXG4gIHN1Ym1pdEhhbmRsZXIgKGUpIHtcbiAgXHRlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgXHR2YXIgbmV3TW92aWVFbnRyeSA9IHtcbiAgICAgIHRpdGxlOiB0aGlzLnJlZnMudGl0bGUudmFsdWUsXG4gICAgICB5ZWFyOiB0aGlzLnJlZnMueWVhci52YWx1ZSxcbiAgICAgIGdlbnJlOiB0aGlzLnJlZnMuZ2VucmUudmFsdWVcbiAgXHR9O1xuXG4gIFx0JC5hamF4KHtcbiAgXHQgICAgICAgICB0eXBlOiBcIlBPU1RcIixcbiAgXHQgICAgICAgICB1cmw6IHRoaXMuc2VydmVyVVJMLFxuICBcdCAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KG5ld01vdmllRW50cnkpLFxuICBcdCAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcbiAgXHQgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXG4gIFx0ICAgICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcbiAgXHQgICAgICAgICBcdHRoaXMuZ2V0QWxsTW92aWVzKChtb3ZpZXMpID0+IHtcbiAgXHQgICAgICAgICBcdFx0dGhpcy5zZXRTdGF0ZSh7XG4gIFx0ICAgICAgICAgXHRcdFx0bW92aWVzVG9SZW5kZXI6IG1vdmllc1xuICBcdCAgICAgICAgIFx0XHR9KVxuICBcdCAgICAgICAgIFx0fSk7XG4gIFx0ICAgICAgICAgfSxcbiAgXHQgICAgICAgICBlcnJvcjogKGVycm9yKSA9PiB7XG4gIFx0ICAgICAgICAgXHR0aHJvdyBlcnJvcjtcbiAgXHQgICAgICAgICB9XG4gIFx0fSk7XG5cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gIFx0cmV0dXJuIChcbiAgXHQgIDxkaXY+XG4gIFx0ICAgIDxkaXY+IFxuICBcdCAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInN1Ym1pdC1mb3JtXCIgb25TdWJtaXQ9e3RoaXMuc3VibWl0SGFuZGxlci5iaW5kKHRoaXMpfT5cbiAgXHQgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiPlRpdGxlPC9sYWJlbD5cbiAgXHQgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0aXRsZVwiIHJlZj1cInRpdGxlXCIvPlxuICBcdCAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCI+WWVhcjwvbGFiZWw+XG4gIFx0ICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwieWVhclwiIHJlZj1cInllYXJcIi8+XG4gIFx0ICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWxcIj5HZW5yZTwvbGFiZWw+XG4gIFx0ICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZ2VucmVcIiByZWY9XCJnZW5yZVwiLz5cbiAgXHQgICAgICAgIDxidXR0b24+QWRkIE1vdmllPC9idXR0b24+XG4gIFx0ICAgICAgPC9mb3JtPlxuICBcdCAgICA8L2Rpdj5cbiAgICAgICAgXG5cbiAgICAgICAgPGRpdj4gXG4gICAgICAgICAgPE1vdmllTGlzdCBtb3ZpZXM9e3RoaXMuc3RhdGUubW92aWVzVG9SZW5kZXJ9Lz5cbiAgICAgICAgPC9kaXY+XG4gIFx0ICA8L2Rpdj5cbiAgXHQpXG4gIH1cblxufTtcblxuXG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKSk7XG4iXX0=
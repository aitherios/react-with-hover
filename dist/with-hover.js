'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _wrapDisplayName = require('recompose/wrapDisplayName');

var _wrapDisplayName2 = _interopRequireDefault(_wrapDisplayName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultTransform = function defaultTransform(hover) {
  return { hover: hover };
};

var defaultContainerStyle = {
  width: '100%',
  height: '100%',
  padding: 0,
  border: 0
};

var withHover = function withHover() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$transform = _ref.transform,
      transform = _ref$transform === undefined ? defaultTransform : _ref$transform,
      _ref$containerStyle = _ref.containerStyle,
      containerStyle = _ref$containerStyle === undefined ? defaultContainerStyle : _ref$containerStyle;

  return function (BaseComponent) {
    var _class, _temp;

    return _temp = _class = function (_Component) {
      _inherits(_class, _Component);

      function _class(props) {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

        _this.state = {
          hover: false
        };

        _this.onMouseEnter = function () {
          if (!_this.state.hover) {
            _this.setState({ hover: true });
          }
        };

        _this.onMouseLeave = function () {
          if (_this.state.hover) {
            _this.setState({ hover: false });
          }
        };

        _this.onMouseEnter = _this.onMouseEnter.bind(_this);
        _this.onMouseLeave = _this.onMouseLeave.bind(_this);
        return _this;
      }

      _createClass(_class, [{
        key: 'render',
        value: function render() {
          return _react2.default.createElement(
            'div',
            {
              style: containerStyle,
              onMouseEnter: this.onMouseEnter,
              onMouseLeave: this.onMouseLeave
            },
            _react2.default.createElement(BaseComponent, _extends({}, transform(this.state.hover), this.props))
          );
        }
      }]);

      return _class;
    }(_react.Component), _class.displayName = (0, _wrapDisplayName2.default)(BaseComponent, 'withHover'), _class.propTypes = {
      onMouseEnter: _propTypes2.default.func,
      onMouseLeave: _propTypes2.default.func
    }, _temp;
  };
};

exports.default = withHover;
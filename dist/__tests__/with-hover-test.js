'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _withHover = require('../with-hover');

var _withHover2 = _interopRequireDefault(_withHover);

var _enzyme = require('enzyme');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.unmock('../with-hover');

describe('WithHover()(Component)', function () {
  var subject = void 0;
  var Header = function Header(_ref) {
    var title = _ref.title;
    return _react2.default.createElement(
      'h1',
      null,
      title
    );
  };
  Header.propTypes = { title: _propTypes2.default.string };

  describe('when composing with default transform function', function () {
    var Decorated = (0, _withHover2.default)()(Header);

    beforeEach(function () {
      subject = (0, _enzyme.mount)(_react2.default.createElement(Decorated, { title: 'My title' }));
    });

    it('renders', function () {
      expect(subject).toBeTruthy();
    });
    it('renders inner component', function () {
      expect(subject.find(Header).length).toBe(1);
    });
    it('injects hover property', function () {
      expect(subject.find(Header).prop('hover')).toBe(false);
    });
    it('reacts to mouseenter then mouseleave', function () {
      subject.simulate('mouseenter');
      expect(subject.find(Header).prop('hover')).toBe(true);
      subject.simulate('mouseleave');
      expect(subject.find(Header).prop('hover')).toBe(false);
    });
    it('defines a displayName', function () {
      expect(Decorated.displayName).toBe('withHover(Header)');
    });
  });

  describe('when composing with a custom transform function', function () {
    var Decorated = (0, _withHover2.default)({ transform: function transform(flag) {
        return { mouseOver: flag };
      } })(Header);

    beforeEach(function () {
      subject = (0, _enzyme.mount)(_react2.default.createElement(Decorated, { title: 'My title' }));
    });

    it('injects mouseOver property', function () {
      expect(subject.find(Header).prop('mouseOver')).toBe(false);
    });
  });
});
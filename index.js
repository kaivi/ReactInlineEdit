'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function SelectInputText(element) {
    element.setSelectionRange(0, element.value.length);
}

var InlineEdit = (function (_React$Component) {
    _inherits(InlineEdit, _React$Component);

    function InlineEdit(props) {
        _classCallCheck(this, InlineEdit);

        _get(Object.getPrototypeOf(InlineEdit.prototype), 'constructor', this).call(this, props);
        this.startEditing = this.startEditing.bind(this);
        this.finishEditing = this.finishEditing.bind(this);
        this.textChanged = this.textChanged.bind(this);
        this.isInputValid = this.isInputValid.bind(this);
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
        this.commitEditing = this.commitEditing.bind(this);
        this.keyDown = this.keyDown.bind(this);
        this.state = {
            editing: false,
            text: this.props.text,
            minLength: this.props.minLength || 1,
            maxLength: this.props.maxLength || 256
        };
        this.isInputValid = this.props.validate || this.isInputValid.bind(this);
    }

    _createClass(InlineEdit, [{
        key: 'startEditing',
        value: function startEditing() {
            this.setState({ editing: true, text: this.props.text });
        }
    }, {
        key: 'finishEditing',
        value: function finishEditing() {
            if (this.isInputValid(this.state.text) && this.props.text != this.state.text) {
                this.commitEditing();
            } else if (this.props.text === this.state.text || !this.isInputValid(this.state.text)) {
                this.cancelEditing();
            }
        }
    }, {
        key: 'cancelEditing',
        value: function cancelEditing() {
            this.setState({ editing: false, text: this.props.text });
        }
    }, {
        key: 'commitEditing',
        value: function commitEditing() {
            this.setState({ editing: false, text: this.state.text });
            var newProp = {};
            newProp[this.props.paramName] = this.state.text;
            this.props.change(newProp);
        }
    }, {
        key: 'isInputValid',
        value: function isInputValid(text) {
            return text.length >= this.state.minLength && text.length <= this.state.maxLength;
        }
    }, {
        key: 'keyDown',
        value: function keyDown(event) {
            if (event.keyCode === 13) {
                this.finishEditing();
            } else if (event.keyCode === 27) {
                this.cancelEditing();
            }
        }
    }, {
        key: 'textChanged',
        value: function textChanged(event) {
            this.setState({
                text: event.target.value.trim()
            });
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            var inputElem = _reactDom2['default'].findDOMNode(this.refs.input);
            if (this.state.editing && !prevState.editing) {
                inputElem.focus();
                SelectInputText(inputElem);
            } else if (this.state.editing && prevProps.text != this.props.text) {
                this.finishEditing();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            if (!this.state.editing) {
                return _react2['default'].createElement(
                    'span',
                    { style: this.props.style, className: this.props.className, onClick: this.startEditing },
                    this.state.text || this.props.placeholder
                );
            } else {
                var _Element = this.props.element || 'input';
                return _react2['default'].createElement(_Element, { style: this.props.activeStyle, className: this.props.activeClassName, onKeyDown: this.keyDown, onBlur: this.finishEditing, ref: 'input', placeholder: this.props.placeholder, defaultValue: this.state.text, onChange: this.textChanged, onReturn: this.finishEditing });
            }
        }
    }]);

    return InlineEdit;
})(_react2['default'].Component);

InlineEdit.propTypes = {
    text: _react2['default'].PropTypes.string.isRequired,
    paramName: _react2['default'].PropTypes.string.isRequired,
    change: _react2['default'].PropTypes.func.isRequired,
    placeholder: _react2['default'].PropTypes.string,
    style: _react2['default'].PropTypes.object,
    activeStyle: _react2['default'].PropTypes.object,
    className: _react2['default'].PropTypes.string,
    activeClassName: _react2['default'].PropTypes.string,
    minLength: _react2['default'].PropTypes.number,
    maxLength: _react2['default'].PropTypes.number,
    validate: _react2['default'].PropTypes.func,
    element: _react2['default'].PropTypes.string
};

exports['default'] = InlineEdit;
module.exports = exports['default'];
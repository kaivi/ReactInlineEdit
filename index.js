'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function selectInputText(element) {
    element.setSelectionRange(0, element.value.length);
}

var InlineEdit = function (_React$Component) {
    _inherits(InlineEdit, _React$Component);

    function InlineEdit() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, InlineEdit);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InlineEdit.__proto__ || Object.getPrototypeOf(InlineEdit)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            editing: _this.props.editing,
            text: _this.props.text,
            minLength: _this.props.minLength,
            maxLength: _this.props.maxLength
        }, _this.startEditing = function (e) {
            if (_this.props.stopPropagation) {
                e.stopPropagation();
            }
            _this.setState({ editing: true, text: _this.props.text });
        }, _this.finishEditing = function () {
            if (_this.isInputValid(_this.state.text) && _this.props.text != _this.state.text) {
                _this.commitEditing();
            } else if (_this.props.text === _this.state.text || !_this.isInputValid(_this.state.text)) {
                _this.cancelEditing();
            }
        }, _this.cancelEditing = function () {
            _this.setState({ editing: false, text: _this.props.text });
        }, _this.commitEditing = function () {
            _this.setState({ editing: false, text: _this.state.text });
            var newProp = {};
            newProp[_this.props.paramName] = _this.state.text;
            _this.props.change(newProp);
        }, _this.clickWhenEditing = function (e) {
            if (_this.props.stopPropagation) {
                e.stopPropagation();
            }
        }, _this.isInputValid = function (text) {
            return text.length >= _this.state.minLength && text.length <= _this.state.maxLength;
        }, _this.keyDown = function (event) {
            if (event.keyCode === 13) {
                _this.finishEditing();
            } else if (event.keyCode === 27) {
                _this.cancelEditing();
            }
        }, _this.textChanged = function (event) {
            _this.setState({
                text: event.target.value.trim()
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(InlineEdit, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.isInputValid = this.props.validate || this.isInputValid;
            // Warn about deprecated elements
            if (this.props.element) {
                console.warn('`element` prop is deprecated: instead pass editingElement or staticElement to InlineEdit component');
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var isTextChanged = nextProps.text !== this.props.text;
            var isEditingChanged = nextProps.editing !== this.props.editing;
            var nextState = {};
            if (isTextChanged) {
                nextState.text = nextProps.text;
            }
            if (isEditingChanged) {
                nextState.editing = nextProps.editing;
            }
            if (isTextChanged || isEditingChanged) {
                this.setState(nextState);
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            var inputElem = _reactDom2.default.findDOMNode(this.refs.input);
            if (this.state.editing && !prevState.editing) {
                inputElem.focus();
                selectInputText(inputElem);
            } else if (this.state.editing && prevProps.text != this.props.text) {
                this.finishEditing();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.props.isDisabled) {
                var Element = this.props.element || this.props.staticElement;
                return _react2.default.createElement(
                    Element,
                    {
                        className: this.props.className,
                        style: this.props.style },
                    this.state.text || this.props.placeholder
                );
            } else if (!this.state.editing) {
                var _Element = this.props.element || this.props.staticElement;
                return _react2.default.createElement(
                    _Element,
                    {
                        className: this.props.className,
                        onClick: this.startEditing,
                        tabIndex: this.props.tabIndex,
                        style: this.props.style },
                    this.state.text || this.props.placeholder
                );
            } else {
                var _Element2 = this.props.element || this.props.editingElement;
                return _react2.default.createElement(_Element2, {
                    onClick: this.clickWhenEditing,
                    onKeyDown: this.keyDown,
                    onBlur: this.finishEditing,
                    className: this.props.activeClassName,
                    placeholder: this.props.placeholder,
                    defaultValue: this.state.text,
                    onChange: this.textChanged,
                    style: this.props.style,
                    ref: 'input' });
            }
        }
    }]);

    return InlineEdit;
}(_react2.default.Component);

InlineEdit.propTypes = {
    text: _propTypes2.default.string.isRequired,
    paramName: _propTypes2.default.string.isRequired,
    change: _propTypes2.default.func.isRequired,
    placeholder: _propTypes2.default.string,
    className: _propTypes2.default.string,
    activeClassName: _propTypes2.default.string,
    minLength: _propTypes2.default.number,
    maxLength: _propTypes2.default.number,
    validate: _propTypes2.default.func,
    style: _propTypes2.default.object,
    editingElement: _propTypes2.default.string,
    staticElement: _propTypes2.default.string,
    tabIndex: _propTypes2.default.number,
    isDisabled: _propTypes2.default.bool,
    editing: _propTypes2.default.bool
};
InlineEdit.defaultProps = {
    minLength: 1,
    maxLength: 256,
    editingElement: 'input',
    staticElement: 'span',
    tabIndex: 0,
    isDisabled: false,
    editing: false
};
exports.default = InlineEdit;

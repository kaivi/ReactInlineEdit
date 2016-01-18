'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function SelectInputText(element) {
    element.setSelectionRange(0, element.value.length);
}

var InlineEdit = function (_React$Component) {
    _inherits(InlineEdit, _React$Component);

    function InlineEdit(props) {
        _classCallCheck(this, InlineEdit);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(InlineEdit).call(this, props));

        _this.startEditing = _this.startEditing.bind(_this);
        _this.finishEditing = _this.finishEditing.bind(_this);
        _this.textChanged = _this.textChanged.bind(_this);
        _this.isInputValid = _this.isInputValid.bind(_this);
        _this.componentDidUpdate = _this.componentDidUpdate.bind(_this);
        _this.commitEditing = _this.commitEditing.bind(_this);
        _this.keyDown = _this.keyDown.bind(_this);
        _this.state = {
            editing: false,
            text: _this.props.text,
            minLength: _this.props.minLength || 1,
            maxLength: _this.props.maxLength || 256
        };
        _this.isInputValid = _this.props.validate || _this.isInputValid.bind(_this);

        // Warn about deprecated elements
        if (_this.props.element) console.warn('`element` prop is deprecated: instead pass editingElement or staticElement to InlineEdit component');
        return _this;
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
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.text !== this.state.text) {
                this.setState({ text: nextProps.text });
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            var inputElem = _reactDom2.default.findDOMNode(this.refs.input);
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
                var Element = this.props.element || this.props.staticElement || 'span';
                return _react2.default.createElement(
                    Element,
                    {
                        className: this.props.className,
                        onClick: this.startEditing,
                        tabIndex: this.props.tabIndex || 0,
                        style: this.props.style },
                    this.state.text || this.props.placeholder
                );
            } else {
                var Element = this.props.element || this.props.editingElement || 'input';
                return _react2.default.createElement(Element, {
                    onKeyDown: this.keyDown,
                    onBlur: this.finishEditing,
                    className: this.props.activeClassName,
                    placeholder: this.props.placeholder,
                    defaultValue: this.state.text,
                    onReturn: this.finishEditing,
                    onChange: this.textChanged,
                    style: this.props.style,
                    ref: 'input' });
            }
        }
    }]);

    return InlineEdit;
}(_react2.default.Component);

InlineEdit.propTypes = {
    text: _react2.default.PropTypes.string.isRequired,
    paramName: _react2.default.PropTypes.string.isRequired,
    change: _react2.default.PropTypes.func.isRequired,
    placeholder: _react2.default.PropTypes.string,
    activeClassName: _react2.default.PropTypes.string,
    minLength: _react2.default.PropTypes.number,
    maxLength: _react2.default.PropTypes.number,
    validate: _react2.default.PropTypes.func,
    style: _react2.default.PropTypes.object,
    editingElement: _react2.default.PropTypes.string,
    staticElement: _react2.default.PropTypes.string,
    tabIndex: _react2.default.PropTypes.number
};
exports.default = InlineEdit;

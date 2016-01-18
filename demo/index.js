/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _index = __webpack_require__(1);

	var _index2 = _interopRequireDefault(_index);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MyParentComponent = function (_React$Component) {
	  _inherits(MyParentComponent, _React$Component);

	  function MyParentComponent(props) {
	    _classCallCheck(this, MyParentComponent);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MyParentComponent).call(this, props));

	    _this.dataChanged = _this.dataChanged.bind(_this);
	    _this.state = {
	      message: 'ReactInline demo'
	    };
	    return _this;
	  }

	  _createClass(MyParentComponent, [{
	    key: 'dataChanged',
	    value: function dataChanged(data) {
	      // data = { description: "New validated text comes here" }
	      // Update your model from here
	      console.log(data);
	      this.setState(_extends({}, data));
	    }
	  }, {
	    key: 'customValidateText',
	    value: function customValidateText(text) {
	      return text.length > 0 && text.length < 64;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h2',
	          null,
	          this.state.message
	        ),
	        _react2.default.createElement(
	          'span',
	          null,
	          'Edit me: '
	        ),
	        _react2.default.createElement(_index2.default, {
	          validate: this.customValidateText,
	          activeClassName: 'editing',
	          text: this.state.message,
	          paramName: 'message',
	          change: this.dataChanged,
	          style: {
	            backgroundColor: 'yellow',
	            minWidth: 150,
	            display: 'inline-block',
	            margin: 0,
	            padding: 0,
	            fontSize: 15,
	            outline: 0,
	            border: 0
	          }
	        })
	      );
	    }
	  }]);

	  return MyParentComponent;
	}(_react2.default.Component);

	_reactDom2.default.render(_react2.default.createElement(MyParentComponent, null), document.getElementById('app'));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

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
	                return _react2.default.createElement(Element, {
	                    className: this.props.className,
	                    onClick: this.startEditing,
	                    tabIndex: this.props.tabIndex || 0,
	                    style: this.props.style }, this.state.text || this.props.placeholder);
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

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ }
/******/ ]);
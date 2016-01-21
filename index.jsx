import React from 'react';
import ReactDOM from 'react-dom';

function selectInputText(element) {
    element.setSelectionRange(0, element.value.length);
}

export default class InlineEdit extends React.Component {
    static propTypes = {
        text: React.PropTypes.string.isRequired,
        paramName: React.PropTypes.string.isRequired,
        change: React.PropTypes.func.isRequired,
        placeholder: React.PropTypes.string,
        className: React.PropTypes.string,
        activeClassName: React.PropTypes.string,
        minLength: React.PropTypes.number,
        maxLength: React.PropTypes.number,
        validate: React.PropTypes.func,
        style: React.PropTypes.object,
        editingElement: React.PropTypes.string,
        staticElement: React.PropTypes.string,
        tabIndex: React.PropTypes.number,
    };

    static defaultProps = {
        minLength: 1,
        maxLength: 256,
        editingElement: 'input',
        staticElement: 'span',
        tabIndex: 0,
    };

    state = {
        editing: false,
        text: this.props.text,
        minLength: this.props.minLength,
        maxLength: this.props.maxLength,
    };

    componentWillMount() {
        this.isInputValid = this.props.validate || this.isInputValid;
        // Warn about deprecated elements
        if (this.props.element) {
            console.warn('`element` prop is deprecated: instead pass editingElement or staticElement to InlineEdit component');
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.text !== this.props.text) {
            this.setState({ text: nextProps.text });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        let inputElem = ReactDOM.findDOMNode(this.refs.input);
        if (this.state.editing && !prevState.editing) {
            inputElem.focus();
            selectInputText(inputElem);
        } else if (this.state.editing && prevProps.text != this.props.text) {
            this.finishEditing();
        }
    }

    startEditing = () => {
        this.setState({editing: true, text: this.props.text});
    };

    finishEditing = () => {
        if (this.isInputValid(this.state.text) && this.props.text != this.state.text){
            this.commitEditing();
        } else if (this.props.text === this.state.text || !this.isInputValid(this.state.text)) {
            this.cancelEditing();
        }
    };

    cancelEditing = () => {
        this.setState({editing: false, text: this.props.text});
    };

    commitEditing = () => {
        this.setState({editing: false, text: this.state.text});
        let newProp = {};
        newProp[this.props.paramName] = this.state.text;
        this.props.change(newProp);
    };

    isInputValid = (text) => {
        return (text.length >= this.state.minLength && text.length <= this.state.maxLength);
    };

    keyDown = (event) => {
        if (event.keyCode === 13) {
            this.finishEditing();
        } else if (event.keyCode === 27) {
            this.cancelEditing();
        }
    };

    textChanged = (event) => {
        this.setState({
            text: event.target.value.trim()
        });
    };

    render() {
        if (!this.state.editing) {
            const Element = this.props.element || this.props.staticElement;
            return <Element
                className={this.props.className}
                onClick={this.startEditing}
                tabIndex={this.props.tabIndex}
                style={this.props.style} >
                {this.state.text || this.props.placeholder}
            </Element>;
        } else {
            const Element = this.props.element || this.props.editingElement;
            return <Element
                onKeyDown={this.keyDown}
                onBlur={this.finishEditing}
                className={this.props.activeClassName}
                placeholder={this.props.placeholder}
                defaultValue={this.state.text}
                onReturn={this.finishEditing}
                onChange={this.textChanged}
                style={this.props.style}
                ref="input" />;
        }
    }
}

import React from 'react';

function SelectInputText(element) {
    element.setSelectionRange(0, element.value.length);
}

class InlineEdit extends React.Component {
    constructor(props) {
        super(props);
        this.startEditing = this.startEditing.bind(this);
        this.finishEditing = this.finishEditing.bind(this);
        this.textChanged = this.textChanged.bind(this);
        this.isInputValid = this.isInputValid.bind(this);
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
        this.commitEditing = this.commitEditing.bind(this);
        this.keyDown = this.keyDown.bind(this);
        this.state = {
            editing: this.props.editing || false,
            text: this.props.text,
            minLength: this.props.minLength || 1,
            maxLength: this.props.maxLength || 256
        };
        this.isInputValid = this.props.validate || this.isInputValid.bind(this);
    }

    startEditing() {
        this.setState({editing: true, text: this.props.text});
    }

    finishEditing() {
        if(this.isInputValid(this.state.text) && this.props.text != this.state.text){
            this.commitEditing();
        } else if (this.props.text === this.state.text || !this.isInputValid(this.state.text)) {
            this.cancelEditing();
        }
    }

    cancelEditing() {
        this.setState({editing: false, text: this.props.text});
    }

    commitEditing() {
        this.setState({editing: false, text: this.state.text});
        let newProp = {};
        newProp[this.props.paramName] = this.state.text;
        this.props.change(newProp);
    }

    isInputValid(text) {
        return (text.length >= this.state.minLength && text.length <= this.state.maxLength);
    }

    keyDown(event) {
        if(event.keyCode === 13) {
            this.finishEditing();
        } else if (event.keyCode === 27) {
            this.cancelEditing();
        }
    }

    textChanged(event) {
        this.setState({
            text: event.target.value.trim()
        })
    }

    componentDidUpdate(prevProps, prevState) {
        var inputElem = React.findDOMNode(this.refs.input);
        if (this.state.editing && !prevState.editing) {
            inputElem.focus();
            SelectInputText(inputElem);
        } else if (this.state.editing && prevProps.text != this.props.text) {
            this.finishEditing();
        }
    }

    render() {
        if(!this.state.editing) {
            return <span className={this.props.className} onClick={this.startEditing}>{this.props.text}</span>
        } else {
            return <input className={this.props.activeClassName} onKeyDown={this.keyDown} onBlur={this.finishEditing} ref="input" defaultValue={this.state.text} onChange={this.textChanged} onReturn={this.finishEditing} />
        }
    }
}

InlineEdit.propTypes = {
    text: React.PropTypes.string.isRequired,
    paramName: React.PropTypes.string.isRequired,
    change: React.PropTypes.func.isRequired,
    activeClassName: React.PropTypes.string,
    minLength: React.PropTypes.number,
    maxLength: React.PropTypes.number,
    validate: React.PropTypes.func,
    editing: React.PropTypes.bool
};

export default InlineEdit;

# Inline Edit Component for React
Simple React component for in-place text editing. It turns into an `<input />` when disturbed, and tries to validate and save input on <kbd>Enter</kbd> or `blur`. <kbd>Esc</kbd> works as well for cancelling. Use it with [Babel](https://babeljs.io/) because of ECMAScript 6 and JSX Harmony.

![Example animation gif](http://i.imgur.com/8vig5m1.gif)

### Installation

`npm install react-edit-inline --save-dev`

### Required props
- `text`:`string` initial text
- `paramName`:`string` name of the parameter to be returned to `change` function
- `change`:`function` function to call when new text is changed and validated, it will receive `{paramName: value}`

### Optional props
- `activeClassName`:`string` class to apply when in edit mode
- `validate`:`function` boolean function for custom validation, using this overrides the two props below
- `minLength`:`number` minimum text length, **default** `1`
- `maxLength`:`number` maximum text length, **default** `256`

### Usage example
```javascript
import React from 'react';
import InlineEdit from 'react-edit-inline';

class MyParentComponent extends React.Component {
    constructor(props) {
        super(props);
        this.dataChanged = this.dataChanged.bind(this);
    }

    dataChanged(data) {
        // data = { description: "New validated text comes here" }
        // Update your model from here
    }

    customValidateText(text) {
        return (text.length > 8 && text.length < 64);
    }

    render() {
        return (<div>
            <h2>Edit this string</h2>
            <InlineEdit
              validate={this.customValidateText}
              activeClassName="editing"
              text={this.props.myObject.description}
              paramName="description"
              change={this.dataChanged}
            />
        </div>)
    }
}

export default MyParentComponent;

```

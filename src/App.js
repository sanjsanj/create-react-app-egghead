import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            text: `this is the state text`
        }
    }

    update(event) {
        this.setState({text: event.target.value})
    }

    render() {
        let text = this.props.text
        let stateText = this.state.text
        let num = this.props.num
        return(
            <div>
                <input onChange={this.update.bind(this)} />
                <p>Default or prop text is: {text}</p>
                <p>Required num is: {num}</p>
                <p>stateText is: {stateText}</p>
            </div>
        )
    }
}

App.propTypes = {
    text: React.PropTypes.string,
    num: React.PropTypes.number.isRequired,
}

App.defaultProps = {
    text: `this is the default text`
}

export default App

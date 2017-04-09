/* global document */

import React, { Component } from 'react';

const HOC = InnerComponent => class extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  update() {
    this.setState({ count: this.state.count + 1 });
  }

  componentWillMount() {
    console.log('Component will mount');
  }

  render() {
    return (
      <InnerComponent
        {...this.props}
        {...this.state}
        update={this.update.bind(this)}
      />
    );
  }
};

class App extends Component {
  render() {
    return (
      <div>
        <Button>Button</Button>
        <hr />
        <LabelHOC>Label</LabelHOC>
      </div>
    );
  }
}

const Button = HOC(props =>
  <button onClick={props.update}>{props.children} - {props.count}</button>,
);

class Label extends Component {
  render() {
    console.log('Label will mount');
    return (
      <label onMouseMove={this.props.update}>{this.props.children} - {this.props.count}</label>
    );
  }
}

const LabelHOC = HOC(Label);

export default App;

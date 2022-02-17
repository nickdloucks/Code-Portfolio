/**
  * STILL DEBUGGING*
  * controlled input React component
  * input: string in input box
  * output: display input string in an <h2> element
  */

import React, { ReactComponentElement } from "react";
import { ChangeEvent, DOMElement, JSXElementConstructor } from "react";

class MyForm extends React.Component {
  constructor(props: object) {
    super(props);
    this.state = {
      input: '', // input will show the user input string as  it changes
      submit: '' // submit will hold the current value when the user submits
    };
    this.handleChange = this.handleChange.bind(this); // bind event handlers to the instance of this component
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event: ChangeEvent): void {
    this.setState({
      input: event.target.value // update the input string as the user types
    });
  }
  handleSubmit(event: SubmitEvent): void {

    event.preventDefault(); // keep form sumbission from re-loading page
    this.setState({
      submit: this.state.input // store the new input value in State
    });

  }
  render(): ReactComponentElement { {/* JSX below */}
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <input value={this.state.input} onChange={this.handleChange}></input> {/* attach event handler */}

          <button type='submit'>Submit!</button>
        </form>
        
        <h1>{this.state.submit}</h1> {/* display output */}
        
      </div>
    );
  }
}

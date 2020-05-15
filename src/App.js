import React, { Component } from "react";
import "./App.css";
import { Button } from "reactstrap";
import Edit from "./components/Edit";

class App extends Component {
  constructor() {
    super();
    this.state = {
      editmode: false,
    };
  }

  // toggling our modal
  toggle = () => {
    this.setState({ editmode: !this.state.editmode });
  };

  render() {
    const { editmode } = this.state;
    const text = editmode ? "Editing" : "Click to Edit";
    return (
      <div className="App">
        <Button color="danger" onClick={this.toggle}>
          {text}
        </Button>
        <Edit modal={editmode} toggle={this.toggle} />
      </div>
    );
  }
}

export default App;

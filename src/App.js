import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  constructor() {
    super();
      this.state = {
          fontColor: 'black',
          fontSize: 12,
          fontFamily: 'monospace',
          allowEdit: 'true'
    };

    this.updateColor      = this.updateColor.bind(this);
    this.updateSize       = this.updateSize.bind(this);
    this.fontSize         = this.fontSize.bind(this);
    this.fontFamily       = this.fontFamily.bind(this);
    this.updateEditStatus = this.updateEditStatus.bind(this);

  }

  updateColor(val) {
    this.setState({fontColor: val})
  }

  updateSize(val) {
    this.setState({fontSize: val})
  }

  updateFamily(val) {
    this.setState({fontFamily: val})
  }

  updateEditStatus(val) {
    this.setState({allowEdit: val})
  }

  render() {
    return (
      <div>
        <div className="headerBar">
          { /* Render EditToggle */ }
          { /* Render ColorChanger */ }
          { /* Render SizeChanger */ }
          { /* Render FamilyChanger */ }
        </div>
        <div className="textArea">
          { /* Render TextContainer */ }
        </div>
      </div>
    )
  }
}

export default App;


// Step 4
// Summary
// In this step, we will render our imported components in App.js.

// Render the EditToggle component where it says { /* Render EditToggle */ }:
// Add a prop called update that is equal to the updateEditStatus method.
// Render the ColorChanger component where it says { /* Render ColorChange */ }:
// Add a prop called update that is equal to the updateColor method.
// Add a prop called allowEdit that is equal to the value of allowEdit on state.
// Render the SizeChanger component where it says { /* Render SizeChanger */ }:
// Add a prop called update that is equal to the updateSize method.
// Add a prop called allowEdit that is equal to the value of allowEdit on state.
// Render the FamilyChanger component where it says { /* Render FamilyChanger */ }:
// Add a prop called update that is equal to the updateFamily method.
// Add a prop called allowEdit that is equal to the value of allowEdit on state.
// Render the TextContainer component where it says { /* Render TextContainer */ }:
// Add a prop called fontColor that equals fontColor on state.
// Add a prop called fontSize that equals fontSize on state.
// Add a prop called fontFamily that equals fontFamily on state.

// Step 3
// * Bind this to the updateColor, updateSize, updateFamily, and updateEditStatus methods at the bottom of the constructor method.

// Step 2
// * Create an updateColor method that takes a parameter called val where it says // updateColor:
// * Use setState to update fontColor to val.
// * Create an updateSize method that takes a parameter called val where it says // updateSize:
// * Use setState to update fontSize to val.
// * Create an updateFamily method that takes a parameter called val where it says // updateFamily:
// * Use setState to update fontFamily to val.
// * Create an updateEditStatus method that takes a parameter called val where it says // updateEditStatus:
// * Use setState to update allowEdit to val.

// Step 1

// * Create a constructor method where it says // constructor:
// * This method should call super().
// * This method should create an initial state object with the following properties:
// * fontColor: 'black',
// * fontSize: 12,
// * fontFamily: 'monospace',
// * allowEdit: 'true'

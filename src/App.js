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

    this.updateColor = this.updateColor.bind(this);
    this.updateSize = this.updateSize.bind(this);
    this.updateFamily = this.updateFamily.bind(this);
    this.updateEditStatus = this.updateEditStatus.bind(this);
  }

  updateColor(val) {
    this.setState({ fontColor: val });
  }

  updateSize(val) {
    this.setState({ fontSize: val });
  }

  updateFamily(val) {
    this.setState({ fontFamily: val });
  }

  updateEditStatus(val) {
    this.setState({ allowEdit: val });
  }

  render() {
    return (
      <div>
        <div className="headerBar">
          <EditToggle update={this.updateEditStatus} allowEdit={this.state.allowEdit} />
          <ColorChanger update={this.updateColor} allowEdit={this.state.allowEdit} />
          <SizeChanger update={this.updateSize} allowEdit={this.state.allowEdit} />
          <FamilyChanger update={this.updateFamily} allowEdit={this.state.allowEdit} />
        </div>
        <div className="textArea">
          <TextContainer
            fontColor={this.state.fontColor}
            fontSize={this.state.fontSize}
            fontFamily={this.state.fontFamily} />
        </div>
      </div>
    )
  }
}

export default App;

// A note on step 6:  I feel like  I get HTML, I get CSS and I get JavaScript.  But, I fail to know when I am doing CSS and when I am doing some React like.  I screwed around with the style for awhile but could not figure out how to add props.fontColor.  Once I looked at the solution I felt like a dolt.  Of course is just like a CSS object.  But I sill don't underStand props very well.  For one I would not have use this.props.  Because I was told that this refers to the Componenet I am working in.  But, that is not where the property is coming from.

// Step 6

// Now we have everything set up to be able to edit the look of our text. Our last step is to connect our styling in the TextContainer components to the props being passed to it so they will reflect the changes we make.

// Instructions
// Open TextContainer.js from src/components/.
// * Bind the updateText method to this in the constructor method.
// * In the textarea tag there is a style prop, this is where we need to add the styling that's being passed to this component through props.
// * Uncomment the style prop.
// * Set fontFamily, fontSize and color equal to the appropriate props values.

// Step 5
// * Open EditToggle, ColorChanger.js, FamilyChanger.js, and SizeChanger.js from src/components/.
// * Add props as a parameter to the component's function.
// * Locate the select tag, in all four files, and add an onChange prop:
// * The onChange should use an arrow function to capture the event.
// * Inside the arrow function call the update prop with the value of the target from the event.
// * Parse Int the value of the target when in SizeChanger.js.
// * Locate the select tag, in ColorChanger, FamilyChanger, and SizeChanger, and add a disabled prop:
// * The select element should be disabled if allowEdit from props is equal to "false".

// Step 4
// * Render the EditToggle component where it says { /* Render EditToggle */ }:
// * Add a prop called update that is equal to the updateEditStatus method.
// * Render the ColorChanger component where it says { /* Render ColorChange */ }:
// * Add a prop called update that is equal to the updateColor method.
// * Add a prop called allowEdit that is equal to the value of allowEdit on state.
// * Render the SizeChanger component where it says { /* Render SizeChanger */ }:
// * Add a prop called update that is equal to the updateSize method.
// * Add a prop called allowEdit that is equal to the value of allowEdit on state.
// * Render the FamilyChanger component where it says { /* Render FamilyChanger */ }:
// * Add a prop called update that is equal to the updateFamily method.
// * Add a prop called allowEdit that is equal to the value of allowEdit on state.
// * Render the TextContainer component where it says { /* Render TextContainer */ }:
// * Add a prop called fontColor that equals fontColor on state.
// * Add a prop called fontSize that equals fontSize on state.
// *Add a prop called fontFamily that equals fontFamily on state.

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

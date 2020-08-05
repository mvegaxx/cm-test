import React from "react";
import ReactDOM from "react-dom";

const Tooltip = (text) => {
  React.useEffect(() => {
    ReactDOM.render(text.text, document.getElementById("tooltip"));
  }, [text]);

  // Write your code here
  return null;
};

export default class TooltipExample extends React.Component {
  state = {
    text: "",
  };

  onDocumentClick = (event) => {
    if (event.target.tagName === "BUTTON") {
      this.setState({ text: event.target.textContent });
    }
  };

  componentDidMount() {
    document.addEventListener("click", this.onDocumentClick);
  }
  componentWillUnmount() {
    document.removeEventListener("click", this.onDocumentClick);
  }

  render() {
    return (
      <div>
        <Tooltip text={this.state.text} />

        <button id="button1">First button</button>
        <button id="button2">Second button</button>
        <h1>Aquí va el mensaje:</h1>
        <div id="tooltip"></div>
      </div>
    );
  }
}

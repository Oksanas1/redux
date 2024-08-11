import React, { Component } from "react";
import { ThemeContext } from './them-context';

class ThemedButton extends Component {
  render() {
    return (
      <button
        className="btn"
        {...this.props}
        style={{
          backgroundColor: this.context.background,
          color: this.context.fontColor,
        }}
      />
    );
  }
}

ThemedButton.contextType = ThemeContext;

export default ThemedButton;
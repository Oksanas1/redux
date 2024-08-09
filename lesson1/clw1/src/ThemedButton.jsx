import React, { Component, useContext } from "react";
import { ThemeContext, themes } from './them-context';

class ThemedButton extends Component {
  render() {
    return (
      <button
        className="btn"
        {...this.props}
        style={{
          background: this.context.background,
          color: this.context.fontColor,
        }}
      >{this.props.children}</button>
    );
  }
}

ThemedButton.contextType = ThemeContext;

export default ThemedButton;
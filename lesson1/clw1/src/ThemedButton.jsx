import React, { Component, useContext } from "react";
import { ThemeContext, themes } from './them-context';

class ThemedButton extends Component {
  render() {
    const context = this.context;
    return (
      <button
        className="btn"
        {...this.props}
        style={{
          background: context.background,
          color: context.color,
        }}
      >{this.props.children}</button>
    );
  }
}

ThemedButton.contextType = ThemeContext;

export default ThemedButton;
import React from "react";

export const themes = {
  dark: {
    color: '#fff',
    background: '#222',
  },
  light: {
    color: '#000',
    background: '#eee',
  },
};

export const ThemeContext = React.createContext(themes.dark);

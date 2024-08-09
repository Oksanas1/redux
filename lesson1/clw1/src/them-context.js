import React from "react";

export const themes = {
  dark: { color: '#ffffff', background: '#222222' },
  light: { color: '#000000', background: '#eeeeee' },
};

export const ThemeContext = React.createContext(themes.dark);

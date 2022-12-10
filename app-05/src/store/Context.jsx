import React, { createContext, useState } from 'react';

export const ColorContext = createContext();

export const ThemeContext = ({ children }) => {
  const [color, setColor] = useState('#f44336');

  return <ColorContext.Provider value={[color, setColor]}>{children}</ColorContext.Provider>;
};

ThemeContext.context = ColorContext;

export default ThemeContext;

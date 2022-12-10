import React, { createContext, useState } from 'react';

export const themeType = createContext('main');

export const ColorContext = ({ children }) => {
  const [colorSchema, setColorSchema] = useState('');

  return <ColorContext.Provider value={[colorSchema, setColorSchema]}>{children}</ColorContext.Provider>;
};

ColorContext.context = themeType;

export default ColorContext;

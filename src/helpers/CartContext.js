import React, { createContext, useState } from 'react';

/*============================================================
  CartContext: Context for storing and providing shopping
  cart products.
==============================================================*/

export const CartContext = createContext();

/*============================================================
      CartProvider: Provider required for context usage.
==============================================================*/

export const CartProvider = ({ children }) => {
  const [itemsCart, setItemsCart] = useState([]);

  const contextValue = {
    itemsCart,
    setItemsCart
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};
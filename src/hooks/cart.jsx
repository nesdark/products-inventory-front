import { createContext, useContext, useState, useEffect } from 'react';

// import { api } from '../services/api';

export const CartContext = createContext({});

function CartProvider({ children }) {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem('@jbc-inventory:cart')) || []
  );

  async function handleAddProductToCart(productData) {
    const addingSameProduct = await cart.some(
      (cartProduct) => cartProduct.id === productData.id
    );

    if (addingSameProduct) {
      alert('El producto ya fue adicionado!');
      return;
    }
    const totalCostPrice =
      Number(productData.costPrice) * Number(productData.quantity);
    const totalSalePrice =
      Number(productData.salePrice) * Number(productData.quantity);

    const productToCart = {
      id: productData.id,
      title: productData.title,
      costPrice: productData.costPrice.toFixed(2),
      salePrice: productData.salePrice.toFixed(2),
      quantity: productData.quantity,
      totalCostPrice: totalCostPrice.toFixed(2),
      totalSalePrice: totalSalePrice.toFixed(2),
    };

    setCart((prevState) => [...prevState, productToCart]);
    return;
  }

  function handleUpdateProduct({ salePrice, quantity }, index) {
    cart[index].salePrice = salePrice || cart[index].salePrice;
    cart[index].quantity = quantity || cart[index].quantity;
    cart[index].totalSalePrice =
      Number(cart[index].salePrice) * Number(cart[index].quantity);
  }

  // handleUpdateProduct({ salePrice: 20 }, 0);

  useEffect(() => {
    localStorage.setItem('@jbc-inventory:cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, handleAddProductToCart }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);

  return context;
}

export { CartProvider, useCart };

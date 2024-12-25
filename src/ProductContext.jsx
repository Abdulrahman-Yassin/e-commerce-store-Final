/*eslint-disable */

/*eslint-disable */


import Hoodie  from "./images/products/1.jpg"
import Hoodie2  from "./images//products/2.webp"
// import CurologyProductSet  from "./images/products/4.jpg"

import React, { createContext, useState, useEffect } from 'react';

// إنشاء السياق
export const ProductContext = createContext();




export const ProductProvider = ({ children }) => {


    const getInitialProducts = () => {
      const savedProducts = localStorage.getItem('products');
      if (savedProducts) {
        // إذا كانت المنتجات موجودة بالفعل في localStorage
        return JSON.parse(savedProducts);
      } else {
        // إذا لم تكن المنتجات موجودة، إضافة المنتجات الافتراضية إلى localStorage
        const initialProducts = [
          {
            name: "Hoodie White",
            price: "L.E  400",
            image1: Hoodie,
            image2: Hoodie,
            image3: Hoodie,
            image4: Hoodie,
            id: 1,
            color: ['white'],
            sizes: [ 'L', 'XL', 'XXL'],
            quantity:100
          },
          {
            name: "Hoodie Black",
            price: "L.E  400",
            image1: Hoodie2,
            image2: Hoodie2,
            image3: Hoodie2,
            image4: Hoodie2,
            id: 1,
            color: ['black'],
            sizes: [ 'L', 'XL', 'XXL'],
            quantity:100
          },
        ]
        localStorage.setItem('products', JSON.stringify(initialProducts));
        
        // إرجاع المنتجات الافتراضية للاستخدام في الحالة
        return initialProducts;
      }
    };


  
  // استخدام الحالة لتخزين المنتجات
  const [products, setProducts] = useState(getInitialProducts);

  // حفظ البيانات في التخزين المحلي عند أي تحديث للمنتجات
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

    // دالة لتحديث المنتج
  const updateProduct = (updatedProduct) => {
    setProducts((prevProducts) => 
      prevProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };

  // دالة لإضافة منتج جديد
  const addProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  // دالة لحذف منتج
  const deleteProduct = (productId) => {
    setProducts((prevProducts) => prevProducts.filter(product => product.id !== productId));
  };

  const getProductsByIdRange = (minId, maxId) =>
    products.filter(product => product.id > minId && product.id < maxId)

  return (
    <ProductContext.Provider value={{ products, updateProduct, addProduct, deleteProduct, getProductsByIdRange }}>
      {children}
    </ProductContext.Provider>
  );
};



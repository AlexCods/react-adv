
import React, { useState } from 'react'
import { products } from '../data/products';
import { ProductInCart, Product } from '../interfaces/interfaces';

const productsList: Product[] = products;

export const useShoppingCart = () => {

    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});


    const onProductCountChange = ({ count, product }: { count: number; product: Product }) => {
        // console.log('onProductCountChange', count, product);

        setShoppingCart((oldShoppingCart) => {

            if ( count === 0 ) {
              const { [product.id]: toDelete, ...rest } = oldShoppingCart;
              return rest;
            }

            return {
              ...oldShoppingCart,
              [ product.id ]: { ...product, count } 
            }

        });

    }

    return {
        onProductCountChange,
        shoppingCart,
        products: productsList
    }

}

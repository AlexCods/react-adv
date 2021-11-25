import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components";
import '../styles/custom-styles.css';
import { Product, ProductInCart } from '../interfaces/interfaces';
import { useState } from 'react';
import { useShoppingCart } from "../hooks/useShoppingCart";


export const ShoppingPage = () => {

  const { onProductCountChange, shoppingCart, products } = useShoppingCart();

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {
          products.map(product => (
            <ProductCard
              key={ product.id }
              product={ product }
              className="bg-dark"
              onChange={ onProductCountChange }
              value={ shoppingCart[product.id]?.count || 0 }
            >
              <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
              <ProductTitle title={""} className="text-white text-bold" />
              <ProductButtons className="custom-buttons text-white" />
            </ProductCard>
          ))
        }
      </div>

        <div className="shopping-cart">

          {

            Object.entries( shoppingCart ).map( ([ key, product ]) => (
              <ProductCard
                key={ key }
                product={ product }
                className="bg-dark"
                style={{ width: '100px' }}
                value={ product.count }
                onChange={ onProductCountChange }
              >
                <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                <ProductButtons className="custom-buttons text-white" style={{ display: 'flex', justifyContent: 'center' }} />
              </ProductCard>
            ))

          }

            

        </div>

        <div>
          <code>
            { JSON.stringify( shoppingCart, null, 5 ) }
          </code>
        </div>

    </div>
  );
};

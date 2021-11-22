import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components";
import '../styles/custom-styles.css';

const product = {
  id: "1",
  title: "Coffee Mug - Card",
  img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
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
        <ProductCard product={product} className="bg-dark">
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title className="text-white text-bold" title={""} />
          <ProductCard.Buttons className="custom-buttons text-white" />
        </ProductCard>

        <ProductCard 
          product={product}
          className="bg-dark"
        >
          <ProductImage 
            className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
          />
          <ProductTitle 
            title={""}
            className="text-white text-bold"  
          />
          <ProductButtons 
            className="custom-buttons text-white"
          />
        </ProductCard>

        <ProductCard 
          product={product}
          style={{ backgroundColor: '#70D1F8' }}  
        >
          <ProductCard.Image style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
          <ProductCard.Title style={{ fontWeight: 'bold' }} />
          <ProductCard.Buttons style={{
            display: "flex",
            justifyContent: "end"
          }}/>
        </ProductCard>

      </div>
    </div>
  );
};

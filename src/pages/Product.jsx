import React from 'react';
import ProductSpecs from '../components/ProductSpecs';
import ProductDetails from '../components/ProductDetails';
import ProductCatalog from '../components/ProductCatalog';
import ModularPlatform from '../components/ModularPlatform';

const Product = () => {
  return (
    <div className="min-h-screen pt-20 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      <ProductCatalog />
      <ProductDetails />
      <ProductSpecs />
      <ModularPlatform />
    </div>
  );
};

export default Product;

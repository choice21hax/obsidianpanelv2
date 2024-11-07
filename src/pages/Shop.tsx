import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Shop = () => {
  return (
    <div className="animate-fade-in">
      <h1 className="text-3xl font-bold mb-8">Shop</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-background-light p-6 rounded-xl border border-background-dark">
          <h2>Shop Coming Soon</h2>
        </div>
      </div>
    </div>
  );
};

export default Shop;
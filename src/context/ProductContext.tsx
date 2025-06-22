import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '../types';

interface ProductContextType {
  products: Product[];
  addProduct: (product: Omit<Product, 'id' | 'createdAt'>) => void;
  updateProduct: (id: string, product: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  getProduct: (id: string) => Product | undefined;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

// Initial products with HD jewelry images
const initialProducts: Product[] = [
  {
    id: '1',
    name: 'Diamond Solitaire Ring',
    category: 'Rings',
    price: 45000,
    originalPrice: 55000,
    image: 'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Exquisite solitaire ring with brilliant cut diamond, crafted in 18k white gold',
    featured: true,
    inStock: true,
    createdAt: '2024-01-15'
  },
  {
    id: '2',
    name: 'Diamond Tennis Bracelet',
    category: 'Bracelets',
    price: 85000,
    originalPrice: 95000,
    image: 'https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Elegant tennis bracelet featuring round brilliant diamonds in platinum setting',
    featured: true,
    inStock: true,
    createdAt: '2024-01-14'
  },
  {
    id: '3',
    name: 'Diamond Pendant Necklace',
    category: 'Necklaces',
    price: 35000,
    originalPrice: 42000,
    image: 'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Delicate diamond pendant on 18k gold chain, perfect for everyday elegance',
    featured: false,
    inStock: true,
    createdAt: '2024-01-13'
  },
  {
    id: '4',
    name: 'Diamond Stud Earrings',
    category: 'Earrings',
    price: 25000,
    originalPrice: 30000,
    image: 'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Classic diamond stud earrings in 14k white gold with secure backing',
    featured: false,
    inStock: true,
    createdAt: '2024-01-12'
  },
  {
    id: '5',
    name: 'Diamond Eternity Band',
    category: 'Rings',
    price: 55000,
    originalPrice: 65000,
    image: 'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Stunning eternity band with continuous diamonds around the band',
    featured: true,
    inStock: false,
    createdAt: '2024-01-11'
  },
  {
    id: '6',
    name: 'Diamond Chandelier Earrings',
    category: 'Earrings',
    price: 75000,
    originalPrice: 85000,
    image: 'https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Glamorous chandelier earrings with cascading diamonds',
    featured: false,
    inStock: true,
    createdAt: '2024-01-10'
  }
];

export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const addProduct = (productData: Omit<Product, 'id' | 'createdAt'>) => {
    const newProduct: Product = {
      ...productData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString().split('T')[0]
    };
    setProducts(prev => [newProduct, ...prev]);
  };

  const updateProduct = (id: string, productData: Partial<Product>) => {
    setProducts(prev => 
      prev.map(product => 
        product.id === id ? { ...product, ...productData } : product
      )
    );
  };

  const deleteProduct = (id: string) => {
    setProducts(prev => prev.filter(product => product.id !== id));
  };

  const getProduct = (id: string) => {
    return products.find(product => product.id === id);
  };

  return (
    <ProductContext.Provider value={{
      products,
      addProduct,
      updateProduct,
      deleteProduct,
      getProduct
    }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};
import React, { useState } from 'react';
import { Crown, Heart, Star, Gift, Plus, Edit, Trash2, Filter } from 'lucide-react';
import { useProducts } from '../context/ProductContext';
import { useAuth } from '../context/AuthContext';
import ProductForm from './ProductForm';
import { Product } from '../types';

const Products = () => {
  const { products, deleteProduct } = useProducts();
  const { isAdmin } = useAuth();
  const [showProductForm, setShowProductForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | undefined>();
  const [formMode, setFormMode] = useState<'add' | 'edit'>('add');
  const [filterCategory, setFilterCategory] = useState('All');

  const categories = ['All', 'Rings', 'Necklaces', 'Earrings', 'Bracelets', 'Pendants'];

  const filteredProducts = filterCategory === 'All' 
    ? products 
    : products.filter(product => product.category === filterCategory);

  const handleAddProduct = () => {
    setEditingProduct(undefined);
    setFormMode('add');
    setShowProductForm(true);
  };

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    setFormMode('edit');
    setShowProductForm(true);
  };

  const handleDeleteProduct = (productId: string) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      deleteProduct(productId);
    }
  };

  const getIcon = (category: string) => {
    switch (category) {
      case 'Rings': return <Crown className="h-6 w-6" />;
      case 'Necklaces': return <Heart className="h-6 w-6" />;
      case 'Earrings': return <Gift className="h-6 w-6" />;
      case 'Bracelets': return <Star className="h-6 w-6" />;
      default: return <Star className="h-6 w-6" />;
    }
  };

  return (
    <>
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Exquisite <span className="text-yellow-600">Collection</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our handpicked selection of luxury diamond jewelry, each piece crafted to perfection
            </p>
          </div>

          {/* Admin Controls */}
          {isAdmin && (
            <div className="mb-8 flex flex-col sm:flex-row justify-between items-center gap-4">
              <button
                onClick={handleAddProduct}
                className="flex items-center space-x-2 bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition-colors font-semibold"
              >
                <Plus className="h-5 w-5" />
                <span>Add New Product</span>
              </button>
              
              <div className="text-sm text-gray-600 bg-yellow-50 px-4 py-2 rounded-lg">
                Admin Mode: You can add, edit, and delete products
              </div>
            </div>
          )}

          {/* Category Filter */}
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilterCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  filterCategory === category
                    ? 'bg-yellow-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-yellow-600 text-white p-2 rounded-full">
                    {getIcon(product.category)}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {product.category}
                  </div>
                  {product.featured && (
                    <div className="absolute bottom-4 left-4 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                      FEATURED
                    </div>
                  )}
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">OUT OF STOCK</span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-yellow-600">₹{product.price.toLocaleString()}</span>
                      {product.originalPrice && product.originalPrice > product.price && (
                        <span className="text-lg text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
                      )}
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {product.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <button className="bg-yellow-600 text-white px-4 py-2 rounded-full hover:bg-yellow-700 transition-colors font-medium">
                      View Details
                    </button>
                    
                    {isAdmin && (
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEditProduct(product)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                          title="Edit Product"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteProduct(product.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors"
                          title="Delete Product"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found in this category.</p>
            </div>
          )}

          <div className="text-center mt-12">
            <button className="bg-yellow-600 text-white px-8 py-4 rounded-full hover:bg-yellow-700 transition-all duration-300 transform hover:scale-105 font-semibold text-lg shadow-lg">
              View Complete Collection
            </button>
          </div>
        </div>
      </section>

      <ProductForm
        isOpen={showProductForm}
        onClose={() => setShowProductForm(false)}
        product={editingProduct}
        mode={formMode}
      />
    </>
  );
};

export default Products;
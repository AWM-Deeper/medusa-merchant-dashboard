'use client';

import { useState, useEffect } from 'react';
import medusaClient from '@/lib/medusa-client';

interface Product {
  id: string;
  title: string;
  description?: string;
  handle: string;
  variants: Array<{ id: string; sku?: string; price: number }>;
  collection_id?: string;
  created_at: string;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await medusaClient.getProducts();
        setProducts(data.products || []);
      } catch (err) {
        console.error('Failed to fetch products:', err);
        setError('Failed to load products from Medusa');
        // Mock data for demo purposes
        setProducts([
          {
            id: '1',
            title: 'Sample Product',
            handle: 'sample-product',
            variants: [{ id: '1', sku: 'SP-001', price: 2999 }],
            created_at: new Date().toISOString(),
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Products</h1>
          <p className="mt-2 text-gray-600">Manage your Medusa products and sync with Shopify</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          + Add Product
        </button>
      </div>

      {error && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-yellow-800">{error} - Showing demo data</p>
        </div>
      )}

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Product Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">SKU</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Price</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Status</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div>
                    <p className="font-medium text-gray-900">{product.title}</p>
                    <p className="text-sm text-gray-500">{product.handle}</p>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {product.variants[0]?.sku || '-'}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  ${(product.variants[0]?.price || 0) / 100}
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 text-sm space-x-2">
                  <button className="text-blue-600 hover:text-blue-900">Edit</button>
                  <button className="text-red-600 hover:text-red-900">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No products found. Create your first product to get started.</p>
          </div>
        )}
      </div>

      {/* Sync Section */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Shopify Sync</h2>
        <p className="text-gray-600 mb-4">
          Automatically sync products from your Shopify store to Medusa
        </p>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Sync from Shopify
        </button>
      </div>
    </div>
  );
}

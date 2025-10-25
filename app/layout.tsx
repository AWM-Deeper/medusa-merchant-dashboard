import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Medusa Merchant Dashboard',
  description: 'Manage your connected Shopify stores and marketplace',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-gray-50">
          <nav className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <div className="flex items-center">
                  <h1 className="text-2xl font-bold text-blue-600">Medusa Dashboard</h1>
                </div>
                <div className="flex items-center space-x-4">
                  <a href="/products" className="text-gray-700 hover:text-gray-900">Products</a>
                  <a href="/orders" className="text-gray-700 hover:text-gray-900">Orders</a>
                  <a href="/stores" className="text-gray-700 hover:text-gray-900">Stores</a>
                </div>
              </div>
            </div>
          </nav>
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

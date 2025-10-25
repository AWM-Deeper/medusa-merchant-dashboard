import axios, { AxiosInstance } from 'axios';

interface MedusaClientConfig {
  baseURL?: string;
  apiKey?: string;
}

export class MedusaClient {
  private client: AxiosInstance;
  private baseURL: string;

  constructor(config: MedusaClientConfig = {}) {
    this.baseURL = config.baseURL || process.env.NEXT_PUBLIC_MEDUSA_URL || 'https://gohaste.medusajs.app';
    
    this.client = axios.create({
      baseURL: this.baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Add auth token if provided
    if (config.apiKey) {
      this.client.defaults.headers.common['Authorization'] = `Bearer ${config.apiKey}`;
    }
  }

  // Products
  async getProducts() {
    try {
      const { data } = await this.client.get('/admin/products');
      return data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  }

  async getProductById(id: string) {
    try {
      const { data } = await this.client.get(`/admin/products/${id}`);
      return data;
    } catch (error) {
      console.error(`Error fetching product ${id}:`, error);
      throw error;
    }
  }

  async createProduct(product: any) {
    try {
      const { data } = await this.client.post('/admin/products', { product });
      return data;
    } catch (error) {
      console.error('Error creating product:', error);
      throw error;
    }
  }

  async updateProduct(id: string, product: any) {
    try {
      const { data } = await this.client.post(`/admin/products/${id}`, { product });
      return data;
    } catch (error) {
      console.error(`Error updating product ${id}:`, error);
      throw error;
    }
  }

  // Orders
  async getOrders() {
    try {
      const { data } = await this.client.get('/admin/orders');
      return data;
    } catch (error) {
      console.error('Error fetching orders:', error);
      throw error;
    }
  }

  async getOrderById(id: string) {
    try {
      const { data } = await this.client.get(`/admin/orders/${id}`);
      return data;
    } catch (error) {
      console.error(`Error fetching order ${id}:`, error);
      throw error;
    }
  }

  async updateOrder(id: string, order: any) {
    try {
      const { data } = await this.client.post(`/admin/orders/${id}`, order);
      return data;
    } catch (error) {
      console.error(`Error updating order ${id}:`, error);
      throw error;
    }
  }

  // Stores
  async getStores() {
    try {
      const { data } = await this.client.get('/admin/store');
      return data;
    } catch (error) {
      console.error('Error fetching store:', error);
      throw error;
    }
  }

  // Collections
  async getCollections() {
    try {
      const { data } = await this.client.get('/admin/collections');
      return data;
    } catch (error) {
      console.error('Error fetching collections:', error);
      throw error;
    }
  }
}

export default new MedusaClient();

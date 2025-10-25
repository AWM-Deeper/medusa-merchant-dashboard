# Medusa Merchant Dashboard

A powerful Next.js-based dashboard for managing connected Shopify stores, product synchronization, and order fulfillment within the Medusa marketplace ecosystem.

## Features

- 🏪 **Store Management** - Connect and manage multiple Shopify stores
- 📦 **Product Synchronization** - Sync products from Shopify to Medusa
- 📋 **Order Management** - Track and fulfill orders across stores
- 💳 **Payment Processing** - Secure payment handling via Medusa
- 📊 **Analytics Dashboard** - Real-time sales and performance metrics
- 🎨 **Modern UI** - Built with Tailwind CSS for responsive design

## Tech Stack

- **Framework**: Next.js 14+
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Medusa (https://gohaste.medusajs.app)
- **API Client**: Custom Medusa client with full TypeScript support

## Project Structure

```
medusa-merchant-dashboard/
├── app/                      # Next.js app directory
│   ├── layout.tsx          # Root layout with navigation
│   ├── page.tsx            # Dashboard home page
│   ├── products/           # Product management pages
│   ├── orders/             # Order management pages
│   └── stores/             # Store management pages
├── lib/
│   └── medusa-client.ts    # Medusa API client
├── public/                  # Static assets
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS config
└── tsconfig.json           # TypeScript configuration
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AWM-Deeper/medusa-merchant-dashboard.git
   cd medusa-merchant-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open http://localhost:3000 in your browser

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Production Deployment

### Deploying to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_MEDUSA_URL=https://gohaste.medusajs.app`
4. Deploy automatically on git push

### Environment Variables

- `NEXT_PUBLIC_MEDUSA_URL` - Medusa backend URL (must be public)

## API Integration

The dashboard connects to Medusa backend at `https://gohaste.medusajs.app` for:

- Product listing and management
- Order tracking and fulfillment
- Store configuration
- Customer data

## Pages

### Dashboard Home (`/`)
Overview of all stores, recent orders, and key metrics

### Products (`/products`)
Manage product catalog, pricing, and inventory

### Orders (`/orders`)
View, process, and fulfill orders

### Stores (`/stores`)
Manage connected Shopify stores and settings

## Contributing

1. Create a new branch for your feature
2. Make your changes with clear commit messages
3. Push to the repository
4. Create a pull request

## Current Progress

### ✅ Completed
- Core dashboard pages (home, products, orders, stores)
- Medusa client with TypeScript types
- Tailwind CSS styling
- Project structure and configuration
- Environment variable setup

### 🔄 In Development
- Vercel deployment configuration
- Live testing endpoints

### ⏸️ Planned
- Authentication system
- Real-time notifications
- Advanced reporting
- Inventory management
- Multi-language support

## License

MIT

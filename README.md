# INVOISKY - AI-Powered SaaS Invoicing System

INVOISKY is an AI-powered invoicing system that simplifies invoice management by automating creation, processing, and analytics. It targets freelancers, startups, and SMEs, providing intelligent recommendations to enhance efficiency and accuracy.

## Features

- **User Management**: Secure authentication via Clerk with role-based access control and team collaboration
- **Invoice Generation**: Automated invoice creation with AI-powered templates and customization
- **Payment Integration**: Support for multiple payment gateways (Korapay, Paystack, Flutter, Stripe)
- **AI Enhancements**: Smart recommendations, NLP for invoice creation, predictive analytics

## Tech Stack

- **Frontend**: Next.js, Tailwind CSS, shadcn/ui
- **Backend**: Next.js API routes, Supabase/Postgres
- **Authentication**: Clerk
- **Email**: Resend API
- **AI**: Custom AI services for smart features

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Supabase account
- Clerk account (for authentication)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/invoisky.git
cd invoisky
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file in the root directory with the following variables:

```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

4. Start the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `app/`: Next.js app directory containing pages and layouts
- `components/`: Reusable UI components
- `lib/`: Utility functions and helpers
- `types/`: TypeScript type definitions
- `public/`: Static assets

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

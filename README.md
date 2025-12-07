# Stay Shire Platform

A full-featured property rental platform built with Next.js and NestJS.

## Project Structure

```
stay-shire-platform/
├── frontend/          # Next.js frontend application
├── backend/           # NestJS backend API
└── docker-compose.yml # Docker configuration
```

## Tech Stack

### Frontend
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **State Management**: Zustand
- **Forms**: React Hook Form + Zod
- **HTTP Client**: Axios

### Backend
- **Framework**: NestJS
- **Language**: TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT with Passport
- **File Upload**: AWS S3
- **Real-time**: Socket.io
- **Payment**: Stripe

## Getting Started

### Prerequisites
- Node.js 20+
- PostgreSQL 15+
- npm or yarn

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend will run on `http://localhost:3000`

### Backend Setup

```bash
cd backend
npm install

# Set up environment variables
cp .env.example .env

# Run database migrations
npx prisma migrate dev

# Start the server
npm run start:dev
```

Backend will run on `http://localhost:3001`

## Development

### Frontend Development
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint

### Backend Development
- `npm run start:dev` - Start in watch mode
- `npm run build` - Build for production
- `npm run test` - Run tests

## Features

- ✅ User authentication and authorization
- ✅ Property listings with photos
- ✅ Advanced search and filters
- ✅ Booking system with calendar
- ✅ Payment processing with Stripe
- ✅ Real-time messaging
- ✅ Reviews and ratings
- ✅ Host and guest dashboards
- ✅ Admin panel

## License

MIT

# PinkHope Cancer Patient Support Application

## Overview

PinkHope is a comprehensive web application designed to support cancer patients during their treatment journey. The application provides tools for tracking symptoms and side effects, managing medical appointments, accessing nutritional guidance, and learning about treatment-related side effects. Built with a focus on empathy and usability, it features a pink-themed design that reflects support and hope for patients navigating their cancer treatment.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Full-Stack Architecture
The application follows a modern full-stack architecture with a clear separation between client and server responsibilities:

**Frontend (React + TypeScript)**
- Built with React 18 and TypeScript for type safety and modern component patterns
- Uses Vite as the build tool for fast development and optimized production builds
- Implements client-side routing with Wouter for lightweight navigation
- Styled with Tailwind CSS and shadcn/ui components for consistent, accessible UI
- Features a pink-themed design system with CSS custom properties for theming

**Backend (Express + TypeScript)**
- Node.js server using Express framework with TypeScript for type safety
- RESTful API design with structured route handling
- Implements proper error handling and request logging middleware
- Session-based authentication using express-session with PostgreSQL storage

### Database Architecture
**PostgreSQL with Drizzle ORM**
- Uses Neon serverless PostgreSQL as the database provider
- Drizzle ORM for type-safe database operations with schema-first approach
- Database schema includes tables for users, sessions, symptoms, and appointments
- Implements proper foreign key relationships and constraints
- Migration system using drizzle-kit for schema evolution

**Key Database Tables:**
- `users`: Stores user profiles including health information (cancer type, age, gender)
- `sessions`: Session storage for authentication (required for Replit Auth)
- `symptoms`: Tracks patient symptoms with severity ratings and notes
- `appointments`: Manages medical appointments with completion status

### Authentication System
**Replit OpenID Connect Integration**
- Uses Replit's OIDC authentication system with Passport.js strategy
- Implements proper session management with PostgreSQL session store
- Automatic user provisioning and profile synchronization
- Secure cookie configuration with proper security headers

### State Management
**TanStack Query (React Query)**
- Centralized server state management with automatic caching and synchronization
- Optimistic updates for better user experience
- Error handling with automatic retries and fallback states
- Custom query functions with proper error boundaries

### Component Architecture
**Design System Approach**
- shadcn/ui component library for consistent, accessible components
- Custom component composition following atomic design principles
- Radix UI primitives for robust, accessible base components
- Responsive design with mobile-first approach

**Key Features:**
- Floating ribbon animations for thematic visual elements
- Glass morphism effects for modern UI aesthetics
- Comprehensive form handling with validation
- Toast notifications for user feedback

## External Dependencies

### Core Infrastructure
- **Neon Database**: Serverless PostgreSQL database hosting
- **Replit Authentication**: OIDC-based user authentication system
- **Vite**: Modern build tool for fast development and optimized builds

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework for styling
- **shadcn/ui**: Component library built on Radix UI primitives
- **Radix UI**: Accessible, unstyled UI primitives
- **Font Awesome**: Icon library for consistent iconography
- **Google Fonts**: Typography (Quicksand, Raleway, Architects Daughter)

### Backend Services
- **Express.js**: Web application framework
- **Passport.js**: Authentication middleware with OpenID Connect strategy
- **Drizzle ORM**: TypeScript ORM for database operations
- **express-session**: Session management middleware
- **connect-pg-simple**: PostgreSQL session store adapter

### Development Tools
- **TypeScript**: Type safety and enhanced development experience
- **TanStack Query**: Server state management and data fetching
- **Wouter**: Lightweight client-side routing
- **ESBuild**: Fast JavaScript bundler for server code
- **PostCSS**: CSS processing with Autoprefixer

The application is designed to be deployed on Replit with automatic database provisioning and authentication integration, making it easy to set up and maintain in a cloud environment.
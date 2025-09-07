# pink-hope
PinkHope: Cancer Patient Support Application

Project Information

Project Name: PinkHope
Team Name: DEVils
College: Nirma University

Contributors

Meet the passionate contributors who worked on PinkHope, bringing together technical skills and compassion to build a patient-centric platform.

Name: Krish Mojidra
RollNo: 24BCE188
GitHub Username: Krish-3010

Name: Het Shah
RollNo: 24BCE261
GitHub Username: Het6518

Name: Heer Patel
RollNo: 24BCE186
GitHub Username: HeerPatel7232

Name: Ritika Jiandani
RollNo: 24BCE196
GitHub Username: Ritika11819



1. Overview

PinkHope is a comprehensive cancer support web application designed to help patients manage and navigate their treatment journey with ease and empathy.

The platform provides:

Symptom & Side Effect Tracking – patients can log daily symptoms, monitor severity, and share with doctors.
Appointment Management – a calendar-style dashboard for scheduling, reminders, and tracking medical visits.
Nutritional Guidance – personalized tips and dietary advice for patients undergoing treatment.
Education & Awareness – information on treatment side effects, self-care methods, and coping strategies.

Design Philosophy:
PinkHope focuses on usability and empathy, featuring a pink-themed, hopeful interface. It uses clean UI/UX principles with accessibility in mind, ensuring patients of all ages can navigate comfortably.



2. System Architecture

PinkHope follows a modern full-stack architecture, ensuring clear separation between frontend, backend, and database layers.

2.1 Frontend (React + TypeScript)

Framework: React 18 with TypeScript for type safety and reusable components.
Build Tool: Vite for fast development and optimized builds.
Routing: Wouter for lightweight, client-side navigation.
Styling: Tailwind CSS + shadcn/ui for a consistent, accessible design system.

Design System: Pink-themed color palette with CSS variables.
               Responsive, mobile-first layouts.
               Animations (floating ribbons, glass morphism effects).

User Experience Features:Toast notifications for instant feedback.
                        Form validation (error messages, accessibility labels).
Accessibility-first components using Radix UI.


2.2 Backend (Express + TypeScript)

Framework: Node.js with Express, fully typed using TypeScript.
API Design: RESTful endpoints for CRUD operations.

Middleware:Logging (morgan / custom logger).
           Error handling with structured responses.
           Security headers (Helmet, CORS configuration).

Authentication:Session-based authentication (express-session).
               PostgreSQL session store with connect-pg-simple.
               OIDC-based login with Replit Auth (Passport.js strategy).

Business Logic:Symptom logging, appointment scheduling, and nutritional recommendations.
               Secure access control for patient data.


2.3 Database (PostgreSQL + Drizzle ORM)

Provider: Neon (serverless PostgreSQL).
ORM: Drizzle ORM (type-safe, schema-first).
Migrations: drizzle-kit for schema versioning.

Key Tables
users
Fields: id, name, email, password (hashed), cancer_type, age, gender.
Relationships: one-to-many with symptoms and appointments.

sessions
Fields: id, user_id, session_token, expiry.
Handles authentication sessions.

symptoms
Fields: id, user_id, symptom_name, severity (scale 1–10), notes, date.

appointments
Fields: id, user_id, doctor_name, date, status (pending/completed), notes.
Data Integrity: Foreign keys (users → symptoms/appointments).
Constraints for valid entries.



3. Authentication System

Replit OpenID Connect (OIDC): integrated with Passport.js for user login.
Automatic user provisioning: first login creates a user profile in DB.
Secure Cookies: configured with HTTP-only, sameSite, and Secure flags.
Session Handling: PostgreSQL-backed, scalable session management.



4. State Management

TanStack Query (React Query):Handles server state, caching, and synchronization.
                             Automatic retries and error boundaries.
                             Optimistic updates for instant UI response.

Advantages: reduces boilerplate, ensures smooth UX, handles offline states.



5. Component Architecture

Approach: Atomic Design + shadcn/ui components.
UI Foundation: Radix UI primitives ensure accessibility.

Custom Components:Symptom Tracker Form
                  Appointment Scheduler
                  Patient Dashboard (cards with status)

Educational Articles Viewer

🎨 Visual Highlights:

Floating pink ribbon animations (symbol of hope).
Glass morphism effects on cards for modern UI.
Typography: Google Fonts (Quicksand, Raleway, Architects Daughter).



6. External Dependencies
Core Infrastructure
Neon Database – scalable PostgreSQL hosting.
Replit Auth – OIDC authentication system.
Vite – build and optimization tool.

UI and Styling
Tailwind CSS – utility-first styling.
shadcn/ui – accessible, styled components.
Radix UI – low-level UI primitives.
Font Awesome – icons.
Google Fonts – modern typography.

Backend
Express.js – server framework.
Passport.js – authentication middleware.
Drizzle ORM – DB operations.
express-session – session management.
connect-pg-simple – PostgreSQL session store.

Development Tools
TypeScript – static typing.
TanStack Query – server state management.
Wouter – client-side routing.
ESBuild – fast bundler for backend.
PostCSS + Autoprefixer – CSS optimization.



7. Deployment & Environment

Platform: Replit (frontend + backend + database).
Integration:Automatic DB provisioning.
CI/CD: GitHub integration for version control.
Scalability: Serverless PostgreSQL ensures elasticity.

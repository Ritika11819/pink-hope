🎗️ PinkHope: Cancer Patient Support Application 
PinkHope is a comprehensive cancer support web application designed to help patients track symptoms, manage appointments, and access reliable guidance — making their treatment journey more manageable and empathetic.

💡 Because every moment counts in cancer care.

👥 Team Information :-
Team Name: DEVils
College: Nirma University
#
Contributors

👨‍💻 Krish Mojidra – Roll No: 24BCE188 | GitHub: Krish-3010

👨‍💻 Het Shah – Roll No: 24BCE261 | GitHub: Het6518

👩‍💻 Heer Patel – Roll No: 24BCE186 | GitHub: HeerPatel7232

👩‍💻 Ritika Jiandani – Roll No: 24BCE196 | GitHub: Ritika11819
#
🌟 Overview
PinkHope empowers cancer patients to actively manage their health by offering:

📝 Symptom & Side Effect Tracking – Log daily symptoms, monitor severity (1–10 scale), share with doctors.

📅 Appointment Management – Calendar-style dashboard with scheduling, reminders, and visit tracking.

🥗 Nutritional Guidance – Personalized diet tips for patients undergoing treatment.

📖 Education & Awareness – Articles on treatment side effects, self-care methods, and coping strategies.

🎨 Design Philosophy: A hopeful pink theme with clean UI/UX principles, built for accessibility so patients of all ages can use it comfortably.
#
🏗️ System Architecture
PinkHope follows a modern full-stack architecture with clear separation between frontend, backend, and database layers.

Frontend (React + TypeScript)
Framework: React 18 + TypeScript

Build Tool: Vite (fast builds & dev server)

Routing: Wouter (lightweight navigation)

Styling: Tailwind CSS + shadcn/ui (accessible components)

UX Features: Toast notifications, form validation, accessibility-first design

Visuals: Floating pink ribbons 🎗️, glass morphism cards, Google Fonts (Quicksand, Raleway, Architects Daughter)

Backend (Express + TypeScript)
Framework: Node.js + Express (typed with TS)

API: RESTful CRUD endpoints

Middleware: Logging (morgan), error handling, Helmet + CORS for security
#
Authentication:

Session-based (express-session + PostgreSQL store)

Replit OIDC login via Passport.js

Business Logic: Symptom logging, appointment scheduling, nutritional recommendations

Database (PostgreSQL + Drizzle ORM)
Provider: Neon (serverless PostgreSQL)

ORM: Drizzle ORM (type-safe, schema-first)

Migrations: drizzle-kit
#
Key Tables:

users – patient info (id, name, email, cancer_type, age, gender)

symptoms – symptom name, severity, notes, date

appointments – doctor, date, status, notes

sessions – authentication sessions
#
🔐 Authentication System
OIDC (Replit Auth) via Passport.js

Secure Cookies (HTTP-only, SameSite, Secure)

PostgreSQL Session Store for scalable session management

Auto User Provisioning on first login
#
⚡ State & Component Architecture
State Management: TanStack Query (React Query)

Server state caching, auto retries, error boundaries

Optimistic updates for smooth UX

Component Approach: Atomic Design + shadcn/ui

Core Components: Symptom Tracker, Appointment Scheduler, Dashboard, Educational Articles Viewer
#
🛠️ Tech Stack
Core Infrastructure

Neon (serverless PostgreSQL)

Replit Auth (OIDC)

Vite (build tool)

Frontend

React 18 + TypeScript

Tailwind CSS + shadcn/ui

Radix UI (accessible primitives)

Font Awesome + Google Fonts

Backend

Express.js + TypeScript

Passport.js (OIDC auth)

Drizzle ORM

express-session + connect-pg-simple

Dev Tools

TanStack Query

Wouter (routing)

ESBuild (fast bundler)

PostCSS + Autoprefixer
#
🚀 Deployment
Platform: Replit (full-stack deployment)

Integration: Automatic DB provisioning

Version Control: GitHub CI/CD integration

Scalability: Serverless PostgreSQL for elasticity
#
🔮 Future Scope
🤖 AI-based predictions for severe side effects

⌚ Wearable integration (IoT health tracking)

🌍 Multilingual support for global accessibility

🏥 Hospital partnerships & NGO integrations

🧑‍🤝‍🧑 Community support features (patient groups, mental health resources)
#
📸 Visual Highlights
Floating pink ribbon animations

Glass morphism card UI

Intuitive, patient-friendly dashboards
#
🏆 Why PinkHope Matters
Addresses a critical gap in cancer care: managing side effects.

Builds a lifeline for patients, caregivers, and doctors.

Designed with empathy first, technology second.

💡 PinkHope isn’t just an app – it’s a companion in the fight against cancer.
#
Screenshot of the website:

<img width="1440" height="905" alt="{05BC8D40-7665-4EA2-BC42-CFD353C3A4E8}" src="https://github.com/user-attachments/assets/2c5438cb-cf29-4c3f-ac1c-acc79bba8fd3" />
<img width="1431" height="899" alt="{1FC48A10-9DC6-4F46-BF83-4CF580DA2B31}" src="https://github.com/user-attachments/assets/3ca58188-4293-46bb-a2e1-db164fea26e1" />
<img width="1435" height="898" alt="{91600482-7CA6-4442-9FCA-69BD6AA54F3A}" src="https://github.com/user-attachments/assets/92fd5042-09f5-4b8a-a25e-25b76044a386" />
<img width="1420" height="898" alt="{C535DD7F-150D-4DC9-85BB-17A4F7CD7B03}" src="https://github.com/user-attachments/assets/27c04c24-77bb-446c-a5d5-82e5b323b634" />
<img width="1420" height="898" alt="{13255881-679C-4925-A1D6-B7BBE48D30F1}" src="https://github.com/user-attachments/assets/8532ab51-74f1-4c70-b737-f84f2e4a3e6a" />
<img width="1421" height="745" alt="{3A2D3DBC-A956-481F-BD14-D6F99956D688}" src="https://github.com/user-attachments/assets/215e12fc-3171-43b2-a626-f127b2fcc936" />
<img width="1413" height="749" alt="{2F8BCBFA-3903-4025-B17D-F245952B1C5D}" src="https://github.com/user-attachments/assets/c004704c-f4df-4e1a-a705-1d56021cb5cc" />


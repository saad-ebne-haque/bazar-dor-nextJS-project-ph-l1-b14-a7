# 🛒 Bazar Dor — বাজার দর

**Bazar Dor** is a Bangla-friendly product browsing web application built with Next.js. Users can explore product categories, view product details, and access their account through email/password or social authentication.

🔗 **Live Website:** https://bazar-dor-three-ecru.vercel.app/  
📂 **GitHub Repository:** https://github.com/saad-ebne-haque/bazar-dor-nextJS-project-ph-l1-b14-a7

## ✨ Features

- 🏠 **Home Page:** Explore the application and browse available products.
- 📂 **Product Categories:** Browse products by category using dynamic routes.
- 🔎 **Product Details:** View detailed information about individual products.
- ↕️ **Product Sorting:** Sort products by price from low to high or high to low, with a default sorting option.
- 🔐 **Authentication:** Sign up and sign in using email and password.
- 🌐 **Social Login:** Authenticate using Google or GitHub.
- 👤 **User Profile:** View profile information and update account details.
- 🛡️ **Protected Routes:** Restrict access to selected pages for unauthenticated users.
- ⏳ **Loading UI:** Display skeleton loading states while page content loads.
- 📱 **Responsive Design:** Designed to work across desktop, tablet, and mobile screens.

## 🧰 Technologies Used

| Technology | Purpose |
|---|---|
| Next.js 16 | React framework and App Router |
| React 19 | Building interactive user interfaces |
| TypeScript | Type safety and maintainable code |
| Tailwind CSS 4 | Styling and responsive layouts |
| HeroUI | UI components |
| Better Auth | Authentication and session management |
| MongoDB | Database for authentication |
| React Fast Marquee | Scrolling content |
| Gravity UI Icons | Interface icons |
| Vercel | Deployment |

## 🚀 Getting Started

Follow these steps to run the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/saad-ebne-haque/bazar-dor-nextJS-project-ph-l1-b14-a7.git
```

### 2. Navigate to the project folder

```bash
cd bazar-dor-nextJS-project-ph-l1-b14-a7
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env.local` file in the project root and add the required environment variables.

```env
MONGODB_SECRET_URI=your_mongodb_connection_string

BETTER_AUTH_SECRET=your_better_auth_secret
BETTER_AUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
```

Replace the placeholder values with your own credentials. Configure Google and GitHub OAuth callback URLs for your local and production environments as required by Better Auth and each provider.

**Security:** Never commit your actual credentials or `.env.local` file to GitHub.

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build the application for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |

## 🔑 Authentication

The project uses Better Auth for authentication and MongoDB for storing authentication data. Email/password authentication and Google and GitHub social providers are configured.

To use authentication locally, configure the required database connection, authentication secret, application URL, and OAuth credentials.

## 📁 Project Overview

The application uses the Next.js App Router and organizes its code into reusable components, API helper functions, authentication configuration, and TypeScript types.

- `src/app/` — Application routes and pages
- `src/components/` — Reusable UI components
- `src/apis/` — API helper functions
- `src/lib/` — Shared utilities and authentication configuration
- `src/types/` — TypeScript type definitions

## 👨‍💻 Developer

**Saad Ebne Haque**

- GitHub: [saad-ebne-haque](https://github.com/saad-ebne-haque)
- Project: [Bazar Dor](https://bazar-dor-three-ecru.vercel.app/)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS.

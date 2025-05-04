# 🥑 Avocado - Grocery Web App

**Avocado** is a modern grocery shopping web application built with **Next.js 15**, **React 19**, and **Tailwind CSS 4**. It offers a seamless, user-friendly shopping experience featuring authentication, responsive UI, and rich component interactions powered by Radix UI and other modern libraries.

---

## 📚 Table of Contents

* [Introduction](#-introduction)
* [Features](#-features)
* [Installation](#-installation)
* [Usage](#-usage)
* [Configuration](#-configuration)
* [Dependencies](#-dependencies)
* [Development Scripts](#-development-scripts)
* [Examples](#-examples)
* [Troubleshooting](#-troubleshooting)
* [Contributors](#-contributors)
* [License](#-license)

---

## 📖 Introduction

Avocado is designed to serve as an e-commerce platform focused on groceries. It integrates authentication, dynamic product displays, modern form handling, and a rich UI/UX experience. This project uses cutting-edge technologies and is highly customizable for various e-commerce use cases.

🌐 **Live Site**: [http://avocado-grocey-shop.vercel.app](http://avocado-grocey-shop.vercel.app)
---

## ✨ Features

* 🔐 **Authentication** with [NextAuth](https://next-auth.js.org/)
* 📦 **Product listings** with image carousels (Swiper)
* 🧩 **Dynamic forms** with `react-hook-form`
* 💬 **Toasts/alerts** via `sonner`
* 💅 Fully responsive UI with **Tailwind CSS**
* 🗃️ **MongoDB** integration for data storage
* 🧰 **Radix UI** components for accessibility and consistency
* 🎠 **Carousel support** with `embla-carousel-react`

---

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/avocado.git
   cd avocado
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file and add your variables (e.g., MongoDB URI, NextAuth secrets):

   ```env
   MONGODB_URI=your_mongodb_connection_string
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=http://localhost:3000
   ```

4. **Run development server**

   ```bash
   npm run dev
   ```

---

## 🚀 Usage

Once running, navigate to `http://localhost:3000` in your browser. Use the UI to browse groceries, log in, and interact with the store.

---

## ⚙️ Configuration

* **MongoDB**: Connects via `MONGODB_URI` in `.env.local`
* **NextAuth**: Configured in `pages/api/auth/[...nextauth].ts`
* **Theming**: Controlled by `next-themes` with dark/light toggle
* **Tailwind CSS**: Extended using `tailwind.config.js` and animated with `tw-animate-css`

---

## 📦 Dependencies

Key dependencies used in this project:

| Package                                 | Purpose                           |
| --------------------------------------- | --------------------------------- |
| `next`, `react`, `react-dom`            | Core web framework                |
| `mongodb`                               | Database driver                   |
| `next-auth`                             | Authentication                    |
| `@radix-ui/*`                           | Accessible UI components          |
| `swiper`, `embla-carousel-react`        | Carousels for product images      |
| `tailwindcss`, `clsx`, `tailwind-merge` | Styling and utility class merging |
| `react-hook-form`                       | Form management                   |
| `sonner`                                | Toast notifications               |
| `lucide-react`, `react-icons`           | Iconography                       |

---

## 🧪 Development Scripts

* `npm run dev`: Start development server with Turbopack
* `npm run build`: Create optimized production build
* `npm start`: Launch production server
* `npm run lint`: Run ESLint checks

---

## 💡 Examples

* **Product Listings**: Grid of items with pricing, labels, and image carousels
* **Login Modal**: Auth flow with email/password
* **Shopping Cart**: Persisted cart logic using local or server state
* *(More examples can be added here if you provide component/pages overview)*

---

## 🛠️ Troubleshooting

* **Environment variables not working?** Make sure `.env.local` is present at the root.
* **Styles not applying?** Check Tailwind CSS setup and PostCSS config.
* **Database connection error?** Ensure your MongoDB URI is correct and accessible.

---

## 👥 Contributors

> Add your name or contributors here.

* **Your Name** – *Developer*

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for more information.

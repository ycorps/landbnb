# 🏡 LandBnb

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-black?logo=next.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?logo=supabase&logoColor=white)

**LandBnb** is a modern, user-friendly real estate platform designed to help users find their perfect home. Built with high-performance modern web technologies, it offers a seamless browsing experience for properties and accommodations.

---

## 🚀 Demo

Check out the live application: **[LandBnb Live Demo](https://land-bnb.vercel.app/)**

---

## ✨ Key Features

* **🏠 Extensive Property Listings:** Explore a wide range of accommodations and properties.
* **⚡ Modern UI/UX:** A clean, responsive interface designed with **Locofy** and **Figma**.
* **🎨 Styling:** Beautiful, utility-first styling using **Tailwind CSS**.
* **🚀 High Performance:** Server-side rendering and static generation powered by **Next.js**.
* **🗄️ Backend Integration:** Robust data handling with **Supabase**.

---

## 🛠️ Tech Stack

This project leverages the following technologies:

* **Frontend Framework:** [Next.js](https://nextjs.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Backend / Database:** [Supabase](https://supabase.com/)
* **Design to Code:** [Locofy](https://www.locofy.ai/)
* **Language:** JavaScript / TypeScript

---

## ⚙️ Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

Ensure you have the following installed:
* [Node.js](https://nodejs.org/en/) (v14 or later recommended)
* [npm](https://www.npmjs.com/)

### Installation

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/ycorps/landbnb.git](https://github.com/ycorps/landbnb.git)
    cd landbnb
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables**
    Create a `.env` file in the root directory and add your Supabase credentials (and other necessary keys):
    ```env
    NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
    ```

4.  **Run the development server**
    ```bash
    npm run dev
    ```

5.  **Open in Browser**
    Visit `http://localhost:3000` to see the application running.

---

## 📂 Project Structure

```bash
landbnb/
├── components/       # Reusable UI components
├── pages/            # Next.js pages and routes
├── public/           # Static assets (images, icons)
├── styles/           # Global styles and Tailwind imports
├── data.csv          # Property data source
├── next.config.js    # Next.js configuration
├── tailwind.config.js# Tailwind CSS configuration
└── README.md         # Project documentation
# MERN Blog App

This is a full-stack **Blog Application** built with the **MERN stack**:  
**MongoDB, Express, React, and Node.js.**

It allows users to:
- **Sign up, log in, and log out** (JWT authentication).
- **Create, view, edit, and delete** blog posts.
- View posts publicly without an account.
- Manage their own posts with protected routes.

---

## Features

- **User Authentication** (Sign up, Log in, Log out) using JSON Web Tokens (JWT).
- **Protected Routes** – Only authenticated users can create, edit, or delete their own posts.
- **Public Access** – Anyone can view all posts and read individual posts.
- **Responsive UI** built with Tailwind CSS.
- **Deployed**:
  - Frontend on Vercel
  - Backend on Render
  - Database hosted on MongoDB Atlas

---

## Tech Stack

- **Frontend**: React (Vite), Tailwind CSS, React Router, Axios  
- **Backend**: Node.js, Express.js, MongoDB (Mongoose)  
- **Authentication**: JSON Web Tokens (JWT)  
- **Deployment**: Vercel (frontend) + Render (backend) + MongoDB Atlas

---

## Project Structure
```text
Blog-App/
  ├── server/              # Backend (Node + Express)
  │    ├── config/db.js
  │    ├── controllers/
  │    │    ├── authController.js
  │    │    └── postController.js
  │    ├── middleware/auth.js
  │    ├── models/
  │    │    ├── User.js
  │    │    └── Post.js
  │    ├── routes/
  │    │    ├── authRoutes.js
  │    │    └── postRoutes.js
  │    └── server.js
  ├── client/              # Frontend (React + Vite)
  │    ├── src/
  │    │    ├── api.js
  │    │    ├── components/
  │    │    │    ├── Navbar.jsx
  │    │    │    └── PostCard.jsx
  │    │    ├── pages/
  │    │    │    ├── Home.jsx
  │    │    │    ├── PostDetail.jsx
  │    │    │    ├── CreatePost.jsx
  │    │    │    ├── EditPost.jsx
  │    │    │    ├── Login.jsx
  │    │    │    └── Signup.jsx
  │    │    └── App.jsx
  │    └── index.html
  └── README.md
```

  
---

## Getting Started

### Clone the Repository
```bash
git clone https://github.com/Mabella29/Blog-App
cd Blog-App
```
### Navigate to the server folder
```bash
cd server
npm install
```

### Start the backend
```bash
npm run dev
```

### Navigate to the client folder
```bash
cd client
npm install
npm run dev
```

### Upadate src/services/api.js for local testing
```bash
baseURL: "http://localhost:5000/api"  
```

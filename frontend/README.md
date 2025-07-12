# 🚖 Uber Clone – MERN Stack with Admin Panel

This is a full-stack **Uber Clone** built using the **MERN stack** (MongoDB, Express, React, Node.js).  
It supports:

- 🧑‍💼 User signup/login with JWT cookies  
- 🚗 Ride booking with pickup/drop & driver assignment  
- 🧑‍✈️ Admin panel to view all user rides (JSON + DB)  
- 🔒 Role-based access (user/admin)

---

## 🌐 Tech Stack

| Layer | Tech |
|-------|------|
| Frontend | React.js, Axios, React Router |
| Backend | Node.js, Express.js |
| Database | MongoDB (Mongoose) |
| Auth | JWT + Cookies |
| Styling | Tailwind CSS / basic CSS |
| Dev Tools | Thunder Client / Postman |

---

## 🚀 Features

### 👤 User
- Signup/Login with JWT & Cookies
- Book a ride with:
  - Pickup, Drop
  - Random driver assigned
- View own ride history
- Logout

### 🧑‍✈️ Admin
- Auto-created on backend start (`admin@123 / admin`)
- Can access `/admin` dashboard
- View:
  - Static JSON rides
  - Real database rides (all users)
- Protected via `checkAdmin` middleware

### 🔐 Auth
- Passwords are hashed using `bcrypt`
- JWT stored securely in `HttpOnly` cookie
- `protect` middleware blocks unauthorized routes

---

## 🧪 Thunder Client Testing Routes

| Method | Route | Access | Description |
|--------|-------|--------|-------------|
| `POST` | `/api/auth/signup` | Public | Signup user |
| `POST` | `/api/auth/login` | Public | Login user |
| `GET`  | `/api/auth/me` | User/Admin | Get logged-in profile |
| `GET`  | `/api/auth/logout` | All | Clear token cookie |
| `POST` | `/api/rides/` | User | Book a new ride |
| `GET`  | `/api/rides/` | User | Get user's own rides |
| `GET`  | `/api/rides/db` | Admin | Get DB rides (all users) |
| `GET`  | `/api/rides/all` | Admin | Get static JSON rides |

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/uber-clone.git
cd uber-clone
```

### 2.Backend Setup (Express + MongoDB)
```bash
cd backend
npm install
```

## create .env file
```bash
PORT=5000
MONGO_URI=mongodb://localhost:27017/uberClone
JWT_SECRET=your_jwt_secret
```

## Start backend:
```
npm run dev
```

## 🧑‍✈️ Admin account will be seeded:
Email: admin@123
Password: admin

 ### 3 .Frontend Setup (React)
```
cd frontend
npm install
```

## Start frontend:
```
npm start
```


### 👨‍💻 Author
Maaz Ahmad Khan
Built with ❤️ for learning and demonstrating a complete full-stack system.

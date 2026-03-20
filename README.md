# 🚀 Portfolio Website

A modern, full-stack personal portfolio website built with **React + Vite + Tailwind CSS** (frontend) and **Node.js + Express + MongoDB** (backend).

## ✨ Features

### Frontend
- ⚡ **React + Vite** - Lightning fast development
- 🎨 **Tailwind CSS v4** - Utility-first styling with custom design system
- 🎭 **Framer Motion** - Smooth animations & page transitions
- 🌙 **Dark/Light Mode** - System preference aware
- 📱 **Fully Responsive** - Mobile-first design
- 🔍 **SEO Optimized** - Meta tags, semantic HTML
- 📝 **Form Validation** - Frontend + Backend
- 🔔 **Toast Notifications** - react-hot-toast
- 🎯 **Typewriter Effect** - Animated hero section

### Backend
- 🔐 **JWT Authentication** - Secure admin access
- 📊 **REST API** - Clean MVC architecture
- 🗄️ **MongoDB/Mongoose** - Data persistence
- 📁 **File Uploads** - Multer for image handling
- 🛡️ **Security** - Helmet, CORS, input validation
- 📧 **Contact Form** - Store messages in database

### Admin Dashboard
- 📊 Analytics overview
- 📝 Project CRUD operations
- 📧 Message management
- 🔒 Protected routes

## 📁 Project Structure

```
Portfolio/
├── frontend/                  # React + Vite
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/        # Navbar, Footer
│   │   │   ├── sections/      # Hero, About, Skills, Projects, etc.
│   │   │   └── ui/            # Reusable UI components
│   │   ├── context/           # Theme, Auth providers
│   │   ├── pages/             # HomePage, AdminLogin, AdminDashboard
│   │   ├── services/          # API client (axios)
│   │   ├── hooks/             # Custom hooks
│   │   └── assets/            # Static assets
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── backend/                   # Node.js + Express
│   ├── config/
│   │   ├── db.js              # MongoDB connection
│   │   └── seed.js            # Database seeder
│   ├── controllers/           # Business logic
│   │   ├── authController.js
│   │   ├── projectController.js
│   │   └── contactController.js
│   ├── middleware/
│   │   ├── auth.js            # JWT middleware
│   │   ├── upload.js          # Multer config
│   │   └── errorHandler.js    # Error handling
│   ├── models/
│   │   ├── User.js
│   │   ├── Project.js
│   │   └── Contact.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── projectRoutes.js
│   │   └── contactRoutes.js
│   ├── uploads/               # Uploaded files
│   ├── server.js              # Entry point
│   ├── .env                   # Environment variables
│   └── package.json
│
└── README.md
```

## 🛠️ Getting Started

### Prerequisites
- **Node.js** v18+ (https://nodejs.org)
- **MongoDB** (local or [MongoDB Atlas](https://www.mongodb.com/atlas))
- **npm** or **yarn**

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd Portfolio
```

### 2. Backend Setup
```bash
cd backend
npm install

# Configure environment variables
# Edit .env file with your MongoDB URI and JWT secret
```

#### Environment Variables (backend/.env)
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
JWT_EXPIRE=7d
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

### 3. Seed Database (Optional)
```bash
npm run seed
```
This creates:
- **Admin User**: `admin@portfolio.com` / `admin123`
- **6 Sample Projects**

### 4. Start Backend Server
```bash
npm run dev
```
Backend runs on `http://localhost:5000`

### 5. Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```
Frontend runs on `http://localhost:5173`

## 🔑 Admin Dashboard

Access the admin dashboard at `/admin/login`

**Default Credentials** (after seeding):
- Email: `admin@portfolio.com`
- Password: `admin123`

## 📡 API Endpoints

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/api/auth/login` | Admin login | No |
| GET | `/api/auth/me` | Get current user | Yes |
| PUT | `/api/auth/profile` | Update profile | Yes |
| PUT | `/api/auth/avatar` | Upload avatar | Yes |
| GET | `/api/auth/profile/public` | Get public profile | No |
| GET | `/api/projects` | Get all projects | No |
| GET | `/api/projects/:id` | Get single project | No |
| POST | `/api/projects` | Create project | Yes |
| PUT | `/api/projects/:id` | Update project | Yes |
| DELETE | `/api/projects/:id` | Delete project | Yes |
| POST | `/api/contact` | Send message | No |
| GET | `/api/contact` | Get all messages | Yes |
| GET | `/api/contact/stats` | Dashboard stats | Yes |
| PUT | `/api/contact/:id/read` | Mark as read | Yes |
| DELETE | `/api/contact/:id` | Delete message | Yes |

## 🎨 Customization

### Update Personal Info
1. Edit `Hero.jsx` - Change name, title, description
2. Edit `About.jsx` - Update bio and highlights
3. Edit `Skills.jsx` - Modify skill categories and levels
4. Edit `Experience.jsx` - Add your experience/education
5. Edit `Contact.jsx` - Update contact info

### Change Theme Colors
Edit `src/index.css` - Modify the `@theme` block for custom colors.

### Upload Profile Image
1. Login to Admin Dashboard
2. Upload avatar through profile settings
3. Or manually replace the placeholder in Hero section

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
cd frontend
npm run build
# Deploy the dist/ folder
```

### Backend (Railway/Render)
- Set environment variables on your hosting platform
- Deploy the backend/ directory

## 📝 License

MIT License - feel free to use this for your own portfolio!

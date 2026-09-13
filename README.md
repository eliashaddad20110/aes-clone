# Arab Episcopal School - Modern Website Clone

A full-stack, modern remake of the Arab Episcopal School website with significantly improved UI/UX, security, and accessibility features.

## 🎯 Project Overview

This is a professional, production-ready clone of aeschool.org featuring:

- **Modern UI/UX** - Glassmorphism, gradients, smooth animations
- **Full-Stack Architecture** - Next.js 14 frontend + Express.js backend
- **Enterprise Security** - JWT auth, CSRF protection, rate limiting, input sanitization
- **Accessibility First** - WCAG compliant, screen reader support, high contrast mode
- **Bilingual Support** - English/German localization ready
- **Admin Dashboard** - Full CMS for managing content

## 📁 Project Structure

```
aes-clone/
├── frontend/                 # Next.js 14 App Router
│   ├── app/
│   │   ├── (pages)          # Public pages
│   │   ├── admin/           # Protected admin dashboard
│   │   ├── components/      # Reusable components
│   │   ├── lib/             # Utilities & helpers
│   │   ├── types/           # TypeScript types
│   │   ├── globals.css      # Tailwind + custom styles
│   │   └── layout.tsx       # Root layout
│   └── package.json
│
└── backend/                 # Express.js API
    ├── src/
    │   ├── config/          # Database & config
    │   ├── controllers/      # Route handlers
    │   ├── middleware/       # Auth, CSRF, security
    │   ├── routes/           # API endpoints
    │   ├── utils/            # Helper functions
    │   └── index.ts          # Server entry
    └── package.json
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Windows/Mac/Linux

### 1. Install Dependencies

```bash
# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install
```

### 2. Configure Environment

**Backend (.env)**
```
PORT=5000
NODE_ENV=development
JWT_SECRET=your-super-secret-jwt-key-change-in-production
JWT_EXPIRES_IN=7d
FRONTEND_URL=http://localhost:3000
```

**Frontend (.env.local)**
```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### 3. Start Development Servers

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

Server runs on: http://localhost:5000
API Health check: http://localhost:5000/api/health

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

App runs on: http://localhost:3000

### 4. Access the Application

- **Public Site**: http://localhost:3000
- **Admin Dashboard**: http://localhost:3000/admin
- **API Docs**: Available via Postman or curl

## 🔐 Security Features

✅ **JWT Authentication** - Stateless, httpOnly cookies
✅ **CSRF Protection** - Token generation & validation
✅ **Rate Limiting** - 100 requests per 15 minutes
✅ **Input Sanitization** - XSS prevention
✅ **SQL Injection Prevention** - Parameterized queries
✅ **Security Headers** - Helmet.js integration
✅ **Password Hashing** - bcrypt with salt rounds 12

## 📱 Pages & Features

### Public Pages
- **Home** - Hero, news feed, gallery, stats, newsletter signup
- **About** - School history, timeline, values
- **Mission, Vision & Values** - Detailed mission statement
- **Get Involved** - Volunteer opportunities, resources, partnerships
- **Staff Directory** - Searchable staff by category
- **Contact** - Secure contact form with CSRF protection
- **Donate** - Donation interface (demo mode)

### Admin Dashboard
- **News Management** - CRUD for blog posts
- **Staff Management** - Add/edit/delete staff members
- **Gallery** - Upload/manage photos
- **Contact Submissions** - View/manage messages
- **Settings** - Site configuration

## 🎨 Design System

**Colors:**
- Primary: Amber/Gold (#EAB308)
- Navy: Dark Blue (#0C4A6E)
- Accent: Sky Blue (#0EA5E9)

**Typography:**
- Headings: Playfair Display (Georgia serif fallback)
- Body: Inter (system font fallback)

**Components:**
- Cards, buttons, forms all use Tailwind CSS
- Smooth animations via Framer Motion
- Accessible icons via Lucide React

## 📊 Database Schema

SQLite database with tables for:
- **users** - Admin credentials
- **news_posts** - Blog articles (bilingual)
- **staff_members** - Teacher/admin profiles
- **gallery_images** - Photo gallery
- **contact_submissions** - Form submissions
- **csrf_tokens** - CSRF token storage

## 🔗 API Endpoints

### Authentication
- `POST /api/auth/register` - Create admin account
- `POST /api/auth/login` - Login & get JWT
- `POST /api/auth/logout` - Logout
- `GET /api/auth/me` - Current user (protected)

### News
- `GET /api/news` - List all published posts
- `GET /api/news/:id` - Get single post
- `POST /api/news` - Create (protected)
- `PUT /api/news/:id` - Update (protected)
- `DELETE /api/news/:id` - Delete (protected)

### Staff
- `GET /api/staff` - List all staff
- `GET /api/staff?category=teachers` - Filter by category
- `POST /api/staff` - Add staff (protected)
- `PUT /api/staff/:id` - Update (protected)
- `DELETE /api/staff/:id` - Delete (protected)

### Gallery
- `GET /api/gallery` - List all images
- `POST /api/gallery` - Upload (protected)
- `PUT /api/gallery/:id` - Update (protected)
- `DELETE /api/gallery/:id` - Delete (protected)

### Contact
- `GET /api/csrf` - Get CSRF token
- `POST /api/contact` - Submit form (with CSRF)
- `GET /api/contact` - List submissions (protected)
- `PATCH /api/contact/:id/status` - Update status (protected)
- `DELETE /api/contact/:id` - Delete (protected)

## 🧪 Testing

```bash
# Frontend
cd frontend
npm run lint
npm run build

# Backend
cd backend
npm run build
```

## 📦 Deployment

### Build for Production

```bash
# Frontend
cd frontend
npm run build
npm run start

# Backend
cd backend
npm run build
npm start
```

### Environment Variables (Production)

Update `.env` files with:
- Strong JWT_SECRET (use a secure random string)
- Production database path
- FRONTEND_URL pointing to your domain
- NODE_ENV=production

### Deployment Options

- **Frontend**: Vercel, Netlify, or any Node.js host
- **Backend**: Heroku, Railway, DigitalOcean, AWS
- **Database**: SQLite (dev), PostgreSQL (production)
- **Storage**: For images, use S3, Cloudinary, or similar

## 🔄 Data Import

To populate with sample data:

```sql
INSERT INTO staff_members (id, name, position_en, category, display_order)
VALUES ('1', 'Dr. Sarah Johnson', 'Principal', 'administration', 1);
```

## 📚 Technology Stack

**Frontend:**
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons

**Backend:**
- Express.js
- SQLite (better-sqlite3)
- JWT (jsonwebtoken)
- bcryptjs
- Helmet.js

## ⚠️ Important Notes

1. **Database**: SQLite file is created on first run at `backend/database.db`
2. **Images**: Demo uses placeholder URLs; implement file upload for production
3. **Email**: Contact form doesn't send emails; integrate email service in production
4. **Payment**: Donate page is demo only; integrate Stripe/PayPal for real donations
5. **CORS**: Frontend/backend run on different ports; CORS is configured

## 🐛 Troubleshooting

**Port already in use?**
```bash
# Change in backend/.env
PORT=5001
```

**Build errors?**
```bash
# Clear caches
rm -rf frontend/.next backend/dist
npm install
```

**Database locked?**
```bash
# SQLite only allows one writer at a time
# Kill any running processes and restart
```

## 📄 License

This is an educational project. Adapt and use as needed for the Arab Episcopal School.

## 👥 Support

For issues or questions, refer to the original aeschool.org or contact the school directly.

---

**Built with ❤️ for Arab Episcopal School**

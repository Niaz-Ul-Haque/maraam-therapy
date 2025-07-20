# `Maraam` Haque Therapy Website

A professional, SEO-optimized, and fully accessible website for `Maraam` Haque, Registered Psychotherapist (Qualifying), specializing in `2SLGBTQIA`+ and neurodivergent affirming therapy.

## 🌟 Features

- **Fully Responsive Design** - Mobile-first approach with Tailwind CSS
- **SEO Optimized** - Meta tags, structured data, sitemap generation
- **AODA Level AA Compliant** - Full accessibility support
- **Admin Panel** - Secure blog post management with `Supabase`
- **Performance Optimized** - Code splitting, image optimization, caching
- **Modern Tech Stack** - React 18, TypeScript, `Vite`, `Supabase`

## 🏗️ Tech Stack

- **Frontend**: React 18 + TypeScript + `Vite`
- **Styling**: Tailwind CSS with custom design system
- **Backend**: `Supabase` (Authentication + Database + Storage)
- **Routing**: React Router v6
- **Forms**: React Hook Form + Yup validation
- **SEO**: React Helmet Async + Structured Data
- **Icons**: `Lucide` React

## 🚀 Quick Start

### Prerequisites

- Node.`js` 18+ 
- `npm` or yarn
- `Supabase` account

### 1. Clone and Install

```bash
# Create the project (as shown in the setup commands)
npm create vite@latest maraam-therapy-website -- --template react-ts
cd maraam-therapy-website

# Install dependencies
npm install @supabase/supabase-js react-router-dom react-helmet-async react-hook-form @hookform/resolvers yup lucide-react clsx

# Install dev dependencies  
npm install -D tailwindcss postcss autoprefixer @types/react-router-dom

# Initialize Tailwind
npx tailwindcss init -p
```

### 2. Replace Files

Replace the default `Vite` files with the provided code:

1. **Core Configuration**:
   - `tailwind.config.js`
   - `vite.config.ts`
   - `tsconfig.json`
   - `tsconfig.node.json`
   - `index.html`
   - `package.json`

2. **Source Code** (`src/` directory):
   - `main.tsx`
   - `App.tsx`
   - `index.css`
   - All components and pages as provided

3. **Public Files** (`public/` directory):
   - `robots.txt`

4. **Scripts** (`scripts/` directory):
   - `generate-sitemap.js`

### 3. `Supabase` Setup

#### A. Create `Supabase` Project

1. Go to [`supabase`.com](https://supabase.com)
2. Create a new project
3. Note your Project URL and API Key

#### B. Set Up Database

1. Go to the SQL Editor in your `Supabase` dashboard
2. Run the provided `supabase-setup.sql` script
3. This will create:
   - `posts` table with proper structure
   - Row Level Security policies
   - Storage bucket for images
   - Auto-slug generation functions

#### C. Create Admin User

1. Go to Authentication > Users in `Supabase` dashboard
2. Click "Invite User" 
3. Enter the admin email address
4. The user will receive an email to set their password
5. Once confirmed, they can log in at `/me/admin`

### 4. Environment Variables

Create `.env.local` file in the root directory:

```env
# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Site Configuration  
VITE_SITE_URL=http://localhost:5173
VITE_BOOKING_URL=https://healingpaththerapy.janeapp.com
```

### 5. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` to see the website.

## 📝 Admin Panel Usage

### Accessing Admin Panel

1. Navigate to `/me/admin`
2. Sign in with the admin email/password
3. You'll be redirected to the dashboard

### Managing Blog Posts

- **Create**: Click "Create New Post" button
- **Edit**: Click "Edit" button on any post
- **Delete**: Click "Delete" button (requires confirmation)
- **Preview**: Use "Show Preview" toggle when creating/editing

### Image Uploads

- Images are automatically uploaded to `Supabase` Storage
- Supported formats: JPEG, PNG
- Recommended size: 1200x600px or larger
- Images are automatically optimized for web

## 🎨 Design System

### Colors

- **Sage Green**: Primary brand color (#5a7a5a)
- **Teal**: Secondary accent (#14b8a6) 
- **Terracotta**: Warm accent (#d97434)
- **Stone**: Neutral backgrounds (#f5f5f4)

### Typography

- **Headings**: Lora (serif)
- **Body**: Inter (sans-serif)

### Components

All components follow the design system and include:
- Proper ARIA labels
- Keyboard navigation
- Focus indicators
- Responsive design

## 🔧 Customization

### Adding New Pages

1. Create component in `src/pages/`
2. Add route in `src/App.tsx`
3. Add navigation link in `src/components/Layout.tsx`
4. Update sitemap generator if needed

### Modifying Styles

- Edit `tailwind.config.js` for design tokens
- Modify `src/index.css` for global styles
- Component styles use Tailwind classes

### SEO Updates

- Edit meta tags in `index.html`
- Update structured data in `src/components/SEO.tsx`
- Regenerate sitemap after adding pages

## 📊 SEO & Performance

### SEO Features

- **Meta Tags**: Dynamic titles, descriptions, keywords
- **Open Graph**: Social media previews
- **Structured Data**: JSON-LD for search engines
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Search engine directives

### Performance Features

- **Code Splitting**: Automatic by `Vite`
- **Lazy Loading**: Dynamic imports for routes
- **Image Optimization**: `Supabase` handles resizing
- **Caching**: Browser caching headers
- **Compression**: Gzip compression in production

### Generate Sitemap

```bash
node scripts/generate-sitemap.js
```

## 🔒 Security

### Authentication

- `Supabase` handles secure authentication
- JWT tokens with automatic refresh
- Row Level Security on database

### Content Security

- Input validation with Yup schemas
- XSS protection via React
- CSRF protection via `Supabase`

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deployment Options

**`Vercel`** (Recommended):
1. Connect GitHub repository
2. Add environment variables
3. Deploy automatically

**`Netlify`**:
1. Connect repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add environment variables

**Other Platforms**:
- Upload `dist/` folder contents
- Ensure environment variables are set
- Configure redirects for SPA routing

### Post-Deployment

1. Update `VITE_SITE_URL` in environment variables
2. Generate and upload sitemap
3. Submit sitemap to Google Search Console
4. Set up Google Analytics (optional)

## 🔍 Monitoring & Analytics

### Recommended Tools

- **Google Search Console**: Monitor SEO performance
- **Google Analytics**: Track user behavior
- **`Supabase` Analytics**: Monitor database usage
- **`Vercel` Analytics**: Monitor website performance

## 🐛 Troubleshooting

### Common Issues

**`Supabase` Connection Error**:
- Verify environment variables
- Check `Supabase` project status
- Ensure RLS policies are correctly set

**Image Upload Fails**:
- Check storage bucket permissions
- Verify file size limits
- Ensure correct MIME types

**Build Errors**:
- Clear node_modules and reinstall
- Check TypeScript errors
- Verify all imports are correct

**Admin Login Issues**:
- Verify user is confirmed in `Supabase`
- Check authentication policies
- Ensure correct email/password

### Support

For technical issues:
1. Check the console for error messages
2. Verify `Supabase` configuration
3. Review the setup steps
4. Check environment variables

## 📄 License

This project is proprietary and confidential. All rights reserved.

## 🙏 Acknowledgments

- **Their Collective** - Network of `2SLGBTQIA`+ and neurodivergent practitioners
- **`Supabase`** - Backend as a Service platform
- **Tailwind CSS** - Utility-first CSS framework
- **React** - UI library
- **`Vite`** - Build tool

---

## 📞 Contact

For questions about this implementation, please contact the development team.

**Important**: This website contains no emergency contact features. Users in crisis are directed to appropriate emergency services.
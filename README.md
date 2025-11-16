# Nexgen Energia Website

A Next.js website for Nexgen Energia - India's fastest-growing renewable energy company. Features contact forms, franchise applications, and real-time data syncing with Google Sheets.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Set up environment variables (see below)
# Copy .env.example to .env.local and fill it in

# Set up database
npm run db:push

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📋 What You Need

### 1. Environment Variables

Create a `.env.local` file in the project root:

```env
# Database (Neon Postgres)
DATABASE_URL="postgresql://user:password@host/database?sslmode=require"

# Google Sheets (optional - for contact form real-time viewing)
GOOGLE_SHEET_ID="your-sheet-id"
GOOGLE_SHEET_RANGE="Sheet1!A:F"
```

### 2. Database Setup

1. Get your PostgreSQL connection string from Neon (or any Postgres provider)
2. Add it to `.env.local` as `DATABASE_URL`
3. Run `npm run db:push` to create the database tables

### 3. Google Sheets Setup (Optional)

If you want contact form submissions to show up in a Google Sheet:

1. Create a Google Cloud project and enable Sheets API
2. Create a service account and download the JSON key
3. Place `google-service-account.json` in the project root
4. Share your Google Sheet with the service account email (Editor access)
5. Add `GOOGLE_SHEET_ID` and `GOOGLE_SHEET_RANGE` to `.env.local`

**Note:** Contact forms save to the database regardless. Google Sheets is just for convenient viewing.

## 🛠️ Available Commands

```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Start production server
npm run db:push      # Push schema to database
npm run db:studio    # Open Prisma Studio (database GUI)
npm run db:generate  # Generate Prisma Client
```

## 📁 Project Structure

```
├── prisma/
│   └── schema.prisma      # Database models
├── src/
│   ├── app/
│   │   ├── api/           # API routes
│   │   ├── contact/       # Contact page
│   │   └── page.tsx       # Homepage
│   └── lib/
│       ├── prisma.ts      # Prisma client
│       └── googleSheets.ts # Google Sheets helper
└── public/                # Static assets
```

## 🎯 Features

- **Contact Form** - Saves to database + Google Sheets
- **Franchise Applications** - Saves to database
- **Responsive Design** - Works on all devices
- **Form Validation** - Client and server-side validation

## 🚢 Deployment (Vercel)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard:
   - `DATABASE_URL`
   - `GOOGLE_SHEET_ID` (optional)
   - `GOOGLE_SHEET_RANGE` (optional)
   - `GOOGLE_SERVICE_ACCOUNT_JSON` (for Google Sheets, paste entire JSON as single line)

That's it! Vercel will handle the rest.

## 🔒 Security Notes

- Never commit `.env.local` or `google-service-account.json`
- Keep your database credentials secure
- Service account should only have access to the specific Google Sheet

## 📚 Tech Stack

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Prisma** - Database ORM
- **PostgreSQL** - Database
- **Google Sheets API** - Real-time form viewing

---

**Need help?** Check the code comments or open an issue. Happy coding! 🎉

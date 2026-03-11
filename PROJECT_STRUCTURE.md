# AlgoMinds LLC Website - Project Structure Guide

## 📋 Overview

This is a **Next.js 16** web application for AlgoMinds LLC, a technology consulting company. Built with modern React, TypeScript, and Tailwind CSS, it features a responsive design with comprehensive UI components from Radix UI.

**Tech Stack:**
- Framework: Next.js 16.0.10
- Language: TypeScript
- Styling: Tailwind CSS + PostCSS
- UI Components: Radix UI
- Forms: React Hook Form
- Icons: Lucide React
- Hosting: Netlify
- Package Manager: pnpm

---

## 📁 Directory Structure

### Root Level Configuration Files

```
├── package.json              # Project dependencies and npm scripts
├── pnpm-lock.yaml           # Locked dependencies for pnpm
├── tsconfig.json            # TypeScript configuration
├── next.config.mjs          # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── postcss.config.mjs       # PostCSS configuration for CSS processing
├── components.json          # Component library configuration
├── netlify.toml             # Netlify deployment configuration
├── next-env.d.ts            # Next.js TypeScript definitions
├── PROJECT_STRUCTURE.md     # This file - project documentation
```

---

## 📂 Main Directories

### 1. **`app/`** - Next.js App Router (Pages & Layout)
The core application structure using Next.js 13+ App Router pattern.

```
app/
├── layout.tsx               # Root layout wrapper (header, footer, providers)
├── page.tsx                 # Homepage component
├── globals.css              # Global styles
├── sitemap.ts               # SEO sitemap generation
├── about/
│   └── page.tsx             # About page
├── contact/
│   └── page.tsx             # Contact/inquiry page
├── engagement/
│   └── page.tsx             # Engagement/services page
├── portfolio/
│   └── page.tsx             # Portfolio/projects showcase
├── resources/
│   └── page.tsx             # Resources/documentation page
├── services/
│   └── page.tsx             # Services offerings page
└── solutions/
    └── page.tsx             # Solutions page
```

**Purpose:** Each directory represents a route. The `page.tsx` file is the component displayed for that route.

---

### 2. **`components/`** - Reusable React Components
Custom components built for the AlgoMinds website.

```
components/
├── awards-section.tsx       # Awards & recognition display
├── footer.tsx               # Website footer component
├── hero.tsx                 # Hero section (original version)
├── hero-redesigned.tsx      # Hero section (updated design)
├── navigation.tsx           # Main navigation/header
├── portfolio-section.tsx    # Portfolio projects showcase
├── process-section.tsx      # Company process/workflow
├── services-section.tsx     # Services overview
├── solutions-carousel.tsx   # Solutions carousel display
├── stats-section.tsx        # Statistics/metrics display
├── theme-provider.tsx       # Dark/light theme provider
├── why-choose.tsx           # Why choose us section
└── ui/                      # Shadcn/Radix UI Components
    ├── accordion.tsx
    ├── alert-dialog.tsx
    ├── alert.tsx
    ├── avatar.tsx
    ├── badge.tsx
    ├── button.tsx
    ├── card.tsx
    ├── carousel.tsx
    ├── chart.tsx
    ├── checkbox.tsx
    ├── dialog.tsx
    ├── dropdown-menu.tsx
    ├── form.tsx
    ├── input.tsx
    ├── label.tsx
    ├── pagination.tsx
    ├── popover.tsx
    ├── progress.tsx
    ├── select.tsx
    ├── separator.tsx
    ├── sheet.tsx
    ├── sidebar.tsx
    ├── skeleton.tsx
    ├── slider.tsx
    ├── spinner.tsx
    ├── switch.tsx
    ├── table.tsx
    ├── tabs.tsx
    ├── textarea.tsx
    ├── toast.tsx
    ├── toaster.tsx
    ├── tooltip.tsx
    ├── use-mobile.tsx       # Mobile detection hook
    └── use-toast.ts         # Toast notification hook
```

**Purpose:** 
- Root-level components are custom business components
- `ui/` folder contains reusable UI components (buttons, modals, inputs, etc.) from Radix UI

---

### 3. **`hooks/`** - Custom React Hooks
Reusable React hooks for common functionality.

```
hooks/
├── use-mobile.ts            # Detect if user is on mobile device
└── use-toast.ts             # Toast notification management
```

---

### 4. **`lib/`** - Utility Functions & Helpers
Shared utility functions across the application.

```
lib/
└── utils.ts                 # Common utility functions (cn for className merging, etc.)
```

---

### 5. **`styles/`** - Global Stylesheets
Global CSS styling.

```
styles/
└── globals.css              # Global styles for the entire application
```

---

### 6. **`public/`** - Static Assets
Static files served directly by the web server.

```
public/
├── robots.txt               # SEO robot instructions
├── site.webmanifest         # PWA manifest file
└── videos/                  # Video assets
```

---

### 7. **`netlify/`** - Netlify Functions
Serverless backend functions (Node.js APIs).

```
netlify/
└── functions/               # Netlify serverless functions for backend APIs
```

---

## 🔄 Key File Relationships

### Page Flow Example
```
app/page.tsx (Homepage)
    ├── imports → components/navigation.tsx
    ├── imports → components/hero-redesigned.tsx
    ├── imports → components/services-section.tsx
    ├── imports → components/portfolio-section.tsx
    ├── imports → components/why-choose.tsx
    ├── imports → components/stats-section.tsx
    ├── imports → components/awards-section.tsx
    ├── imports → components/footer.tsx
    └── imports → app/layout.tsx (for theme provider)
```

### Component Composition
```
components/ui/ (Base UI components)
    ↑
    │ (imported by)
    │
components/* (Custom business components)
    ↑
    │ (imported by)
    │
app/page.tsx & app/*/page.tsx (Page components)
```

---

## 🚀 Getting Started

### Available Scripts

```bash
# Development server (runs on http://localhost:3000)
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Run linter
pnpm lint
```

### Development Workflow
1. Create new pages in `app/` directory (e.g., `app/new-page/page.tsx`)
2. Build reusable components in `components/`
3. Use UI components from `components/ui/` as building blocks
4. Add styles using Tailwind CSS classes
5. Create utilities in `lib/utils.ts` for shared functions

---

## 🎨 Styling System

- **Tailwind CSS**: Utility-first CSS framework
- **Dark Mode**: Managed via `theme-provider.tsx` using `next-themes`
- **Class Merging**: Use `cn()` utility from `lib/utils.ts` to merge className strings

Example:
```typescript
import { cn } from "@/lib/utils"

export function MyComponent({ className }) {
  return <div className={cn("p-4 rounded-lg", className)}>Content</div>
}
```

---

## 📦 Key Dependencies

| Package | Purpose |
|---------|---------|
| `next` | React framework for production |
| `react` | UI library |
| `typescript` | Static type checking |
| `tailwindcss` | Utility CSS framework |
| `@radix-ui/*` | Accessible UI components |
| `@hookform/resolvers` | Form validation resolvers |
| `lucide-react` | Icon library |
| `next-themes` | Dark mode management |
| `@vercel/analytics` | Performance monitoring |
| `clsx` | Conditional className helper |

---

## 🔍 TypeScript Configuration

- **Path Alias**: `@/*` maps to root directory for clean imports
- Example: `import { Button } from "@/components/ui/button"`

---

## 🌐 Routing Structure

| Route | File | Purpose |
|-------|------|---------|
| `/` | `app/page.tsx` | Homepage |
| `/about` | `app/about/page.tsx` | Company information |
| `/services` | `app/services/page.tsx` | Service offerings |
| `/solutions` | `app/solutions/page.tsx` | Solutions page |
| `/portfolio` | `app/portfolio/page.tsx` | Project showcase |
| `/engagement` | `app/engagement/page.tsx` | Engagement options |
| `/resources` | `app/resources/page.tsx` | Documentation/resources |
| `/contact` | `app/contact/page.tsx` | Contact form |

---

## 📱 Responsive Design

The project uses Tailwind CSS responsive breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

Use mobile detection hook in components:
```typescript
import { useIsMobile } from "@/hooks/use-mobile"

export function MyComponent() {
  const isMobile = useIsMobile()
  return <div>{isMobile ? <MobileView /> : <DesktopView />}</div>
}
```

---

## 🚀 Deployment

**Hosting:** Netlify (configured via `netlify.toml`)

**Build Command:** `pnpm build`
**Start Command:** `pnpm start`

---

## 💡 Best Practices

1. **Component Organization**: Place reusable components in `components/` and page-specific components in their respective directories
2. **Styling**: Use Tailwind CSS classes; avoid custom CSS when possible
3. **Imports**: Use path alias `@/` for cleaner imports
4. **Type Safety**: Always use TypeScript types for props and data
5. **Code Reusability**: Extract common logic into hooks (`hooks/`) and utilities (`lib/`)
6. **UI Components**: Build on top of `components/ui/` components for consistency

---

## 📝 Notes

- The project uses `pnpm` as the package manager (faster than npm)
- TypeScript build errors are ignored in `next.config.mjs` (can be configured)
- All UI components are pre-built and ready to use from `components/ui/`
- The site is optimized for performance with image optimization and CSS compression

---

**Last Updated:** February 2026
**Project Version:** 0.1.0

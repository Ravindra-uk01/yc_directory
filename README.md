
# YC Directory

**A platform for startup founders to pitch ideas and connect with others. Deployed at [https://yc-directory-rv.vercel.app/](https://yc-directory-rv.vercel.app/)**

---

## Overview

YC Directory is a community-driven platform where startup founders and innovators can pitch their ideas, discover new ventures, and connect with like-minded individuals. Users can log in with their GitHub account (via NextAuth), create and view startup pitches, and interact with the community. The platform leverages modern web technologies for a seamless, secure, and scalable experience.

---

## Features

- **User Authentication:** Sign in with GitHub using NextAuth.
- **Pitch Creation:** Users can create, edit, and publish their startup pitches.
- **Pitch Discovery:** Browse and explore pitches from the community.
- **Modern Stack:** Built with Next.js (App Router), Sanity CMS, and Tailwind CSS.
- **Monitoring:** Integrated Sentry for real-time error monitoring and analytics.
- **Rich Editing:** Markdown-powered content editing for pitch descriptions.

---

## Tech Stack

| Layer         | Technology/Package         |
|---------------|---------------------------|
| Frontend      | Next.js, React, Tailwind CSS, Radix UI, Lucide Icons, Sonner, Next-Themes |
| Backend/Data  | Sanity CMS                |
| Auth          | NextAuth (GitHub provider)|
| Monitoring    | Sentry                    |
| Markdown      | react-md-editor, markdown-it |
| Deployment    | Vercel                    |

---

## Getting Started

### Prerequisites

- **Node.js** (latest LTS recommended)
- **npm** (comes with Node.js)
- **GitHub account** (for authentication)
- **Sanity account** (for content management)

### Installation

1. **Clone the repository**

   ```bash
   git clone 
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory and add the following:

   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
   NEXT_PUBLIC_SANITY_DATASET=your-dataset
   GITHUB_CLIENT_ID=your-github-client-id
   GITHUB_CLIENT_SECRET=your-github-client-secret
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret
   NEXT_PUBLIC_SENTRY_DSN=your-sentry-dsn
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Run Sanity Studio (optional)**

   If you want to manage content locally, navigate to the Sanity Studio directory and run:

   ```bash
   sanity start
   ```

   Open [http://localhost:3333](http://localhost:3333) to access the CMS.

---

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

**Deployed site:** [https://yc-directory-rv.vercel.app/](https://yc-directory-rv.vercel.app/)

---

## Monitoring

Sentry is integrated for real-time error monitoring and performance analytics. All errors and issues are logged and can be reviewed in your Sentry dashboard.

---

## Project Structure

- **`app/`:** Next.js app directory with page routes and layouts.
- **`sanity/`:** Sanity Studio configuration and content schemas.
- **`.env.local`:** Environment variables for local development.
- **`public/`:** Static assets.

---

## Scripts

| Script      | Description                                   |
|-------------|-----------------------------------------------|
| `npm run dev` | Starts the development server                |
| `npm run build` | Builds the app for production               |
| `npm run start` | Starts the production server                |
| `npm run lint` | Runs ESLint for code quality checks         |
| `npm run typegen` | Generates TypeScript types from Sanity schema |

---

## Learn More

- **Next.js Documentation:** [https://nextjs.org/docs](https://nextjs.org/docs)
- **Next.js GitHub:** [https://github.com/vercel/next.js](https://github.com/vercel/next.js)
- **Sanity Documentation:** [https://www.sanity.io/docs](https://www.sanity.io/docs)
- **NextAuth Documentation:** [https://next-auth.js.org/](https://next-auth.js.org/)
- **Sentry for Next.js:** [https://docs.sentry.io/platforms/javascript/guides/nextjs/](https://docs.sentry.io/platforms/javascript/guides/nextjs/)

---

## Feedback and Contributions

Your feedback and contributions are welcome! Please open an issue or submit a pull request on GitHub.

---

**Happy pitching! 🚀**
Made with ❤️ by Ravindra Singh Rayal

[1] https://github.com/sanity-io/next-sanity
[2] https://github.com/sanity-io/sanity-template-nextjs-clean/blob/main/README.md
[3] https://github.com/sanity-io/example-frontend-next-js/blob/master/README.md
[4] https://github.com/hafffe/nextjs-sanity-template/blob/main/readme.md
[5] https://github.com/sanity-io/sanity-template-nextjs-blog-comments/blob/main/README.md
[6] https://www.sanity.io/plugins/next-auth-sanity
[7] https://www.sanity.io/docs/developer-guides/create-your-own-sanity-template
[8] https://github.com/sanity-io/sanity-template-nextjs-vercel-basic
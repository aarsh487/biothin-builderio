# 🧱 Builder.io + Next.js Website

This project is a fully customizable, performant website built using **Next.js** and **Builder.io**. It features editable pages and reusable components designed for seamless visual editing by non-developers.

## 🌐 Live Routes

| Route         | Description                 |
|---------------|-----------------------------|
| `/`           | Home page (editable via Builder.io) |
| `/posts`      | Blog listing page with pagination, search, filters |
| `/post/:slug` | Dynamic blog detail page    |

---

## 🛠️ Tech Stack

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Builder.io SDK**
---

## 📦 Custom Builder.io Components

The following components are registered as **Builder.io blocks**, allowing them to be dragged, dropped, and customized visually:

| Component         | Description |
|-------------------|-------------|
| `HeroSection`     | Full-width banner with title, subtitle, CTA |
| `Testimonials`    | Customer feedback carousel or grid |
| `ProductTeaser`   | Highlighted product or offer |
| `ProductList`     | Grid of featured products |
| `PostList`        | Paginated list of blog posts with tags, avatars |
| `ContactForm`     | Builder-integrated form for contact |
| `ImageGallery`    | Lightbox-enabled image collection |
| `TextBlock`       | Rich-Text Block |
| `PostQuote`       | Image with Quote Text |
| `RelatedPost`     | Related Posts Grid |



> 💡 All components are fully customizable from Builder.io and support dynamic props and bindings.

---

## 🧩 Builder Setup

1. [Create a Builder.io Account](https://builder.io)
2. Connect your space to this Next.js project
3. Register components inside `/components/builder/` using the `Builder.registerComponent()` API
4. Pages can be edited visually through Builder and rendered dynamically via `/page.tsx`

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/your-org/your-builderio-project.git
cd your-builderio-project

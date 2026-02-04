---
title: 'My First Blog Post'
description: 'This is my first blog post written in Astro. It is currently in draft mode and will only be visible in development.'
pubDate: 2024-02-04
draft: true
---

# Welcome to My Blog

This is my first blog post! Since this post has `draft: true` in its frontmatter, it will only be visible when running in development mode (`npm run dev`).

## How Draft Mode Works

- **Development mode**: All posts are visible, including drafts
- **Production mode**: Only posts with `draft: false` (or no draft field) are shown

## Writing Content

You can write your blog posts using Markdown. Here are some examples:

### Code Blocks

```javascript
const greeting = 'Hello, World!';
console.log(greeting);
```

### Lists

- Item one
- Item two
- Item three

### Emphasis

You can write in **bold** or *italic* text.

---

When you're ready to publish this post, simply change `draft: true` to `draft: false` in the frontmatter!

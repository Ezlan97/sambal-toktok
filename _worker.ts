import { Hono } from 'hono';

const app = new Hono();

// Handle our API routes
app.get('/api', (c) => {
  return c.text('Hello from Hono!');
});

// Fallback to let Cloudflare Pages handle static assets
app.get('*', (c) => {
  return c.env.ASSETS.fetch(c.req.raw);
});

export default app;
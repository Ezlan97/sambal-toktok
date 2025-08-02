import { Hono } from 'hono';
import { serveStatic } from 'hono/cloudflare-workers';

const app = new Hono();

// API routes
app.get('/api', (c) => {
  return c.text('Hello from Hono!');
});

// Serve static assets from the root
app.use('/*', serveStatic({ root: './' }))

export default app;
import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => c.text('Hello Hono!'))

app.get('health', (c) => c.json({
  status: 'ok',
  message: 'Hono is healty',
  environment: process.env.NODE_ENV,
}))

export default app

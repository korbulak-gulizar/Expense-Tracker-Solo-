import express from 'express'
import cors from 'cors'

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Sample routes
app.get('/user', (req, res) => {
  console.log(req.query)
  res.send('User endpoint çalıştı')
})

app.get('/', (req, res) => {
  res.send('Hello World')
})

// Health check (görevde zorunlu)
app.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})

export default app

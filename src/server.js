import express from 'express'
import cors from 'cors'
import pino from 'pino-http'

import { getEnvVariable } from './utils/env.js'
import { notFoundHandler } from './middlewares/notFoundHandler.js'
import { errorHandler } from './middlewares/errorHandler.js'
import { getAllUsers } from './services/users.js'

const PORT = Number(getEnvVariable('PORT', 3002))

export const startServer = () => {
  const app = express()

  app.use(express.json())
  app.use(cors())

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  )

  app.get('/users', async (req, res) => {
    const users = await getAllUsers()

    res.status(200).json({
      data: users,
    })
  })

  app.get('/', (req, res) => {
    res.send('Hello World')
  })

  app.get('/health', (req, res) => {
    res.json({ status: 'ok' })
  })

  app.use(notFoundHandler)
  app.use(errorHandler)

  app.listen(PORT, () => {
    console.log(`Server is running on: ${PORT}`)
  })
}

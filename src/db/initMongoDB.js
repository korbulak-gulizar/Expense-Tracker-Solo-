import moongoose from 'mongoose'
import { getEnvVariable } from '../utils/env.js'

export const initMongoDB = async () => {
  try {
    const user = getEnvVariable('MONGODB_USER')
    const password = getEnvVariable('MONGODB_PASSWORD')
    const url = getEnvVariable('MONGODB_URL')
    const dbName = getEnvVariable('MONGODB_DB')

    const connectionString = `mongodb+srv://${user}:${password}@${url}/${dbName}?retryWrites=true&w=majority`

    await moongoose.connect(connectionString)
    console.log('Connected to MongoDB successfully.')
  } catch (error) {
    console.error('Error connecting to MongoDB:', error)
    throw error
  }
}

import dotenv from 'dotenv'

dotenv.config()

export function getEnvVariable(name, defaultValue) {
  const value = process.env[name]

  if (value) return value

  if (defaultValue) return defaultValue

  throw new Error(`Environment variable ${name} is not defined and no default value provided.`)
}

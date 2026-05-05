import { UserCollection } from '../db/models/User.js'

export const getAllUsers = async () => {
  const users = await UserCollection.find()
  return users
}

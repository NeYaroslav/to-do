import express from "express";
import { getUserById, getUserByUsername, insertUser } from '../database/usersTable.js'
import bcrypt from 'bcrypt'

const usersRotue = express.Router('/')

usersRotue.post('/', async (req, res) => {
  try {
    const {username, name, password} = req.body
    if([username, name, password].includes(undefined)) {
      return res.status(400).json({message: 'username, name, password fields required'})
    }
    const hashedPassword = bcrypt.hashSync(password, 10)
    const result = await insertUser(username, name, hashedPassword)

    if(Array.isArray(result)) {
      return res.json(result)
    }

    res.status(400).json(result)

  } catch (error) {
    res.status(500).json(error)
  }
})

usersRotue.post('/login', async (req, res) => {
  try {
    const {username, password} = req.body
    if([username, password].includes(undefined)) {
      return res.status(400).json({message: 'username, password fields required'})
    }
    
    const [userWithSameUsername] = await getUserByUsername(username)
    
    if(userWithSameUsername == undefined) {
      return res.status(400).json({message: 'no users found'})
    }
    if(bcrypt.compareSync(password, userWithSameUsername.password) === false) {
      res.status(400).json({message: 'no users found with the password'})
    }
    const user = await getUserById(userWithSameUsername.id)
    res.json(user)
  } catch (error) {
    res.status(500).json(error)
  }
})
export default usersRotue
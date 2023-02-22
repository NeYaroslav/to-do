import express from 'express'
import usersRotue from './routes/users.js'
import { createUserTable } from './database/usersTable.js'

const app = express()

app.use(express.json())

app.use('/users', usersRotue)

app.listen(3008, () => {
  createUserTable()
  console.log(3008);
})

import pool from "./config.js"

export const createUserTable = async () => {
  await pool.query(`
    create table if not exists users(
      id int not null auto_increment,
      username varchar(100) not null unique,
      name varchar(100) not null,
      password varchar(150) not null,
      PRIMARY KEY(id)
    );
  `)
}
/**
 * 
 * @param {string} username
 * @param {string} name
 * @param {string} password 
 * @returns error object | {username, name, id}[]
 */
export const insertUser = async (username, name, password) => {
  try {
    const [res] = await pool.query(`
      insert into users(username, name, password) values(?,?,?);
    `, [username, name, password])

    const result = await getUserById(res.insertId)

    return result
  } catch (error) {
    return error
  }
}
/**
 * 
 * @param {strin} id 
 * @returns error object | {username, name, id}[]
 */
export const getUserById = async (id) => {
  try {
    let [result] = await pool.query(`
      select id, username, name from users where id=?
    `, [id])
    return result
  } catch (error) {
    return error
  }
}
/**
 * 
 * @param {string} username 
 * @returns error object | {id, password}[]
 */
export const getUserByUsername = async (username) => {
  try {
    let [result] = await pool.query(`
      select id, password from users where username=?
    `, [username])
    return result
  } catch (error) {
    return error
  }
}
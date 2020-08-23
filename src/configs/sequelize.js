import dotenv from 'dotenv'
dotenv.config()

module.exports = {
  database: process.env.db_name,
  username: process.env.db_user,
  password: process.env.db_password,
  host: process.env.db_host,
  port: process.env.db_port,
  dialect: 'mysql',
  define: {
    timestamps: false
  }
}
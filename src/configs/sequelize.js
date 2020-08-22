import dotenv from 'dotenv'
dotenv.config()

module.exports = {
  username: process.env.db_user,
  database: process.env.db_name,
  host: process.env.db_host,
  port: process.env.db_port,
  dialect: 'mysql',
  define: {
    timestamps: false
  }
}
import dotenv from 'dotenv'
dotenv.config()

import app from './app'

const port = process.env.port

const listener = app.listen(port, _ => console.info(`Server running on the port ${ port }`))
  .on('error', error => console.error(`on error handler: ${ error }`))

process.on('uncaughtException', error => console.error(`process.on handler: ${ error }`))

export default listener 
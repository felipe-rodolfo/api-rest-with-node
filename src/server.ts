import { env } from './env'
import { app } from './app'

app
  .listen({
    port: env.PORT,
    '0.0.0.0'
  })
  .then(() => {
    console.log('Server running at port: ' + env.PORT)
  })

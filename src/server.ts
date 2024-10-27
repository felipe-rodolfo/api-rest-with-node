import fastify from 'fastify'
import crypto from 'node:crypto'
import { knex } from './database'

const app = fastify()

app.get('/hello', async () => {
  const transaction = await knex('transactions')
    .select('*')
    .where('amount', 1000)
  return transaction
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Server listening on http://localhost:3333')
  })

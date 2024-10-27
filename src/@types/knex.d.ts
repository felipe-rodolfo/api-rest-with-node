import { knex } from 'knex'

declare module 'knex/types/tables' {
  export interface Tables {
    transations: {
      id: number
      title: string
      amount: number
      created_at: Date
      updated_at: Date
    }
  }
}

'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LikeSchema extends Schema {
  up () {
    this.create('likes', (table) => {
      table.increments()
      table.integer('product_id').unsigned().references('id').inTable('products').onUpdate('CASCADE').onDelete('CASCADE')
      table.integer('user_id').notNullable()
      table.boolean('is_like').defaultTo(true)
      table.timestamps()
    })
  }

  down () {
    this.drop('likes')
  }
}

module.exports = LikeSchema

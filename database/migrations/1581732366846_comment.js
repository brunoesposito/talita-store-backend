'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CommentSchema extends Schema {
  up () {
    this.create('comments', (table) => {
      table.increments()
      table.integer('product_id').unsigned().references('id').inTable('products').onUpdate('CASCADE').onDelete('CASCADE')
      table.integer('user_id').notNullable()
      table.string('comment', 1254).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('comments')
  }
}

module.exports = CommentSchema

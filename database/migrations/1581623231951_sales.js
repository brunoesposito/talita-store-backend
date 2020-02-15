'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SalesSchema extends Schema {
  up () {
    this.create('sales', (table) => {
      table.increments()
      table.string('product_name', 254).notNullable()
      table.string('product_price', 254).notNullable()
      table.string('received', 254).notNullable()
      table.string('change_money', 254).notNullable()
      table.string('type', 254).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('sales')
  }
}

module.exports = SalesSchema

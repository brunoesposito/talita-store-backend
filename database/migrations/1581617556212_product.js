'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductSchema extends Schema {
    up () {
        this.create('products', (table) => {
            table.increments()
            table.string('name', 254).notNullable()
            table.string('imagem', 254).notNullable()
            table.string('price', 254).notNullable()
            table.string('offer_price', 254)
            table.boolean('is_published').defaultTo(true)
            table.timestamps()
        });
    }

    down () {
        this.drop('products')
    }
}

module.exports = ProductSchema

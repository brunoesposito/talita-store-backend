'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {

  /**
   * @method sales
   *
   * @return {Object}
   */
  sales () {
    return this.hasMany('App/Models/Sale')
  }

  /**
   * @method likes
   *
   * @return {Object}
   */
  likes () {
    return this.hasMany('App/Models/Like')
  }

  /**
   * @method comments
   *
   * @return {Object}
   */
  comments () {
    return this.hasMany('App/Models/Comment')
  }
}

module.exports = Product

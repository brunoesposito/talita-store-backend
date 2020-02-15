'use strict'

const Product = use('App/Models/Product');

class ProductController {

    async create ({ auth, request, response }) {
        const { is_admin } = auth.current.user;
        
        if( is_admin == null || is_admin != 1 || is_admin == undefined ){
            return response.json({
                message: 'Permissão negada! Você nao é o administrador'
            });
        }

        const data = request.only(['name', 'imagem', 'price', 'offer_price']);
        const product = await Product.create(data);
        
        return product;
    }

    async show({ auth }) {
        const { is_admin } = auth.current.user;
        
        if( is_admin == null || is_admin != 1 || is_admin == undefined ){
            const products = await Product.query().whereNot({is_published: 0}).fetch();
            return products;
        }

        const AllProducts = await Product.all();
        return AllProducts;
        
    }

    async update({ auth, response, params, request }) {
        try {
            const { is_admin } = auth.current.user;

            if( is_admin == null || is_admin != 1 || is_admin == undefined ){
                return response.json({
                    message: 'Permissão negada! Você nao é o administrador'
                });
            }

            const { id } = params;
            const data = request.all();
            const product = await Product.findOrFail(id);
            
            product.merge(data);
            await product.save(data);

            return product;
        }catch {
            return response.json({
                message: 'Esse produto não existe!'
            });
        }
    }

    async remove({ auth, response, params, request }) {
        try {
            const { is_admin } = auth.current.user;

            if( is_admin == null || is_admin != 1 || is_admin == undefined ){
                return response.json({
                    message: 'Permissão negada! Você nao é o administrador'
                });
            }

            const { id } = params;
            const product = await Product.findOrFail(id);
            
            await product.delete();

            return response.json({
                message: 'Produto deletado com sucesso!'
            });
        }catch {
            return response.json({
                message: 'Esse produto não existe!'
            });
        }
    }

}

module.exports = ProductController

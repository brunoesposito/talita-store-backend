'use strict'

const Product = use('App/Models/Product');
const Like = use('App/Models/Like');
const Database = use('Database');

class LikeController {

    async create({ auth, request, params, response }) {
        try{
            const { id } = auth.current.user;
            const { is_like } = request.all();
            const product_id = params.ProductId;
            const findLike = await Like.query().where('product_id', product_id).where('user_id', id).fetch();
            
            if( JSON.stringify(findLike).length <= 2 ){
                const product = await Product.findOrFail(product_id);
                const like = await product.likes().create({
                    user_id: id,
                    is_like
                });
                
                return like
            }
            
            await Like.query().where('product_id', product_id).where('user_id', id).update({ is_like })
            return response.json({
                message: 'Like registrado com sucesso'
            });

        }catch(err) {
            return err
            return response.json({
                message: 'Erro ao registrar o like, tente novamente mais tarde'
            });
        }
    }

    async show({ auth, request, params, response }){
        try{
            const { id } = auth.current.user;
            const product_id = params.ProductId;
            const findLike = await Like.query().where('product_id', product_id).where('user_id', id).fetch();
            
            return findLike

        }catch {
            return response.json({
                message: 'Erro ao registrar o like, tente novamente mais tarde'
            });
        }
    }

}

module.exports = LikeController

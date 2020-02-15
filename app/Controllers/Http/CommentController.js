'use strict'

const Product = use('App/Models/Product');
const Comment = use('App/Models/Comment');

class CommentController {

    async create({ auth, request, params, response }) {
        try{
            const { id } = auth.current.user;
            const { comment } = request.all();
            const product_id = params.ProductId;
            const product = await Product.findOrFail(product_id);
            const getComment = await product.comments().create({
                user_id: id,
                comment
            });
            
            return getComment

        }catch {
            return response.json({
                message: 'Erro ao registrar o comentário, tente novamente mais tarde'
            });
        }
    }

    async show({ auth, params }){ 
        try{
            const { id } = auth.current.user;
            const product_id = params.ProductId;
            const findComment = await Comment.query().where('product_id', product_id).where('user_id', id).fetch();

            return findComment
        }catch {
            return response.json({
                message: 'Nenhum comentário foi encontrado!'
            });
        }
    }

    async showAll({ auth, params }){ 
        try{
            const { is_admin, id } = auth.current.user;

            if( is_admin == null || is_admin != 1 || is_admin == undefined ){
                return response.json({
                    message: 'Permissão negada! Você nao é o administrador'
                });
            }

            const product_id = params.ProductId;
            const findComment = await Comment.query().where('product_id', product_id).whereNot('user_id', id).fetch();

            return findComment
        }catch {
            return response.json({
                message: 'Nenhum comentário foi encontrado!'
            });
        }
    }

    async remove({ response, params, request }) {
        try {
            const { CommentId } = params;
            const comment = await Comment.findOrFail(CommentId);
            
            await comment.delete();

            return response.json({
                message: 'Comentário deletado com sucesso!'
            });
        }catch {
            return response.json({
                message: 'Esse comentário não existe!'
            });
        }
    }

}

module.exports = CommentController

'use strict'

const Sale = use('App/Models/Sale');

class SaleController {

    async create({ auth, response, request }) {
        try {
            const { is_admin } = auth.current.user;

            if( is_admin == null || is_admin != 1 || is_admin == undefined ){
                return response.json({
                    message: 'Permissão negada! Você nao é o administrador'
                });
            }

            const data = request.all();
            const sales = await Sale.create(data);

            return sales;
        }catch {
            return response.json({
                message: 'Esse produto não existe!'
            });
        }
    }

    async show({ auth, response, request }) {
        try {
            const { is_admin } = auth.current.user;

            if( is_admin == null || is_admin != 1 || is_admin == undefined ){
                return response.json({
                    message: 'Permissão negada! Você nao é o administrador'
                });
            }

            const sales = await Sale.all();

            return sales;
        }catch {
            return response.json({
                message: 'Não encontramos nenhuma venda!'
            });
        }
    }

}

module.exports = SaleController

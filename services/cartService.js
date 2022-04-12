const cartDao = require('../models/cartDao')

const addCart = async(product_id) => {
	await cartDao.addCart(product_id)
	return;
}

module.exports = {addCart}
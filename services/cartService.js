const cartDao = require('../models/cartDao')

const addCart = async(product_id) => {
    console.log("Service!");
	await cartDao.addCart(product_id)
	return;
}

module.exports = {addCart}
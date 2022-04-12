const cartService = require('../services/cartService')

// webucks 의 getProduct 를 가져온 상태
const addCart = async (req, res) => {
	try {
      const { product_id } = req.body
      const cart = await cartService.addCart(product_id)

		res.status(200).json({ message: cart })
	} catch (err) {
    console.log(err)
    return res.status(err.statusCode || 500).json({ message: err.message })
  }
}

module.exports = {addCart};
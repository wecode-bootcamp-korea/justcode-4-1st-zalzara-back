const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const addCart = async(product_id) => {
    return await prisma.$queryRaw`
        INSERT INTO shopcarts (quantity, product_id)
        VALUES (1, ${product_id});
    `
  }

module.exports = {addCart}
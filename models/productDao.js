const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const allCategories = async () => {
  return await prisma.category.findMany();
};

const productsByCategory = async (category) => {
  return await prisma.$queryRaw`select p.id, p.name, JSON_ARRAYAGG(JSON_OBJECT(size,price)) as prices , image_url as imageUrl from product_size join sizes on size_id=sizes.id join products as p on p.id=product_id join categories as c on c.id=p.category_id join images on images.product_id=p.id where c.name=${category}  group by p.id, p.name, image_url;`;
};

const fillCartTable = async (id) => {
  return await prisma.$queryRaw`insert into  shopcarts (quantity, product_id) values(1, ${id});`;
};

module.exports = { allCategories, productsByCategory, fillCartTable };

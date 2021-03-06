const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const allCategories = async () => {
  return await prisma.category.findMany();
};

const productsByCategory = async (category) => {
  return await prisma.$queryRaw`select p.id, p.name, JSON_ARRAYAGG(JSON_OBJECT(size,price)) as prices , image_url as imageUrl from product_size join sizes on size_id=sizes.id join products as p on p.id=product_size.product_id join categories as c on c.id=p.category_id join images on images.product_id=p.id where c.name=${category}  group by p.id, p.name, image_url;`;
};

const findById = async (id) => {
  return await prisma.$queryRaw`select p.id, p.name, description, uid as product_number, JSON_ARRAYAGG(JSON_OBJECT(size,price)) as price, image_url as imageUrl from products as p join product_size as ps on ps.product_id=p.id join sizes on sizes.id=ps.size_id join images on images.product_id=p.id where p.id=${id} group by p.id, p.name, images.id;`;
};

const fillCartTable = async (id) => {
  return await prisma.$queryRaw`insert into  shopcarts (quantity, product_id) values(1, ${id});`;
};

module.exports = { allCategories, productsByCategory, findById, fillCartTable };

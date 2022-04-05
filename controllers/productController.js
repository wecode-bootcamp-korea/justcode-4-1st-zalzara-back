const showCategories = (req, res) => {
  console.log("Categories");
};

const showList = (req, res) => {
  const { category } = req.params;

  console.log(category);
};

const showDetail = (req, res) => {
  const { id } = req.params;
  console.log(id);
};

module.exports = { showDetail, showList, showCategories };

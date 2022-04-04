const showDetail = (req, res) => {
  const { id } = req.params;
  console.log(id);
};

const showCategory = (req, res) => {
  const { id } = req.params;

  console.log(id);
};

module.exports = { showDetail, showCategory };

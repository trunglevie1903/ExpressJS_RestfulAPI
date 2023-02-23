const getOffset = (currentPage = 1, listPerPage) => {
  return [listPerPage] * (currentPage - 1);
};

const emptyOrRows = (rows) => {
  return ((!rows) ? [] : rows);
};

module.exports = {
  getOffset, emptyOrRows
}
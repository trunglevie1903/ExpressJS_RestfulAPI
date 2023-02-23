const getHomePage = (req, res, next) => {
  return res.status(200).json({ message: "Welcome to my website, user!" });
};

module.exports = {
  getHomePage
};
const pattern = require("pattern-package");

const generatePattern = (req, res) => {
  try {
    const count = req.query.count;
    if (!count) {
      throw {
        message: "Count is required.",
      };
    }
    const getPattern = pattern.generatePattern();
    res.json({
      data: pattern.generatePattern(count),
    });
  } catch (error) {
    console.log(error);
    res.status(501).json({
      error: error,
    });
  }
};

module.exports = {
  generatePattern,
};

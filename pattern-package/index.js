const generatePattern = (patternCount) => {
  try {
    if (patternCount > 20) {
      throw {
        message: "Count must be less 20.",
      };
    }
    const arr = [];
    for (let i = 0; i < patternCount; i++) {
      let str = "";
      for (let j = 0; j < i; j++) {
        str += "*";
      }
      arr.push(str);
    }
    for (let i = patternCount; i > 0; i--) {
      let str = "";
      for (let j = 0; j < i; j++) {
        str += "*";
      }
      arr.push(str);
    }
    return arr;
  } catch (error) {
    return error;
  }
};

module.exports = { generatePattern };

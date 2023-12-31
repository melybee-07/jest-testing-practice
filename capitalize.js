const capitalize = (string) => {
  if (typeof string !== "string") {
    throw new Error("Input should be a string");
  }
  if (string.length === 0) {
    return string;
  }
  return string[0].toUpperCase() + string.slice(1);
};

module.exports = capitalize;

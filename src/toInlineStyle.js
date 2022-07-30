const toInlineStyle = (obj = {}) => {
  let inlineStyle = "";

  Object.keys(obj).forEach((capitalName) => {
    let value = obj[capitalName];
    const name = toCebabCase(capitalName);

    if (typeof value === "number" && value !== 0) {
      value = value + "px";
    } else if (Array.isArray(value)) {
      value = value
        .map((val) => {
          if (typeof val === "number" && val !== 0) {
            return val + "px";
          }
          return val;
        })
        .join(" ");
    }

    inlineStyle += `${name}:${value};`;
  });
  return inlineStyle;
};

const toCebabCase = (string) =>
  string
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/\s+/g, "-")
    .toLowerCase();

export default toInlineStyle;

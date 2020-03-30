const { re } = require("re-template-tag");
const balancedMatch = require("balanced-match");

const findAll = (name, text) => {
  const found = [];
  const start = re`/\x1b_${name}\x1b\[/u`;
  const end = re`/\x1b_\/${name}\x1b\[/u`;
  let item = balancedMatch(start, end, text);
  while (item) {
    found.push(item.body);
    item = balancedMatch(start, end, item.post);
    if (item) {
      text = item.post;
    }
  }
  return found;
};

const findOne = (name, text) => {
  let [found] = findAll(name, text);
  return found;
};

module.exports = {
  findAll,
  findOne
};

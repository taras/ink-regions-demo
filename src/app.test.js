const test = require("ava");
const importJSX = require("import-jsx");
const chalk = require("chalk");
const { render } = require("ink-testing-library");
const { findOne } = require("./helpers");
const App = importJSX("./app");

test("finds multiple elements", t => {
  const { lastFrame } = render(App);

  t.is(findOne("name", lastFrame()), chalk.blue("World"));
  t.is(findOne("greeting", lastFrame()), chalk.red("Hello"));
});

const test = require("ava");
const importJSX = require("import-jsx");
const chalk = require("chalk");
const { render } = require("ink-testing-library");
const { findOne, findAll } = require("./helpers");
const { single, multiple, color } = importJSX("./examples");

test("wraps text in greeting application sequence", t => {
  const { lastFrame } = render(single);

  t.is(lastFrame(), "\x1b_greeting\x1b[Hello World\x1b_/greeting\x1b[");
});

test("retrieves multiple regions", t => {
  const { lastFrame } = render(multiple);

  t.deepEqual(findAll("greeting", lastFrame()), ["Hello", "World"]);
});

// this test fails because unstable_transformChildren is not the correct mechanism
// I need something that would only wrap around all children not each child
test.skip("supports color", t => {
  const { lastFrame } = render(color);

  t.is(
    findOne("message", lastFrame()),
    `${chalk.red("Hello")} ${chalk.blue("World")}`
  );
});

const React = require("react");
const importJSX = require("import-jsx");
const Region = importJSX("./region");
const { Color } = require("ink");

module.exports = {
  single: <Region greeting>Hello World</Region>,
  multiple: (
    <>
      <Region greeting>Hello</Region> <Region greeting>World</Region>
    </>
  ),
  color: (
    <Region message>
      <Color red>Hello</Color> <Color blue>World</Color>
    </Region>
  )
};

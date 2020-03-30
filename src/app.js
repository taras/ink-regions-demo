const React = require("react");
const importJSX = require("import-jsx");

const { Box, Color } = require("ink");
const Region = importJSX("./region");

module.exports = (
  <Box>
    <Region greeting>
      <Color red>Hello</Color>
    </Region>
    <Region name>
      <Color blue> World</Color>
    </Region>
  </Box>
);

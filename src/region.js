const React = require("react");

const openTag = name => "\x1b_" + name + "\x1b[";
const closeTag = name => "\x1b_/" + name + "\x1b[";

/**
 * Wraps chidren in Application Control Sequence. It creates a pattern
 * similar to openning and closing HTML tags. name property is equivalent
 * to HTML tagName.
 *
 * Format:
 * 	ESC  _  {name}   	ST      {children}   	ESC  _  /{name}     ST
 *  \x1b _         	\x1b[                 	\x1b _						 \x1b[
 *           ^   name of the region (or tag name)      ^
 *
 * @param param0
 */
const Region = ({ children = "", ...rest }) => {
  let [name] = Object.keys(rest);

  return (
    <span
      // @ts-ignore
      unstable__transformChildren={children =>
        openTag(name) + children + closeTag(name)
      }
    >
      {children}
    </span>
  );
};

module.exports = Region;

/* eslint-disable */
const path = require('path');
var hasSet = false;

module.exports = class SketchPlugin {
  apply(compiler) {
    const sketchPath = path.resolve(__dirname, './lib/script.js');
    compiler.hooks.entryOption.tap('SketchPlugin', (context, entry) => {
      for (const key in entry) {
        if (Object.hasOwnProperty.call(entry, key) && !hasSet) {
          const item = entry[key];
          if (Array.isArray(item)) {
            item.push(sketchPath);
            hasSet = true;
          }
          if (hasSet) {
            console.log('add sketch plugin successfully!!!');
          }
        }
      }
    })
  }
};

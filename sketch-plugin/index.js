/* eslint-disable */
const path = require('path');
const { cwd } = require('process');
var hasSet = false;

module.exports = class SketchPlugin {
  apply(compiler) {
    const sketchPath = path.join(process.cwd(), './node_modules/@xes/sketch-plugin/lib/script.js');
    compiler.hooks.entryOption.tap('SketchPlugin', (context, entry) => {
      if (!hasSet) {
        hasSet = true;
        for (const key in entry) {
          if (Object.hasOwnProperty.call(entry, key)) {
            const item = entry[key];
            if (Array.isArray(item)) {
              item.push(sketchPath);
              console.log('add sketch plugin successfully!!!');
            }
          }
        }
      }
    })
  }
};

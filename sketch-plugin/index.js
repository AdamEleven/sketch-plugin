/* eslint-disable */
const path = require('path');
const { cwd } = require('process');
var hasSet = false;
var liveServer = require("live-server");
var params = {
    port: 8228,
    host: "localhost",
    open: false,
    root: path.resolve(cwd(), 'sketch'),
    wait: 1000,
    logLevel: 2,  
};
module.exports = class SketchPlugin {
  apply(compiler) {
    liveServer.start(params);
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

const babelOptions = {
  presets: ["babel-preset-gatsby"],
}
module.exports = require("ts-jest").createTransformer(babelOptions)

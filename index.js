module.exports = function () {
  return {
  plugins: [
    require("@babel/plugin-check-constants"),
    require("@babel/plugin-transform-arrow-functions"),
    require("@babel/plugin-transform-block-scoped-functions"),
    require("@babel/plugin-transform-block-scoping"),
    [require("@babel/plugin-transform-classes"), {loose: true}], // avoid ie10 and below issues with `extends` and `super`
    require("@babel/plugin-transform-computed-properties"),
    require("@babel/plugin-transform-destructuring"),
    require("@babel/plugin-transform-for-of"),
    require("@babel/plugin-transform-literals"),
    require("@babel/plugin-transform-modules-commonjs"),
    require("@babel/plugin-transform-object-super"),
    require("@babel/plugin-transform-parameters"),
    require("@babel/plugin-transform-shorthand-properties"),
    require("@babel/plugin-transform-spread"),
    require("@babel/plugin-transform-sticky-regex"),
    require("@babel/plugin-transform-template-literals"),
    require("@babel/plugin-transform-typeof-symbol"),
    require("@babel/plugin-transform-unicode-regex"),
    require("@babel/plugin-transform-object-assign"),
    require("@babel/plugin-transform-strict-mode")
  ]};
};

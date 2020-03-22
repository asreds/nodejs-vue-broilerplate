function isWebTarget(caller) {
    return Boolean(caller && caller.target === "web")
  }
  
  function isWebpack(caller) {
    return Boolean(caller && caller.name === "babel-loader")
  }
  
  module.exports = function(api) {
    const web = api.caller(isWebTarget)
    const webpack = api.caller(isWebpack)
  
    const presets = [
      [
        "@babel/preset-env",
        {
          useBuiltIns: web ? "entry" : undefined,
          corejs: web ? "core-js@3" : false,
          targets: !web ? { node: "current" } : undefined,
          modules: webpack ? false : "commonjs"
        }
      ]
    ]
    const plugins = [
      "@babel/plugin-syntax-dynamic-import",
      "@babel/plugin-proposal-class-properties"
    ]
  
    return {
      presets,
      plugins
    }
  }
  
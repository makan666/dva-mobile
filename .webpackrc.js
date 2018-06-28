export default {
  publicPath: "/",
  disableCSSSourceMap: true,
  disableDynamicImport: true,
  extraBabelPlugins: [
    ["import", {"libraryName": "antd-mobile", "style": true}]
  ],
  env: {
    "development": {
      "extraBabelPlugins": ["dva-hmr"]
    }
  }
}

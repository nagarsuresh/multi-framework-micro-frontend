const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "http://localhost:5200/",
    uniqueName: "shell"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      remotes: {
        'mfe1': "mfe1@http://localhost:5201/remoteEntry.js",
        'mfe2': "mfe2@http://localhost:5202/remoteEntry.js",
        'mfe3': "mfe3@http://localhost:5203/remoteEntry.js",
        'mfe4': "mfe4@http://localhost:5204/remoteEntry.js",
      },
      shared: ["@angular/core", "@angular/common", "@angular/router"]
    })
  ],
};

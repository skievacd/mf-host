const { override, addWebpackPlugin } = require('customize-cra');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = override(
  addWebpackPlugin(
    new ModuleFederationPlugin({
      name: 'host',
      filename: 'remoteEntry.js',
      remotes: {
        remote: 'remote@http://localhost:3001/remoteEntry.js',
        remote2: 'remote2@http://localhost:3000/_next/static/chunks/remoteEntry.js',
      },
      shared: {
       /* react: { singleton: true, requiredVersion: '^18.0.0' },
        'react-dom': { singleton: true, requiredVersion: '^18.0.0' },*/
      },
    })
  ),
  (config) => {
    config.output.publicPath = 'auto'; // 👈 Asegúrate de tener esto
    return config;
  }
);
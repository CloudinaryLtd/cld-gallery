const webpack = require('webpack');
const path = require('path');
const { merge } = require('webpack-merge');
const { appConfig: config, utils } = require('@cld/webpack-config');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const PreactRefreshPlugin = require('@prefresh/webpack');

const dirApp = path.join(__dirname, 'src');

const getBuildVersion = () => {
  return require('./package.json').version;
};

utils.modifyPluginOptions(config, 'Define', pluginConfig => {
  Object.assign(pluginConfig.definitions, {
    BUILD_VERSION: JSON.stringify(getBuildVersion()),
    THREE_URL: JSON.stringify('https://product-gallery.cloudinary.com/cld-3d-viewer.js'),
    THREE_DRACO_URL: JSON.stringify(
      'https://res.cloudinary.com/demo/raw/upload/v1542808640/product-gallery-widget/draco/'
    ),
    ANALYTICS_URL: JSON.stringify('https://analytics-api-s.cloudinary.com'),
    CLD_VIDEO_PLAYER_JS: JSON.stringify(
      'https://unpkg.com/cloudinary-video-player@{{version}}/dist/cld-video-player.min.js'
    ),
    CLD_VIDEO_PLAYER_CSS: JSON.stringify(
      'https://unpkg.com/cloudinary-video-player@{{version}}/dist/cld-video-player.min.css'
    ),
    USE_ANALYTICS: JSON.stringify(process.env.NODE_ENV === 'production')
  });
});

// Bypass default banner config because it doesn't use the build number.
utils.removePlugin(config, 'Banner');
// Remove react-intl plugin used in our generic @cld/webpack-config
utils.removePlugin(config, 'Intl');
// We don't want to inject the script tags to the HTML, instead we just use a predefined HTML file
utils.removePlugin(config, 'HtmlWebpackPlugin');
// We will use prefresh for hot reload
utils.removePlugin(config, 'ReactRefreshWebpackPlugin');

config.plugins.push(
  new webpack.BannerPlugin({
    banner: `Cloudinary --> Product Gallery Widget \nbuild: ${getBuildVersion()}\n**/`
  })
);

// Hot reload
config.plugins.push(new webpack.HotModuleReplacementPlugin(), new PreactRefreshPlugin());

config.plugins.push(
  new CopyWebpackPlugin({ patterns: [{ from: './public/index.html', to: './index.html' }] })
);

module.exports = merge(config, {
  entry: {
    all: path.join(dirApp, 'index.js')
  },
  output: {
    publicPath: 'auto',
    path: path.resolve(__dirname, './build')
  },
  resolve: {
    alias: {
      react: 'preact/compat',
      'react-dom/test-utils': 'preact/test-utils',
      'react-dom': 'preact/compat'
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules\/(?!(@cloudinary\/url-gen))/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  optimization: {
    runtimeChunk: false
  }
});

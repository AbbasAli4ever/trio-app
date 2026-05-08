const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

// pretty-format's ESM build (index.mjs) exports named exports but no `default`.
// Expo's HMR client does `_prettyFormat.default.default` which crashes on web.
// Force Metro to always use the CJS build so `.default` resolves correctly.
config.resolver.resolveRequest = (context, moduleName, platform) => {
  if (moduleName === 'pretty-format' && platform === 'web') {
    return {
      filePath: path.resolve(__dirname, 'node_modules/pretty-format/build/index.js'),
      type: 'sourceFile',
    };
  }
  return context.resolveRequest(context, moduleName, platform);
};

module.exports = withNativeWind(config, { input: './global.css' });

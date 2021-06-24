module.exports = {
  future: {
    webpack5: true,
  },
  webpack(config, options) {
    const { webpack, isServer } = options;
    config.experiments = { topLevelAwait: true };
    config.module.rules.push({
      test: /_app.js/,
      loader: "@module-federation/nextjs-mf/lib/federation-loader.js",
    });
    if (isServer) {
      // ignore it on SSR, realistically you probably wont be SSRing Fmodules
      Object.assign(config.resolve.alias, { next1: false });
    } else {
      config.plugins.push(
        new webpack.container.ModuleFederationPlugin({
          remoteType: "var",
          remotes: {
            next1: "next1",
          },
          shared: {
            react: {
              // Notice shared ARE eager here.
              eager: true,
              singleton: true,
              requiredVersion: false,
            },
          },
        })
      );
    }
    return config;
  },
};

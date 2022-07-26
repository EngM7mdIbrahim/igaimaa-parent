module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            _assets: "./src/assets",
            _components: "./src/components",
            _atoms: "./src/components/atoms",
            _molecules: "./src/components/molecules",
            _organisms: "./src/components/organisms",
            _navigations: "./src/navigations",
            _scenes: "./src/scenes",
            _api: "./src/api",
            _styles: "./src/styles",
            _utils: "./src/utils",
          },
        },
      ],
    ],
  };
};

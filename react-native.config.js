const project = (() => {
  try {
    const { configureProjects } = require("react-native-test-app");
    return configureProjects({
      android: {
        sourceDir: "android",
      },
      ios: {
        sourceDir: "ios",
        automaticPodsInstallation: false
      }
    });
  } catch (_) {
    return undefined;
  }
})();

module.exports = {
  ...(project ? { project } : undefined),
};

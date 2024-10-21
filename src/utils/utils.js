export const assetsPath = (path) => {
  try {
    return require.context("../assets", true)(path);
  } catch (error) {
    return null;
  }
};

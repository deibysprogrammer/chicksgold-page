/*============================================================
    utils: Helper functions used by multiple parts of the
    codebase, but not part of the application's main flow.
==============================================================*/

/*============================================================
    assetsPath: A function was implemented to render images
    dynamically
==============================================================*/

const assetsPath = (path) => {
  try {
    return require.context("../assets", true)(path);
  } catch (error) {
    return null;
  }
};

/*============================================================
    scrollToTop: Function that scrolls the user's view to
    the top of the page.
==============================================================*/

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

/*============================================================
      formatNumber: Function responsible for formatting
      numbers for display.
==============================================================*/

const formatNumber = (num) => {
  const number = parseFloat(num);
  if (isNaN(number)) return "Invalid Number";
  return number.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    useGrouping: true
  });
}

export { assetsPath, scrollToTop, formatNumber };

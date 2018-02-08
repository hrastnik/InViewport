var inViewport = (function() {
  var defaultOptions = {
    runImmediately: false,
    container: document,
    itemsSelector: "div",
    horizontalInside: "",
    verticalInside: "",
    inside: "",
    horizontalVisible: "",
    verticalVisible: "",
    visible: "",
    removeClasses: true
  };

  function run(options) {
    var isel = options.itemsSelector;

    var cont =
      typeof options.container === "string"
        ? document.querySelector(options.container)
        : options.container;

    var items = cont.querySelectorAll(isel);

    cont.addEventListener("scroll", updateItemClasses);
    window.addEventListener("resize", updateItemClasses);
    window.addEventListener("transitionend", updateItemClasses);

    // var mutationObserver = new MutationObserver(function(muts) {
    //   muts.forEach(function(mutation) {
    //     console.log(mutation);
    //   });
    // });
    // mutationObserver.observe(cont, {
    //   attributes: true,
    //   childList: true,
    //   characterData: true
    // });
    updateItemClasses();

    function updateItemClasses() {
      for (var i = 0; i < items.length; i++) {
        var item = items[i];

        var rect = item.getBoundingClientRect();

        var rectB_above_screenT = rect.bottom < 0;
        var rectB_above_screenB = rect.bottom < window.innerHeight;
        var rectT_above_screenT = rect.top < 0;
        var rectT_above_screenB = rect.top < window.innerHeight;
        var rectL_leftOf_screenL = rect.left < 0;
        var rectL_leftOf_screenR = rect.left < window.innerWidth;
        var rectR_leftOf_screenL = rect.right < 0;
        var rectR_leftOf_screenR = rect.right < window.innerWidth;

        // Facts
        var rectHorizontalInside =
          !rectL_leftOf_screenL && rectR_leftOf_screenR;
        var rectVerticalInside = !rectT_above_screenT && rectB_above_screenB;
        var rectInside = rectHorizontalInside && rectVerticalInside;

        var rectHorizontalVisible =
          rectL_leftOf_screenR && !rectR_leftOf_screenL;
        var rectVerticalVisible = rectT_above_screenB && !rectB_above_screenT;
        var rectVisible = rectHorizontalVisible && rectVerticalVisible;

        // console.log(
        //   `
        //   rectHorizontalInside: ${rectHorizontalInside}
        //   rectVerticalInside: ${rectVerticalInside}
        //   rectInside: ${rectInside}

        //   rectHorizontalVisible: ${rectHorizontalVisible}
        //   rectVerticalVisible: ${rectVerticalVisible}
        //   rectVisible: ${rectVisible}
        //   `
        // );

        function addOrRemove(shouldAdd, classname) {
          if (shouldAdd) {
            item.classList.add(classname);
          } else if (options.removeClasses) {
            item.classList.remove(classname);
          }
        }

        if (options.horizontalInside)
          addOrRemove(rectHorizontalInside, options.horizontalInside);
        if (options.verticalInside)
          addOrRemove(rectVerticalInside, options.verticalInside);
        if (options.inside) addOrRemove(rectInside, options.inside);
        if (options.horizontalVisible)
          addOrRemove(rectHorizontalVisible, options.horizontalVisible);
        if (options.verticalVisible)
          addOrRemove(rectVerticalVisible, options.verticalVisible);
        if (options.visible)
          addOrRemove(options.visible && rectVisible, options.visible);

        // if (fullyInside) {
        //   item.classList.add("inside");
        // } else {
        //   item.classList.remove("inside");
        // }
      }
    }
  }

  function _init(options) {
    options = options || {};
    for (key in defaultOptions) {
      if (options[key] == null) options[key] = defaultOptions[key];
    }

    console.dir(options);

    var runWithOpts = run.bind(null, options);

    if (options.runImmediately) {
      runWithOpts();
    } else {
      document.addEventListener("DOMContentLoaded", runWithOpts);
    }
  }

  return {
    init: _init
  };
})();

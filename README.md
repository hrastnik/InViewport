# [Demo](https://hrastnik.github.io/InViewport/)

# Usage

Include the script and initialize:

    <script src="hros.inViewport.js"></script>
    <script>inViewport.init({ itemsSelector: "div", inside: "inside" })</script>

Class `inside` is added to all div elements when they are completely inside the viewport and removed when the div leaves the viewport.
	
Initialization options with defaults:

    <script>
      inViewport.init({
        container: document,          // Element on which to listen for events OR a selector string

        itemsSelector: "div",         // Selector for items inside the container (selects elements inside container)

        horizontalInside: "",         // These are the space separated class names that are added to item
        verticalInside: "",           // classlist when the item is completely inside the viewport (*inside)
        inside: "inside",             // or the item is visible in the viewport (*visible)
        horizontalVisible: "",        // If a classname is left blank it won't be used. You will most likely
        verticalVisible: "",          // need either `visible` or `inside`. You should define at least one
        visible: "",                  // class name.

        removeClasses: true           // Remove classes once the item leaves the viewport (default: true)

        runImmediately: false         // inViewport usually runs on 'DOMContentLoaded' event, by setting
                                      // runImmediately to true you can run the script whenever you want
      });
    </script>

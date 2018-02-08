# [Demo](https://hrastnik.github.io/InViewport/)

# Usage

Include the script and initialize:

    <script src="hros.inViewport.js"></script>
    <script>inViewport.init({ itemsSelector: "div", inside: "inside" })</script>
    
Initialization options:

    <script>
      inViewport.init({
        container: document,          // Element on which to listen for events OR a selector string (optional)

        itemsSelector: "div",         // Selector for items inside the container (selects elements inside container)

        horizontalInside: "",         // These are the class names that are added to item classlist
        verticalInside: "",           // when the item is completely inside the viewport (*inside)
        inside: "inside",             // or the item is visible in the viewport (*visible)
        horizontalVisible: "",        // If a classname is left blank it won't be used. You will most likely
        verticalVisible: "",          // need either `visible` or `inside`
        visible: "visible",

        removeClasses: true           // Remove classes once the item leaves the viewport (default: true)

        runImmediately: false         // inViewport usually runs on 'DOMContentLoaded' event, by setting
                                      // runImmediately to true you can run the script whenever you want
      });
    </script>

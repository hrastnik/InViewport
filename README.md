Usage:

    Include the script:

        `<script src="hros.inViewport.js"></script>`

    Initialize:
    ```
        <script>
          inViewport.init({
            // Element on which to listen for events OR a selector string
            container: document,
            itemsSelector: "div", // Selector for items inside the container

            // These are the class names that are added to item classlist
            // when the item is completely inside the viewport (*inside)
            // or the item is visible in the viewport (*visible)
            // Only classes that are defined are used
            //
            horizontalInside: "",
            verticalInside: "",
            inside: "",
            horizontalVisible: "",
            verticalVisible: "",
            visible: "",

            // Remove classes once the item leaves the viewport (default: true)
            removeClasses: true

            // inViewport usually runs on 'DOMContentLoaded' event, by setting
            // runImmediately to true you can run the script whenever you want
            runImmediately: false
          });
        </script>
    ```

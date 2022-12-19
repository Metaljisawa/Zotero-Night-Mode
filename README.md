# Zotero-Night-Mode
Night Mode Toggle Button

This JavaScript code adds a toggle button to a webpage that enables a "night mode" feature. When the button is clicked, it toggles the "night mode" by adding or removing a "night-mode" class from the body element of the page. The state of the "night mode" (enabled or disabled) is stored in the local storage.
Usage

To use the toggle button, include the JavaScript code in your webpage and add a link to a CSS file that defines the styles for the "night mode".

Then, create a button element with the ID zotero-night-mode-button and add it to the toolbar of your webpage. The button will automatically toggle the "night mode" when clicked.
Customization

You can customize the appearance of the "night mode" by defining the appropriate styles in the CSS file. For example, you can change the background and text colors, font styles, and other visual properties of the webpage when the "night mode" is enabled.

You can also customize the label and icon of the toggle button by updating the label and icon properties of the nightModeButton object in the JavaScript code.
Example

Here is an example of how to use the toggle button in a webpage:
```
<!-- Include the JavaScript code -->
<script src="/path/to/night-mode.js"></script>
```

```
<!-- Link to the CSS file for the "night mode" styles -->
<link rel="stylesheet" type="text/css" href="/path/to/night-mode.css">
```

```
<!-- Add the toggle button to the toolbar -->
<button id="zotero-night-mode-button">Activer le mode nuit</button>
```

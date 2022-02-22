<p align="center">
  <a href="https://github.com/vizzuhq/vizzu-lib">
    <img src="https://github.com/vizzuhq/vizzu-lib-doc/blob/main/docs/readme/infinite-60.gif" alt="Vizzu" />
  </a>
  <p align="center"><b>Vizzu - ScrollyTelling JavaScript Extension</b></p>
  <p align="center">
    <a href="https://lib.vizzuhq.com/0.4/">Tutorial & Examples</a>
    · <a href="https://lib.vizzuhq.com/0.4/reference">Reference</a> 
    · <a href="https://github.com/vizzuhq/vizzu-lib">Repository</a>
  </p>
</p>

# About The Extension

This extension is for the [Vizzu](https://github.com/vizzuhq/vizzu-lib) library 
that allows users to generate 'ScrollyTelling' articles with charts, which changes upon scrolling. 


# Installation

Requires the vizzu [npm package](https://www.npmjs.com/package/vizzu):

    npm install vizzu

```npm package for the extension coming soon```

or use it as an ES6 module:

```html
<script type="module">
import Vizzu from 'https://cdn.jsdelivr.net/npm/vizzu@latest/dist/vizzu.min.js';
import ScrollyTelling from './scrollyTelling.js';
</script>
```

# Usage

Include the ScrollyTelling stylesheet:
```html
    <link rel="stylesheet" href="./scrollyTelling.css">
```


Create a container element that'll contain the chart and the articles, with another one, that contains the articles you want to display.
Give each article a `data-vizzu-animid` attribute with a number corresponding to the index of the animation you want to handle.
Finally, add an identifier class to the article element, in the example, it's "vizzu-cont".
```html
<div id="scrollyTellingContainer">
    <aside id="vizzuArticle">
        <div data-vizzu-animid="1" class="vizzu-cont">
            <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div data-vizzu-animid="2" class="cont">
            <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div data-vizzu-animid="3" class="vizzu-cont">
            <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div data-vizzu-animid="4" class="vizzu-cont">
            <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div data-vizzu-animid="5" class="vizzu-cont">
            <p>Lorem ipsum dolor sit amet...</p>
        </div>
    </aside>
</div>
```

Set up the module

```javascript
import Vizzu from 'https://cdn.jsdelivr.net/npm/vizzu@latest/dist/vizzu.min.js';
import ScrollyTelling from './scrollyTelling.js';

let data = {...};
```

and call the ScrollyTelling init function.
It takes
- the Vizzu imported instance,
- The ScrollyTelling Container element or querySelector
- The ScrollyTelling Article element or querySelector
- an array [] of animation functions
- optionally: an options Object to controll the script behaviour and settings  
```javascript
ScrollyTelling.init(Vizzu, "#scrollyTellingContainer", "#vizzuArticle",
[
    chart => chart.animate(...),
    chart => chart.animate(...),
    chart => chart.animate(...),
    chart => chart.animate(...),
    chart => chart.animate(...)
],
options);
```

The script will animate through the chart animations, save them, and display the first one, so depending on the data it can take a while to load.

# Options
- scrollType: String
    Controlls the scroll type. Currently, it only supports `animate`, which whill animate between current animation states and "speeds up" the animation if the user scrolls past multiple artictle elements. Default: `animate`.
- animateDuration: String
    A time unit that sets how fast will the "scrollPast" animations be. Default: `250ms`.
- vizzuContainer: Object
    Sets up the Vizzu container attributes:
    - `id` - the id of the container that'll show the charts. default: `myVizzu`
    - `stickyClass` - the css class name that'll be set on the element. default: `vizzu-sticky`
    - `useSticky` - boolean - if set to true, it'll add the previously defined stickyClass to the container. default: `true`
    - `width` - css value, that'll control the chart container width. default: `80%`
- contClass: String
    An article selector class for the contents. default: `vizzu-cont`
- culOffset: Controlls the "line" which detects new articles. default: `clientHeight * 0.5`
- textAlign: Controlls the grid flow - where to display the article related to the chart. default: `right`
    options:
    - `left` - left side of the chart
    - `right` - right side of the chart
    - `stack` - under the chart

# CSS variables
The lib also uses some css variables, that can be used to further controll the behaviour of the script:

```css
--sticky-height: 100vh;
--sticky-width: 100%;
--sticky-top: 0;
--cul-offset: 0;
--scrolly-grid-size-left: 80vw;
--scrolly-grid-size-right: 1fr;
--scrolly-stack-vizzuZIndex: 2;
--scrolly-stack-contentZIndex: 1;
```

for another example, while in stacked mode, to make the content appear "on" the chart instead the default "under" behaviour, you can set z-index variables:
```javascript
document.documentElement.style.setProperty('--scrolly-stack-vizzuZIndex', 1);
document.documentElement.style.setProperty('--scrolly-stack-contentZIndex', 2);
```
If you want to visualize the "culBar", include an empty element with the class `vizzu-culBar`.
```html
<div class="vizzu-culBar"></div>
```

## [Example](https://vizzuhq.github.io/vizzu-ext-scrollytelling-js/)

# Contributing

We welcome contributions to the project, visit our [wiki page](https://github.com/vizzuhq/vizzu-lib/wiki) for further info.

# Contact

* Join our Slack: [vizzu-community.slack.com](https://join.slack.com/t/vizzu-community/shared_invite/zt-w2nqhq44-2CCWL4o7qn2Ns1EFSf9kEg)
* Drop us a line at hello@vizzuhq.com
* Follow us on twitter: [https://twitter.com/VizzuHQ](https://twitter.com/VizzuHQ)

# License

Copyright © 2022 [Vizzu Kft.](https://vizzuhq.com).
Released under the [MIT License](LICENSE).

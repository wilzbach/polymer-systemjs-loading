Loading Polymer with SystemJS
=============================

This is an example of how one could use SystemJS to load Polymer Web Components.


It consists of four parts

1) Configuring SystemJS
-------------------

```
System.config({
    baseURL: '/',
    map: {
        text: './bower_components/plugin-text/text.js',
        css: './bower_components/plugin-css/css.js',
        polymer: './polymer.js'
    }
});
System.import("element.js");
```

2) Importing Polymer
-----------------

```
System.import('polymer').then(function(Polymer) {
```

Unfortunately Polymer comes only as `HTML` source, so to properly Polymer you need
to generate the `polymer.js` yourself - basically you only need to concatenate 
`polymer-micro`, `polymer-mini` and `polymer`. Afterwards you need to remove `<script>` tags
and HTML comments.

3) Injecting the HTML
-----------------

```
var html = System.import("element.html!text");

html.then(function(tmpl) {

    var tmp = document.createElement('template');
    tmp.innerHTML = tmpl;

    BioElement = Polymer({

      _template: tmp,
```

At the moment we use `innerHTML` to create our template - this is not recommended
for production use.

4) Injecting CSS
-------------

We import the CSS once at the beginning of our module.

```
System.import("element.css!css");
```

Due to the correct name-spacing in the CSS file, the CSS rules are only applied
to `bio-element`s.

```
.hello.bio-element {
    color: blue;
}

This is more a hack, than a nice solution.

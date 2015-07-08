var html = System.import("element.html!text");

// TODO: find a more elegant solution to import CSS
System.import("element.css!css");

html.then(function(tmpl) {
  System.import('polymer').then(function(Polymer) {

    // probably this is not very "polymerish"
    var tmp = document.createElement('template');
    tmp.innerHTML = tmpl;

    BioElement = Polymer({

      is: 'bio-element',

      _template: tmp,

      properties: {
        text: {
          type: String,
          value: 'Hello'
        }
      },

      created: function() {}

    });
    exports = BioElement;
  });
});

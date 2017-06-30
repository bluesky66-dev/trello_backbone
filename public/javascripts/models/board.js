var Board = Backbone.Model.extend({
  parse: function(attrs) {
    // convert the child array into a collection
    attrs.lists = new Lists(attrs.lists);
    return attrs;
  },
  // override toJSON so the Lists collection is automatically
  // converted to an array
  toJSON: function() {
    var json = Backbone.Model.prototype.toJSON.call(this);
    if (json.lists instanceof Lists) {
      json.lists = json.lists.toJSON();
    }
    return json;
  },
  initialize: function(attrs, options) {
    this.set(this.parse(attrs));
  }
});

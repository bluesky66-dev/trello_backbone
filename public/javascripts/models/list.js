var List = Backbone.Model.extend({
  parse: function(attrs) {
    // convert the child array into a collection
    attrs.cards = new Cards(attrs.cards, {list_id: attrs.id});
    return attrs;
  },
  // override toJSON so the Cards collection is automatically
  // converted to an array
  toJSON: function() {
    var json = Backbone.Model.prototype.toJSON.call(this);
    if (json.cards instanceof Cards) {
      json.cards = json.cards.toJSON();
    }
    return json;
  },
  initialize: function(attrs, options) {
    this.set(this.parse(attrs));
  }
});

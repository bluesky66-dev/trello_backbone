var Cards = Backbone.Collection.extend({
  model: Card,
  comparator: 'position',
  getListId: function() {
    return this.list_id;
  },
  initialize: function(models, options) {
    if (options.list_id) {
      this.list_id = options.list_id;
    }
  }
});

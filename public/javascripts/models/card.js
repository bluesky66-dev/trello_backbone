var Card = Backbone.Model.extend({
  initialize: function(attrs) {
    this.set(attrs.labels, App.sortLabels(attrs.labels));
  }
});

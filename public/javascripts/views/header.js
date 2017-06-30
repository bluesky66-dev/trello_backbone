var HeaderView = Backbone.View.extend({
  template: App.templates.header,
  el: $("header").get(0),
  events: {
    "click .fa-bell-o": "openNotifications",
    "keyup .search input": "search"
  },
  search: function(e) {
    var text = $(e.target).val();
    if (text.length < 3) {
      return;
    }
    App.searchCards(text); // search cards' title and desc for search string
  },
  openNotifications: function(e) {
    App.trigger("notifications_view");
  },
  render: function() {
    this.$el.html(this.template());
    this.delegateEvents();
  },
  initialize: function() {
    this.render();
  }
});

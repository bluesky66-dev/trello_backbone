var NotificationsView = Backbone.View.extend({
  template: App.templates.notifications,
  className: "notifications-view",
  events: {
    "click a.close": "close",
    "click a.reset": "reset",
    "click a.title-link": "openModal"
  },
  openModal: function(e) {
    // open card modal corresponding to card
    e.preventDefault();
    e.stopImmediatePropagation();
    var $e = $(e.target);
    var list_id = +$e.attr("data-list-id");
    var id = +$e.attr("data-id");
    var list = App.board.get("lists").get(list_id);
    var card = list.get("cards").get(id);

    App.trigger("notifications_view");
    App.trigger("open_modal", card);
  },
  reset: function(e) {
    e.preventDefault();
    // reset the notifications
    var self = this;
    $.ajax({
      url: "/activities/reset",
      type: "put",
      success: function() {
        self.collection.reset();
      }
    });
  },
  close: function(e) {
    e.preventDefault();
    App.trigger("notifications_view");
  },
  render: function() {
    this.$el.html(this.template({
      activities: this.collection.toJSON()
    }));
    App.$el.append(this.$el);
    this.delegateEvents();
  },
  initialize: function() {
    this.render();
    this.listenTo(this.collection, "reset", this.render);
  }
});

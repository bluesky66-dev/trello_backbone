var QuickEditView = Backbone.View.extend({
  template: App.templates.quick_edit,
  className: "quick-edit",
  events: {
    "click .overlay": "close",
    "submit": "saveTitle"
  },
  close: function(e) {
    this.remove();
  },
  saveTitle: function(e) {
    e.preventDefault();
    var $form = $(e.target);
    var self = this;

    $.ajax({
      url: $form.attr("action"),
      type: $form.attr("method"),
      data: $form.serialize(),
      success: function(json) {
        self.model.set("title", json.title);
        App.createNotification(self.model, "title", "change");
        self.remove();
      }
    });
  },
  render: function() {
    this.$el.html(this.template({
      card: this.model.toJSON(),
      list_id: this.list_id
    }));
    App.$el.append(this.$el);
    this.$("form").offset(this.offset);
  },
  initialize: function(options) {
    this.offset = options.offset;
    this.list_id = options.list_id;
    this.render();
  }
});

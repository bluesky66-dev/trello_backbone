var RenameBoardView = Backbone.View.extend({
  template: App.templates.rename_board,
  attributes: {
    class: "rename-board"
  },
  events: {
    "click a": "close",
    "submit": "changeTitle"
  },
  changeTitle: function(e) {
    e.preventDefault();
    var $form = $(e.target);
    var self = this;

    $.ajax({
      url: $form.attr("action"),
      type: $form.attr("method"),
      data: $form.serialize(),
      success: function(json) {
        self.model.set("title", json.title);
        App.changeBoardTitle(json.title);
        self.remove();
      }
    });
  },
  close: function(e) {
    e.preventDefault();
    this.remove();
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    App.$el.append(this.$el);
  },
  initialize: function() {
    this.render();
  }
});

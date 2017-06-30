var MoveCardView = Backbone.View.extend({
  template: App.templates.move_card,
  attributes: {
    class: "move-view"
  },
  events: {
    "click a": "close",
    "change .first": "replacePositions",
    "submit": "moveCard"
  },
  moveCard: function(e) {
    e.preventDefault();
    var self = this;
    var $form = $(e.target);
    $.ajax({
      url: $form.attr("action"),
      type: $form.attr("method"),
      data: $form.serialize(),
      success: function(json) {
        App.moveCard(json);
        self.model.trigger("move_card");
        App.modal.render();
        self.render();
      }
    });
  },
  replacePositions: function(e) {
    // get list id of selected list option
    var list_id = +$(e.target).val();
    // get select element corresponding to card positions
    var $positions = $(e.target).closest(".first").next().find("select");
    if (list_id === this.model.collection.getListId()) {
      App.changeSelectOptions($positions, list_id, false, this.model.get("position"));
    } else {
      App.changeSelectOptions($positions, list_id, true);
    }
  },
  close: function(e) {
    e.preventDefault();
    this.remove();
  },
  render: function() {
    var list_id = this.model.collection.getListId();
    var card_positions = App.getCardPositions(list_id);
    this.$el.html(this.template({
      card: this.model.toJSON(),
      lists: this.collection.toJSON(),
      list_id: list_id,
      card_positions: card_positions
    }));
    App.$el.append(this.$el);
    this.$el.offset(this.offset);
    this.delegateEvents();
  },
  initialize: function(options) {
    this.offset = options.offset;
    this.render();
  }
});

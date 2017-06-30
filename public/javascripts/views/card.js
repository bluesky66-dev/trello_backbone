var CardView = Backbone.View.extend({
  template: App.templates.card,
  attributes: {
    class: "list-card"
  },
  events: {
    "click": "openCardDetails",
    "click .fa-pencil": "openQuickForm",
    "mouseenter": "addBackground",
    "mouseleave": "removeBackground"
  },
  addBackground: function(e) {
    this.$el.css("background", "#f2f2f2");
    this.$(".open-quick-edit").css("display", "block");
  },
  removeBackground: function(e) {
    this.$el.css("background", "#fff");
    this.$(".open-quick-edit").css("display", "none");
  },
  openCardDetails: function(e) {
    // trigger open_modal on App, passing in card model, list_id, and list_title
    App.trigger("open_modal", this.model);
  },
  openQuickForm: function(e) {
    e.stopImmediatePropagation();
    // trigger quick_edit_card on App, passing in this.model, this.$el.offset, and this.model.collection.getListId()
    App.trigger("quick_edit_card", this.model, this.$el.offset(), this.model.collection.getListId());
  },
  modifyLabel: function(e, type) {
    var url = "/lists/" + this.model.collection.getListId() + "/cards/" + this.model.get("id") + "/labels";
    var card_label_ids = App.getCardLabelIds(this.model);
    var self = this;
    // if the card has the label
    if (card_label_ids.indexOf(e.get("id")) > -1) {
      $.ajax({
        url: url,
        type: type,
        data: JSON.stringify(e.toJSON()),
        contentType: "application/json",
        success: function(json) {
          if (type === "put") {
            var label = _.findWhere(self.model.get("labels"), {id: +json.id});
            _.extend(label, json);
            self.model.trigger("edit_label");
          } else if (type === "delete") {
            var labels = self.model.get("labels");
            var label = _(labels).findWhere({id: json.id});
            labels.splice(labels.indexOf(label), 1);
            self.model.trigger("remove_card_label");
          }
          App.checkForModal(self.model);
        }
      });
    }
  },
  editLabel: function(e) {
    this.modifyLabel(e, "put");
  },
  deleteLabel: function(e) {
    this.modifyLabel(e, "delete");
  },
  insertAt: function(idx) { // insert card at a specified index within list
    var list_id = this.model.collection.getListId();
    var $list_cards = $(".list").filter("[data-list-id='" + list_id + "']").find(".list-cards");

    var children = $list_cards.children();
    var before = children.eq(idx);
	  this.$el.insertBefore(before);
  },
  render: function() {
    this.$el.attr("data-id", this.model.get("id"));
    this.$el.html(this.template(this.model.toJSON()));

    this.insertAt(this.model.get("position") - 1);
    this.delegateEvents();
  },
  initialize: function(options) {
    this.model.view = this;
    this.render();
    this.listenTo(this.model, "change:title change:description change:due_date change:complete change:subscribed move_card add_comment remove_comment add_card_label remove_card_label edit_label", this.render);

    this.listenTo(App.labels, "change", this.editLabel);
    this.listenTo(App.labels, "remove", this.deleteLabel);
  }
});

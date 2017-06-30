var LabelsView = Backbone.View.extend({
  template: App.templates.labels,
  className: "labels-view",
  events: {
    "click a.close": "close",
    "click a.new-label": "newLabelView",
    "click span.label": "labelForCard",
    "click span.fa-pencil": "changeLabelView"
  },
  changeLabelView: function(e) {
    // get label model by id
    var id = +$(e.target).prev("span").attr("data-id");
    var label = App.labels.get(id);
    this.remove();
    App.trigger("change_label_view", this.model, label, this.offset);
  },
  makeRequest: function(id, type) {
    var label_obj = this.collection.get(id).toJSON();
    var url = "/lists/" + this.model.collection.getListId() + "/cards/" + this.model.get("id") + "/labels/card";
    var self = this;
    $.ajax({
      url: url,
      type: type,
      data: JSON.stringify(label_obj),
      contentType: "application/json",
      success: function(json) {
        if (type === "post") {
          // add label to card's labels array
          var labels = self.model.get("labels");
          labels.push(json);
          self.model.set("labels", App.sortLabels(labels));
          // re-render card view
          self.model.trigger("add_card_label");
          App.createNotification(self.model, "label", "add");
        } else if (type === "delete") {
          var labels = self.model.get("labels");
          var label = _(labels).findWhere({id: json.id});
          // remove label from card's labels
          labels.splice(labels.indexOf(label), 1);
          self.model.trigger("remove_card_label");
          App.createNotification(self.model, "label", "remove");
        }
        App.modal.render();
      }
    });
  },

  labelForCard: function(e) {
    var $label = $(e.target).closest(".label");
    var $check_mark = $label.find(".fa-check");
    if ($check_mark.css("display") === "block") {
      // remove label from card
  	  $check_mark.css("display", "none");
      this.makeRequest(+$label.attr("data-id"), "delete");
  	} else {
      // add label to card
  	  $check_mark.css("display", "block");
      this.makeRequest(+$label.attr("data-id"), "post");
  	}
  },
  newLabelView: function(e) {
    e.preventDefault();
    this.remove();
    App.trigger("create_label_view", this.model, this.offset);
  },
  close: function(e) {
    e.preventDefault();
    this.remove();
  },
  render: function() {
    var label_ids = App.getCardLabelIds(this.model);
    this.$el.html(this.template({
      labels: this.collection.toJSON(),
      label_ids: label_ids
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

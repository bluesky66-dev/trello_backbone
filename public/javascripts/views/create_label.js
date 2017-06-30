var CreateLabelView = Backbone.View.extend({
  template: App.templates.create_label,
  className: "create-label-view",
  events: {
    "click a.close": "close",
    "click span.fa-arrow-left": "back",
    "click span.label": "changeSelected",
    "submit": "createLabel"
  },
  changeSelected: function(e) {
    var $selected = this.$("span.label").filter(".selected");
  	$selected.removeClass("selected");
    $selected.find(".fa-check").css("display", "none");
    var $new_selected = $(e.target).closest(".label");
    $new_selected.addClass("selected");
    $new_selected.find(".fa-check").css("display", "block");
  },
  createLabel: function(e) {
    e.preventDefault();
    var url = "/lists/" + this.model.collection.getListId() + "/cards/" + this.model.get("id") + "/labels";
    var data_obj = {
      title: this.$("input[type='text']").val(),
      color: $(e.target).find("span.selected").attr("data-color")
    };
    var self = this;
    $.ajax({
      url: url,
      type: "post",
      data: JSON.stringify(data_obj),
      contentType: "application/json",
      success: function(json) {
        // add label to card's labels array
        var labels = self.model.get("labels");
        labels.push(json);
        self.model.set("labels", App.sortLabels(labels));
        // add label to labels collection
        App.labels.add(json);
        self.model.trigger("add_card_label");
        App.createNotification(self.model, "label", "add");
        App.modal.render();
        self.$(".fa-arrow-left").trigger("click"); // go back to labels view
      }
    });
  },
  back: function() {
    this.remove();
    App.trigger("labels_view", this.model, this.offset);
  },
  close: function(e) {
    e.preventDefault();
    this.remove();
  },
  render: function() {
    this.$el.html(this.template());
    App.$el.append(this.$el);
    this.$el.offset(this.offset);
    this.delegateEvents();
  },
  initialize: function(options) {
    this.offset = options.offset;
    this.render();
  }
});

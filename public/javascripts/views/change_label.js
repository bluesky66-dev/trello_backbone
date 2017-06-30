var ChangeLabelView = Backbone.View.extend({
  template: App.templates.change_label,
  className: "change-label-view",
  events: {
    "click a.close": "close",
    "click span.fa-arrow-left": "back",
    "click span.label": "changeSelected",
    "submit": "editLabel",
    "click a.remove-label": "deleteLabel"
  },
  editLabel: function(e) {
    e.preventDefault();
    var data_obj = {
      title: this.$("input[type='text']").val(),
      color: $(e.target).find("span.selected").attr("data-color")
    };
    // fires change event, which the card model listens to
    this.model.set(_.extend(this.model.toJSON(), data_obj));
  
    App.createNotification(this.card, "label", "change");
    this.$(".fa-arrow-left").trigger("click");
  },
  deleteLabel: function(e) {
    e.preventDefault();
    // fires remove event, which the card model listens to
    App.labels.remove(this.model);
    // create notification
    App.createNotification(this.card, "label", "remove");
    // trigger a click on the 'back' arrow
    this.$(".fa-arrow-left").trigger("click");
  },
  changeSelected: function(e) {
    var $selected = this.$("span.label").filter(".selected");
  	$selected.removeClass("selected");
    $selected.find(".fa-check").css("display", "none");
    var $new_selected = $(e.target).closest(".label");
    $new_selected.addClass("selected");
    $new_selected.find(".fa-check").css("display", "block");
  },
  back: function() {
    this.remove();
    App.trigger("labels_view", this.card, this.offset);
  },
  close: function(e) {
    e.preventDefault();
    this.remove();
  },
  selectCurrent: function() {
    var $current_label = this.$("span.label").filter("[data-color='" + this.model.get("color")+ "']");
    $current_label.addClass("selected");
    $current_label.find(".fa-check").css("display", "block");
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    App.$el.append(this.$el);
    this.$el.offset(this.offset);
    this.selectCurrent();
    this.delegateEvents();
  },
  initialize: function(options) {
    this.offset = options.offset;
    this.card = options.card;
    this.render();
  }
});

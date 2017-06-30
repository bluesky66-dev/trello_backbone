var ListView = Backbone.View.extend({
  template: App.templates.list,
  className: "list-wrapper sortable-list",
  events: {
    "keyup .edit-title": "updateOnEnter",
    "blur .edit-title": "updateTitle",
    "click .add-card": "openForm",
    "click .close": "closeForm",
    "click .delete": "deleteList",
    "submit": "createCard"
  },
  openForm: function(e) {
    this.$(".add-card").css("display", "none");
    this.$(".create-card").css("display", "block");
  },
  closeForm: function(e) {
    this.$(".add-card").css("display", "block");
    this.$(".create-card").css("display", "none");
  },
  updateOnEnter: function(e) {
    if (e.which !== 13) {
      return;
    }
    e.preventDefault();
    $(e.target).trigger("blur"); // if enter key is pressed trigger blur event
  },
  updateTitle: function(e) {
    // get value from input
    // send ajax put request to /lists/this.model.get("id")
    // title will be updated on server
    // set title on model on front-end
    var $e = $(e.target);
    var title = $e.val();
    var self = this;
    var model_id = this.model.get("id");

    $.ajax({
      url: "/lists/" + model_id,
      type: "put",
      data: JSON.stringify({ title: title }),
      contentType: "application/json",
      success: function(json) {
        self.model.set("title", json.title);
      }
    });
  },
  deleteList: function(e) {
    e.preventDefault();
    var url = "/lists/" + this.model.get("id");
    var self = this;
    $.ajax({
      url: url,
      type: "delete",
      success: function(json) {
        var removed_list = self.model.collection.remove(json.id);
        // first remove all card views within list
        removed_list.get("cards").each(function(card_model) {
          App.all_cards.splice(App.all_cards.indexOf(card_model), 1);
          card_model.view.remove();
        });
        removed_list.view.remove();
      }
    });
  },
  createCard: function(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    var $form = $(e.target);
    var $input = $form.find("textarea");
    var self = this;
    if (!$input.val()) {
      return;
    }
    $.ajax({
      url: $form.attr("action"),
      type: $form.attr("method"),
      data: $form.serialize(),
      success: function(json) {
        var new_card = new Card(json);
        // add new card to list's card collection
        self.model.get("cards").add(new_card);
        App.all_cards.push(new_card);
        App.trigger("card_view", new_card);
        $input.val("");
      }
    });
  },
  enableSorting: function() {
    $(".list-cards").sortable({
      connectWith: ".list-cards",
      items: ".list-card",
      cursor: "move",
      placeholder: "placeholder-card",
      start: function(e, ui) {
        ui.placeholder.width(ui.item.width());
        ui.placeholder.height(ui.item.height());
        ui.placeholder.css("border-radius", ui.item.css("border-radius"));
        ui.placeholder.css("margin", ui.item.css("margin"));
        ui.placeholder.css("display", "block");
        ui.item.card_id = ui.item.attr("data-id");
        ui.item.old_list = ui.item.closest(".list-cards").attr("data-list-id");
      },
      stop: function(e, ui) {
        ui.item.new_list = ui.item.closest(".list-cards").attr("data-list-id");
        ui.item.new_position = ui.item.index() + 1;
        var data_obj = {
          new_list: ui.item.new_list,
          new_position: ui.item.new_position
        };
        // update card positions on server
        $.ajax({
          url: "/lists/"+ ui.item.old_list + "/cards/" + ui.item.card_id + "/position",
          type: "put",
          data: JSON.stringify(data_obj),
          contentType: "application/json",
          success: function(json) {
            App.moveCard(json);
          }
        });
      }
    });
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    $(".add-list").before(this.$el);
    this.delegateEvents();
    this.enableSorting();
  },
  initialize: function() {
    this.model.view = this;
    this.render();
  }
});

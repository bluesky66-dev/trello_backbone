var IndexView = Backbone.View.extend({
  template: App.templates.index,
  attributes: {
    id: "board-canvas"
  },
  events: {
    "click .close-add-list": "closeForm",
    "click .add-list-bar": "openForm",
    "click .board-name": "renameBoard",
    "click .board-header-star": "star",
    "submit": "createList"
  },
  closeForm: function(e) {
    this.$(".add-list").toggleClass("add");
    this.$(".add-list-bar").css("display", "block");
    this.$(".add-list input[type='text']").css("display", "none");
    this.$(".add-list .add-options").css("display", "none");
  },
  openForm: function(e) {
    this.$(".add-list").toggleClass("add");
    this.$(".add-list-bar").css("display", "none");
    this.$(".add-list input[type='text']").css("display", "block");
    this.$(".add-list .add-options").css("display", "block");
  },
  renameBoard: function(e) {
    e.preventDefault();
    App.trigger("rename_board", this.model);
  },
  star: function(e) {
    e.preventDefault();
    $(e.target).toggleClass("starred");
    $(e.target).closest("a").toggleClass("starred");
    var self = this;

    $.ajax({
      url: "/board",
      type: "put",
      data: JSON.stringify({starred: !self.model.get("starred")}),
      contentType: "application/json",
      success: function(json) {
        self.model.set("starred", json.starred);
      }
    });
  },
  createList: function(e) {
    e.preventDefault();
    var $form = $(e.target);
    var $input = $form.find("input[type='text']");
    if (!($input.val())) {
      return;
    }
    $.ajax({
      url: $form.attr("action"),
      type: $form.attr("method"),
      data: $form.serialize(),
      success: function(json) {
        // also have to add list to lists collection on board model
        var new_list = new List(json);
        App.board.get("lists").add(new_list);
        App.trigger("list_view", new_list);
        $input.val("");
      }
    });
  },
  enableSorting: function() {
    $("#board-canvas").sortable({
      connectWith: ".sortable-list",
      items: ".sortable-list",
      handle: ".list-header",
      stop: function(e, ui) {
        ui.item.new_position = $(".sortable-list").index(ui.item) + 1;
        ui.item.list_id = ui.item.find(".list").attr("data-list-id");
        var data_obj = {
          position: ui.item.new_position
        };
        // update list positions on server
        $.ajax({
          url: "/lists/"+ ui.item.list_id + "/position",
          type: "put",
          data: JSON.stringify(data_obj),
          contentType: "application/json",
          success: function(json) {
            var lists = App.board.get("lists");
            var list = lists.remove(json.id);
            var index = json.position - 1;
            lists.add(list, {at: index, sort: false});
            App.resetPositions(lists);
          }
        });
      }
      // placeholder: "placeholder-list",
      // start: function(e, ui) {
      //   ui.placeholder.width(ui.item.width());
      //   ui.placeholder.height(ui.item.height());        ui.placeholder.css("display", "block");
      // }
      // over: function(e, ui) {
      //   ui.placeholder.height(ui.item.height());
      //   ui.placeholder.width(ui.item.width());
      //   ui.placeholder.css("display", "block");
      // }
    });
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    App.$el.html(this.$el);
    this.enableSorting();
  },
  initialize: function() {
    this.render();
  }
});

var CardModalView = Backbone.View.extend({
  template: App.templates.card_modal,
  className: "modal",
  events: {
    "click .comment-details .close": "closeCommentEdit",
    "click .comment-details .edit-comment": "openCommentEdit",
    "click a.desc-title": "openDescEdit",
    "click .description-edit-form .close": "closeDescEdit",
    "keyup .add-comment textarea": "enableButton",
    "click .close-modal": "close",
    "click .edit-desc-link": "openDescEdit",
    "click .action-move": "openMoveView",
    "click .action-copy": "openCopyView",
    "click .action-duedate": "openDateView",
    "submit .add-comment form": "addComment",
    "submit .comment-details form": "editComment",
    "click a.delete-comment": "deleteComment",
    "click .action-delete": "deleteCard",
    "blur .card-modal-header input": "updateTitle",
    "keyup .card-modal-header input": "updateOnEnter",
    "submit .description-edit-form": "editDescription",
    "click .complete": "markComplete",
    "click .action-subscribe": "subscribe",
    "click .action-labels": "openLabelsView",
    "click .add-new-label": "openLabelsView"
  },
  openLabelsView: function(e) {
    e.preventDefault();
    var top_pos = e.pageY - 100;
    var left_pos = e.pageX - 100;
    App.labelsView(this.model, {top: top_pos, left: left_pos});
  },
  subscribe: function(e) {
    e.preventDefault();
    var subscribe_val = !(this.model.get("subscribed"));
    var list_id = this.model.collection.getListId();
    var card_id = this.model.get("id");
    var self = this;
    $.ajax({
      url: "/lists/" + list_id + "/cards/" + card_id,
      type: "put",
      data: JSON.stringify({subscribed: subscribe_val}),
      contentType: "application/json",
      success: function(json) {
        self.model.set("subscribed", json.subscribed);
        self.render();
      }
    });
  },
  markComplete: function(e) {
    var complete_val = !(this.model.get("complete"));
    var list_id = this.model.collection.getListId();
    var card_id = this.model.get("id");
    var self = this;
    $.ajax({
      url: "/lists/" + list_id + "/cards/" + card_id,
      type: "put",
      data: JSON.stringify({complete: complete_val}),
      contentType: "application/json",
      success: function(json) {
        self.model.set("complete", json.complete);
        if (json.complete === true) {
          App.createNotification(self.model, "complete", "true");
        } else {
          App.createNotification(self.model, "complete", "false");
        }
        self.render();
      }
    });
  },
  editDescription: function(e) {
    e.preventDefault();
    var $form = $(e.target);
    var self = this;
    $.ajax({
      url: $form.attr("action"),
      type: $form.attr("method"),
      data: $form.serialize(),
      success: function(json) {
        self.model.set("description", json.description);
        App.createNotification(self.model, "description", "change");
        self.render();
      }
    });
  },
  updateTitle: function(e) {
    var $e = $(e.target);
    var title = $e.val();
    var self = this;
    var list_id = this.model.collection.getListId();
    var model_id = this.model.get("id");

    $.ajax({
      url: "/lists/" + list_id + "/cards/" + model_id,
      type: "put",
      data: JSON.stringify({ title: title }),
      contentType: "application/json",
      success: function(json) {
        self.model.set("title", json.title);
        App.createNotification(self.model, "title", "change");
      }
    });
  },
  updateOnEnter: function(e) {
    if (e.which !== 13) {
      return;
    }
    e.preventDefault();
    $(e.target).trigger("blur"); // if enter key is pressed trigger blur event
  },
  deleteCard: function(e) {
    e.preventDefault();
    var list_id = this.model.collection.getListId();
    var card_id = this.model.get("id");
    var self = this;
    $.ajax({
      url: "/lists/" + list_id + "/cards/" + card_id,
      type: "delete",
      success: function(json) {
        var removed_card = self.model.collection.remove(json.id);
        removed_card.view.remove();
        App.all_cards.splice(App.all_cards.indexOf(removed_card), 1);
        self.remove();
      }
    });
  },
  deleteComment: function(e) {
    e.preventDefault();
    var self = this;
    var $e = $(e.target);
    $.ajax({
      url: $e.attr("data-url"),
      type: "delete",
      success: function(json) {
        var comments = self.model.get("comments");
        var comment = _(comments).findWhere({id: json.id});
        comments.splice(comments.indexOf(comment), 1);
        self.model.trigger("remove_comment");
        App.createNotification(self.model, "comment", "remove");
        self.render();
      }
    });
  },
  editComment: function(e) {
    e.preventDefault();
    var self = this;
    var $form = $(e.target);
    $.ajax({
      url: $form.attr("action"),
      type: $form.attr("method"),
      data: $form.serialize(),
      success: function(json) {
        var comment = _(self.model.get("comments")).findWhere({id: json.id});
        _.extend(comment, json);
        self.model.trigger("edit_comment");
        App.createNotification(self.model, "comment", "change");
        self.render();
      }
    });
  },
  addComment: function(e) {
    e.preventDefault();
    var self = this;
    var $form = $(e.target);
    $.ajax({
      url: $form.attr("action"),
      type: $form.attr("method"),
      data: $form.serialize(),
      success: function(json) {
        // add new comment to card's comments array
        self.model.get("comments").push(json);
        // re-render card view and modal view
        self.model.trigger("add_comment");
        App.createNotification(self.model, "comment", "add");
        self.render();
      }
    });
  },
  openDateView: function(e) {
    e.preventDefault();
    var top_pos = e.pageY - 100;
    var left_pos = e.pageX - 100;
    App.dateView(this.model, {top: top_pos, left: left_pos});
  },
  openCopyView: function(e) {
    e.preventDefault();
    var top_pos = e.pageY - 100;
    var left_pos = e.pageX - 100;
    App.copyView(this.model, {top: top_pos, left: left_pos});
  },
  openMoveView: function(e) {
    e.preventDefault();
    var top_pos = e.pageY - 100;
    var left_pos = e.pageX - 100;
    App.moveView(this.model, {top: top_pos, left: left_pos});
  },
  enableButton(e) {
    var $submit_button = this.$(".add-comment input");
    if (!$(e.target).val() && !$submit_button.hasClass("disabled")) {
      $submit_button.addClass("disabled");
    }
    else if ($submit_button.hasClass("disabled")) {
      $submit_button.removeClass("disabled");
    }
  },
  close: function() {
    this.remove();
  },
  closeDescEdit: function() {
    this.$("a.desc-title").css("display", "inline-block");
    this.$("p.desc-text").css("display", "block");
    this.$(".edit-desc-link").css("display", "block");
    this.$(".description-edit-form").css("display", "none");
  },
  openDescEdit: function(e) {
    e.preventDefault();
    this.$("a.desc-title").css("display", "none");
    this.$("p.desc-text").css("display", "none");
    this.$(".edit-desc-link").css("display", "none");
    this.$(".description-edit-form").css("display", "block");
  },
  closeCommentEdit: function(e) {
    var $e = $(e.target);
    $e.closest("form").prev().css("display", "block");
    $e.closest("form").prev().prev().css("display", "inline-block");
    $e.closest("form").css("display", "none");
  },
  openCommentEdit: function(e) {
    e.preventDefault();
    var $e = $(e.target);
    $e.closest(".comment-actions").next().css("display", "block");
    $e.closest(".comment-actions").prev().css("display", "none");
    $e.closest(".comment-actions").css("display", "none");
  },
  render: function() {
    var list_id = this.model.collection.getListId();
    var list_title = App.board.get("lists").get(list_id).get("title");
    this.$el.html(this.template({
      card: this.model.toJSON(),
      list_id: list_id,
      list_title: list_title
    }));
    App.$el.append(this.$el);
    this.delegateEvents();
  },
  initialize: function() {
    this.render();
  }
});

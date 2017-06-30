var DatePickerView = Backbone.View.extend({
  template: App.templates.date_picker,
  className: "change-date",
  events: {
    "click a": "close",
    "submit": "updateDueDate",
    "click a.remove-date": "removeDueDate"
  },
  removeDueDate: function(e) {
    e.preventDefault();
    var self = this;
    var url = $(e.target).closest("form").attr("action");
    $.ajax({
      url: url,
      type: "put",
      data: JSON.stringify({due_date: "", due_time: ""}),
      contentType: "application/json",
      success: function(json) {
        self.model.set("due_date", json.due_date);
        self.model.set("due_time", json.due_time);
        App.createNotification(self.model, "due_date", "remove");
        App.modal.render();
        self.remove();
      }
    });
  },
  updateDueDate: function(e) {
    e.preventDefault();
    var $form = $(e.target);
    var self = this;
    $.ajax({
      url: $form.attr("action"),
      type: $form.attr("method"),
      data: $form.serialize(),
      success: function(json) {
        self.model.set("due_date", json.due_date);
        self.model.set("due_time", json.due_time);
        App.createNotification(self.model, "due_date", "change");
        App.modal.render();
        self.remove();
      }
    });
  },
  close: function(e) {
    e.preventDefault();
    this.remove();
  },
  render: function() {
    var self = this;
    this.$el.html(this.template({
      card: this.model.toJSON(),
      list_id: this.model.collection.getListId()
    }));
    App.$el.append(this.$el);
    this.$el.offset(this.offset);
    this.$(".calendar").datepicker({
      inline: true,
      showOtherMonths: true,
      dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
      nextText: "Next",
      prevText: "Prev",
      changeMonth: true,
      changeYear: true,
      altField: "input[name='due_date']",
      defaultDate: (new Date(self.model.get("due_date")))
    });
  },
  initialize: function(options) {
    this.offset = options.offset;
    this.render();
  }
});

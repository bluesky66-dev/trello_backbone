var CopyCardView = Backbone.View.extend({
  template: App.templates.copy_card,
  attributes: {
    class: "copy-view"
  },
  events: {
    "click a": "close",
    "change .first": "replacePositions",
    "submit": "copyCard"
  },
  copyCard: function(e) {
    e.preventDefault();
    var self = this;
    var $form = $(e.target);
    $.ajax({
      url: $form.attr("action"),
      type: $form.attr("method"),
      data: $form.serialize(),
      success: function(json) {
        // get new list by id
        var new_list = App.board.get("lists").get(json.new_list);
        // get cards collection
        var new_cards = new_list.get("cards");

        // add copied card in at specific index (position - 1) in new cards list, then reset positions on cards
        var index = json.card.position - 1;
        new_cards.add(json.card, {at: index, sort: false});

        // reset card positions in cards
        App.resetPositions(new_cards);

        // create new card view for new copied card model
        var card_model = new_cards.at(index);
        App.all_cards.push(card_model); // add card to array of all cards
        new CardView({
          model: card_model
        });
        self.render();
      }
    });
  },
  replacePositions: function(e) {
    // get list id of selected list option
    var list_id = $(e.target).val();
    // get select element for card positions
    var $positions = $(e.target).closest(".first").next().find("select");

    App.changeSelectOptions($positions, list_id, true);
  },
  close: function(e) {
    e.preventDefault();
    this.remove();
  },
  render: function() {
    var list_id = this.model.collection.getListId();
    var card_positions = App.getCardPositions(list_id);
    // add position w/in list that card can be copied to
    card_positions.push(card_positions.length + 1);
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

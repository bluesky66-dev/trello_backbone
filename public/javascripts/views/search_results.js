var SearchResultsView = Backbone.View.extend({
  template: App.templates.search_results,
  className: "search-results",
  events: {
    "click .overlay-transparent": "close",
    "click a": "openModal"
  },
  openModal: function(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    var $e = $(e.target);
    var list_id = +$e.attr("data-list-id");
    var id = +$e.attr("data-id");
    var list = App.board.get("lists").get(list_id);
    var card = list.get("cards").get(id);

    this.close();
    App.trigger("open_modal", card);
  },
  close: function() {
    $(".search input").val("");
    this.remove();
  },
  render: function() {
    this.$el.html(this.template({
      cards: this.cards,
      list_titles: this.list_titles,
      board_title: this.board_title,
      list_ids: this.list_ids
    }));
    App.$el.append(this.$el);
    this.delegateEvents();
  },
  initialize: function(options) {
    this.cards = options.cards;
    this.list_titles = options.list_titles;
    this.board_title = options.board_title;
    this.list_ids = options.list_ids;
    this.render();
  }
});

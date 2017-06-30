var App = {
  templates: JST,
  $el: $("main"),
  indexView: function() {
    new HeaderView();
    this.index = new IndexView({ model: this.board });

    (this.board.get("lists")).each(this.createListAndCards, this);
  },
  createListAndCards: function(list) {
    // create the list view, then create corresponding card views for each list
    this.createListView(list);
    (list.get("cards")).each(this.createCardView);
  },
  createListView: function(list) {
    new ListView({
      model: list
    });
  },
  createCardView: function(card) {
    new CardView({
      model: card
    });
  },
  renameBoardView: function(board) {
    new RenameBoardView({
      model: board
    });
  },
  quickEditView: function(model, offset, list_id) {
    new QuickEditView({
      model: model,
      offset: offset,
      list_id: list_id
    });
  },
  searchResultsView: function(cards, list_titles, board_title, list_ids) {
    if (this.search_view) {
      this.search_view.remove();
    }
    this.search_view = new SearchResultsView({
      cards: cards,
      list_titles: list_titles,
      board_title: board_title,
      list_ids: list_ids
    });
  },
  searchCards: function(text) {
    var cards = [];
    this.all_cards.forEach(function(card_model) {
      // if card title or description contains search text
      if ((card_model.get("title").indexOf(text) !== -1) || (card_model.get("description").indexOf(text) !== -1)) {
        cards.push(card_model);
      }
    });

    var list_ids = cards.map(function(card) {
      // map cards to their corresponding list ids
      return card.collection.getListId();
    });

    var list_titles = cards.map(function(card) {
      // get the title of the list where the card is located
      return App.board.get("lists").get(card.collection.getListId()).get("title");
    });

    cards = cards.map(function(card_model) {
      return card_model.toJSON(); // get attributes of each card
    });

    this.trigger("search_results", cards, list_titles, this.board.get("title"), list_ids);
  },
  changeSelectOptions: function(select, list_id, add, current_pos) {
    // get card positions for newly selected list
    // for each of those positions, build a new option string
    var new_card_positions = this.getCardPositions(list_id);
    if (add) {
      new_card_positions.push(new_card_positions.length + 1);
    }
    var new_options = new_card_positions.map(function(pos, index, list) {
      var selected;
      if (pos === current_pos) {
        selected = true;
        return "<option value=" + pos + " selected>" + pos + "</option>";
      } else if ((index === (list.length - 1)) && !selected) {
        return "<option value=" + pos + " selected>" + pos + "</option>";
      } else {
        return "<option value=" + pos + ">" + pos + "</option>";
      }
    });
    // replace options of passed in select element
    select.html(new_options.join(''));
  },
  openModal: function(card) {
    this.modal = new CardModalView({
      model: card
    });
  },
  moveView: function(card, offset) {
    var lists = this.board.get("lists");
    var list_id = card.collection.getListId();

    new MoveCardView({
      model: card,
      collection: lists,
      offset: offset
    });
  },
  copyView: function(card, offset) {
    var lists = this.board.get("lists");
    var list_id = card.collection.getListId();

    new CopyCardView({
      model: card,
      collection: lists,
      offset: offset
    });
  },
  dateView: function(card, offset) {
    new DatePickerView({
      model: card,
      offset: offset
    });
  },
  labelsView: function(card, offset) {
    new LabelsView({
      model: card,
      collection: this.labels,
      offset: offset
    });
  },
  createLabelView: function(card, offset) {
    new CreateLabelView({
      model: card,
      offset: offset
    });
  },
  changeLabelView: function(card, label, offset) {
    new ChangeLabelView({
      model: label,
      card: card,
      offset: offset
    });
  },
  notificationsView: function() {
    if (this.notifications_view) {
      this.notifications_view.remove();
      this.notifications_view = false;
    } else {
      this.notifications_view = new NotificationsView({
        collection: this.activities
      });
    }
  },
  moveCard: function(json) {
    // get old list and new list by id
    var old_list = App.board.get("lists").get(json.old_list);
    var new_list = App.board.get("lists").get(json.new_list);

    // get cards collection for each list
    var old_cards = old_list.get("cards");
    var new_cards = new_list.get("cards");

    // remove card model by id from old_cards, add that model in at specific index (position - 1) in new cards, then reset positions on old cards and new cards
    var card = old_cards.remove(json.id);
    var index = json.new_position - 1;
    new_cards.add(card, {at: index, sort: false});
    App.resetPositions(old_cards);
    App.resetPositions(new_cards);
  },
  getCardPositions: function(list_id) {
    // get card positions corresponding to a list
    return App.board.get("lists").get(list_id).get("cards").map(function(card) {
      return card.get("position");
    });
  },
  resetPositions: function(cards) {
    cards.each(function(card, index) {
      card.set("position", index + 1);
    });
  },
  changeBoardTitle: function(title) {
    $(".board-name span").text(title);
  },
  checkForModal: function(card) {
    if (card.get("id") === this.modal.model.get("id")) {
      this.modal.render();
    }
  },
  getAllCards: function() {
    // get all cards on the board
    var result = [];
    this.board.get("lists").each(function(list) {
      list.get("cards").each(function(card) {
        result.push(card);
      });
    });
    return result;
  },
  createTitleLink: function(card) {
    var list_id = card.collection.getListId();
    var id = card.get("id");
    var title = card.get("title");
    return "<a href='#' class='title-link' data-id='" + id + "' data-list-id='" + list_id + "'>" + title + "</a>";
  },
  getMessage: function(card, attr, action) {
    var title_link = this.createTitleLink(card);
    if (attr === "due_date") {
      var due_date = card.get("due_date");
      var due_time = card.get("due_time");
    }

    var messages = {
      "title": {
        "change": "changed the title to " + title_link
      },
      "description": {
        "change": "edited the description in " + title_link
      },
      "label": {
        "add": "added a label to " + title_link,
        "remove": "removed a label from " + title_link,
        "change": "changed a label on " + title_link
      },
      "comment": {
        "add": "added a comment to " + title_link,
        "remove": "removed a comment from " + title_link,
        "change": "edited a comment on " + title_link
      },
      "complete": {
        "true": "marked the due date on " + title_link + " complete",
        "false": "marked the due date on " + title_link + " incomplete"
      },
      "due_date": {
        "change": "changed the due date of " + title_link + " to " + due_date + " at " + due_time,
        "remove": "removed the due date from " + title_link
      }
    };

    return messages[attr][action];
  },
  createNotification: function(card, attr, action) {
    if (card.get("subscribed")) {
      var msg = this.getMessage(card, attr, action);
      var self = this;
      $.ajax({
        url: "/activities/new",
        type: "post",
        data: JSON.stringify({msg: msg}),
        contentType: "application/json",
        success: function(json) {
          // add activity to activities collection
          self.activities.add(json);
        }
      });
    }
  },
  sortLabels: function(labels) {
    return labels.sort(function(l1, l2) {
      return l1.id - l2.id;
    });
  },
  getCardLabelIds: function(card) {
    return card.get("labels").map(function(label) {
      return label.id;
    });
  },
  bindEvents: function() {
    _.extend(this, Backbone.Events);
    this.on("list_view", this.createListView);
    this.on("card_view", this.createCardView);
    this.on("rename_board", this.renameBoardView);
    this.on("quick_edit_card", this.quickEditView);
    this.on("search_results", this.searchResultsView);
    this.on("open_modal", this.openModal);
    this.on("labels_view", this.labelsView);
    this.on("create_label_view", this.createLabelView);
    this.on("change_label_view", this.changeLabelView);
    this.on("notifications_view", this.notificationsView);
  },
  init: function() {
    this.bindEvents();
    this.all_cards = this.getAllCards();
    this.labels = new Labels(this.board.get("labels"));
    this.activities = new Activities(this.board.get("activities"));
  }
};

Handlebars.registerHelper("isCurrentList", function(list_id, list_item_id, options) {
  if (list_id === list_item_id) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});

Handlebars.registerHelper("isCurrentPosition", function(card, position, options) {
  if (card.position === position) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});

Handlebars.registerHelper("checkDate", function(date, options) {
  // checks if due date is before or after current date
  var date = (new Date(date)).getTime();
  var current = Date.now();
  if (current > date) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});

Handlebars.registerHelper("dateString", function(date) {
  // parses date into month and day string
  var date_vals = (new Date(date)).toUTCString().split(' ');
  var month = date_vals[2];
  var day = date_vals[1];
  var year = date_vals[3];

  if ((new Date()).getFullYear() === +year) {
    return month + " " + day;
  } else {
    return month + " " + day + ", " + year;
  }
});

Handlebars.registerHelper("hasLabel", function(arr, id, options) {
  if (arr.indexOf(id) !== -1) {
    return options.fn(this);
  }
});

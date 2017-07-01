var path = require("path");
var Board = require(path.resolve(path.dirname(__dirname), "local_modules/board_module"));
var _ = require("underscore");

module.exports = function(router) {
  router.put("/board", function(req, res) {
    var board = Board.get();
    // update attribute of board
    for (var prop in req.body) {
      board[prop] = req.body[prop];
    }
    Board.set(board); // rewrite board.json file
    res.json(req.body);
  });

  router.post("/lists/new", function(req, res) {
    var new_list = req.body;
    var board = Board.get();
    var lists = Board.getLists(board);

    var new_id = Board.nextListID(board);
    var new_position = Board.getNextPosition(lists);
    board.last_list_id = new_id;
    new_list.id = new_id;
    new_list.position = new_position;
    new_list.cards = [];
    lists.push(new_list);

    Board.set(board);

    res.json(new_list);
  });

  router.put("/lists/:id/title", function(req, res) {
    var id = +req.params.id;
    var board = Board.get();
    var lists = Board.getLists(board);

    // find list by id
    var current_list = Board.findByID(lists, id);

    current_list["title"] = req.body["title"];

    Board.set(board);

    res.json(req.body);
  });

  router.put("/lists/:id/position", function(req, res) {
    var id = +req.params.id;
    var new_position = +req.body.position;

    var board = Board.get();
    var lists = Board.getLists(board);

    var current_list = Board.findByID(lists, id);
    var list = lists.splice(lists.indexOf(current_list), 1)[0];
    // move to new index, position - 1
    lists.splice((new_position - 1), 0, list);
    // reset list positions
    Board.resetPositions(lists);
    Board.set(board);

    res.json({
      id: id,
      position: new_position
    });
  });

  router.delete("/lists/:id", function(req, res) {
    var list_id = +req.params.id;

    var board = Board.get();
    var lists = Board.getLists(board);

    lists = _(lists).reject(function(list) {
      return list.id === list_id;
    });

    Board.resetPositions(lists);
    Board.setLists(board, lists);
    Board.set(board);

    res.json({id: list_id});
  });

  router.post("/lists/:id/cards/new", function(req, res) {
    var new_card = req.body;
    var list_id = +req.params.id;

    var board = Board.get();
    var cards = Board.getCardsForList(board, list_id);
    var new_id = Board.nextCardID(board);
    var new_position = Board.getNextPosition(cards);
    board.last_card_id = new_id;

    // add attributes to card
    new_card.id = new_id;
    new_card.position = new_position;
    new_card.description = "";
    new_card.labels = [];
    new_card.comments = [];
    new_card.due_date = "";
    new_card.due_time = "";
    new_card.complete = false;
    new_card.subscribed = false;

    cards.push(new_card);
    Board.set(board);

    res.json(new_card);
  });

  router.post("/lists/:list_id/cards/:id/copy", function(req, res) {
    var list_id = +req.params.list_id;
    var card_id = +req.params.id;
    var new_list_id = +req.body.new_list;
    var new_position = +req.body.new_position;

    var board = Board.get();
    var list = Board.findByID(board.lists, list_id);
    var existing_card = Board.findByID(list.cards, card_id);

    // copy attributes from existing card to new_card, except title, id, comments and labels

    var new_card = _.extend({title: req.body.title}, _.omit(existing_card, ["title", "id", "comments", "labels"]));

    var new_card_id = Board.nextCardID(board);
    new_card.id = new_card_id; // set new id on copied card
    board.last_card_id = new_card_id;

    // if user wanted to keep labels and comments from source card, map deep copy of labels and comments objects to new card
    if (req.body.labels) {
      new_card.labels = _.map(existing_card.labels, _.clone);
    } else {
      new_card.labels = [];
    }
    if (req.body.comments) {
      new_card.comments = _.map(existing_card.comments, _.clone);
    } else {
      new_card.comments = [];
    }

    var new_cards = Board.getCardsForList(board, new_list_id);
    new_cards.splice((new_position - 1), 0, new_card);

    Board.resetPositions(new_cards);
    Board.set(board);

    res.json({
      new_list: new_list_id,
      card: new_card
    });
  });

  router.put("/lists/:list_id/cards/:id", function(req, res) {
    var list_id = +req.params.list_id;
    var card_id = +req.params.id;

    var board = Board.get();
    var cards = Board.getCardsForList(board, list_id);
    // find card by id
    var current_card = Board.findByID(cards, card_id);

    for (var prop in req.body) {
      current_card[prop] = req.body[prop];
    }

    Board.set(board);

    res.json(current_card);
  });

  router.put("/lists/:list_id/cards/:id/position", function(req, res) {
    var old_list_id = +req.params.list_id;
    var card_id = +req.params.id;
    var new_list_id = +req.body.new_list;
    var new_position = +req.body.new_position;

    var board = Board.get();

    var old_cards = Board.getCardsForList(board, old_list_id);
    var new_cards = Board.getCardsForList(board, new_list_id);

    var current_card = Board.findByID(old_cards, card_id);
    var card = old_cards.splice(old_cards.indexOf(current_card), 1)[0];
    // move to new index, position - 1
    new_cards.splice((new_position - 1), 0, card);
    // reset card positions in old cards and new cards
    Board.resetPositions(old_cards);
    Board.resetPositions(new_cards);

    Board.set(board);

    res.json({
      id: card_id,
      old_list: old_list_id,
      new_list: new_list_id,
      new_position: new_position
    });
  });

  router.delete("/lists/:list_id/cards/:id", function(req, res) {
    var list_id = +req.params.list_id;
    var card_id = +req.params.id;

    var board = Board.get();
    var list = Board.findByID(board.lists, list_id);
    var cards = list.cards;

    cards = _(cards).reject(function(card) {
      return card.id === card_id;
    });

    // re-map positions on cards
    Board.resetPositions(cards);
    list.cards = cards;
    Board.set(board);

    res.json({id: card_id});
  });

  router.post("/lists/:list_id/cards/:id/comments", function(req, res) {
    var comment = req.body;
    var list_id = +req.params.list_id;
    var card_id = +req.params.id;

    var board = Board.get();
    var list = Board.findByID(board.lists, list_id);
    var card = Board.findByID(list.cards, card_id);
    var comments = card.comments;

    comment.id = comments.length ? comments[comments.length - 1].id + 1 : 1;

    Board.addDateTime(comment);
    comments.push(comment);

    Board.set(board);
    res.json(comment);
  });

  router.put("/lists/:list_id/cards/:card_id/comments/:id", function(req, res) {
    var comment_edit = req.body;
    var list_id = +req.params.list_id;
    var card_id = +req.params.card_id;
    var comment_id = +req.params.id;

    var board = Board.get();
    var list = Board.findByID(board.lists, list_id);
    var card = Board.findByID(list.cards, card_id);
    var comment = Board.findByID(card.comments, comment_id);

    _.extend(comment, comment_edit);

    Board.set(board);
    res.json(comment);
  });

  router.delete("/lists/:list_id/cards/:card_id/comments/:id", function(req, res) {
    var list_id = +req.params.list_id;
    var card_id = +req.params.card_id;
    var comment_id = +req.params.id;

    var board = Board.get();
    var list = Board.findByID(board.lists, list_id);
    var card = Board.findByID(list.cards, card_id);
    var comment = Board.findByID(card.comments, comment_id);
    card.comments.splice(card.comments.indexOf(comment), 1);

    Board.set(board);
    res.json({
      id: comment_id
    });
  });

  router.post("/lists/:list_id/cards/:id/labels/card", function(req, res) {
    var label = req.body;
    var list_id = +req.params.list_id;
    var card_id = +req.params.id;

    var board = Board.get();
    var list = Board.findByID(board.lists, list_id);
    var card = Board.findByID(list.cards, card_id);
    var labels = card.labels;

    labels.push(label);

    Board.set(board);
    res.json(label);
  });

  router.delete("/lists/:list_id/cards/:id/labels/card", function(req, res) {
    var list_id = +req.params.list_id;
    var card_id = +req.params.id;
    var label_id = +req.body.id;

    var board = Board.get();
    var list = Board.findByID(board.lists, list_id);
    var card = Board.findByID(list.cards, card_id);

    var label = Board.findByID(card.labels, label_id);
    card.labels.splice(card.labels.indexOf(label), 1);

    Board.set(board);
    res.json(label);
  });

  router.post("/lists/:list_id/cards/:id/labels", function(req, res) {
    var new_label = req.body;
    var list_id = +req.params.list_id;
    var card_id = +req.params.id;

    var board = Board.get();
    var list = Board.findByID(board.lists, list_id);
    var card = Board.findByID(list.cards, card_id);
    var labels = card.labels;

    var new_id = Board.nextLabelID(board);
    new_label.id = new_id;
    board.last_label_id = new_id;
    labels.push(new_label);
    board.labels.push(new_label);

    Board.set(board);
    res.json(new_label);
  });

  router.put("/lists/:list_id/cards/:id/labels", function(req, res) {
    var updated_label = req.body;
    var list_id = +req.params.list_id;
    var card_id = +req.params.id;

    var board = Board.get();
    var list = Board.findByID(board.lists, list_id);
    var card = Board.findByID(list.cards, card_id);
    var labels = card.labels;

    var existing_label_1 = Board.findByID(labels, updated_label.id);
    _.extend(existing_label_1, updated_label);

    var existing_label_2 = Board.findByID(board.labels, updated_label.id);
    _.extend(existing_label_2, updated_label);

    Board.set(board);
    res.json(updated_label);
  });

  router.delete("/lists/:list_id/cards/:id/labels", function(req, res) {
    var label_id = +req.body.id;
    var list_id = +req.params.list_id;
    var card_id = +req.params.id;

    var board = Board.get();
    var list = Board.findByID(board.lists, list_id);
    var card = Board.findByID(list.cards, card_id);
    var labels = card.labels;

    // remove label from card's labels and board labels
    var label = Board.findByID(labels, label_id);
    labels.splice(labels.indexOf(label), 1);
    label = Board.findByID(board.labels, label_id);
    board.labels.splice(board.labels.indexOf(label), 1);

    Board.set(board);
    res.json(req.body);
  });

  router.post("/activities/new", function(req, res) {
    var activity = req.body;
    var board = Board.get();
    var activities = board.activities;

    activity.id = activities.length + 1;
    Board.addDateTime(activity);

    Board.set(board);
    res.json(activity);
  });

  router.put("/activities/reset", function(req, res) {
    var board = Board.get();
    board.activities = [];

    Board.set(board);
    res.json({});
  });
};

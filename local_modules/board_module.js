var path = require("path");
var fs = require("fs");
var _ = require("underscore");
var file_path = path.resolve(path.dirname(__dirname), "data/board.json");

var Board = {
  get: function() {
    return JSON.parse(fs.readFileSync(file_path, "utf8"));
  },
  set: function(data) {
    fs.writeFileSync(file_path, JSON.stringify(data), "utf8");
  },
  getLists: function(board) {
    return board.lists;
  },
  setLists: function(board, lists) {
    board.lists = lists;
  },
  findByID: function(arr, id) {
    return _(arr).findWhere({id: +id});
  },
  getLastListID: function(board) {
    return board.last_list_id;
  },
  nextListID: function(board) {
    return this.getLastListID(board) + 1;
  },
  getNextPosition: function(arr) {
    return arr.length + 1;
  },
  resetPositions: function(arr) {
    arr.forEach(function(el, index) {
      var position = index + 1;
      el.position = position;
    });
  },
  getCardsForList: function(board, list_id) {
    var list = this.findByID(board.lists, list_id);
    return list.cards;
  },
  getLastCardID: function(board) {
    return board.last_card_id;
  },
  nextCardID: function(board) {
    return this.getLastCardID(board) + 1;
  },
  nextLabelID: function(board) {
    return board.last_label_id + 1;
  },
  addDateTime: function(obj) {
    var date = new Date();
    obj.date = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
    var time = date.toLocaleTimeString();
    time = time.split(" ");
    time[0] = time[0].split(":").slice(0, 2).join(":");
    time = time.join(" ");
    obj.time = time;
  }
};

module.exports = Board;

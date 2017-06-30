var path = require('path');
var board_module = require(path.resolve(path.dirname(__dirname), 'local_modules/board_module'));

module.exports = function(router) {
  router.get('/', function(req, res, next) {
    res.render('index', {
      board: board_module.get()
    });
  });
};

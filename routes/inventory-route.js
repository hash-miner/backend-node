'use strict';

const bodyParser = require('body-parser').json();
const Block = require('../models/block');
const Transaction = require('../models/transaction');

module.exports = router => {
  router.route('/inventory/:search')
    .get(bodyParser, (req, res) => {
        console.log(req)
        Block.find(req.body)
        .then(data => res.send(data))
        .catch
      // router.socketServer.emit('UPDATE_CHAIN', req.body);
    });
};
'use strict';

const bodyParser = require('body-parser').json();
const Block = require('../models/block');
const Transaction = require('../models/transaction');
const tools = require('../lib/tools')

module.exports = router => {
  router.route('/inventory/:search')
    .get(bodyParser, (req, res) => {
 
       console.log(req.params.search,'params search')
        console.log(tools.urlParser)
        let stuff = tools.urlParser(req.params.search)
        
        Transaction.find(stuff)
        .then(data => res.send(data))
        .catch(err => console.error(err));
      // router.socketServer.emit('UPDATE_CHAIN', req.body);
    });
};
'use strict';

const bodyParser = require('body-parser').json();
const Block = require('../models/block');
const Transaction = require('../models/transaction');

module.exports = router => {
  router.route('/calc')
    .post(bodyParser, (req, res) => {
      console.log('Second Backend Hit');
      console.log('Req Body', req.body);
       
        block.transactions.map(ele => {
          let transactionSchema = Transaction({
            'blockNumber': ele.blockNumber,
            'fromAddress': ele.fromAddress,
            'toAddress': ele.toAddress,
            'doNotSell': ele.doNotSell,
            'currentLocation': ele.currentLocation,
            'lastUpdated': ele.lastUpdated,
            'originTimestamp': ele.originTimestamp,
            'batchId': ele.batchId,
            'growerId': ele.growerId,
            'batchWeight': ele.batchWeight,
            'growerLocation': ele.growerLocation,
            'distributorId': ele.distributorId,
            'itemId': ele.itemId,
            'distributorLocation': ele.distributorLocation,
            'itemWeight': ele.itemWeight,
            'packaging': ele.packaging,
            'retailerId': ele.retailerId,
            'retailerLocation': ele.retailerLocation,
            'regulatorWarnings': ele.regulatorWarnings,
          });
          transactionSchema.save();
        });
    
        let blockSchema = new Block({
          'blocknumber' : block.blocknumber,
          'previoushash': block.previoushash,
          'transactions': block.transactions,
          'timestamp': block.timestamp,
          'hash': block.hash,
          'nonce': block.hash,
        });   
    
        blockSchema.save();    
      




      // router.socketServer.emit('UPDATE_CHAIN', req.body);
      res.sendStatus(204);
    });
};
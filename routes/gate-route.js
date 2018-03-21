'use strict';

const bodyParser = require('body-parser').json();

module.exports = router => {
  router.route('/calc')
    .post(bodyParser, (req, res) => {
      console.log('Second Backend Hit');
      console.log('Req Body', req.body);
      // router.socketServer.emit('UPDATE_CHAIN', req.body);
      res.sendStatus(204);
    });
};
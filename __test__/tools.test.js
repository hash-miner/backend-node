'use strict';

const tools = require('../lib/tools');

describe('Blockchain Module', function() {
    describe('#Blockchain', function() {
        it('should return true, thanks travis', function() {
            let sampleUrl = 'http://www.grinder.com/?ed=scott&hasfun=true'
            expect(tools.urlParser(sampleUrl)).toEqual({'ed': 'scott', 'hasfun': 'true'});
          });
    })
});
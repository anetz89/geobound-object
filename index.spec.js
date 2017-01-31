(function() {
    'use strict';

    const
        Bound = require('./index.js'),
        expect = function(input, result) {
            if (input === null && !result) {
                return;
            }
            if (!input && result) {
                throw new Error('Expected ' + result + ', got ' + input);
            }
            if (!input.getNorth() === result[0]) {
                throw new Error('Expected north ' + result[0] + ', got ' + input.getNorth());
            }
            if (!input.getEast() === result[1]) {
                throw new Error('Expected east ' + result[1] + ', got ' + input.getEast());
            }
            if (!input.getSouth() === result[2]) {
                throw new Error('Expected south ' + result[2] + ', got ' + input.getSouth());
            }
            if (!input.getWest() === result[3]) {
                throw new Error('Expected west ' + result[3] + ', got ' + input.getWest());
            }
        };

    let invalid;

    // allow [north, east, south, west]
    expect(new Bound([1, 2, 3, 4]), [1, 2, 3, 4]);

    // allow [[north, east], [south, west]]
    expect(new Bound([[1, 2], [3, 4]]), [1, 2, 3, 4]);

    // allow [L.latLng, L.latLng]
    expect(new Bound([{
        lat : 1,
        lng : 2
    }, {
        lat : 3,
        lng : 4
    }]), [1, 2, 3, 4]);

    // allow identity
    expect(new Bound(new Bound([[1, 2], [3, 4]])), [1, 2, 3, 4]);

    // return null if invalid value is passed
    try {
        invalid = new Bound('invalid');
    } catch (e) {
        // expected error, return
        return console.log('OK');
    }
    throw new Error('Expected error thrown on invalid input, but created ' + invalid);
}());

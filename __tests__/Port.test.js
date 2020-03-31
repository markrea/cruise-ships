const Port = require('../src/Port.js');

let port;

describe('Port', () => {
    it('can be instantiated', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });
    it('has a name property', () => {
        port = new Port('Dover');
        expect(port.name).toBe('Dover');
    })
})
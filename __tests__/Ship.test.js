const Ship = require('../src/Ship.js')
let ship;

describe('Ship', () => {
    it('can be created', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });
    it('sets the a starting port property', () => {
        ship = new Ship('Southampton');
        expect(ship.startingPort).toBe('Southampton');
    });
    it('can set sail', () => {
        ship = new Ship('Southampton');
        
        ship.setSail();

        expect(ship.startingPort).toBeFalsy();
    })
});



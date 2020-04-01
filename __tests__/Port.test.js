const Port = require('../src/Port.js');
const Ship = require('../src/Ship.js');



describe('Port', () => {
    it('can be instantiated', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });
    it('has a name property', () => {
        const port = new Port('Dover');
        expect(port.name).toBe('Dover');
    });
    it('can add a ship', () => {
        const port = new Port('Dover');
        const ship = {};

        port.addShip(ship);
        expect(port.ships).toContain(ship);
    });
    it('can remove a ship', () => {
        const port = new Port('Dover');
        const titanic = {};
        const queenMary = {};

        port.addShip(titanic);
        port.addShip(queenMary);
        port.removeShip(queenMary);

        expect(port.ships).toEqual([titanic]);
    })
})
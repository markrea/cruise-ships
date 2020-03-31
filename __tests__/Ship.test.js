const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');
let ship;
let port;

describe('Ship', () => {
    it('can be created', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });
    it('sets the a starting port property', () => {
        port = new Port('Dover')
        ship = new Ship(port);
        expect(ship.currentPort).toBe(port);
    });
    it('can set sail', () => {
        //port = new Port('Dover');
        //ship = new Ship(port);
        
        ship.setSail();

        expect(ship.currentPort).toBe('');
    })
    describe('dock', () => {
        it('can dock at different ports', () =>{
            port = new Port('Dover')
            ship = new Ship(port
            ship.dock('Rotterdam')

            expect(ship.currentPort).toBe('Rotterdam');
        })
    })
});



const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');
const Itinerary = require('../src/Itinerary.js');
describe('Ship', () => {
    it('can be instantiated', () => {
        const port = new Port('Dover');
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);

        expect(ship).toBeInstanceOf(Object);
    });
    it('sets the a starting port property', () => {
        const port = new Port('Dover');
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);

        expect(ship.currentPort).toBe(port);
    });
    it('can set sail', () => {
        const dover = new Port('Dover');
        const rotterdam = new Port('Rotterdam');
        const itinerary = new Itinerary([dover, rotterdam]);
        const ship = new Ship(itinerary);
        ship.setSail();

        expect(ship.currentPort).toBeFalsy();
        expect(ship.previousPort).toBe(dover);
        expect(dover.ships).not.toContain(ship);
        
    });
   
        it('can dock at different ports', () =>{
            const dover = new Port('Dover');
            const rotterdam = new Port('Rotterdam');
            const itinerary  = new Itinerary([dover, rotterdam]);
            const ship = new Ship(itinerary);
            ship.setSail();
            ship.dock();

            expect(ship.currentPort).toBe(rotterdam);
            expect(rotterdam.ships).toContain(ship);
        });
   
    it('can\'t sail further than its itinerary', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover, calais]);
        const ship = new Ship(itinerary);
      
        ship.setSail();
        ship.dock();
      
        expect(() => ship.setSail()).toThrowError('End of itinerary reached');
      });
      it('gets added to port on instantiation', () => {
        const dover = new Port('Dover');
        const itinerary = new Itinerary([dover]);
        const ship = new Ship(itinerary);
        expect(dover.ships).toContain(ship);
      })
});


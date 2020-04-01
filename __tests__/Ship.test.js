const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');
const Itinerary = require('../src/Itinerary.js');
describe('Ship', () => {
    let dover;
    let rotterdam;
    let itinerary;
    let ship;
    beforeEach(() => {
        dover = new Port('Dover');
        rotterdam = new Port('Rotterdam');
        itinerary = new Itinerary([dover, rotterdam]);
        ship = new Ship(itinerary);
    });
    
    it('can be instantiated', () => {
        expect(ship).toBeInstanceOf(Object);
    });
    
    it('sets the a starting port property', () => {
        expect(ship.currentPort).toBe(dover);
    });

    it('can set sail', () => {
        ship.setSail();

        expect(ship.currentPort).toBeFalsy();
        expect(ship.previousPort).toBe(dover);
        expect(dover.ships).not.toContain(ship);
    });
   
    it('can dock at different ports', () =>{
        
        ship.setSail();
        ship.dock();

            expect(ship.currentPort).toBe(rotterdam);
            expect(rotterdam.ships).toContain(ship);
        });
   
    it('can\'t sail further than its itinerary', () => {
        ship.setSail();
        ship.dock();
      
        expect(() => ship.setSail()).toThrowError('End of itinerary reached');
      });

      it('gets added to port on instantiation', () => {
        expect(dover.ships).toContain(ship);
      })
});


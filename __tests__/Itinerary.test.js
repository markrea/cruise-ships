const Itinerary = require('../src/Itinerary.js');
const Port = require('../src/Port.js');

describe('Itinerary', () => {
    it('can be instantiated', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    });
    it('can have ports', () => {
       const dover = new Port('Dover');
       const rotterdam = new Port('Rotterdam')
       
        const itinerary = new Itinerary([dover, rotterdam])

        expect(itinerary.ports).toEqual([dover, rotterdam]);
    })
    
})
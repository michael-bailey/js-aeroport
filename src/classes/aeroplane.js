
/**
 * represents a aeroplane that can travel from port to port
 * 
 * @class
 */
class Aeroplane {

    name = "easyjet1"
    seats = 24
    type = "generic passenger plane"
    maxWeight = 50
    currentLocationName = ""
    destinationName = ""

    passengers = []

    /**
     * Creates a new Aeroplane
     * 
     * @constructor
     * @param {String} name 
     * @param {Number} seats 
     * @param {String} type 
     * @param {Number} maxWeight
     * 
     */
    constructor(name, seats, type, maxWeight) {
        if (name != undefined) {
            this.name = name
        }

        if (seats != undefined) {
            this.seats = seats
        }

        if (type != undefined) {
            this.type = type
        }

        if (maxWeight != undefined) {
            this.maxWeight = maxWeight
        }
    }

    /**
     * Calculates the remaining weight this plane supports
     * 
     * @returns {Number}
     */
    getRemainingWeight() {
        var combinedWeight = 0
        for (var i in this.passengers) {
            combinedWeight += this.passengers[i].getWeight()
        }
        return this.maxWeight - combinedWeight
    }

    /**
     * Calculates the remaining seats on the current plane
     * 
     * @returns {Number}
     */
    getRemainingSeats() {
        return this.seats - this.passengers.length
    }

    /**
     * This adds a passenger to the current plane.
     * returns 0 if success or 1 if not
     * 
     * @param {Passenger} person 
     * @returns {Number}
     */
    addPassenger(person) {
        if (this.getRemainingSeats() > 0 || this.getRemainingWeight() > person.getWeight()) {
            this.passengers.push(person)
            return 0
        }
        return 1
    }

    /**
     * sets the current location of the plane
     * 
     * @param {String} name 
     */
    setLocation(name) {
        this.currentLocationName = name
    }

    /**
     * sets the destination of the plane
     * 
     * @param {String} name 
     */
    setDestination(name) {
        this.destinationName = name
    }
}

module.exports = {Aeroplane}
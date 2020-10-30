
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
     * @param {String} name the name of the plane
     * @param {Number} seats the number of seats the plane has
     * @param {String} type a string of the type of plane
     * @param {Number} maxWeight the maximum weight that can be held by this plane
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
     * @returns {Number} the remaining weight of the plane
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
     * @returns {Number} the remaining seats of the plane
     */
    getRemainingSeats() {
        return this.seats - this.passengers.length
    }

    /**
     * This adds a passenger to the current plane.
     * 
     * @param {Passenger} person a passenger to be added
     * @returns {Number} 0 if success or 1 if not
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
     * @param {String} name the name of the current location
     */
    setLocation(name) {
        this.currentLocationName = name
    }

    /**
     * sets the destination of the plane
     * 
     * @param {String} name the destinationn name
     */
    setDestination(name) {
        this.destinationName = name
    }
}

module.exports = {Aeroplane}
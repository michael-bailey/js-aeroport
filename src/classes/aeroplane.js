
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

    getRemainingWeight() {
        var combinedWeight = 0
        for (var i in this.passengers) {
            combinedWeight += this.passengers[i].getWeight()
        }
        return this.maxWeight - combinedWeight
    }

    getRemainingSeats() {
        return this.seats - this.passengers.length
    }

    addPassenger(person) {
        if (this.getRemainingSeats() > 0 || this.getRemainingWeight() > person.getWeight()) {
            this.passengers.push(person)
            return 0
        }
        return 1
    }

    setLocation(name) {
        this.currentLocationName = name
    }

    setDestination(name) {
        this.destinationName = name
    }
}

module.exports = {Aeroplane}
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

    addPassenger(person) {
        if (this.passengers.length == this.seats) {
            return 1
        }

        var totalWeight = 0
        for (var i in this.passengers) {
            totalWeight += this.passengers[i].getTotalBagWeight()
        }

        if (totalWeight + person.getTotalBagWeight() > this.maxWeight) {
            return 1
        }

        this.passengers.push(person)
        return 0
    }

    setLocation(name) {
        this.currentLocationName = name
    }

    setDestination(name) {
        this.destinationName = name
    }
}

module.exports = {Aeroplane}
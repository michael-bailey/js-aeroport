class Aeroplane {

    name = "easyjet1"
    seats = 24
    type = "generic passenger plane"

    maxWeight = 50

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
}

module.exports = {Aeroplane}
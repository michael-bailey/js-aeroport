class Passenger {

    name = ""
    bags = []

    constructor(name, bags) {
        this.name = name

        if (bags != undefined) {
            this.bags = bags
        }
    }

    addBag(bag) {
        // TODO: - add constraints to bag holding weight
        this.bags.push(bag)
    }

    getWeight() {
        var result = 0
        for (var i in this.bags) {
            result += this.bags[i].weight
        }
        return result
    }

    getBagCount() {
        return this.bags.length
    }
}

module.exports = {Passenger}
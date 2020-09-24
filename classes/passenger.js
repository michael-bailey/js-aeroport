class Passenger {

    name = ""
    bags = []

    constructor(name, bags) {
        this.name = name
        this.bags = bags
    }

    addBag(bag) {
        // TODO: - add constraints to bag holding weight
        this.bags.push(bag)
    }

    getTotalBagWeight() {

    }

    getBagCount() {

    }
}

module.exports = {Passenger}
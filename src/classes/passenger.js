
/**
 * represents a passenger on a aeroplane
 * 
 * @class
 */
class Passenger {

    name = ""
    bags = []

    /**
     * creates a new Passenger
     * 
     * @constructor
     * @param {String} name 
     * @param {Array<Bag>} bags 
     */
    constructor(name, bags) {
        this.name = name

        if (bags != undefined) {
            this.bags = bags
        }
    }

    /**
     * adds a new bag to the Passenger
     * 
     * @param {Bag} bag 
     */
    addBag(bag) {
        // TODO: - add constraints to bag holding weight
        this.bags.push(bag)
    }

    /**
     * returns the sum of the weights of the passengers bags
     * 
     * @returns {Number}
     */
    getWeight() {
        var result = 0
        for (var i in this.bags) {
            result += this.bags[i].weight
        }
        return result
    }

    /**
     * returns thenumber of bags a passenger has
     * 
     * @returns {Number}
     */
    getBagCount() {
        return this.bags.length
    }
}

module.exports = {Passenger}

/**
 * represents a bag carried by a passenger
 * 
 * @class
 */
class Bag {

    weight = 0

    /**
     * creates a new bag with a weight
     * 
     * @constructor
     * @param {Number} weight 
     */
    constructor(weight) {
        this.weight = weight
    }
}

module.exports = {Bag}
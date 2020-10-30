const { Passenger } = require("../src/classes/passenger")
const { Bag } = require("../src/classes/bag")

describe("passenger tests", () => {
    test("test creation", () => {
        let passenger1 = new Passenger("Boris")

        expect(passenger1 instanceof Passenger).toEqual(true)
        expect(passenger1.name).toEqual("Boris")
        expect(passenger1.getWeight()).toEqual(0)
        expect(passenger1.getBagCount()).toEqual(0)
    })

    test("test adding bag", () => {
        let passenger = new Passenger("alice")

        let bag1 = new Bag(10.0)
        let bag2 = new Bag(5.0)

        passenger.addBag(bag1)
        passenger.addBag(bag2)

        expect(passenger.getBagCount()).toBe(2)
        expect(passenger.getWeight()).toBe(15.0)
    })
})

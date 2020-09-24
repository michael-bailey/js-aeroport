const { Bag } = require("./classes/bag")
const passenger = require("./classes/passenger")
const {Passenger} = require("./classes/passenger")

describe("bag tests", () => {
    test("test creation", () => {
        let bag1 = new Bag(10.0)
        expect(bag1 instanceof Bag).toEqual(true)
    })

    test("person", () => {
        let bag1 = new Bag(10.0)
        let bag2 = new Bag(10.0)
        passenger1 = new Passenger("Boris")

        passenger1.addBag(bag1)
        passenger1.addBag(bag2)

        expect(passenger1.name).toEqual("Boris")
        expect(passenger1.bags.length).toEqual(2)
    })
})
const {Aeroplane} = require("./classes/aeroplane")
const { Bag } = require("./classes/bag")
const {Passenger} = require("./classes/passenger")

describe("bag and passenger tests", () => {

    test("test creation", () => {
        let bag1 = new Bag(10.0)
        expect(bag1 instanceof Bag).toEqual(true)
    })

    test("person", () => {
        let bag1 = new Bag(10.0)
        let bag2 = new Bag(24.0)
        passenger1 = new Passenger("Boris")

        passenger1.addBag(bag1)
        passenger1.addBag(bag2)

        expect(passenger1.name).toEqual("Boris")
        expect(passenger1.getTotalBagWeight()).toEqual(34.0)
        expect(passenger1.getBagCount()).toEqual(2)
        

    })
})

describe("plane tests", () => {
    test("test creation", () => {
        let plane1 = new Aeroplane("plane number 1", 56, "not so generic plane", 128)

        expect(plane1 instanceof Aeroplane).toEqual(true)
        expect(plane1.name).toEqual("plane number 1")
        expect(plane1.seats).toEqual(56)
        expect(plane1.type).toEqual("not so generic plane")
        expect(plane1.maxWeight).toEqual(128)

    })

    test("test adding passengers", () => {
        let passenger1 = new Passenger("Boris")
        let passenger2 = new Passenger("Boris")
        let passenger3 = new Passenger("Boris")
    })

    test("test over boarding", () => {

    })
})
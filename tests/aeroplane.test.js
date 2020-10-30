
const { Aeroplane } = require("../src/classes/aeroplane")
const { Passenger } = require("../src/classes/passenger")
const { Bag } = require("../src/classes/bag")


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

        let passenger1 = new Passenger("Alice")
        let passenger2 = new Passenger("Alice")
        let passenger3 = new Passenger("Alice")
        let passenger4 = new Passenger("Alice")

        let plane1 = new Aeroplane("plane number 1", 6, "a quite small plane", 60)

        plane1.addPassenger(passenger1)
        plane1.addPassenger(passenger2)
        plane1.addPassenger(passenger3)
        plane1.addPassenger(passenger4)

        expect(plane1.passengers.length).toEqual(4)
        expect(plane1.passengers[0]).toEqual(passenger1)
        expect(plane1.passengers[1]).toEqual(passenger2)
    })

    test("test over boarding", () => {
        let bag1 = new Bag(10.0)
        let bags = [bag1, bag1]

        let passenger1 = new Passenger("Bob", bags)
        let passenger2 = new Passenger("Bob", bags)
        let passenger3 = new Passenger("Bob", bags)

        let plane1 = new Aeroplane("plane number 1", 2, "a quite small plane", 60)

        var result1 = plane1.addPassenger(passenger1)
        let result2 = plane1.addPassenger(passenger2)
        let result3 = plane1.addPassenger(passenger3)

        expect(result1).toEqual(0)
        expect(result2).toEqual(0)
        expect(result3).toEqual(1)
        
    })
    test("test over weight", () => {
        let bag1 = new Bag(20.0)
        let bags = [bag1, bag1]

        let passenger1 = new Passenger("Boris", bags)
        let passenger2 = new Passenger("Boris", bags)
        let passenger3 = new Passenger("Boris", bags)
        let passenger4 = new Passenger("Boris", bags)
        let passenger5 = new Passenger("Boris", bags)
        let passenger6 = new Passenger("Boris", bags)
        let passenger7 = new Passenger("Boris", bags)

        let plane1 = new Aeroplane("plane number 1", 6, "a quite small plane", 60.0)

        let result1 = plane1.addPassenger(passenger1)
        let result2 = plane1.addPassenger(passenger2)
        let result3 = plane1.addPassenger(passenger3)
        let result4 = plane1.addPassenger(passenger4)
        let result5 = plane1.addPassenger(passenger5)
        let result6 = plane1.addPassenger(passenger6)
        let result7 = plane1.addPassenger(passenger7)

        expect(result1).toEqual(0)
        expect(result2).toEqual(0)
        expect(result3).toEqual(0)
        expect(result4).toEqual(0)
        expect(result5).toEqual(0)
        expect(result6).toEqual(0)
        expect(result7).toEqual(1)
    })
})
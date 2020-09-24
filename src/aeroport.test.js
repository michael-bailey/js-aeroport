const { Aeroplane } = require("./classes/aeroplane")
const { Aeroport } = require("./classes/aeroport")
const { Bag } = require("./classes/bag")
const { Passenger } = require("./classes/passenger")

describe("bag and passenger tests", () => {

    test("test creation", () => {
        let bag1 = new Bag(10.0)

        expect(bag1 instanceof Bag).toEqual(true)
    })
})

describe("passenger tests", () => {
    test("person", () => {
        let bag1 = new Bag(10.0)
        let bag2 = new Bag(24.0)
        let passenger1 = new Passenger("Boris")

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

        let bag1 = new Bag(10.0)
        let bags = [bag1, bag1]

        let passenger1 = new Passenger("Alice", bags)
        let passenger2 = new Passenger("Alice", bags)
        let passenger3 = new Passenger("Alice", bags)
        let passenger4 = new Passenger("Alice", bags)

        let plane1 = new Aeroplane("plane number 1", 6, "a quite small plane", 60)

        plane1.addPassenger(passenger1)
        plane1.addPassenger(passenger2)
        plane1.addPassenger(passenger3)
        plane1.addPassenger(passenger4)
    })

    test("test over boarding", () => {
        let bag1 = new Bag(10.0)
        let bags = [bag1, bag1]

        let passenger1 = new Passenger("Bob", bags)
        let passenger2 = new Passenger("Bob", bags)
        let passenger3 = new Passenger("Bob", bags)
        let passenger4 = new Passenger("Bob", bags)
        let passenger5 = new Passenger("Bob", bags)
        let passenger6 = new Passenger("Bob", bags)
        let passenger7 = new Passenger("Bob", bags)

        let plane1 = new Aeroplane("plane number 1", 6, "a quite small plane", 60)

        plane1.addPassenger(passenger1)
        plane1.addPassenger(passenger2)
        plane1.addPassenger(passenger3)
        plane1.addPassenger(passenger4)
        plane1.addPassenger(passenger5)
        plane1.addPassenger(passenger6)
        let result = plane1.addPassenger(passenger7)

        expect(result).toEqual(1)
        
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

        let plane1 = new Aeroplane("plane number 1", 6, "a quite small plane", 60)

        plane1.addPassenger(passenger1)
        plane1.addPassenger(passenger2)
        plane1.addPassenger(passenger3)
        plane1.addPassenger(passenger4)
        plane1.addPassenger(passenger5)
        plane1.addPassenger(passenger6)
        let result = plane1.addPassenger(passenger7)

        expect(result).toEqual(1)
    })
})

describe("areoport tests", () => {

    test("test creation", () => {
        let aeroport = new Aeroport("luton", 2, 8)

        // testing instance
        expect(aeroport instanceof Aeroport).toEqual(true)
        expect(aeroport.plane_capacity).toEqual(16)
        expect(aeroport.name).toEqual("luton")

        // testing static method
        expect(Aeroport.ports.length).toBe(1)
        expect(Aeroport.ports[0]).toEqual(aeroport)
    })

    test("test get port by name", () => {
        let aeroport = new Aeroport("luton", 2, 8)
        let port = Aeroport.getPortByName("luton")

        expect(port).toEqual(aeroport)
    })

    test("test adding planes", () => {
        plane1 = new Aeroplane("a plane", 12, "small", 1000)

        port1 = new Aeroport("luton", 1, 2);
        result = port1.addPlane(plane1)

        expect(result).toEqual(0)
    })

    test("test over fully docked", () => {
        let plane1 = new Aeroplane("a plane", 12, "small", 1000)
        let plane2 = new Aeroplane("a plane", 12, "small", 1000)

        port1 = new Aeroport("luton", 1, 1);
        port1.addPlane(plane1)
        result = port1.addPlane(plane2)

        expect(result).toEqual(1)
    })

    test("test transfer of plane", () => {

        let port1 = new Aeroport("luton", 2, 2)
        let port2 = new Aeroport("gatwick", 4, 4)

        let plane = new Aeroplane("plane_001", 12, "boeing 2", 1000)
        let result1 = port1.addPlane(plane)
        
        plane.setDestination("gatwick")
        let result2 = port1.departPlane(plane.name)

        expect(result1).toBe(0)
        expect(result2).toBe(0)
        expect(port2.planes.length).toEqual(1)
        expect(port2.planes[0]).toEqual(plane)

    })
})
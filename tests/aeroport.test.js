const { Aeroplane } = require("../src/classes/aeroplane")
const { Aeroport } = require("../src/classes/aeroport")

describe("areoport tests (sync)", () => {

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
        result = port1.addPlaneSync(plane1)

        expect(result).toEqual(0)
    })

    test("test fully docked", () => {
        let plane1 = new Aeroplane("a plane", 12, "small", 1000)
        let plane2 = new Aeroplane("a plane", 12, "small", 1000)

        port1 = new Aeroport("luton", 1, 1);
        port1.addPlaneSync(plane1)
        result = port1.addPlaneSync(plane2)

        expect(result).toEqual(1)
    })

    test("test transfer of plane", () => {

        let port1 = new Aeroport("luton", 2, 2)
        let port2 = new Aeroport("gatwick", 4, 4)

        let plane = new Aeroplane("plane_001", 12, "boeing 2", 1000)
        let result1 = port1.addPlaneSync(plane)
        
        plane.setDestination("gatwick")
        let result2 = port1.departPlaneSync(plane.name)

        expect(result1).toBe(0)
        expect(result2).toBe(0)
        expect(port2.planes.length).toEqual(1)
        expect(port2.planes[0]).toEqual(plane)

    })
})

describe("Aeroport async tests", () => {

    test("test loading airports async (callback)", (done) => {
        let port1 = new Aeroport("port1", 2, 2)

        port1.getInfoCallback("EGGW", (port) => {
            expect(port.name).toEqual("London Luton Airport")
            done()
        })
    })

    test("test loading airports async (promise)", (done) => {
        port1 = new Aeroport()
        return port1.getInfoPromise("EGGW")
            .then((port) => {
                expect(port.name).toEqual("London Luton Airport")
                done()
            })
    })

    test("test loading airports async (async/await)", async () => {
        port1 = new Aeroport()
        let port = await port1.getInfoPromise("EGGW")
        expect(port.name).toEqual("London Luton Airport")
    })
})
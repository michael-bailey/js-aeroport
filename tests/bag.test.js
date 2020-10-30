const { Bag } = require("../src/classes/bag")


describe("bag tests", () => {

    test("test creation", () => {
        let bag1 = new Bag(10.0)

        expect(bag1 instanceof Bag).toEqual(true)
    })
})
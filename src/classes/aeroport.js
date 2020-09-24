class Aeroport {

    // static
    static ports = []

    static getPortByName(name) {
        Aeroport.ports.find((port) => {name === port.name})
    }

    // instance
    name = ''
    terminals = 1
    gates = 1
    plane_capacity = 1

    planes = []

    constructor(name, terminals, gates) {
        if (name != undefined) {
            this.name = name
        }
        if (terminals != undefined) {
            this.terminals = terminals
        }
        if (gates != undefined) {
            this.gates = gates
        }
        this.plane_capacity = terminals*gates

        Aeroport.ports.push(this)
    }

    addPlane(plane) {
        if (this.planes.length < this.plane_capacity) {
            this.planes.push(plane)
            return 0
        }
        return 1
    }

    transfer(planeName, destinationName) {
        
    }
}

module.exports = {Aeroport}
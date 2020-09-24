class Aeroport {

    // static
    static ports = []

    static getPortByName(name) {
        let port = Aeroport.ports.find((port) => {return name === port.name})

        return port
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
            plane.setDestination("")
            this.planes.push(plane)
            plane.setLocation(this.name)
            return 0
        }
        return 1
    }

    departPlane(planeName) {
        // find plane
        let plane = this.planes.find((p) => {return p.name === planeName})

        if (plane == undefined) {
            return 1
        }

        // find port
        let newPort = Aeroport.getPortByName(plane.destinationName)

        let completed = newPort.addPlane(plane)
        if (completed == 1) {
            return 1
        }

        this.planes.splice(this.planes.indexOf(plane), 1)
        return 0
    }
}

module.exports = {Aeroport}
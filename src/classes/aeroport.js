const fs = require('fs')
const path = require('path')

/**
 * represents a aeroport that can hold aeroplanes
 * @class 
 */
class Aeroport {

    // static feilds
    static ports = []
    static cachedPorts = undefined

    // instance feilds
    name = ''
    terminals = 1
    gates = 1
    plane_capacity = 1

    planes = []

    /**
     * returns an instance of a port that is already created
     * 
     * @param {String} name 
     * @returns {Aeroport} object containing the details if the requested aeroport
     */
    static getPortByName(name) {
        let port = Aeroport.ports.find((port) => {return name === port.name})

        return port
    }

    /**
     * this returns all aeroports from the json file
     * This does not retrun the same type of object as the clas itself
     * 
     * @returns {Array}
     */
    static getAllPorts() {
        // check if the cache is empty
        if (Aeroport.cachedPorts == undefined) {
            // loading the aeroports from the file
            fs.readFile(dataPath, (err, data) => {
                let ports = JSON.parse(String(data))
                Aeroport.cachedPorts = ports
            })
        }
        
        return Aeroport.cachedPorts
    }

    /**
     * This creates a new aeroport with parameters
     * 
     * @constructor
     * @param {String} name the name of the aeroport
     * @param {Number} terminals the number of terminals 
     * @param {Number} gates the number of gates per terminal
     */
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

    /**
     * synchronously adds a plane to the aeroport.
     * 
     * @param {Aeroplane} plane he plane to be added to a aeroport
     * @returns {number} this is 1 if there is an error 0 if there isn't
     */
    addPlaneSync(plane) {
        if (this.planes.length < this.plane_capacity) {
            plane.setDestination("")
            this.planes.push(plane)
            plane.setLocation(this.name)
            return 0
        }
        return 1
    }

    /**
     * This synchronously departs a single plane.
     * 
     * @param {Aeroplane} planeName the name of the plane to be departed
     * @returns {number} this is 1 if there is an error 0 if there isn't
     */
    departPlaneSync(planeName) {
        // find plane
        let plane = this.planes.find((p) => {return p.name === planeName})

        if (plane == undefined) {
            return 1
        }

        // find port
        let newPort = Aeroport.getPortByName(plane.destinationName)

        let completed = newPort.addPlaneSync(plane)
        if (completed == 1) {
            return 1
        }

        this.planes.splice(this.planes.indexOf(plane), 1)
        return 0
    }

    /**
     * get the info of a secific aeroport and call the callback with the result
     * 
     * @param {String} name the name of the aeroport to get the info off
     * @returns {Aeroport} the requested aeroport
     */
    getInfoCallback(name,cb) {
        console.log("cb version");

        let dataPath = path.join(__dirname, "..", "..", "data", 'airports.json')
        fs.readFile(dataPath, (err, data) => {
            let ports = JSON.parse(String(data))
            let keys = Object.keys(ports)
            cb(ports[name])
        })
    }

    /**
     * get the info of a secific aeroport using a promise
     * 
     * @param {String} name the name of the aeroport to get the info off
     * @returns {Aeroport} the requested aeroport
     */
    getInfoPromise(name) {
        console.log("promise version");

        return new Promise((res, rej) => {
            let dataPath = path.join(__dirname, "..", "..", "data", 'airports.json')
            if (dataPath == undefined) {
                rej()
            }
            fs.readFile(dataPath, (err, data) => {

                let ports = JSON.parse(String(data))
                let keys = Object.keys(ports)
                
                res(ports[name])
            })
        })
    }

    /**
     * get the info of a secific aeroport asynchronously
     * 
     * @param {String} name name of the aeroport to get the info off
     * @returns {Aeroport} the requested aeroport
     */
    async getInfoAsync(name) {
        console.log("promise version");

        return new Promise((res, rej) => {
            let dataPath = path.join(__dirname, "..", "..", "data", 'airports.json')
            if (dataPath == undefined) {
                rej()
            }
            fs.readFile(dataPath, (err, data) => {

                let ports = JSON.parse(String(data))
                
                res(ports[name])
            })
        })
    }
}

module.exports = {Aeroport}
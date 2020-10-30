# Aeroport

This class describes an Aeroport that can have terminals, gates, and Aeroplanes.

## Use

The aeroport class is used to store planes associated with the port and transfer planes that have a destination.

As well as this, it provides checks; based on the terminals and gates, to see if the port can hold any incomming planes.

The class holds a static array of all ports in memory. This has allowed searching of all ports that have been created.

## Fields 

| name           | description                                                 |
| -------------- | :---------------------------------------------------------- |
| static ports   | A list of all ports that have been created.                 |
| name           | The name of the current port.                               |
| terminals      | The number of terminals this port.                          |
| gates          | The number of gates in a terminal.                          |
| plane_capacity | The total number of planes this port can hold.              |
| Planes         | An array of all the planes that are currently at this port. |



## Methods

| name                         | description                                                  |
| ---------------------------- | ------------------------------------------------------------ |
| constructor                  | this creates a new aeroport object and adds to the static list of all ports. |
| static getPortByName(*name*) | A class method to get a port by the name provided            |
| addPlane(*plane*)            | This adds a plane to the port changing its destination and location to reflect the transfer |
| departPlane(*planeName*)     | Initiates a plane to depart by name.                         |



## Class Overview

``` javascript
class Aeroport {
  static ports;
  static getPortByName(name);
  
  name;
  terminals;
  gates;
  plane_capacity;
  Planes;
  
  addPlane(plane);
  departPlane(planeName);
}
```

---

[Index](./index.md)
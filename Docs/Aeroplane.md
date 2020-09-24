# Aeroplane

this class decribes an aeroplane object that is to be held by an aeroport.

## Use

The aeroplane class is used to store passengers associated with the plane.

As well as this, it also provides some checks. This is to make sure that the plane doesn't have too many people or too much weight. this is achoeved by some stored values such as a 'maxWeight' and 'seats'.



## Fields 

| Name       | Description                                                  |
| ---------- | ------------------------------------------------------------ |
| name       | the name given to this instance of a plane.                  |
| seats      | the total number of passengers that can be held on this plane regardles of weight. |
| type       | name for the type of plane.                                  |
| maxWeight  | the total baggage weight that this plane can hold.           |
| passengers | an array containing all references to all the passengers on this plane. |



## Methods

| name         | decription                                                   |
| ------------ | ------------------------------------------------------------ |
| Constructor  | This is called when a plane is instantiated. it tkes the name, seats, type and max weight and assigns them to its fields. |
| addPassenger | This takes a passenger and adds it to the list of passengers. it returns a 0 if successful and a 1 if not. examples of when it fails include, too many passengers or the total baggage weight exceeds the planes capacity |



## Source Overview

``` javascript
class Aeroplane {
  name = "plane1"
  seats = 24
  type = "generic passenger plane"
  maxWeight = 50
  passengers = []

	constructor(name, seats, type, maxWeight);
	addPassenger(person);
}
```


# Passenger

This class descripes a passenger for a plane. It has a weight and any amount of bags. 

## Use

The passenger class is used to represent a single passenger that can board a plane. A passenger can have bags that adds to the passengers total weight. this weight value is used to allow or deny boarding a plane, if it is too high.

## Fields

| name | description                                       |
| ---- | ------------------------------------------------- |
| name | This is the passengers name.                      |
| bags | This is an array of all bags the passenger holds. |



## Methods

| name                        | description                                                  |
| --------------------------- | ------------------------------------------------------------ |
| constructor(*name*, *bags*) | This creates a new passenger with a name and optional bags   |
| addBag(*bag*)               | This adds a new bag to the passenger                         |
| getTotalBagWeight()         | This returns the sum of the weight of all the passengers bags |
| getBagCount()               | This gets the number of bags the passenger has.              |



## Source Overview

``` javascript
class Passenger {
  name;
  bags;
  
  constructor(name, bags);
  addBag(bag);
  getTotalBagWeight();
  getBagCount();
}
```


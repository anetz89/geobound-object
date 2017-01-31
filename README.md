# geobound-object
This package provides a constructor to create bound objects, specific for geographic usage. 
The style is similar to [Leaflet's LatLngBound](http://leafletjs.com/reference.html#latlngbounds) object, with much less functionality (and with arrays instead of LatLng elements returned). It can be used if you need to define unique bounds with variable input.
This package is used as output format of [osmtile2bound](https://www.npmjs.com/package/osmtile2bound) and as input format for [bound2osmtile](https://www.npmjs.com/package/bound2osmtile).

## Installation
Use standard npm installation

```shell
npm install --save geobound-object
```

## Usage
This package provides a constructor only. This constructor has to be called with the new statement. If invalid properties are passed, the constructor throws an error.

### Input parameter
THere are many different types of allowed inputs

#### Edge - Array
```js
// [north, east, south, west]
new Bound([48.1354432, 11.6037082, 48.123412, 11.621389]);

// output: Bound object
```

#### Bound - Array
```js
// [[north east], [south west]]
new Bound([[48.1354432, 11.6037082], [48.123412, 11.621389]]);

// output: Bound object
```

#### Bound - LatLng Array
```js
// [LatLng, LatLng]
new Bound([L.latLng([48.1354432, 11.6037082]), L.latLng([48.123412, 11.621389])]);

// output: Bound object
```

#### LatLngBound or Identity
```js
new Bound(new Bound([48.1354432, 11.6037082, 48.123412, 11.621389]));

// output: Bound object
```

### Bound Object
The returned bound object has several getter methods.

- getNorth() - Number, north point
- getEast()  - Number, east point
- getSouth() - Number, south point
- getWest()  - Number, west point
- getSouthWest - [Number, Number], [south, west]
- getNorthWest - [Number, Number], [north, west]
- getNorthEast - [Number, Number], [north, east]
- getSouthEast - [Number, Number], [south, east]
- getCenter  - [Number, Number], [lat, lng] of center of the bounds

## Contribute
Feel free to add issues or pull requests. I'm glad for every kind of feedback!
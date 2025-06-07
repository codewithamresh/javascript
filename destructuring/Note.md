

De-Structuring :
 - Extract specific info

Spread Operator :
 - Extract all the info into any other container(always)
  
Rest Operator : 
 - Collect all or remaining information

> Note - Rest operator must be a last parameter.
```js

const obj = {...[1,2,3,4,5]}; // valid 
const arr = [...{a:1,b:2}]; // refrence error
// only iterable datastructures are spreable - object is not iterable


```
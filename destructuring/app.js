const arr  = [1,2,3,4,5,6,7,8,9 ];
// const first = arr[0]
// const second = arr[1]

const [first,second] = arr;
console.log(first,second)

const obj = {
    lang:"ENG",
    native:"Awadhi"
}

const myNative = obj.native;
console.log(myNative)

const {myNative2} = obj; // undefined
console.log(myNative2)

const {native} = obj; // same name as in object
console.log(native)

const {native : myNative3} = obj; // same name as in object
console.log(myNative3)


const obj2 = {...[1,2,3,4,5]}; // valid 
const arr2 = [...{a:1,b:2}]; // refrence error
// only iterable datastructures are spreable - object is not iterable
console.log(obj2)
console.log(arr2)
var magic = function(){
    return new Date();
};

// convert into arrow function
var magic = ()=> {
    return new Date();
}
const magic = () => new Date();



// convert normal function into arrow function
var myConcat = function(arr1,arr2){
    return arr1.concat(arr2);
};
console.log(myConcat([1,2], [3,4,5]));

// arrow function 
var myConcat = (arr1, arr2) => arr1.concat(arr2);
// function      arguments        return 
console.log(myConcat([1,2],[3,4,5]));


// filter not negative integers
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 8.34, -2];
const squareList = (arr) => {
        const squaredIntegers = arr;
        return squaredIntegers;

};


// 
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 8.34, -2];
const squareList = (arr) => { 


    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num >0).map(x => x * x);
    return squaredIntegers;

};

const squaredIntegeres = squareList(realNumberArray);
console.log(squaredIntegers);

// higher order function
const increment = (function() {
    return function increment(number , value = 1) {
        return number + value;
    };
})();
console.log(increment(5,2));
console.log(increment(5));


// rest operator
const sum = (function() {
    return function sum(...args){
        return args.reduce((a,b) => a + b, 0);
    };
})();
console.log(sum(1,2,3));



const arr1 = ['JAN','FEB', 'MAR', 'APR', 'MAY'];
let arr2; 
(function () {
    arr2 = [...arr1]; 
    arr1[0] = 'potato';
})();
console.log(arr2);


// Destructoring assignment
var voxel = {x: 3.6, y: 7.4, z:6.54};

var x = voxel.x; // x = 3.6'
var y = voxel.y; // x = 3.6'
var z = voxel.z; // x = 3.6'

const {x: a, y:b, z:c } = voxel;

const AVG_TEMPERATURES = {
    today: 77.5, 
    tomorrow: 79
};

funciton getTempOfTomorrow(avgTemperatures){
    "use strict";
    // change code below this line
}
const 
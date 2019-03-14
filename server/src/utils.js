/*
    utils.js: this is a file of functions
    for unit testing
*/

/*brief:
Here is a list of functions to write for
unit-testing:
    Basic:
    1. findMax: return max in an array
    2. findMin: return min in an array
    3. filter(array, string): filter out
        a string in a list
        return a copy
    4. tolowercase
    5. touppercase
    6. text parsing
    7. find() find an item in an array
    8. sum
    9
    
    Higher Order Functions:
    1. bundle 2 functions:
*/



/* write a function that returns the maximum
of an array. Return nan if argument is not an 
array*/
function findMax(l) {
    if(l === undefined ||
        !(l instanceof Array)) {
        return NaN;
    } else {
        let maxi = l[0];
        let eachChar;
        for(eachChar of l) {
            if(eachChar > maxi) {
                maxi = eachChar;
            }
        }
        return maxi;
    }
}

function findMin(l) {
    if (l === undefined || !(l instanceof Array)) {
        return NaN;
    } else {
        let min = l[0];
        let num;
        for (num of l) {
            if (!(typeof num === 'number')) {
                return NaN;
            }
            if (num < min) {
                min = num;
            }
        }
        return min;
    }
}

/* returns true if the desired element is in an array
false otherwise */
function find(element, l) {
    if (element === undefined || l === undefined || !(l instanceof Array)) {
        return false;
    } else {
        for (let i = 0; i < l.length; i++) {
            if (element === l[i]) {
                return true;
            }
        }
        return false;
    }
}

/* write a function that returns the text 
into array and remove the white space of the 
text */
function textParsing(t) {
    if ((t === undefined) || !(typeof t === "string")) {
        return undefined;
    } else {
        let newt = t.trim();
        newt = newt.split(" ");
        return newt;
    }
}

/* write a function that returns an array 
that eliminate all the number which are less 
than 0 */
function filter(array) {
    if (array === undefined || !(array instanceof Array)) {
        return undefined;
    } else {
        const newArray = array.filter( n => n > 0);
        return newArray;
    }
}

/* a function that returns a new
function with args1 fixed*/
function bundleFunc(fn, ...args1) {
    return function (...args) {
        return fn(...args1, ...args);
    };
}

function tolowercase(l) {
    if(l === undefined ||
        !(typeof(l) === "string")) {
        return NaN;
    } else {
        const newstring = l.toLowerCase();
        return newstring;
    }
}

function touppercase(l) {
    if(l === undefined ||
        !(typeof(l) === "string")) {
        return NaN;
    } else {
        const newstring = l.toUpperCase();
        return newstring;
    }
}
/* a function that returns the sum from an array */
function sum(l){
    if(l === undefined ||
        !(l instanceof Array)) {
        return NaN;
    }
    else {
        var sum = 0
        let eachChar;
        for (eachChar of l)
            sum = sum + eachChar
        }
    return sum
}
console.log(([1,2,3].isarray)== (true));
console.log(sum(([1,2,3].isarray)== (true)));

/* a function return true if the string is palindrome and false else */
function palindrome(str) {
    //removing unwanted character
    if (typeof str != "string"){
        throw ("not str");
    }
    var removing = /[\W_]/g;
    var lowStr = str.toLowerCase().replace(removing, '');
    var reverseStr = lowStr.split('').reverse().join('');
    if (reverseStr === lowStr) {
        return true;
    } // "i am a man, nam, a, ma, i"
    else{
        return false;
    }
}



//add functions to exports
module.exports = {
    findMax:findMax,
    textParsing:textParsing,
    filter:filter,
    bundleFunc:bundleFunc,
    tolowercase:tolowercase,
    touppercase:touppercase,
    findMin: findMin,
    find: find,
    sum: sum,
    palindrome: palindrome
};
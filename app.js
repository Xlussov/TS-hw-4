"use strict";
//! 1
const user1 = {
    name: 'Danil',
    age: 16,
};
const user2 = {
    age: 16
};
const isObject = (data) => {
    return typeof data === 'object';
};
const isName = (user) => {
    return 'name' in user;
};
const setNewError = (error) => {
    throw new Error(error);
};
const checkName = (userData) => {
    if (isObject(userData) && isName(userData)) {
        console.log("Is ok");
    }
    else {
        setNewError('Is not have name');
    }
};
checkName(user1); //* Ok
checkName(user2); //! Error
//! 2 
const numberArray = [4, 34, 6, 3, 3, 6, 3, 7, 3, 4, 1];
const noNumberArray = [4, 34, 6, '3', 3, 6, 3, '7', 3];
const isNumber = (arr) => {
    return arr.every(item => typeof item === 'number');
};
const checkIsNumber = (arr) => {
    if (isNumber(arr)) {
        const sumOfNumber = arr.reduce((a, b) => a + b, 0);
        console.log('Сума чисел у масиві:', sumOfNumber);
    }
    else {
        setNewError('Is not a number array');
    }
};
console.log(checkIsNumber(numberArray)); //* OK
console.log(checkIsNumber(noNumberArray)); //! ERROR

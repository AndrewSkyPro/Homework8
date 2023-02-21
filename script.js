//Задание 1 

const multiFunc = (arr) => {
    sum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        sum *= arr[i];    }
    return sum;
}

const sumFunc = (arr) => {
    sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];    }
    return sum;
}

const getResult = (arr, callback) => callback(arr);
console.log(getResult([3, 4, 1, 9], multiFunc));
console.log(getResult([3, 4, 1, 9], sumFunc));


//Задание 2

const users = [
	{name: 'Jon', age: 22},
	{name: 'Richard', age: 18},
	{name: 'Anton', age: 32},
	{name: 'Lida', age: 23},
	{name: 'Bob', age: 44}
];

function compareAge(a, b) {
    if (a.age > b.age) return 1;
    if (a.age < b.age) return - 1;
    return 0;
}

users.sort(compareAge);
console.log(users);

// //Задание 3

const arrReverse = [1, '4', 9, 'two'];
const arrNumbers = [1, '4', false, 9, 'two'];

const reversArr = (arr) => arr.reverse();
const toNumberArr = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != Number) arr[i] = Number(arr[i]);
        if (isNaN(arr[i])) arr.splice(i, 1);   
    }
    console.log(arr);
}

const each = (arr, callback) => callback(arr);
console.log(each(arrReverse, reversArr));   
each(arrNumbers, toNumberArr);

// //Задание 4

const timer = () => {
    let date = new Date();
    console.log(date);
    let interval = setInterval(() => {
        date = Date();
        console.log(date);
    }, 3 * 1000);
    setTimeout(() => {
        clearInterval(interval);
        console.log('Прошло 30 секунд');
    }, 30 * 1000);
};
timer();

// //Задание 5

function calling() {
    console.log('Звоню!')
};

function beeps(callback) {
    setTimeout(() => {
        console.log('Идут гудки...')
        callback();
    }, 1000);
};

function talk() {
    console.log('Разговор')
};

setTimeout(() => {
    calling();
    beeps(talk);
}, 1000);
















































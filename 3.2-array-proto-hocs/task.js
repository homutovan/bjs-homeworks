'use strict'

//Task 3.2.1

function sleep(milliseconds) {
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

let sleepTime;

function sum(...args) {
    sleep(sleepTime);
    return args.reduce((sum, arg) => sum += +arg);
  }

let compareArrays = (arr1, arr2) => arr1.length == arr2.length2 && arr1.every((elem, index) => elem === arr2[index]);

let arr1 = [1, 2, 4], arr2 = [1, 2, 3, 4];

console.log(compareArrays(arr1, arr2));

function memorize(fn, limit) {
    let memory = [];
    return function inner(...args) {
        let findResult = memory.find(elem => compareArrays(elem.args, args));
        let result = findResult ? findResult.result : fn(...args);

        if (!findResult) {
            memory.push({args: args, result: result});        
        }

        if (memory.length > limit) {
            memory.shift();
        }
        return result;
    }
}

let testArgs = [[1, 2, 3], [1, 2], [1, 2, 3], [1, 2], [9, 5, 2, 4], [9, 5, 4], [9, 5, 2, 4], [9, 5, 4], [1, 4, 6]];

function testCase(testFunction, timerName) {
    console.time(timerName);
    for (let i = 0; i < 100; i++){
        testArgs.forEach(element => testFunction(...element))
    }
    console.timeEnd(timerName);
}

let foo = memorize(sum, 1);



// // Тестирование оптимизированной функции с различной глубиной кеша

// sleepTime = 100;

// testCase(memorize(sum, 5), 'Ortimized function, limit = 5')
// //Ortimized function, limit = 5: 506.349853515625ms

// testCase(memorize(sum, 3), 'Ortimized function, limit = 3')
// //Ortimized function, limit = 3: 50512.67919921875ms

// testCase(memorize(sum, 1), 'Ortimized function, limit = 3')
// //Ortimized function, limit = 3: 70726.8017578125ms

// // Тестирование исходной функции

// testCase(sum, 'Original function, sleep = 100')
// //Original function, sleep = 100: 91017.82299804688ms

// sleepTime = 0;

// testCase(sum, 'Original function, sleep = 0')
// //Original function, sleep = 0: 907.810791015625ms

// //По результатам тестирования видим, что скорость выполнения функции с кешированием
// //существенно выше, чем скорость выполнения исходной функции, при этом, она очень сильно зависит от глубины кэша



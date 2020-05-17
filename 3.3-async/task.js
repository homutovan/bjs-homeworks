// Task 3.3.1

'use strict'

class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if(!id) {
            throw new Error('Невозможно инициализировать будильник. Параметр ID не передан!');
        }

        if(this.alarmCollection.some(elem => elem.id === id)) {
            return console.error('Звонок с указанным ID уже существует!');
        }

        this.alarmCollection.push({id, time, callback});
    }

    removeClock(id) {
        let len = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(elem => elem.id != id);
        return len != this.alarmCollection.length;
    }

    getCurrentFormattedTime() {
        return new Date().toTimeString().substr(0, 5);
    }

    start() {
        let checkClock = alarm => (alarm.time == this.getCurrentFormattedTime()) && alarm.callback();
        (!this.timerId) && (this.timerId = setInterval(() => this.alarmCollection.forEach(alarm => checkClock(alarm)), 5000));
    }

    stop() {
        if(this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length}`);
        this.alarmCollection.forEach(elem => console.log(`Будильник №${elem.id}, установлен на ${elem.time}`));
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

function testCase() {
    let alarmClock = new AlarmClock();

    alarmClock.addClock(alarmClock.getCurrentFormattedTime(), () => console.log('Скоро спать!'), 1);

    alarmClock.addClock(new Date(Date.now() + 60000).toTimeString().substr(0, 5), () => {
        console.log('Пора готовиться ко сну!');
        alarmClock.removeClock(2);
        alarmClock.printAlarms();
    }, 2);

    try {
        alarmClock.addClock(new Date(Date.now() + 60000).toTimeString().substr(0, 5), 
        () => console.log('Иди умываться!')); // Отсутствие ID
    } catch (e) {
        console.log(e);
    }
    
    alarmClock.addClock(new Date(Date.now() + 2 * 60000).toTimeString().substr(0, 5), () => {
        console.log('Иди спать, завтра рано на работу!');
        alarmClock.clearAlarms();
        alarmClock.printAlarms();
    }, 3);

    alarmClock.addClock(new Date(Date.now() + 60000).toTimeString().substr(0, 5), 
    () => console.log('Иди спать, завтра рано на работу!'), 1); // Существующий ID

    alarmClock.printAlarms();
    alarmClock.start();
}

testCase()

// Error: Невозможно инициализировать будильник. Параметр ID не передан!
//     at AlarmClock.addClock (task.js:13)
//     at testCase (task.js:68)
//     at task.js:88
// task.js:17 Звонок с указанным ID уже существует!
// addClock @ task.js:17
// testCase @ task.js:81
// (anonymous) @ task.js:88
// task.js:46 Печать всех будильников в количестве: 3
// task.js:47 Будильник №1, установлен на 21:15
// task.js:47 Будильник №2, установлен на 21:16
// task.js:47 Будильник №3, установлен на 21:17
// 6task.js:59 Скоро спать!
// task.js:62 Пора готовиться ко сну!
// task.js:46 Печать всех будильников в количестве: 2
// task.js:47 Будильник №1, установлен на 21:15
// task.js:47 Будильник №3, установлен на 21:17
// task.js:76 Иди спать, завтра рано на работу!
// task.js:46 Печать всех будильников в количестве: 0

'use strict'

//Task 2.3.1
class Weapon {
    //Вот таким противоестественным образом я использую конструктор, чтобы успешно пройти тест, т.к. в тестах в него передается объект
    constructor(weaponObj) {
        this.name = weaponObj.name;
        this.attack = weaponObj.attack;
        this.fullDurability = weaponObj.durability;
        this.range = weaponObj.range;
        this.durability = this.fullDurability;
    }

    calcAttack() {
        this.attack = this.durability ? (1 - this.durability / this.fullDurability >= 0.3 ? this.attack : this.attack / 2): 0;
    }

    takeDamage(damage) {
        this.durability -= this.durability > damage ? damage : this.durability;
    }

    getDamage() {
        const remainingDurability = this.durability / this.fullDurability ? this.durability / this.fullDurability : 1;
        return this.durability ? (remainingDurability >= 0.3 ? this.attack : this.attack / 2): 0;
    }

    isBroken() {
        return this.durability ? false : true;
    }
}

let weaponObjects =     [
                    {name: 'Рука',	attack: 1,	durability: Infinity,   range: 1},
                    {name: 'Лук',	attack: 10,	durability: 200,        range: 3},
                    {name: 'Меч',	attack: 25,	durability: 500,        range: 1},
                    {name: 'Нож',	attack: 5,	durability: 300,        range: 1},
                    {name: 'Посох',	attack: 8,	durability: 300,        range: 2}
                ];

let advWeaponObjects =     [
                    {name: 'Длинный лук',	attack: 15, range: 4},
                    {name: 'Секира',	    attack: 27,	durability: 800},
                    {name: 'Посох Бури',	attack: 10,	range: 3}
                ];

//Массив экземпляров оружия из таблицы 1
let weapons = weaponObjects.map(iter => new Weapon(iter));
//Массив экземпляров оружия из таблицы 2
let advWeapons = advWeaponObjects.map(iter => new Weapon(iter));

//Task 2.3.2

function weaponFabric(obj) {
    return class extends Weapon {
        constructor() {
            super(obj);
        }
    }
}

let weaponsModel = ['Arm', 'Bow', 'Sword', 'Knife', 'Staff'];

//Создаем классы обычного оружия

for (let iter = 0; iter < weapons.length; iter++) {
    window[weaponsModel[iter]] = weaponFabric(weaponObjects[iter]);
}

//console.log(gerAttr(advWeaponObjects[0]));

function advWeaponFabric (parent, obj) {
    let objk = Object.keys(obj);
    return class extends parent {
        constructor(...objk) {
            super();
            for (let attr in obj) {
                this[attr] = obj[attr];
            }
        }
    }
}

//Создаем классы продвинутого оружия

let LongBow = advWeaponFabric(Bow, advWeaponObjects[0]);
let Axe = advWeaponFabric(Sword, advWeaponObjects[1])
let StormStaff = advWeaponFabric(Staff, advWeaponObjects[2])


//Task 2.3.3

class StudentLog {

    #totalAverage = {};

    constructor(name) {
        this.name = name;
        this.subjects = {};
    }

    getName() {
        return this.name;
    }

    addGrade(grade, subject) {
        if (this.gradeHandler(grade, subject)) {
            this.addOneGrade(grade, subject);
        }
        return this.subjects[subject] ? this.subjects[subject].length : 0;
    }

    addOneGrade(grade, subject) {
        if (!this.subjects[subject]) {
            this.subjects[subject] = [];
        }
        this.subjects[subject].push(grade);
    }

    gradeHandler(grade, subject) {
        if ([1, 2, 3, 4, 5].includes(grade)) {
            return true;
        } else {
            console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`);
        }
    }

    getAverageBySubject(subject, subjects = this.subjects) {
        const reducer = (sumRate, currentRate) => +sumRate + +currentRate;
        return !subjects[subject].length ? 0: subjects[subject].reduce(reducer) / subjects[subject].length;
    }

    getTotalAverage() {
        if (!this.subjects) {
            return 0;
        }

        this.#totalAverage.average = [];
        for (let subject in this.subjects) {
            this.#totalAverage.average.push(this.getAverageBySubject(subject));
        }
        return this.getAverageBySubject('average', this.#totalAverage);
    }
}

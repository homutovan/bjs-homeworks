'use strict'

//Task 1

function parseCount(count) {
    let newCount = Number.parseInt(count);
    if (newCount) {
        return newCount;
    } else {
        throw new Error ('Невалидное значение');
    }
}

function validateCount(count) {
    try {
        return parseCount(count);
    } catch(e) {
        return e;
    }
}

//Task 2

class Triangle {

    constructor(...sides) {
        this.sides = sides;
        this.validateTriangle();
        this.perimeter = sides.reduce((result, side) => result + side);
    }

    validateTriangle() {
        let ryng = i => i < 3 ? i : i - 3;
        for (let i = 0; i < this.sides.length; i++) {
            if (this.sides[ryng(i)] + this.sides[ryng(i + 1)] < this.sides[ryng(i + 2)]) {
                throw new Error ('Треугольник с такими сторонами не существует');
            }
        }
    }

    getPerimeter() {
        return this.perimeter;
    }

    getArea() {
        return parseFloat((this.sides.reduce((result, side) => result * (this.perimeter - 2 * side), this.perimeter) ** 0.5 / 4).toFixed(3));
    }
}

function getTriangle(...sides) {
    try {
        return new Triangle(...sides);
    } catch(e) {
        return {
            getPerimeter: () => 'Ошибка! Неправильный треугольник',
            getArea : () => 'Ошибка! Неправильный треугольник'
        };
    }
}

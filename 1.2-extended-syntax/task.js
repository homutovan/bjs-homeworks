'use strict'

function getResult(a,b,c){
    let roots = [], discr = b * b - 4 * a * c;

    for (let step of [1, -1]) {

        if (discr === 0) {
            roots.push(-b / 2 * a);
            break;

        } else if (discr ** 0.5) {
            roots.push((-b + step * discr ** 0.5) / 2 * a);
        }
    }
    return roots;
}

function getAverageMark(marks){
    const reducer = (sumRate, currentRate) => sumRate + currentRate;
    let numberRate = marks.length;

    if (!numberRate) {
        return 0;
    } 

    if (numberRate > 5) {
        console.log(`Количество введенных оценок: ${numberRate}, среднее значение рассчитано для первых 5`);
        marks = marks.slice(0, 5);
        numberRate = 5;
    }
    return marks.reduce(reducer) / numberRate;
}

function askDrink(name, dateOfBirthday){
    let currDate = new Date(), msg;
    
    if (currDate.getFullYear() - dateOfBirthday.getFullYear() < 18) {
        msg = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    } else {
        msg = `Не желаете ли олд-фэшн, ${name}?`;
    }
    return msg;
}
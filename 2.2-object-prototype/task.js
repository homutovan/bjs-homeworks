function getAnimalSound(animal) {
    return animal ? animal.sound : null;
}

function getAverageMark(marks) {
    const reducer = (sumRate, currentRate) => +sumRate + +currentRate;
    return !marks.length ? 0: Math.round(marks.reduce(reducer) / marks.length);
}

function checkBirthday(birthday) {
    let now = +new Date(), userBirthday = +new Date(birthday);
    let age = (now - userBirthday) / 365.25 / 24 / 60 / 60 / 1000;
    return (age > 18) ? true : false;
}
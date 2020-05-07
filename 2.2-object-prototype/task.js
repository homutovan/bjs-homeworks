function getAnimalSound(animal) {
    return animal ? animal.sound : null;
}

function getAverageMark(marks) {
    const reducer = (sumRate, currentRate) => +sumRate + +currentRate;
    return !marks.length ? 0: Math.round(marks.reduce(reducer) / marks.length);
    // код для задачи №2 писать здесь
    // return averageMark
}

function checkBirthday(birthday) {
    let now = new Date();
    console.log(now);
    // код для задачи №3 писать здесь
    return 5;
}
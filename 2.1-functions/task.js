//Task 2.1.1

function getSolutions(a, b, c) {
    let roots = [], discr = b * b - 4 * a * c;

    for (let step of [1, -1]) {

        if (discr === 0) {
            roots.push(-b / 2 * a);
            break;

        } else if (discr ** 0.5) {
            roots.push((-b + step * discr ** 0.5) / 2 * a);
        }
    }
    return {
            'D': discr, 
            'roots': roots
            }
}

function showSolutionsMessage(a, b, c) {
    window.alert(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`)
    let result = getSolutions(...arguments);
    window.alert(`Значение дискриминанта: ${result.D}`)
    if (!result.roots.length) {
        window.alert('Уравнение не имеет вещественных корней');
    } else if (result.roots.length == 1) {
        window.alert(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
    } else {
        window.alert(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    }
}

//Task 2.1.2

function getAverageMark(marks){
    const reducer = (sumRate, currentRate) => sumRate + currentRate;
    return !marks.length ? 0: marks.reduce(reducer) / marks.length;
}

function getAverageScore(data) {
    let average = [];
    for (let prop in data) {
        data[prop] = getAverageMark(data[prop]);
        average.push(data[prop])
    }
    data['average'] = getAverageMark(average);
    return data;
}

//Task 2.1.3

let getPersonData = secretData => {return {
                                            firstName: getDecodedValue(secretData.aaa), 
                                            lastName: getDecodedValue(secretData.bbb)
                                            }
}

let getDecodedValue = secret => !secret ? 'Родриго' : 'Эмильо';

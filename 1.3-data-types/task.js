'use strict'

class Handler {
    constructor(percent, contribution, amount, date) {
        this.spanErr = {
            percent: window.errPercent,
            contribution: window.errContribution,
            amount: window.errAmount,
            date: window.errDate
            };
        this.nowDate = new Date();
        this.percent = this.valueHandler(percent, 'percent') / 100;
        this.contribution = this.valueHandler(contribution, 'contribution'); 
        this.amount = this.valueHandler(amount, 'amount'); 
        this.date = this.dateHandler(date);
        this.numberMonth = this.mounthCounter(0);
    }

    valueHandler(value, varName) {
        if (isNaN(value)) {
            this.spanErr[varName].textContent = `Параметр ${varName} содержит неправильное значение ${value}!`
        } else if (value < 0) {
            this.spanErr[varName].textContent = `Параметр ${varName} должен быть положительным числом!`;
        } else if (this.spanErr[varName]) {
            this.spanErr[varName].innerHTML = '';
        }
        return value;
    }

    dateHandler(date) {
        if (isNaN(Date.parse(date))) {
            this.spanErr[`date`].textContent = `Необходимо ввести дату!`;
        } else if (date < this.nowDate) {
            this.spanErr[`date`].textContent = `Дата должна быть больше текущей!`;
        } else if (this.spanErr[`date`]) {
            this.spanErr[`date`].innerHTML = '';
        }
        return date;
    }

    mounthCounter(countMonth) {
        if(this.nowDate < this.date) {
            this.nowDate.setMonth(this.nowDate.getMonth() + 1);
            countMonth ++;
            countMonth = this.mounthCounter(countMonth);
        }
        return countMonth;
      }
}

function calculateTotalMortgage(percent, contribution, amount, date) {
    let handler = new Handler(percent, contribution, amount, date);
    let fullCost = handler.numberMonth * (handler.amount - handler.contribution) * handler.percent / 12 * (1 + 1/(((1 + handler.percent / 12) ** handler.numberMonth) - 1));
    
    if (isNaN(fullCost)) {
        return `Стоимость кредита не может быть рассчитана!`;
    } else {
        return +fullCost.toFixed(2);
    }
}

function getGreeting(name) {
    return `Привет, мир! Меня зовут ${name ? name : 'Аноним'}`;
}
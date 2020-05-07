describe('Домашнее задание к занятию 2.2 «Прототип и конструктор объекта»', () => {
  it('Задача №1 должна возвращать null при отсутствующем животном', () => {
    expect(getAnimalSound()).toBeNull();
  });

  it('Задача №1 должна возвращать голос животного', () => {
    expect(getAnimalSound({sound: 'grrrr'})).toEqual('grrrr');
  });

  it('Задача №2 должна возвращать округлённую оценку, кейс #1', () => {
    expect(getAverageMark([2,4,5])).toEqual(4);
  });

  it('Задача №2 должна возвращать округлённую оценку, кейс #2', () => {
    expect(getAverageMark([2,3,5])).toEqual(3);
  });

  it('Задача №2 должна возвращать 0 при отсутствии оценок', () => {
    expect(getAverageMark([])).toEqual(0);
  });

  it('Задача №3 должна возвращать истину для взрослого пользователя', () => {
    expect(checkBirthday(new Date(1990, 0, 1))).toBeTruthy();
  });

  it('Задача №3 должна возвращать ложь для молодого пользователя', () => {
    expect(checkBirthday(new Date())).toBeFalsy();
  });
});

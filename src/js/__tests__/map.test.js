import ErrorRepository from "../map";


test ("проверка что такого кода ошибки нет", () => {
    const error = new ErrorRepository();

    expect(() => error.translate(6)).toThrow('Unknown error');
});


test ("Вывод если код в наличии", () => {
    const error = new ErrorRepository();

    expect(error.translate(1)).toBe('Описание ошибки № 1!');
    expect(error.translate(2)).toBe('Описание ошибки № 2!');
    expect(error.translate(3)).toBe('Описание ошибки № 3!');
});

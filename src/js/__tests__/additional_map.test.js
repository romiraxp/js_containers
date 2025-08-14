import { Settings } from "../additional_map";

// const m = new Settings();]
// console.log(m.theme('light'));
// console.log(m.music('rock'));
// console.log(m.difficulty('hard'));
// console.log(m.reset());
// console.log(m);
// console.log(m.music('rock'));
// console.log(m.difficulty('nightmare'));
// console.log(m.reset());

test("ошибка theme", () => {
    const set = new Settings();
    const t = 'lit';
    expect(set.theme('lit')).toEqual(`Темы ${t} нет!`);
})

test("изменение в theme", () => {
    const set = new Settings();
    const t = 'light';
    expect(set.theme('light')).toEqual(`Тема сменилась на ${t}\n${set.display()}\n`);
    expect(set.defaultSettings.get('theme')).toEqual(t);
})

test("ошибка music", () => {
    const set = new Settings();
    const t = 'rok';
    expect(set.music('rok')).toEqual(`Жанра ${t} нет!`);
})

test("изменение в music", () => {
    const set = new Settings();
    const t = 'rock';
    expect(set.music('rock')).toEqual(`Жанр музыки сменился на ${t}\n${set.display()}\n`);
    expect(set.defaultSettings.get('music')).toEqual(t);
})

test("ошибка difficulty", () => {
    const set = new Settings();
    const t = 'norm';
    expect(set.difficulty('norm')).toEqual(`Сложности ${t} нет!`);
})

test("изменение в difficulty", () => {
    const set = new Settings();
    const t = 'nightmare';
    expect(set.difficulty('nightmare')).toEqual(`Сложность сменилась на ${t}\n${set.display()}\n`);
    expect(set.defaultSettings.get('difficulty')).toEqual(t);
})

test("тестирование reset", () => {
    const set = new Settings();
    const res = set.reset();

    expect(res).toEqual(`Настройки сброшены!\n${set.display()}\n`);
})
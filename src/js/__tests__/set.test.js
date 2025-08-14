import { Team, Character } from '../set';


test ("добавление игрока и преобразование методом toArray", () => {
    const teamPlay = new Team();
    teamPlay.add('Silver');

    expect(teamPlay.toArray()).toContain('Silver');
});


test ("добавление с ошибкой", () => {
    const one = new Team();
    one.add("Silverhend");

    expect(() => {
        one.add("Silverhend");}).toThrow('Игрок Silverhend уже есть в команде!');
});


test("проверка toAll() и преобразование методом toArray", () => {
    const one = new Team();
    one.addAll("Silverhend", "S", "Si", "Sil");

    const myTeam = [
        "Silverhend",
        "S",
        "Si",
        "Sil"
    ];

    expect(one.toArray()).toEqual(myTeam);
});

test("исключение в повторении toAll() и преобразование методом toArray", () => {
    const one = new Team();
    one.addAll("Silverhend", "Si", "Si", "Sil");

    const myTeam = [
        "Silverhend",
        "Si",
        "Sil"
    ];

    expect(one.toArray()).toEqual(myTeam);
});

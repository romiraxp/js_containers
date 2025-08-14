export class Settings {
    constructor() {
        this.initialSetting = new Map ([
            ['theme', 'dark'],
            ['music', 'trance'],
            ['difficulty', 'easy']
        ]);
        this.defaultSettings = new Map ([...this.initialSetting]);

        this.validTheme = ['dark', 'light', 'gray'];
        this.validMusic = ['trance', 'pop', 'rock', 'chillout', 'off'];
        this.validDifficulty = ['easy', 'normal', 'hard', 'nightmare'];
    }

    theme(theme) {
        if (!this.validTheme.includes(theme)) {
            return `Темы ${theme} нет!`;
        } else {
            this.defaultSettings.set('theme', theme);
            return `Тема сменилась на ${theme}\n${this.display()}\n`;
        }
    }

    music(music) {
        if (!this.validMusic.includes(music)) {
            return `Жанра ${music} нет!`;
        } else {
            this.defaultSettings.set('music', music);
            return `Жанр музыки сменился на ${music}\n${this.display()}\n`;
        }
    }

    difficulty(difficulty) {
        if (!this.validDifficulty.includes(difficulty)) {
            return `Сложности ${difficulty} нет!`;
        } else {
            this.defaultSettings.set('difficulty', difficulty);
            return `Сложность сменилась на ${difficulty}\n${this.display()}\n`;
        } 
    }

    reset() {
        this.defaultSettings = new Map ([...this.initialSetting]);
        return `Настройки сброшены!\n${this.display()}\n`;
    }

    display() {
        let setString = "Текущие настройки: ";
        for (const [key, value] of this.defaultSettings) {
            setString += `${key}: ${value}, `;
        }
        return setString.slice(0, -2);
    }
}

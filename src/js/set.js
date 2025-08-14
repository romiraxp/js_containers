export class Character {
    constructor(squad) {
        this.squad = squad;
    }
}

export class Team {
    constructor() {
        this.members = new Set();
    }

    add(player) {
        if (this.members.has(player)) {
            throw new Error(`Игрок ${player} уже есть в команде!`);
        } else {
            this.members.add(player);
            const gamer = new Character(this.members);
            return gamer;
        }
    }

    addAll (...players) {
        for (const size of players) {
            this.members.add(size);
            
        }
        const gamers = new Character(this.members);
        return gamers;
    }

    toArray () {
        const p = [...this.members]
        const gamers = new Character(p);
        return gamers.squad;
    }
}

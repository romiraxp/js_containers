export default class ErrorRepository {
    constructor() {
        this.arrayError = new Map([
        [1, 'Описание ошибки № 1!'],
        [2, 'Описание ошибки № 2!'],
        [3, 'Описание ошибки № 3!']
        ])
    }

    translate(code) {
        if (!this.arrayError.has(code)) {
            throw new Error('Unknown error')
        } else {
            return this.arrayError.get(code);
        }
    }
}

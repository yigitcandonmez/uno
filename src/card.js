export class Card {
    constructor(value, color) {

        this.value = value;
        this.color = color;
    }

    get value() {
        return this.value;
    }

    get color() {
        return this.color;
    }

    set value(value) {
        this._value = value;
    }

    set color(color) {
        this._color = color;
    }
};
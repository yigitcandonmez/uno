export class Player {
    constructor(name, cards, point, order) {
        this.name = name;
        this.cards = cards;
        this.point = point;
        this.order = order;
    }

    get name() {
        return this.name;
    }

    get cards() {
        return this.cards;
    }

    get point() {
        return this.point;
    }

    get order() {
        return this.order;
    }

    set name(name) {
        this._name = name;
    }

    set cards(cards) {
        this._cards = cards;
    }

    set point(point) {
        this._point = point;
    }

    set order(order) {
        this._order = order;
    }
}
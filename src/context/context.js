import { createContext, useState } from "react";
import { Card } from "../card";
import { Player } from "../player";


const generateCards = () => {
    const deck = [];
    const colors = ['red', 'green', 'blue', 'yellow'];
    const coloredValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+1', '+2', '+3', 'reverse', 'block'];
    const specialValues = ['+4', '+4', '+4', '+4', 'changeColor', 'changeColor', 'changeColor', 'changeColor'];

    for(let color of colors) {
        for(let value of coloredValues) {
            deck.push(new Card(value, color))
        }
    }

    for(let value of specialValues) {
        deck.push(new Card(value, null))
    }

    return deck;
}

const generatePlayers = (playerCount = 4) => {
    const players = [];
    const playerNames = ['OSMAN', 'OSMAN2', 'OSMAN3', 'OSMAN4'];

    for (let i = 0; i <= 3; i++) {
        players.push(new Player(playerNames[i], [], 0, i))
    }

    return players;
}

const shuffleCards = (cards) =>  {
    return cards
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
}

const dealCards = (deck, players) => {
    players.forEach(p => {
        const cards = deck.splice(0, 7)
        console.log(cards);
        p.cards = cards
    }); 
}

const drawCard = (deck, player) => {
    if (player) {
        const card = deck.splice(0, 1)
        player.cards.push(card)
    } else {
        // ortadaki kartlara eklenecek
    }
}

export const UnoContext = createContext({});

export const UnoProvider = ({ children }) => {
    const deck = shuffleCards(generateCards())
    const playersWithCards = dealCards(deck, generatePlayers())

    const [cards, setCards] = useState(() => deck);
    const [players, setPlayers] = useState(() => playersWithCards);

    const value = {cards, setCards, players, setPlayers}
    return <UnoContext.Provider value={value}>
        { children }
    </UnoContext.Provider>
};

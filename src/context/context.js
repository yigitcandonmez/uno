import { createContext, useState } from "react";
import { Card } from "../card";
import { Player } from "../player";

const UnoContext = createContext({});

const generateCards = () => {
    const deck = [];
    const colors = ['red', 'green', 'blue', 'yellow'];
    const coloredValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+1', '+2', '+3', 'reverse', 'block'];
    const specialValues = ['+4', '+4', '+4', '+4', 'changeColor'];

    for(let color of colors) {
        for(let value of coloredValues) {
            deck.push(new Card(value, color))
        }
    }

    for(let value of specialValues) {
        deck.push(new Card(value, null))
    }

    console.log(deck)

    return deck;
}

const generatePlayers = (playerCount = 4) => {
    const players = [];
    const playerNames = ['OSMAN', 'OSMAN2', 'OSMAN3', 'OSMAN4'];

    for (let i = 0; i <= 3; i++) {
        players.push(new Player(playerNames[i], [], 0, i))
    }

    console.log(players)

    return players;
}

const UnoProvider = ({ children }) => {
    const [cards, setCards] = useState(() => generateCards());
    const [players, setPlayers] = useState(() => generatePlayers());

    const value = {cards, setCards, players, setPlayers}
    return <UnoContext.Provider value={value}>
        { children }
    </UnoContext.Provider>
};

export default UnoProvider;
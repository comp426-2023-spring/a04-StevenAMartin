export function rps(shot) {
    const gameRules = {
        rock: {
            rock: 'tie',
            scissors: 'lose',
            paper: 'win'
        },
        paper: {
            paper: 'tie',
            rock: 'lose',
            scissors: 'win'
        },
        scissors: {
            scissors: 'tie',
            paper: 'lose',
            rock: 'win'
        }
    }
    
    const randomNumber = Math.trunc(Math.random() * 3);
    const choices = ["rock", "paper", "scissors"];
    if(shot === undefined) {
       return  {"player": choices[randomNumber]}
    } 
    shot = shot.toLowerCase();

    if (!choices.includes(shot)) {
        throw new RangeError("Shot is Out of Range");
    } 

    let res = gameRules[choices[randomNumber]][shot];

    return {player: shot, opponent: choices[randomNumber], result: res}
}

export function rpsls(shot) {
    let gameRules = {
        rock: {
            rock: 'tie',
            scissors: 'lose',
            paper: 'win',
            spock: 'win',
            lizard: 'lose'
        },
        paper: {
            paper: 'tie',
            rock: 'lose',
            scissors: 'win',
            lizard: 'win',
            spock: 'lose'
        },
        scissors: {
            scissors: 'tie',
            paper: 'lose',
            rock: 'win',
            lizard: 'lose',
            spock: 'win'
        },
        lizard: {
            scissors: 'win',
            paper: 'lose',
            rock: 'win',
            lizard: 'tie',
            spock: 'lose'
        },
        spock: {
            scissors: 'lose',
            paper: 'win',
            rock: 'lose',
            lizard: 'win',
            spock: 'tie'
        }
    }
    const randomNumber = Math.trunc(Math.random() * 5);
    const choices = ["rock", "paper", "scissors", "lizard", "spock"];
    if(shot === undefined) {
       return  {"player": choices[randomNumber]}
    } 
    shot = shot.toLowerCase();

    if (!choices.includes(shot)) {
        throw new RangeError("Shot is Out of Range");
    } 

    let res = gameRules[choices[randomNumber]][shot];

    return {player: shot, opponent: choices[randomNumber], result: res}
}
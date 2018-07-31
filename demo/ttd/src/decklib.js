module.exports = class Deck {
    constructor() {
        this.deck = [];
        this.dealt_cards = [];
    };

    generate_deck() {
        let card = (suit,value) => {
            this.name = value+' of '+suit;
            this.suit = suit;
            this.value = value;
            return {'name':this.name,'suit':this.suit,'value':this.value};
        };
        let values = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
        let suits = ['Clubs','Diamonds','Spades','Hearts'];
        for(let s=0; s < suits.length; s++) {
            for(let v=0; v < values.length; v++) {
                this.deck.push(card(suits[s],values[v]));
            }
        }
        return this.deck;
    };

    print_deck() {
        if(this.deck.length === 0) return -1;
        for(let i=0; i < this.deck.length; i++) {
            console.log(this.deck[i]);
        }
    }

    shuffle() {
        let currentindex = this.deck.length, temp, randomindex;
        while(0 !== currentindex) {
             randomindex = Math.floor(Math.random() * currentindex);
             currentindex--;
            temp = this.deck[currentindex];
            this.deck[currentindex] = this.deck[randomindex];
            this.deck[randomindex] = temp;
        }
    }

    deal() {
        let dealtcard = this.deck.shift();
        this.dealt_cards.push(dealtcard);
        return dealtcard;
    }

    replace() {
        this.deck.unshift(this.dealt_cards.shift());
    }

    clear_deck() {
        this.deck = [];
    }

    test() {
        const deck = new Deck();
        deck.generate_deck();
        deck.shuffle();
        deck.print_deck();
        console.log("DEAL");
        for(let i=0; i<13; i++) {
            console.log(deck.deal());
        }
    }
};
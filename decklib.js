class Deck {
    constructor() {
        this.deck = [];
        this.dealt_cards = [];
    };

    generate_deck() {
        let card = (suit,value) => {
            this.name = suit+' of '+value;
            this.suit = suit;
            this.value = value;
            return {'name':this.name,'suit':this.suit,'value':this.value};
        };
        let values = ['1','2','3','4','5','6','7','8','9','10','J','Q','K','A'];
        let suits = ['Clubs','Diamonds','Spades','Hearts'];
        for(let s=0; s < suits.length; s++) {
            for(let v=0; v < values.length; v++) {
                this.deck.push(card(suits[s],values[v]));
            }
        }
    };

    print_deck() {
        //if(this.deck.length == 0) return -1;
        for(let i=0; i < deck.length; i++) {
            console.log(this.deck[i]);
        }
    }
};

const deck = new Deck();
deck.generate_deck();
deck.print_deck();
$(document).ready(function () {
    // Setting up variables and grabbing buttons from HTML file
    let dice: Die[] = [];
    let btnCreate: JQuery<HTMLButtonElement> = $('#btn-create');
    let btnRoll: JQuery<HTMLButtonElement> = $('#btn-roll');
    let btnSum: JQuery<HTMLButtonElement> = $('#btn-sum');

    // Creating a class named Die to represent a single Die
    class Die {

        div: JQuery<HTMLDivElement>;
        value: number;
        char: string;

        constructor() {
            // Create a div
            this.div = $('<div></div>');
            // run roll() method
            this.roll();
            $(this.div).appendTo('#dice-container');
            dice.push(this);
            // Makes the dice that is clicked roll separately
            $(this.div).click(() => {
                this.roll();
            });
            // Removes the dice that is double clicked and completely removes the data from the page, so that btnSum doesn't include it in the total
            $(this.div).dblclick(() => {
                $(this.div).remove();
                dice.splice($.inArray(this, dice), 1);
            });
        }

        // Method to get a random number between 1-6
        roll() {
            this.value = Math.floor(Math.random() * 6 + 1);
            this.getChar();
            $(this.div).text(this.char);
            $(this.div).addClass('die');
        }

        // Making the die look like a die and associate it with the number that came from the roll() method
        getChar() {
            if (this.value === 1) {
                this.char = "⚀";
            } else if (this.value === 2) {
                this.char = "⚁"
            } else if (this.value === 3) {
                this.char = "⚂";
            } else if (this.value === 4) {
                this.char = "⚃";
            } else if (this.value === 5) {
                this.char = "⚄";
            } else {
                this.char = "⚅";
            }
        }
    }

    if (!btnCreate) {
        alert("No button found");
        return;
    }

    if (!btnRoll) {
        alert("No button found");
        return;
    }

    if (!btnCreate) {
        alert("No button found");
        return;
    }


    // Click btnCreate (New Dice) to create a new die
    $(btnSum).click(() => {
        let die = new Die();
    });

    // Click btnRoll to roll all the dice created
    $(btnRoll).click(() => {
        for (let i = 0; i < dice.length; i++) {
            dice[i].roll();
        }
    });

    // Click btnSum to get the sum of all the dice
    $(btnSum).click(() => {
        let sum = 0;
        for (let i = 0; i < dice.length; i++) {
            sum += dice[i].value;
        }
        alert(`The sum of the of the dice is ${sum}.`);
    });
})
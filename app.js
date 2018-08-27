class Dice {
    constructor(value) {
        this.value = value;
    }
    roll() {
        let math = (Math.floor((Math.random() * this.value) + 1))
        $(`<div id="${i}" class="dice">${math}</div>`).appendTo(`#dice-container`)
        diceArray.push(math)
    }
}
let d6 = new Dice(6)
let i = 0;
let diceArray = [];

$(`#I-Attack`).click(function () {
    if (i > 0) {
        $(`#dice-container`).empty()
        for (let d = 0; d < diceArray.length; d++) {
            if (diceArray[d] = NaN) {
                // Do nothing
            } else {
                let math = (Math.floor((Math.random() * 6) + 1))
                diceArray[d] = math
                $(`<div id="${d}" class="dice">${math}</div>`).appendTo(`#dice-container`)
            };
        };
        d6.roll()
        i++
    } else {
        d6.roll()
        i++
    };
})

//boxDiv.className = "flex"
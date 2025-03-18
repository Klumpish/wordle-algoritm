/* 
    
    Inputs - Functionen ska ta in två textsträngar, gissning och det korrekta ordet

    kolla vilka bokstäver från det ena ordet som förekommer i det andra och vart

    Output - array med objekt, ett för varje bokstav i samma ordning som de förekommer i det gissade ordet med följande attribut:
        - "incorrect": finns inte med i det andra ordet
        - "misplaced": finns med i det andra ordet, men på fel plats
        - "correct": korrekt plats i det andra ordet

*/

function wordleGuess(guessWord, correctWord) {
	// start by making them the same uppercase
	const guess = guessWord.toUpperCase()
	const correct = correctWord.toUpperCase()

	// win condition 1
	if (guess === correct) return console.log(`You win! the word was ${guess}`)

	for (let i = 0; i < guess.length; i++) {
		for (let j = 0; j < correct.length; j++) {
			if (guess[i] === correct[j]) {
				console.log(
					`bokstaven "${guess[i]}" finns i både guess och correct på pos ${i} i guess och ${j} i correct.`
				)
			}
		}
	}
	// kolla vilka bokstäver som förekommer i det andra ordet och vart
}

console.log(wordleGuess("Hej", "hej"))

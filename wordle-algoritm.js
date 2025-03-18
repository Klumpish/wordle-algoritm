/* 
    
    Inputs - Functionen ska ta in två textsträngar, gissning och det korrekta ordet

    kolla vilka bokstäver från det ena ordet som förekommer i det andra och vart

    Output - array med objekt, ett för varje bokstav i samma ordning som de förekommer i det gissade ordet med följande attribut:
        - "incorrect": finns inte med i det andra ordet
        - "misplaced": finns med i det andra ordet, men på fel plats
        - "correct": korrekt plats i det andra ordet

*/

export default function wordleGuess(guessWord, correctWord) {
	// start by making them the same uppercase
	const guess = guessWord.toUpperCase()
	const correct = correctWord.toUpperCase()
	if (guess.length != correct.length)
		return console.log(
			`The guessed word is not the same length as the correct word. guess a word that is ${correct.length} words long`
		)
	// en array som håller våra objekt för varje bokstav
	let result = []

	let correctArr = correct.split("")

	// första passet: kollar efter exakta träffar ("Correct")
	for (let i = 0; i < guess.length; i++) {
		if (guess[i] === correct[i]) {
			result.push({ letter: guess[i], status: "correct" })
			correctArr[i] = null //
		} else {
			result.push({ letter: guess[i], status: "incorrect" })
		}
	}

	// andra passet: kollar efter felplacerade bokstäver ("misplaced")
	for (let i = 0; i < result.length; i++) {
		if (result[i].status === "incorrect" && correctArr.includes(guess[i])) {
			result[i].status = "misplaced" //om bokstaven finns i correct men inte på samma plats som i guess
			correctArr[correctArr.indexOf(guess[i])] = null // ta bort bokstaven från correctArr så den inte matchas igen
		}
	}

	return result
}

console.log(wordleGuess("halflå", "cykla"))

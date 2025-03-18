import { jest } from "@jest/globals"
import wordleGuess from "./wordle-algoritm"

/* 
    * TEST *

    *1. testa ett korrekt scenario där alla bosktäver matchar exakt // correct
    *2. testa ett scenario där vissa bosktäver är felplacerade //misplaced
    *3. testa ett scenario där vissa bokstäver är inkorrekta // incorrect
    *4. testa blanding av stora och små bokstäver.
    *5. testa när ordlängderna inte matchar
*/

describe("Wordle-algoritm test", () => {
	test("All letters are correct", () => {
		const result = wordleGuess("hello", "hello")
		expect(result).toEqual([
			{ letter: "H", status: "correct" },
			{ letter: "E", status: "correct" },
			{ letter: "L", status: "correct" },
			{ letter: "L", status: "correct" },
			{ letter: "O", status: "correct" },
		])
	})

	test("Some letters are misplaced and some are incorrect", () => {
		const result = wordleGuess("hallå", "cykla")
		expect(result).toEqual([
			{ letter: "H", status: "incorrect" },
			{ letter: "A", status: "misplaced" },
			{ letter: "L", status: "incorrect" },
			{ letter: "L", status: "correct" },
			{ letter: "Å", status: "incorrect" },
		])
	})

	test("Handles case insensitivity", () => {
		const result = wordleGuess("HeLLo", "hello")
		expect(result).toEqual([
			{ letter: "H", status: "correct" },
			{ letter: "E", status: "correct" },
			{ letter: "L", status: "correct" },
			{ letter: "L", status: "correct" },
			{ letter: "O", status: "correct" },
		])
	})

	test("Handles a guess longer then the correct word", () => {
		// mock console.log
		const logSpy = jest.spyOn(console, "log").mockImplementation(() => {})

		const guess = "Hello"
		const correct = "hej"
		wordleGuess(guess, correct)

		// check if console.log was called with correct message
		expect(logSpy).toHaveBeenCalledWith(
			`The guessed word is not the same length as the correct word. guess a word that is ${correct.length} words long`
		)

		logSpy.mockRestore()
	})
})

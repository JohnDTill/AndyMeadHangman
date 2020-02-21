class HangmanGame{
    constructor(word, numGuesses = 3){
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = numGuesses
        this.guessedLetters = []
        this.status = 'playing'
    }

    getWordPrompt(){
        if(this.status === 'failed')
            return `The word was "${this.word.join('')}", you loser.`
    
        let str = ''
    
        this.word.forEach(element => {
            if(this.guessedLetters.includes(element) || element === ' ')
               str += element
            else
               str += '*'
        });
    
        return str
    }

    guess(letter){
        if(this.status === 'failed') return 'Game over!'
        else if(this.status === 'finished') return 'You won!'
    
        letter = letter.toLowerCase()
        if(this.guessedLetters.includes(letter))
            return `The letter '${letter}' was already guessed!`
    
        this.guessedLetters.push(letter)
        if(!this.word.includes(letter)){
            this.remainingGuesses--
            if(this.remainingGuesses > 0){
                return `The letter '${letter}' is not present. You have ${this.remainingGuesses} remaining guesses.`
            }else{
                this.status = 'failed'
                return 'Out of guesses. Game over!'
            }
        }else{
            const won = this.word.every(val => val === ' ' || this.guessedLetters.includes(val));
            if(won){
                this.status = 'finished'
                return 'You won!'
            }else{
                return 'Good guess!'
            }
        }
    }
}
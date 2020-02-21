const render = (str) => {
    const div = document.getElementById('prompt')
    div.innerHTML = ''
    str.split('').forEach(element => {
        const child = document.createElement('span')
        child.textContent = element
        div.appendChild(child)
    });
}

const newGame = async() => {
    document.getElementById('message').textContent = 'Guess a letter'
    
    // Promise to perform asynchronous HTTP request
    getPuzzlePromise('2').then((puzzle) => {
        //Hangman
        const hangmanInstance = new HangmanGame(puzzle)
        render(hangmanInstance.getWordPrompt())

        window.addEventListener('keypress', (e) => {
            const msg = hangmanInstance.guess(e.key)
            document.getElementById('message').textContent = msg
            render(hangmanInstance.getWordPrompt())
        })
    }).catch( (err) => {
        const hangmanInstance = new HangmanGame(err.message)
        render(hangmanInstance.getWordPrompt())

        window.addEventListener('keypress', (e) => {
            const msg = hangmanInstance.guess(e.key)
            document.getElementById('message').textContent = msg
            render(hangmanInstance.getWordPrompt())
        })
    })
}

newGame()

document.getElementById('reset').addEventListener('click', (e) => {
    newGame()
})
const getPuzzlePromise = async (wordCount = 1) => {
    const response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if(response.status !== 200) throw new Error(`An HTTP error has taken place`)
    const data = await response.json()
    return data.puzzle
}

const wordFrequencyAnalyzer = (text) => {
    const arrayWordFromText = text
    .toLowerCase()
    .replace(/[,.!]/g, '')
    .split(' ')
    .reduce((acc,rec) => {
        return ({ ...acc, [rec]: (acc[rec] || 0) + 1 })
      },{})

    const wordSorted =  Object
    .entries(arrayWordFromText)
    .sort((a,b) => b[1]-a[1])
    .map(wordsort =>{
        const [word,count] = wordsort
        return { word:word,repeat:count }
    })
    return wordSorted
}

console.log(wordFrequencyAnalyzer('Oh! La vie de vie depuis le commencement de la belle epoque, est belle belle'))
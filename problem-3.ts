{
    

    const countWordOccurrences = (sentence: string, word: string): number => {
        const splitWords = sentence.toLowerCase().split(' ')
        return splitWords.filter(w => w === word.toLowerCase()).length;
    }

    const numOfWord = countWordOccurrences("I love typescript and love react", "love")
    console.log(numOfWord)

}
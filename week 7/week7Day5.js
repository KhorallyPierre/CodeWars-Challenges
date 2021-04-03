// Given a sentence containing two or more words,
// return the equivalent of the sentence when capitalised.



 function capSentence(text) {
      let wordsInTheArray = text.toLowerCase().split(' ')
      let capsInTheArray = wordsInTheArray.map(word=>{
          return word[0].toUpperCase() + word.slice(1)
      })
      return capsInTheArray.join(' ')
  }

// Create a function that alternates the case of a given string.
// Ex. HeLLo WoRLd => hEllO wOrlD


function alternate(string){
  let newString = ''
  for (let i = 0; i < string.length; i++){
    if (string.charAt(i) === string.charAt(i).toUpperCase()){
      newString = newString + string.charAt(i).toLowerCase()
    } else if (string.charAt(i)=== string.charAt(i).toLowerCase()){
      newString = newString + string.charAt(i).toUpperCase()
    } else {
      newString = newString + string.charAt(i)
    }
  }
  return newString
}
console.log(alternate('HelLO BeRNard'))

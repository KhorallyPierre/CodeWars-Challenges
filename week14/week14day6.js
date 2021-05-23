function lastSurvivor(letters, coords) {
  for (let i =0; i < coords.length; i++ ){
     for (let i=0; i < letters.length; i++){
       if (letters[i] == coords[i]){
        coords.splice(i, 1)
      }
    }
  }
  return letters
}

// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.
//
// Your task is to return either:
//
// true if all developers in the list code in the same language; or
// false otherwise.
// For example, given the following input array:
//
// var list1 = [
//   { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
//   { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
//   { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },

function isSameLanguage(list){
  let sameLang = 0
  for(let i = 0; i < list.length; i++) {
    let {language} = list[i]
    console.log(language)
      if (language === list[0].language) sameLang = sameLang + 1
    console.log(sameLang)
    }
  if(sameLang === list.length) return true
  else return false
}
// list.every(sameLang(element[list[i]])[language])

// p list of objects

// r we are returning true or false (if devs speak the same langauge true,
// if not, false)

// e if () {return true } else {return false}

//p

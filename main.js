//Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x){
    let emptyString = ''
for (let i = 0; i < x.length; i++){

  if (x[i] === ' '){
    emptyString += ''
  }
  else{
    emptyString += x[i]
  }
 
} return emptyString
}
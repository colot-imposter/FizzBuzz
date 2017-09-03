//enter in whatever two numbers you would like
const numFizz= 5
const numBuzz= 7

let numbers = []
let fizz= []
let buzz=[]
let fizzbuzz= []

//created an array of numbers 1-100
for (var i = 1; i <= 100; i++) {
  numbers.push(i)
}

//created function that has two perameters, integer and number you want to divide.
//a divisible number will always be a whole number, so math.flooring will create the baseline to this test.
//if it does not equal zero, than change occured and it is not eevnly divisible
function doesdivde(ap, div){
  if ((ap/div)-Math.floor(ap/div) === 0) {
    return true
  }
}

//running tests on doesdivde()
//

numbers.forEach(function(pop){
  if (doesdivde(pop, numFizz)=== true){
    fizz.push(pop)
  }
  if (doesdivde(pop, numBuzz)=== true){
    buzz.push(pop)
  }
  if ((doesdivde(pop, numFizz)=== true)&&(doesdivde(pop, numBuzz)=== true)){
    fizzbuzz.push(pop)
  }
})

console.log('fizz', fizz);
console.log('buzz', buzz);
console.log('fizbuzz', fizzbuzz);

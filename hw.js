
//Homework 

/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/


let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords() {
    for(let i = 0; i < dog_names.length; i++){
        let dog = dog_names[i];
        if(dog_string.toLowerCase().includes(dog.toLowerCase())){
            console.log(` Matched ${dog}`);
        }
        
    }
}


findWords();

//*Write a fucntion that takes in an array and removes every even index with a splice,
//and replaces it with the string "even index" */

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(){
    for (let i in arr){
        if (i % 2 == 0){
            arr.splice(i, 1, 'even index')
        }
    }

    return arr
}

console.log(replaceEvens());
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


//CODEWARS JS SOLUTIONS 

//CodeWars1
//Even or Odd


//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function EvenOrOdd(n){
    return (n % 2 == 0) ? 'Even' : 'odd'
}

console.log(EvenOrOdd(5))


//Codewars2
//You're a Square
// Question was pretty long so here is the link - https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/python

function Square(n){
    if (n > 0 && Math.sqrt(n) % 1 === 0 ){
        return true
    } else {
        return false;
    }

}

console.log(Square(-1))
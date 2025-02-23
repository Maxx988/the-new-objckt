let a = 10 //integer int
let b = 2.2 //float
console.log(typeof a)
console.log(typeof b)


console.log(a+b)
console.log(a*b)
console.log(a/b)

console.log( ( a + b) * a);


////////////////////////
let title = "lektion 5"
let js = "javascript"
let feu = "feuer"

//double quotes " "
//single quotes ' '
console.log(title)
console.log(typeof title)
console.log(title + " " + js)
console.log(title + js + "  " + feu);

////////////////////////
let raining = false
let sunny = true


console.log(typeof raining)

// AND &&
// OR ||
console.log(raining && cloudy)

let cloudy = undefined
let lol = null
console.log(typeof cloudy)
console.log(typeof lol)

////////////////////////
let c = "c"
let g = "g"
console.log(c < g)

// ! = not
// ==
// <
// >
// <=
// >=

////////////////////////

function googleHala(){
    console.log("hallo");
    console.log("zusammen");
    console.log("wie gehts");
    
    
    
}

googleHala()

googleHala()

function sum(a, b){
    console.log(a + b);
    
}
sum(2,5)

let busHalalArrow = text2 => console.log(text2);

busHalalArrow("halii")
console.log(typeof busHalalArrow);


// NaN Not a Number
////////////////////////////

// Hoisting

function cool(d, f){
    return d * f
   
}

console.log( cool (1, 2))
////////////////////////////
function printFirstName(name){
    let result = " my first name is " + name;
    console.log(result)
    
}
printFirstName("bashar")

// Global/Script scope

let gym = "ein gym aufbauen"

function grundstück(){
let küche = 100;
let badzimmer = 1;
function zimmer(){
let lichter = 2
badzimmer
console.log(lichter, küche, badzimmer);

}

return zimmer
}

let erstesHaus = grundstück()
console.log(erstesHaus)
erstesHaus()
///////////////////////////////
const z = 3;
console.log(z);
////////////////////////
const w = "60"
const h = "80"
console.log(w + h);
console.log(w * h);
console.log(typeof w);
////////////////////////////
//Array
const langs = ["arabisch", "englisch", "italinsch"] 
console.log(langs);




// Write your solution here!
const cats = [
    "Milo",
    "Otis",
    "Garfield",
];
function destructivelyAppendCat(name) {
    cats.push(name)
    
}
function destructivelyPrependCat(name) {
    cats.unshift(name)
}
function destructivelyRemoveLastCat(name) {
    cats.pop(name)
}
function destructivelyRemoveFirstCat(name) {
    cats.shift(name)
}
function appendCat(name) {
    let newCat= [...cats,name]
    return newCat
  }
function prependCat(name) {
    let newCats = [name, ...cats]
    return newCats
}
function removeLastCat(name) {
    let caats = cats.slice(0, cats.length-1)
    return caats
}
function removeFirstCat(name) {
    let catss = cats.slice(1)
    return catss
}


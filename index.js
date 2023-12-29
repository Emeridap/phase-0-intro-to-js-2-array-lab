let cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push("Ralph")
}
console.log(cats);
function destructivelyPrependCat(name) {
    cats.unshift("Bob")
}
console.log(cats);
function destructivelyRemoveLastCat() {
    cats.pop();
}
console.log(cats);
function destructivelyRemoveFirstCat() {
    cats.shift();
}
console.log(cats);
function appendCat(name) {
    let newCats = [...cats, name]
    return newCats;
}
let updatedCats = appendCat("Broom");
console.log(updatedCats);
console.log(cats);
function prependCat(name) {
    let newCats = [name,...cats];
    return newCats;
}
let newCats = prependCat("Arnold");
console.log(updatedCats);
console.log(cats);
function removeLastCat() {
    let newCats = cats.slice(0, -1);
    return newCats
}
let modifiedCats = removeLastCat();
console.log(updatedCats);
console.log(cats);
function removeFirstCat() {
    let newCats = cats.slice(1)
    return newCats
}
let catsWithoutFirst = removeFirstCat();
console.log(updatedCats);
console.log(cats);
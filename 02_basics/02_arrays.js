//concat function
const marvel_heros = ["Ironman" , "Hulk", "Captain America"]
const dc_heros = ["Superman", "Wolverine", "Flash"]

const all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros)

const all_heros1 = [...marvel_heros,...dc_heros]
console.log(all_heros1)

const another_array = [[1,2,3],[1,[1,2,3]], 4,5,6,7]
const new_array = another_array.flat(3)
console.log(new_array)

const array_of_string = Array.from("Priyanshu")
console.log(array_of_string)
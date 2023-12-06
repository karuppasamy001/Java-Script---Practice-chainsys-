let str = 'The quick brown fox jumps over the lazy dog'
let lists = str.split(" ")
let modifiedStr = ""

for(let i of lists){
    modifiedStr += i.charAt(0).toUpperCase() + i.slice(1) + " "
}

console.log(modifiedStr)

let student1Marks = [80, 75, 98, 93, 90]

let total = 0
for(let i = 0; i < student1Marks.length; i++){
    total += student1Marks[i]
}

let percentage = total / student1Marks.length

console.log(`The Percentage of Student1 is : ${percentage}`)

let student1Marks = [80, 75, 98, 93, 90]

let total = 0
for(const element of student1Marks){
    total += element
}

let percentage = total / student1Marks.length

console.log(`The Percentage of Student1 is : ${percentage}`)

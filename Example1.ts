let found : boolean = true;
let grade : number = 75.5;
let fName : String = "Chirayu"

console.log(found);
console.log("The grade is: " + grade);
console.log("Hello " + fName);
console.log(`Hello ${fName}`);

// To Prevent the compile to compile the file and create .js file 
// Use tsc -noEmitOnError fileName.ts

let reviews : number[] = [10, 11, 12, 34, 35.5];
for(let i = 0; i < reviews.length; i++) {
    console.log(reviews[i])
}

let codeLanguage : String[] = ["Java", "Python", "C", "C++"];
codeLanguage.push("Typescript");
for(let code of codeLanguage) {
    console.log(code);
}
var found = true;
var grade = 75.5;
var fName = "Chirayu";
console.log(found);
console.log("The grade is: " + grade);
console.log("Hello " + fName);
console.log("Hello ".concat(fName));
// To Prevent the compile to compile the file and create .js file 
// Use tsc -noEmitOnError fileName.ts
var reviews = [10, 11, 12, 34, 35.5];
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
}
var codeLanguage = ["Java", "Python", "C", "C++"];
codeLanguage.push("Typescript");
for (var _i = 0, codeLanguage_1 = codeLanguage; _i < codeLanguage_1.length; _i++) {
    var code = codeLanguage_1[_i];
    console.log(code);
}

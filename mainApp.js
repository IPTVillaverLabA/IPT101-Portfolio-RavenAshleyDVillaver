import { student1, student2, student3, printSummary } from './studentModule.js';

console.log("===== STUDENT RECORDS =====");

console.log("");
console.log("STUDENT 1");
console.log("Name: " + student1.name);
console.log("ID: " + student1.id);
console.log("Program: " + student1.program);
console.log("Year Level: " + student1.yearLevel);
console.log("School Year: " + student1.schoolYear);
console.log(printSummary(student1, "Officially Enrolled"));
console.log(student1.getEnrollmentDetails("1st Semester", "Main Campus"));

console.log("");
console.log("STUDENT 2");
console.log("Name: " + student2.name);
console.log("ID: " + student2.id);
console.log("Program: " + student2.program);
console.log("Year Level: " + student2.yearLevel);
console.log("School Year: " + student2.schoolYear);
console.log(printSummary(student2, "Officially Enrolled"));
console.log(student2.getEnrollmentDetails("1st Semester", "Main Campus"));

console.log("");
console.log("STUDENT 3");
console.log("Name: " + student3.name);
console.log("ID: " + student3.id);
console.log("Program: " + student3.program);
console.log("Year Level: " + student3.yearLevel);
console.log("School Year: " + student3.schoolYear);
console.log(printSummary(student3, "Officially Enrolled"));
console.log(student3.getEnrollmentDetails("1st Semester", "Main Campus"));
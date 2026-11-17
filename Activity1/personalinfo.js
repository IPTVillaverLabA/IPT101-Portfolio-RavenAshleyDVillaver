const student = {
    name: "Raven Ashley Villaver",
    idNumber: "2026-6690",
    yearLevel: 1,
    program: "Information Technology"
};

const courses = {
    course1: {subject: "ApplicationDevelopment",grade: 95, units: 3},
    course2: {subject: "Networking 1",grade: 92,units: 3},
    course3: {subject: "Integrative Programming and Technologies",grade: 80,units: 2},
    course4: {subject: "Pathfit4",grade: 90,units: 3},
    course5: {subject:"Arts Appreciation", grade:88, units: 2}
};
let totalGrade =
    (courses.course1.grade * courses.course1.units) +
    (courses.course2.grade * courses.course2.units) +
    (courses.course3.grade * courses.course3.units) +
    (courses.course4.grade * courses.course4.units) +
    (courses.course5.grade * courses.course5.units);

let totalUnits =
    courses.course1.units +
    courses.course2.units +
    courses.course3.units +
    courses.course4.units +
    courses.course5.units;

let gwa = totalGrade / totalUnits;

let gwaLetter;

if (gwa >= 98) {
    gwaLetter = "A";
    } else if (gwa >= 94) {
        gwaLetter = "A-";
    } else if (gwa >= 90) {
        gwaLetter = "B+";
    } else if (gwa >= 87) {
        gwaLetter = "B";
    } else if (gwa >= 83) {
        gwaLetter = "B-";
    } else if (gwa >= 80) {
        gwaLetter = "C+";
    } else if (gwa >= 77) {
        gwaLetter = "C";
    } else if (gwa >= 73) {
        gwaLetter = "D";
    } else {
        gwaLetter = "F";
    }

console.log("===== STUDENT INFORMATION =====");
console.log("Student Name: " + student.name);
console.log("ID Number: " + student.idNumber);
console.log("Year Level: " + student.yearLevel);
console.log("Program: " + student.program);

console.log("\n===== COURSES ENROLLED =====");
console.log(courses.course1.subject + " - " + courses.course1.grade + "%");
console.log(courses.course2.subject + " - " + courses.course2.grade + "%");
console.log(courses.course3.subject + " - " + courses.course3.grade + "%");
console.log(courses.course4.subject + " - " + courses.course4.grade + "%");
console.log(courses.course5.subject + " - " + courses.course5.grade + "%");

console.log("\n===== GENERAL WEIGHTED AVERAGE =====");
console.log("GWA: " + gwa.toFixed(2));
console.log("Letter Grade: " + gwaLetter);


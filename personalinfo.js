const studentName = "Raven Ashley Villaver";
const idNumber = "2026-6690";
const yearLevel = 2;
const program = "Information Technology";


const course1Subject = "Application Development";
const course1Grade = 95;
const course1Units = 3;


const course2Subject = "Networking 1";
const course2Grade = 92;
const course2Units = 3;
 
const course3Subject = "Integrative Programming and Technologies";
const course3Grade = 80;
const course3Units = 2;


const course4Subject = "Pathfit 4";
const course4Grade = 90;
const course4Units = 3;


const course5Subject = "Arts Appreciation";
const course5Grade = 88;
const course5Units = 2;


let totalGrade =
    (course1grade * course1units) +
    (course2grade * course2units) +
    (course3grade * course3units) +
    (course4grade * course4units) +
    (course5grade * course5units);


let totalUnits = course1Units + course2Units + course3Units + course4units + course5units;


let gwa = totalGrade / totalUnits


let roundedgwa = Math.round(gwa * 100) / 100;


let gwaLetter;


if (gwa >= 98 && gwa <= 100) {
    gwaLetter = "A";
}  else if (gwa >= 94 && gwa < 98) {
        gwaLetter = "A-";
    } else if (gwa >= 90 && gwa < 94) {
        gwaLetter = "B+";
    } else if (gwa >= 87 && gwa < 90) {
        gwaLetter = "B";
    } else if (gwa >= 83 && gwa < 87) {
        gwaLetter = "B-";
    } else if (gwa >= 80 && gwa < 83) {
        gwaLetter = "C+";
    } else if (gwa >= 77 && gwa < 80) {
        gwaLetter = "C";
    } else if (gwa >= 73 && gwa < 77 ) {
        gwaLetter = "D";
    } else {
        gwaLetter = "F";
    }


console.log("/n===== Student Information =====");
console.log("Name: " + studentName );
console.log("ID Number: " + IdNumber );
console.log("Year Level: " + yearLevel);
console.log("Program: " + program);


console.log("\n===== GENERAL WEIGHTED AVERAGE =====");
console.log("GWA: " + roundedgwa);
console.log("Letter Grade: " + gwaLetter);
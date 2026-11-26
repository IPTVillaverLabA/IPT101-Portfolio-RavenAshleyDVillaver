export function createStudentProfile(name, id, program, yearLevel, schoolYear) {
    return {
        name: name,
        id: id,
        program: program,
        yearLevel: yearLevel,
        schoolYear: schoolYear,

        getEnrollmentDetails: function(semester, campus) {
            return `${this.name} (${this.id}) from ${this.program} is enrolled in ${semester} at ${campus}.`;
        }
    };
}

export const student1 = createStudentProfile(
    "Villaver Raven Ashley",
    2026-6690,
    "BS Information Technology",
    "2nd Year",
    "2026-2027"
);

export const student2 = createStudentProfile(
    "Kimayong Shekinah Dale",
    2026-6682,
    "BS Information Technology",
    "1st Year",
    "2026-2027"
);

export const student3 = createStudentProfile(
    "Idos Cristine Joy",
    2026-6779,
    "BS Nursing",
    "3rd Year",
    "2026-2027"
);

export function printSummary(student, status) {
    return `Student: ${student.name} | ID: ${student.id} | Program: ${student.program} | Status: ${status}`;
}
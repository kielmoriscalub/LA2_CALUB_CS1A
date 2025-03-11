// Student 1 (Your Info)
const firstName1 = "Kiel Moris";
const middleName1 = "Javonillo";
const lastName1 = "Calub";
const birthdate1 = "October 19, 2006";
const birthplace1 = "Tagudin Ilocos Sur";
const address1 = "Poblacion Sur,Sta. Cruz, Ilocos Sur";
const courseYear1 = "Bachelor of Science in Computer Science";
const dreamJob1 = "Software Engineer";

// Student 2 (Classmate 1)
const firstName2 = "Ronan";
const middleName2 = "Sambrano";
const lastName2 = "Roy";
const birthdate2 = "January 2, 2004";
const birthplace2 = "Lancuas, San emilio, Ilocos Sur";
const address2 = "Lancuas, San emilio, Ilocos Sur";
const courseYear2 = "Bachelor of Science in Computer Science";
const dreamJob2 = "Ai";

// Student 3 (Classmate 2)
const firstName3 = "John Patrick";
const middleName3 = "Mapanao";
const lastName3 = "Andaquig";
const birthdate3 = "April 24, 2006";
const birthplace3 = "Tampugo, Sta. Cruz Ilocos Sur";
const address3 = "Tampugo, Sta. Cruz Ilocos Sur";
const courseYear3 = "Bachelor of Science in Computer Science";
const dreamJob3 = "Software Engineer";

// Function to format student information
function printStudentInfo(firstName, middleName, lastName, birthdate, birthplace, address, courseYear, dreamJob) {
    console.log(`[${firstName.toUpperCase()} ${middleName.toUpperCase()} ${lastName.toUpperCase()}] was born [${birthdate}] at [${birthplace}], and currently living at [${address}]. [${firstName.toLowerCase()} ${middleName.toLowerCase()} ${lastName.toLowerCase()}] is taking up [${courseYear}] and dreams to be a [${dreamJob}] after graduation.\n`);
}

// Printing all students' information
printStudentInfo(firstName1, middleName1, lastName1, birthdate1, birthplace1, address1, courseYear1, dreamJob1);
printStudentInfo(firstName2, middleName2, lastName2, birthdate2, birthplace2, address2, courseYear2, dreamJob2);
printStudentInfo(firstName3, middleName3, lastName3, birthdate3, birthplace3, address3, courseYear3, dreamJob3);

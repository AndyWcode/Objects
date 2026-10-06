
const students = [
  { name: "Jane",    grade: 11, gpa: 3.8, isHonors: true  },
  { name: "ChenZee", grade: 12, gpa: 3.5, isHonors: false },
  { name: "Dakota",  grade: 10, gpa: 3.9, isHonors: true  }
];






// problemo 2

function createstudent(name, grade, gpa){
    student = {names: name, gr: grade, gp:gpa, ishonors: false}
    if(student.gp > 3.5) { student.ishonors = true;}
    return student;
}

// 


for(let i = 0; i < students.length; i++){
    if(Object.values(students)[i][0] = "Jane"){
        console.log((students)[i][0]);
    }
}
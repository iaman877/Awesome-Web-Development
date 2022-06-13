
class Student 
{
    protected subjects:string[];
    constructor(public name:string, public age:number, public yearOfJoining:number)
    {
        this.subjects = []
    }
    allocateSubjects(subject:string)
    {
        this.subjects.push(subject)
    }
}
class CollegeStudent extends Student{
    constructor(name:string,age:number,yearOfJoining:number, private stream:string){
        super(name,age,yearOfJoining);
    }
    getAllSubjects(){
        return this.subjects.join(",");
    }
}
const stud1 = new Student("Aman",20,2000);
// stud1.allocateSubjects("English");
// stud1.allocateSubjects("Hindi");

const cStud1:CollegeStudent = new CollegeStudent("Amit",25,18,"Maths")
cStud1.allocateSubjects("Physics");
cStud1.allocateSubjects("Chemestry");
console.log(cStud1);

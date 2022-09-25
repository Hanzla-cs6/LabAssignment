//problem-1
function sandwich_calculator(bread,cheese){
    if(bread%2==0){
        if(cheese>1){
        let a=bread/2
        console.log("you can make ",a,"sandwiches")
        }else{
            console.log("1")
        }
    }else{
        console.log("Not enough breads")
    }

    
}

sandwich_calculator(10,2) 

//problem-2
var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 
};

//problem-3
var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 
};
console.log("before deleting")
console.log(student.rollno)
delete student.rollno
console.log("after deleting")
console.log(student.rollno)


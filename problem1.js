//sp20-bcs-023
//1:-
// var num="23617"
// var num2=hanzla(num)
// console.log(num2)
// const k2=prompt("Enter the value of k")
// const k=k2-1; 
// for (let index = (num2.length)-1; index > 0; index--) {
//     if(index==k)
//     {console.log(num2[k]);}
    
// }
// function hanzla(num){
//     var splitString=num.split("");
//     var reverseArray=splitString.reverse();
//     var joinArray=reverseArray.join("");
//     return joinArray;
// }

// 2:- 


// function reducef(cur,prev) {
//     return prev+cur;
// }
// let st_namE="23617";
// var array=st_namE.split("");
// var numberarray=array.map(Number);
// var ac=numberarray.reduce(reducef);
// console.log(ac);


// 3:-
// function mapfunction(num) {
//     var sum=0;
//     if(num%2==0){
//         sum=sum+num;
//     }
//     return sum;
// }
// let st_name="417826";
// var array=st_name.split("");
// var numberarray=array.map(Number);
// var o_b=numberarray.filter(mapfunction);
// function reduceSum(prev,cur){
//     return prev+cur
// }
// var sumOfeven=o_b.reduce(reduceSum);
// console.log(sumOfeven);

// 4. 
// let array=[0,1,2,3,4,5,6,7,8,9,10]
// function Squaremapfunction(num){
//     return num**2;
// }
// function Cubemapfunction(num){
//     return num**3;
// }
// var square=array.map(Squaremapfunction);
// var cube=array.map(Cubemapfunction);
// console.log("Square of 0 to 10 numbers:",square);
// console.log("Cube of given numbers:",cube);

// 5:-


// var nname="shahid"
// let array=nname.split("");
// for (let i = 0; i < array.length; i++) {
//     if(array[i]=="a"||array[i]=="A"|| array[i]=="e"|| array[i]=="E"|| array[i]=="I"|| array[i]=="i" || array[i]=="O" || array[i]=="o" || array[i]=="U" || array[i]=="u"){
//         console.log("Location of first vowel in given string:",i)
//         break;
//     }   
// }

// var num=34532
// var n=num.toString();
// var array=n.split("");
// console.log(array);
// for (let index = array.length-1; index >= 0; index--) {
//     console.log(array[index]);
    
// }


// 7:-
// array=[1,2,4,10]
// if(array[0]==10){
//     console.log("10 is on first position");
// }
// else if(array[(array.length)-1]==10){
//     console.log("10 is on last position");
// }
// else{
//     console.log("10 is neither in first position nor at last position");
// }

//8:-
 var abc="comsats"
 var arr1=abc.split("");
 arr1.sort();
 console.log(arr1.toString());
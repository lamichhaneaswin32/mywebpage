// 
// let a=7;
// let b=8;
// // if()
// // let age=18;
// let mode="white";
// let color;
// if(mode==="dark")
//     {
//     color="black";
//     }         

// else{
//     color="white";
//     }
// console.log(color);

// if(age>=18){
//     console.log("You are eligible to vote");
// }
// else{
//     console.log("You are not eligible to vote");
// let a=10;
// if(a%2==0){
//     console.log("even");

// }
// else{
//     console.log("odd");
// }
// ternary operator
// age>18?"adult":"child";
// age=25;
// let result=age>18?"adult":"child";
// console.log(result)
// function datetime(){
//     document.getElementById('demo').innerHTML=Date();
// }
// const car={
//     name:"tesla",
//     model:"model 3",
//     color:"white"

// }
// console.log(car);
// car.color="black";
// // car.price="50000";
// const fruits=["apple","orange","mango"];
// console.log(fruits.toString());
// console.log(fruits.length);
// console.log(fruits[fruits.length-1]);
// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i]);
// }
// fruits.push("banana");
// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i]);
// }
// array with object
// const person=[];
// person["firstname"]="aswin";
// person["age"]=25;
// const object={
//     name:"aswin",
//     age:30,
//     cars:[
//         {name:"tesla",model:["model 3","model x","model s"]},
//         {name:"audi",model:["a4","a6","a8"]}
//     ]

// }
// for(let i in object.cars){
//     console.log(object.cars[i].name);
//     for(let j in object.cars[i].model){
//         console.log(object.cars[i].model[j]);
//     }
// }
// const fruits=["apple","orange","mango"];
// fruits.po
// global scope and local scope
let x=10;
// function add(){
//     let y=20;
//     console.log(x+y);
// }
// // console.log(y);
// add();
//closure
// function outer(){
//     let c=0;
//     function inner(){
//         c++;
//         console.log(c);
//     }
    
// }
// outer();
// inner();
//try catch
// try{
//     let x=y+1;}
//     catch(error){
//         console.log(error.message);
//     }
// let age=prompt("enteryour age:");

// function checkAge(age) {
//     if (age < 18) {
//         throw new Error("You must be at least 18 years old.");
//     }
//     return "Access granted!";
// }

// try {
//     console.log(checkAge(age));
// } catch (error) {
//     console.log(error.message); // Output: You must be at least 18 years old.
// }

// // // dom(document object model) maipulation
// let a=document.getElementById('text').innerHTML="hello world";
// let query=document.querySelector(".article");
// let p=document.createElement("p");
// p.innerText="aswin lamichhane ho ma la malai kai vanna paidaina";
// document.body.appendChild(p);
// document.getElementById("btn").addEventListener("click",function(){
// alert("button clicked");
// })
// let age=25;
// age>18?console.log("adult"):console.log("child");
// let a=prompt("enter a number");
// if(a%5==0){
//     console.log("divisible by 5",a);
// }
// else{
//     console.log(a,"not divisible by 5");
// }
// let m=prompt("enter marks of the student");
// if(m>90&&m<=100){
//     console.log("A+");
// }
// else if(m>80&&m<=90){
//     console.log("A");
// }
// else if(m>70&&m<=80){
//     console.log("b+");
// }
// else if(m>60&&m<=70){
//     console.log("b");
// }else if(m>50&&m<=60){
//     console.log("c+");
// }
// else if(m>40&&m<=50){
//     console.log("c");
// }else{
//     console.log("fail");
// }
// let s=0;
// for(let i=0;i>=0;i++){
//     console.log(i);
// }
// let age=prompt("enter your age:");
// if(age<18)
//     console.log("you are not eligible");
// else
// cosole.log("you are eligible");
//do while loop
// let i=0;
// do{
//     console.log(i);
//     i++;
// }while(i<5);
// for of loop
// let a="aswin";
// let size=0;
// for(let i of a){
//     console.log(i);
//     size++;
// }
// console.log("size of string is",size
// forin loop);
// let object={
//     name:"aswin",
//     age:20,
//     address:"kathmandu"

// };
// for(let key in object){
//     console.log(key,object[key]);
// }
// let str="aswin";
// let obj={
//     name:"aswin",
//     age:20,
//     address:"kathmandu"
// };
// console.log("name is",obj.name,"age is ",obj.age,"address is",obj.address);
// console.log(`name is ${obj.name }age is ${obj.age} address is ${obj.address} `);
// console.log(str[4]);
// //template literals
// let specialstring=`my name is aswin`;
// console.log(specialstring);
// let str="apna\ncollege";
// console.log("aswin\nlamichhane");
// console.log(str.length);
// let a=str.toUpperCase();

// console.log(a);
// console.log(str.toLowerCase());
// let b="     aswin    ";
// console.log(b.trim());
// let str1="aswin\t";
// let str2="lamichhane";
// console.log(str1.concat(str2));
// console.log(str1.slice());
// let b=str1.replace(str1,"ram");
// console.log(b);
// console.log(str1.charAt(4));
// console.log(str1);
//    let str="ilovejs";
//    str=str.replace("js","javascript"); 
//    console.log(str);
// let name=prompt("enter your name:");
// let b=(`your username is @${name}${name.length}`);
// console.log(b);
//js array
// let m1=[1,2,3,4,5,6];
// console.log(m1);
// console.log(m1.length);
// let heroes=["aswin","lamichhane"];
// for(let hero of heroes){
//     console.log(hero);
// }
// let s=0;
// let n=prompt("enter a number");
// for(let i=0;i<n;i++){
//     let a[i]=prompt("enter a number");
//     s+=a[i];
// }
// console.log("average is ",s/n);
// let marks=[10,20,30,40,50];
// let s=0;
// for(let value of marks){
//     s+=value;
// }
// console.log(`average is ${s/marks.length}`); 
// let initialprice=[250,645,300,900,50];
// let discount=10;
// let finalprice=[];
// let i=0; 
// for(let price of initialprice){
//     let discount=price/10;
//     initialprice[i]-=discount;
//     console.log(`value after offer=${initialprice[i]}`);
//     i++;

// }
// let initialprice=[250,645,300,900,50];
// for(let i=0;i<initialprice.length;i++){
//     let offer=initialprice[i]/10;
//     initialprice[i]-=offer;
//     console.log(`value after offer=${initialprice[i]}`);
// }
//   let car=["audi","bmw","tesla"];
//  let deletecar=car.pop();
//   console.log(car);
//   console.log(deletecar);
//   console.log(car.toString());
// let car=["audi","bmw","tesla"];
// let bike=["ktm","duke","ninja"];
// let auto=["scooter","bike"];
// let vehicle=car.concat(bike,auto);
// console.log(vehicle);
//unshift :add to start
// let car=["audi","bmw","tesla"];
// car.shift();
// console.log(car);
//slice():return a piece of array
// let car=["audi","bmw","tesla","mercedes"];
// console.log(car.slice(1,3));
 //splice():add or remove elements
// let marks=[10,20,30,40,50];
// marks.splice(2,1,100);
// console.log(marks);
// let com=["bloomberg","reuters","cnbc","forbes"];
// com.push("abc");
// // com.splice(2,1,"audi");
// console.log(com);

// com.shift(); 
// console.log(com);
// function myfunction(a,b){
//     s=a + b;
//    return s;
// }
// let s=parseInt(prompt("enter a number"));
// let y=parseInt(prompt("enter a number"));
// let val=myfunction(s,y);
// console.log(val)
// function sum(a,b){
//       return a+b;
// }
// const arrowsum=(a,b)=>{
//    console.log(a+b);
// }
// const mulfunction=(a,b)=>{
//    console.log(a*b);
// }
// const print=()=>{
//    return "hello world"; 
// }
// function vowel(s){
//       let c=0;
//       // for(let s of str)
//       for(let i=0;i<s.length;i++){
//          if(s[i]=='a'||s[i]=='e'||s[i]=='i' || s[i]=='o'|| s[i]=='u'){
//             c++;
//          }
//       }
//       console.log(`number of vowel is ${c}`);
// }
// let string=prompt("enter a string");
// vowel(string);
//arrow function
// const vowel=(string)=>{
//    let c=0;
//   for(let s of string){
//    if(s=='a'||s=='e'||s=='i'||s=='o'||s=='u')      
//       c++;
//   }
//    console.log(`number of vowel is ${c}`);
// }
// let arr=["aswin","lamichhane","kathmandu"];
// let newarr=arr.forEach((value,idx,arr)=>{
//    console.log(value.toUpperCase(),idx,arr);
// })

// let arr=[1,2,3,4,5];
// arr,map(val)=>{
//    console.log()
// }
// const calc=(value)=>{
//    console.log(value**2);
// }
// arr.forEach(calc)
// let arr=[1,2,3,4,5];
// let newarr=arr.filter((value)=>{
//    return value%2!=0;
// })
// console.log(newarr);
// console.log(arr);
// let arr=[1,2,3,4,5];
// let output=arr.reduce((previous,current)=>{
//    return previous>current?previous:current; 
// })
// console.log(output);
// let marks=[10,20,30,40,50];
// let highest=marks.filter((marks)=>{
//    return marks>30;
// })
// console.log(highest);
// let a=[];
// let n=parseInt(prompt("enter a number"))
// console.log("enter a array element");
// for(let i=1;i<=n;i++){
//   let element=parseInt(prompt("enter a number"));
//    a.push(element);
// }
// console.log(a);
// let sum=a.reduce((previous,current)=>{
//    return previous+current;
// })
// let mul=a.reduce((previous,current)=>{
//    return previous*current;
// })
// console.log(sum);
// console.log(mul);
// console.log("hello world");
// alert("hello world");
// console.dir(document.body.childNodes[1]);
// document.getElementById("heading").innerText="i am learning js";
// document.getElementsByClassName("par").innerText="javascript";
// document.getElementsByTagName("p").innerText="js";
// document.querySelector(".par").innerHTML="hello world";//this select first element having tag/class/id p
// document.querySelectorAll(".par").innerHTML="hello world";//this select all element having tag/class/id p

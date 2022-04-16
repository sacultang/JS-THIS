'use strict';
// let person = {
//   fullname :'kkoj',
//   age:20,
//   printThis: function(){
//     console.log(this)
//     console.log(this === person)
//   }
// }
// // person.printThis();

// let printThis = person.printThis;
// printThis();

// function printThis(){
//   console.log(this) // default this => window
// }
// printThis();

// let person1 = {
//   name: '홍길동',
//   printThis:printThis, 
// }
// person1.printThis(); // person1에 의해 호출되었기때문에 person1출력

// let person2 = {
//   name: 'Anna',
//   printThis:printThis, 
// }
// person2.printThis();

// let person3 = {
//   name: 'Jobs',
//   printThis:printThis, 
// }
// person3.printThis();

// let btn = document.querySelector('button')

// btn.addEventListener('click',function (){
//   console.log(this)
//   console.log(this === btn)
// })

// ES5 bind - this 설정
// bind는 한 번만 사용할 수 있다
// function printThis(){
//   console.log(this) // default this => window
// }
// let person1 = {
//   name:'홍길동'
// }
// let printThis1 = printThis.bind(person1);
// printThis1()

// let person = {
//   name: '짐코딩',
//   age:20,
//   normal: function(){
//     console.log(this.name)
//   },
//   arrow:()=>{
//     console.log(this.name)
//   }
// }
// person.normal()
// person.arrow()

// const amy = {
//   name:'Amy',
//   normal:person.normal,
//   arrow:person.arrow
// }
// amy.normal()
// amy.arrow()

// const timer = {
//   name:'Heropy!!',
//   timeout:function(){
//     console.log(this) // timer객체가 찍힘 timer.timeout()으로 실행했기 때문에
//     setTimeout(()=>{
//       console.log(this) // winodw가 찍힘 
//       console.log(this.name) // undefined //
//     },1000)
//   }
// }
// timer.timeout()

const timer = {
  name:'Heropy!!',
  timeout:()=>{
    console.log(this) // timer객체가 찍힘 timer.timeout()으로 실행했기 때문에
    setTimeout(()=>{
      console.log(this) // winodw가 찍힘 
      console.log(this.name) // undefined //
    },1000)
  }
}
timer.timeout()
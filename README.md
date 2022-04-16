# JS-THIS

### this의 값은 함수를 호출한 방법에 의해 결정된다
- this는 호출한 자신
- 호출한 자신이 없을 경우에는 기본값으로 window 객체를 호출한다
- 예외
    - 전역스코프에서 this는 window 객체 이다
    - 화살표 함수에서 this가 조금 달라진다
    - Strict mode에서는 this가 조금 달라진다

```js
let person = {
  fullname :'kkoj',
  age:20,
  printThis: function(){
    console.log(this) // person이 찍힌다
    console.log(this === person) // true
    console.log(this.fullname) // == person.fullname
  }
}
person.printThis(); 
// person에 의해서 printThis가 호출 되었기 때문에 this == person
```

```js
let person = {
  fullname :'kkoj',
  age:20,
  printThis: function(){
    console.log(this) // window 객체가 출력된다
    console.log(this === person) // false
  }
}
let printThis = person.printThis;
printThis();
// 앞에 아무것도 없이 함수를 호출했기때문에 window객체가 된다
```
```js
function printThis(){
  console.log(this) // default this => window
}
printThis();

let person1 = {
  name: '홍길동',
  printThis:printThis, 
}
person1.printThis(); // person1에 의해 호출되었기때문에 person1출력
```

### 화살표 함수의 This
화살표 함수는 자신이 선언된 함수 범위에서 this가 정의 된다<br>

일반 함수
```js
  const timer = {
  name:'Heropy!!',
  timeout:function(){
    console.log(this) // timer객체가 찍힘 timer.timeout()으로 실행했기 때문에
    setTimeout(function(){
      console.log(this) // winodw가 찍힘 
      console.log(this.name) // undefined //setTimeout 안의 로직에서 실행 되었기 때문에
    },1000)
  }
}
timer.timeout()
```
화살표 함수
```js
  const timer = {
  name:'Heropy!!',
  timeout:function(){ // this를 감싸고 있는 다른 함수
    setTimeout(()=>{
      console.log(this) // timer 찍힘 
      console.log(this.name) // Heropy 
    },1000)
  }
}
timer.timeout()
```
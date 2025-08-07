// new 연산자와 생성자 함수 

// new 연산자와 생성자 함수를 사용하면 유사한 객체 여러 개를 쉽게 만든다.

// 생성자 함수

// 생성자 함수는 아래 두 관례를 따른다.
// 함수 이름의 첫 글자는 대문자로 시작한다.
// 반드시 new 연산자를 붙여 실행한다.


function User(name) {
    // this = {} 빈 객체가 암시적으로 생성

    this.name = name;
    this.isAdmin = false;

    // return this; this가 암시적으로 반환
}

let user = new User('보라');

alert(user.name); // 보라
// alert(user.isAdmin); // false

// 빈 객체를 만들어 this에 할당한다.
// 함수 본문을 실행해 this에 새로운 프로퍼티를 추가하여 this를 수정한다.
// this를 반환한다.

// let user = new User('보라')는 아래 코드와 동일하게 동작한다.

user = {
    name: '보라',
    isAdmin: false
};

// 생성자의 의의: 재사용 가능한 객체 생성 코드의 구현.

// 재사용할 필요가 없는 복잡한 객체를 만들어야 한다면?
// new function() {...} 을 통하면 익명 함수기 떄문에 어디에도 저장되지 않는다. 
let hard = new function() {};

// 생성자 내 메서드

function User(name) {
    this.name = name;
    this.sayHi = function() {
        alert('제 이름은 ' + this.name + '입니다.');
    };
}

let yong = new User('김용진');

yong.sayHi(); // 제 이름은 김용진입니다.

// ! 요약

/*

- 생성자는 일반 함수다. 일반 함수와 구분하기 위해 함수 이름 첫 글자를 대문자로 한다.
- 생성자는 반드시 new 연산자와 함께 호출해야 한다. new와 함께 호출하면 내부에서 this가 암시적으로
만들어지고 마지막엔 this가 반환된다.
- 생성자는 유사한 객체를 여러 개 만들 때 유용하다.


*/

// ~ 과제

// 계산기 만들기

function Calculator() {
    this.read = function() {
        this.x = prompt('피연산자를 입력해 주세요.','1');
        this.y = prompt('두 번째 피연산자를 입력해 주세요.','2');
    };

    this.sum = function() {
        return Number(this.x) + Number(this.y);
    }

    }

let cul = new Calculator();
cul.read();
alert(cul.sum());

// 누산기 만들기 

function Accumulator(stvalue) {
    this.value = stvalue;

    this.read = function() {
        this.value += Number(prompt('더할 값을 입력해 주세요.','1'));
    };
}

let accum = new Accumulator(1);
accum.read();
alert(accum.value);
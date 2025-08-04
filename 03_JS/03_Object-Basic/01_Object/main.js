// 원시형(primitive type): 하나의 데이터(문자열, 숫자)만 담는다.
// 객체형: 다양한 데이터를 담는다.

let user = new Object(); // '객체 생성자' 문법
let user2 = {}; // '객체 리터럴' 문법. 주로 사용.

let user3 = { 
    name: 'Yong', // 키: 'name' 값: 'Yong'
    age: 30 // 키: 'age' 값: 30
}

// 프로퍼티 키는 프로퍼티 '이름' 혹은 '식별자'라 부른다.

alert(user3.name); // 'Yong'

// 프로퍼티 값엔 모든 자료형이 올 수 있다.
user3.isAdmin = true;

// 프로퍼티 삭제
delete user3.age;

// 여러 단어를 조합한 프로퍼티 이름은 따옴표로 묶어준다.
let user4 = {
    name: 'Yong',
    age: 23,
    'like food': 'burger', // 마지막 프로퍼티 끝 쉼표로 끝내기 가능
};

user4['user name'] = 'Kim'; // 또는 대괄호 표기법으로 추가.
alert(user4['user name']); // 'Kim'
delete user4['user name']; // 삭제

// 상수 객체는 수정될 수 있다.
const user5 = {
    name: 'Jin'
};

user5.name = 'Sin';

// 대괄호 표기법

let keys = 'likes birds';

// user['likes birds'] = true; 와 같다.
user[keys] = true;

let key = prompt('사용자의 알고 싶은 정보를 입력해 주세요.', 'name');

// 변수로 접근
alert(user5[key]); // 프롬프트 창 'name' 입력 시 'Sin'
alert(user5.key) // undefined. 점 표기법은 불가능한 방식

// 계산된 프로퍼티: 객체 리터럴 안의 키가 대괄호로 둘러싸인 경우
let fruit = prompt("구매하실 과일을 입력해 주세요.", 'apple');
let food = 'burger';

let bag = {
    [fruit]: 5, // 변수 fruit에서 동적으로 이름을 받아온다.
    [food + 'Com']: 5 // bag.foodCom = 5 
}

alert(bag.apple); // 'apple' 할당 시 '5'

// 단축 프로퍼티

// 프로퍼티의 키는 코드로 고정된다. 값은 함수로 전달된 매개변수가 된다.
function makeUser(name, age) {
    return {
    name, // name: name
    age, // age: age
    };
}

let user6 = makeUser('Woo', 23);
alert(user.name); // 'Woo'

// 'in' 연산자로 프로퍼티 존재 여부 확인

user = {};

alert( user.noSuchProperty === undefined); // true. 프로퍼티가 존재하지 않는다.

user = { name: "Yong", age: 23 };

alert( 'age' in user); // true
alert( 'food' in user); // false

// 'for...in' 반복문

// 객체의 모든 키를 순회한다.
for (key in user) {
    alert( key ); // name, age
    alert( user[key] ); // Yong, 23
}

// 객체 정렬 방식

/* 
정수 프로퍼티(integer property)는 자동으로 정렬된다. 
그 외 프로퍼티는 객체에 추가한 순서대로 정렬된다.
*/

let codes = {
    '49': '독일',
    '41': '스위스',
    '44': '영국',
    '1': 미국,
};

// let은 code라는 변수의 스코프(유효범위)를 for문 내부로 한정시키기 위함.
// let이나 const 없이 변수를 사용하면 해당 변수는 전역 변수가 되어버려 예상치 못한 버그의 원인이 된다.
for(let code in codes) {
    alert(code); // 1, 41, 44, 49
}

// 정수 프로퍼티: 변형 없이 정수에서 왔다 갔다 하는 문자열
// 문자열 '49'가 해당. '+49','1.2' 해당되지 않음.


//! 요약

/*

객체는 몇 가지 특수한 기능을 가진 연관 배열(associative array)
객체는 프로퍼티(키-값 쌍) 저장
프로퍼티 키는 문자열이나 심볼이어야 한다. 보통은 문자열.
값은 어떤 자료형도 가능하다.

점 표기법: obj.property
대괄호 표기법: obj['property']. obj[varWithKey] 같이 변수에서 키를 가져올 수 있다. 

프로퍼티 삭제: delete obj.prop
프로퍼티 객체 내에 있는지 확인: 'key' in obj
프로퍼티 나열: for (let key in obj)

자바스크립트의 다양한 종류의 객체
Array: 정렬된 데이터 컬렉션을 저장할 때 쓴다.
Date: 날짜와 시간 정보를 저장할 때 쓴다.
Error: 에러 정보를 저장할 때 쓴다.

*/

//~ 과제 

// 객체 관리
let user = {
    name: 'John',
    surname: 'Smith',
};

user.name = 'Pete';
delete user.name;

// 객체가 비어있는지 확인하기
function isEmpty(obj) {
    for (let key in obj) {
        return false; // 하나라도 있다면
    }
    return true; // 하나도 없다면 바로 반복문을 나오므로 
}

// 객체는 변하지 않는가?
const user = {
    name: "John"
};
// works
user.name = "Pete";
// error
// const는 user가 참조하는 객체가 변경되는건 허용하지만, user 자체가 변하는건 허용하지 않는다.
user = 123;

// 프로퍼티 합계 구하기
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}

alert(sum);

// 프로퍼티 값 두배로 부풀리기 
function multiplyNumeric(obj) {
    for (let key in obj) {
        // typeof는 피연산자의 데이터 타입을 문자열로 반환한다.
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);
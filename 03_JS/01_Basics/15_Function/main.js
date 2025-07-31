
function showMessage() {
    alert('반갑습니다.');
}

function showName(name) {
    // 변수는 연관된 함수 내에 선언, 전역 변수는 되도록 사용하지 않는다.
    let myName = '김용진';
    alert(`${name}씨, 반갑습니다. 저는 ${myName}입니다.`);
}

// 기본값 설정하기 
function gameList(game1, game2 = 'no game') {
    alert(game1 + ", " + game2);
}

function checkAge(age) {
    return age > 18 ? true : confirm('보호자의 동의를 받으셨습니까?');
}

function checkGender(gender){
    return gender == 'male' || confirm('회원정보에 등록된 성별이 아닙니다.');
}

function checkId(id){
    if ( id == 'dydwls'){
        return true;
    }
    else{
        confirm('잘못된 아이디입니다.');
        return false;
    }
}

let id = prompt('아이디를 입력하세요.', '');

if (checkId(id)){
    alert('접속 허용');
}
else {
    alert('접속 차단');
}

function showPrimes(n){
    for (let i = 2; i < n; i++){
        if(!isPrime(i)) continue;
        alert(i);
    }
}

function isPrime(n) {
    for (let i = 2; i < n; i++){
        if (n % i == 0) return false;
    }
    return true;
}

showPrimes(30);

// 함수 선언문

// 주요 코드 흐름 중간에 독자적인 구문 형태로 존재한다.
// 함수 선언문은 정의되기 전부터 사용 가능.
// 만약 블록 내에서 선언되었다면 밖에서는 사용 불가능. 

sum(1,9) // 10

function sum(a, b) {
    return a + b;
}

let age = prompt('나이를 입력해 주세요.', 19);

if (age < 19) {
    function permission() {
        alert('부적합.');
    }
}
else {
    function permission() {
        alert('적합.');
    }
}

permission(); // error

// 함수 표현식

// 함수는 표현식이나 구문 구성 내부에 생성된다.
// 함수 표현식은 실행 흐름이 해당 함수에 도달하고 사용 가능.
// 변수만 블록 밖에 선언하고 블록 내에서 함수를 할당한다면 블록 밖에서도 사용 가능.
// 할당 연산자 = 를 이용해 만든 할당 표현식.

sum(1,4) // error

let sum = function(a, b) {
    return a + b;
}

let age2 = prompt('나이를 입력해 주세요.', 19);

let permission2 = (age2 < 19) ?
    function() { alert('부적합.'); } :
    function() { alert('적합.'); };

permission2(); // 부적합 or 적합

// 함수 선언문과 함수 표현식 중 무엇을 사용할까?

// 함수 선언문을 먼저 고려하자. 함수 선언되기 전 호출이 가능하여 코드 구성이 더 자유롭다.
// 조건에 따라 함수를 선언해야 한다면 함수 표현식을 사용한다.

// 요약

// 함수는 값. 값처럼 할당, 복사, 선언할 수 있다.
// 함수 선언문으로 생성하면 독립된 구문 형태로 존재한다.
// 함수 표현식으로 생성하면 표현식의 일부로 존재한다.
// 함수 선언문은 코드 블록이 실행되기 전에 처리되어 블록 내 어디서든 활용 가능하다.
// 함수 표현식은 실행 흐름이 표현식에 도착했을 때 만들어진다.
// 함수를 선언할 시 선언되기 전부터 사용 가능한 함수 선언문 방식이 좋다. 코드를 유연하게 구성할 수 있고 가독성이 좋다.



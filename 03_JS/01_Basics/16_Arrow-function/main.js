// 화살표 함수 기본

// let sum = function(a, b) {
//   return a + b;    
// };

// 위 함수의 축약 버전
let sum = (a,b) => a + b;

// 인수가 하나밖에 없다면 괄호 생략 가능
let sum2 = n => n + 3;

// 인수가 하나도 없다면 괄호를 비우지만 생략 불가능
let sum3 = () => 1 + 3;

let age = prompt('나이를 입력해 주세요.', 20);

let sameAge = (age == 20) ?
    () => alert('동갑입니다.') :
    () => alert('동갑이 아닙니다.');

// 본문이 여러 줄인 화살표 함수

// 이 경우 중괄호를 사용하고 return 지시자로 결과값을 반환해야 한다.

let sum4 = (a, b) => {
    let result = a + b;
    return result;
};
alert(sum4(1,2)); // 3

// todo 요약

// 화살표 함수는 본문이 한 줄인 함수를 작성할 때 유용하다. 
// 한 줄이 아니라면 중괄호와 함께 return 지시자로 반환 값을 명시해 주어야 한다.

function ask(question, yes, no) {
    if (confirm(qurdtion)) yes();
    else no();
}
ask(
    '동의하나요?',
    () => alert('동의'),
    () => alert('비동의')
);
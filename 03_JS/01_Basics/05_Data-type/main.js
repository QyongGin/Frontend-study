
// 동적 타입(dynamically typed) 언어
// 자료의 타입은 있지만 저장되는 값의 타입은 언제든지 바꿀 수 있는 언어 
let message = "hello";
message = 123456;

// 숫자형
// 정수 및 부동소수점 숫자를 나타냄
let n = 123;
n = 12.425;

// Infinity 어떤 숫자보다 더 큰 특수 값, 무한대
alert(1/0); 
alert(Infinity);

// NaN 계산 중 에러가 발생했다고 나타내주는 값
alert("문자열" / 2);

// BigInt 길이에 상관없이 정수를 나타냄. 정수 리터럴 끝에 n을 붙이면 됨
// Firefox, Chrome, Edge, Safari에서 지원
const bigInt = 123456789012345678901234567890n;

// 문자열
let str = "큰 따옴표";
let str2 = '작은 따옴표';
let phrase = `문자열을 묶는 종류는 백틱, ${str}, ${str2}`;

// 불린형
let nameFieldChecked = true; 
let ageFieldChecked = false;

let isGreater = 4 > 1;
alert(isGreater); // true 

// null 존재하지 않는 값, 비어있는 값, 알 수 없는 값
let age = null;

// undefined 값이 할당되지 않은 상태 
// 변수는 선언했지만 값을 할당하지 않았다면 해당 변수에 자동 할당
let name;
alert(name); // 'undefined'

// 객체(object) 데이터 컬렉션, 복잡한 객체(entity) 표현 가능 

// 심볼(symbol) 객체의 고유한 식별자 만들 때 사용 

// typeof 연산자: 인수의 자료형 반환 
// 자료형에 따라 처리 방식 다르게 하거나 변수의 자료형 빠르게 알아내고 싶을 때 유용
typeof 0 // "number"
typeof 10n // "bigint"
typeof Math // "object"
typeof null // "object"
typeof alert // "function"


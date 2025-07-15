
// 문자형으로 변환
let value = true;
alert(typeof value); // boolean

value = String(value); // 문자열 'true' 저장
alert(typeof vlaue); // string

// 숫자형으로 변환
alert('6' / '2'); // 3, 문자열이 숫자형으로 자동변환

let str = '123';
alert(typeof str); // string

let num = Number(str); // 숫자 123으로 변환되고 저장
let name = Number('김용진 9149'); // NaN, 형 변환 실패

// 불린형으로 변환
// '비어있다' false 그 외 true
alert(Boolean('123')); // true
alert(Boolean('')); // false

alert(Boolean(1)); // true
alert(Boolean(0)); // false




alert("메시지 창 띄우기")

let result;
result = prompt('이름을 입력해 주세요', '홍길동');

alert(`당신의 이름은 ${result}가 맞습니까?`);

let isHuman = confirm('당신은 사람이 맞습니까?');

alert(isHuman);
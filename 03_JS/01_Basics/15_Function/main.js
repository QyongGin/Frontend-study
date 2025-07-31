
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


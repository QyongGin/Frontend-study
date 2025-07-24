
// addEventListener('이벤트 이름', 실행할 함수): 특정 이벤트 발생하는지 감시하는 이벤트 감지기
// DOMContentLoaded: 브라우저가 HTML 문서 전부 읽고 난 후 발생하는 중요 이벤트

// () => {} 함수를 만드는 방식인, 화살표 함수.
// 함수를 표현하는 간결한 문법으로 function() {} 를 더 짧게 썼다고 생각.
// 지금 같이 const '함수이름' = () => {}으로 쓰지않고 이름없이 즉석으로 만든 함수는 익명 함수. 사실상 일회용
// js는 변수에 함수도 할당 가능하다.

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registerForm");
    
    // 브라우저는 이벤트가 발생하면 하나의 event 객체를 만든다. 함수에 매개변수를 할당했다면
    // 브라우저는 자동으로 event 객체를 첫 번째 인자로 넣어준다.
    // 이벤트 종류에 따라 객체 내용물도 다르다. click은 클릭된 곳의 X,Y 좌표 등.
    // 브라우저가 개발자 대신 함수를 호출하고 그 상황에 대한 정보(event객체)를 넣어준다.
    // form은 submit 이벤트가 발생하면 입력된 데이터를 서버로 보내고 새로고침하도록 설계됨.

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // 새로고침 방지 후 검사 실행

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (email === "") {
        alert("이메일을 입력해 주세요.");
        return;
    }

    if (password.length < 6) {
        alert("비밀번호는 최소 6자 이상이어야 합니다.")
        return;
    }

    if (password !== confirmPassword) {
        alert("비밀번호가 일치하지 않습니다.");
        return;
    }

    alert("회원가입이 완료되었습니다!");
    // 여기서 서버 전송 또는 로컬 저장 처리 실행

    // localStorage: 브라우저 내부에 웹사이트별로 데이터를 키-값 쌍으로 영구저장하는 저장소
    // 크롬 개발자 도구에서 확인, 삭제 가능
    
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);
    });
    
    // 최신 자바스크립트는 ASI 자동 세미콜론 삽입 기능이 있어서 알아서 브라우저가 문장의 끝을 해석하고 넣어주지만
    // 오류 발생을 막고 코드의 끝을 명확하게 표현하기 위해 명령문의 끝에 세미콜론을 안전하게 붙인다.
});
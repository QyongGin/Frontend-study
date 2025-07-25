
document.addEventListener("DOMContentLoaded", () => {
    const saveEmail = localStorage.getItem("userEmail");
    const savePassword = localStorage.getItem("userPassword");

    document.addEventListener("submit", () => {
        const loginEmail = document.getElementById("email").value.trim();
        const loginPassword = document.getElementById("password").value;

        // == 는 값만 비교하는 탓에 자바스크립트가 강제로 타입을 변환하고 값을 비교한다.
        // === 는 값과 데이터 타입까지 모두 비교한다. 

        if(loginEmail === saveEmail && loginPassword === savePassword) {
            alert("환영합니다.");
        }
        else {
            alert("이메일 또는 비밀번호가 일치하지 않습니다.");
        }

    })
})
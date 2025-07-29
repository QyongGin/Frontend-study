document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("todo-form");
    const input = document.getElementById("todo-input");
    const list = document.getElementById("todo-list");

    let todos = [];

    // 저장된 데이터 로드

    // 웹브라우저에 저장된 데이터 중에서 "todos"라는 key로 저장된 데이터가 있는지 확인한다.
    if (localStorage.getItem("todos")) {

        // 데이터는 문자열 형태로만 저장되는데, JSON.parse()를 통해 다시 사용 가능한 자바스크립트 배열이나
        // 객체 형태로 변환(파싱)한다. 변환된 데이터는 변수 todos에 다시 할당한다.
        todos = JSON.parse(localStorage.getItem("todos"));

        // 
        renderTodos();
    }

    // 할 일 추가
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const text = input.value.trim();

        if (text === "") return;

        // 파이썬에서는 딕셔너리라 부르지만, JS에서는 이런 키 : 값 쌍의 데이터 구조를 객체(Object)라고 부른다.
        const todo = {
            id: Date.now(),
            text: text // 최신 JS에서는 text로 축약 가능하다.
        };

        todos.push(todo);
        saveTodos();
        renderTodos();
        input.value = "";
    })

    // 렌더링 함수
    function renderTodos() {

        // list 요소 내부의 HTML 전부 비우기.
        list.innerHTML = "";

        // 요소를 todo에 대입 후 코드 실행
        todos.forEach((todo) => {

            // li 태그 재정의
            const li = document.createElement("li");

            // li 요소 내부에 들어갈 HTML 코드를 문자열로 정의한다.
            li.innerHTML = `
            <span>${todo.text}</span>
            <button data-id = "${todo.id}">삭제</button>
            `;

            // 완성된 li 요소를 list 요소의 자식으로 추가한다. 
            list.appendChild(li);
        });
    }

    // 삭제 이벤트 (이벤트 위임)
    list.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON") {
            const id = parseInt(e.target.dataset.id);
            todos = todos.filter((todo) => todo.id !== id);
            saveTodos();
            renderTodos();
        }
    });

    // localStroage 저장
    function saveTodos() {
        localStorage.setItem("todos", JSON.stringify(todos));
    }
})
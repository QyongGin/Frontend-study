// 객체는 사용자, 주문 등과 같이 실제 존재하는 개체(entity)를 표현할 때 생성한다.

let user = {
    name: 'Yong',
    age: 30
};

// 사용자는 현실에서 로그인,로그아웃 등의 행동을 한다. 
// 마찬가지로 사용자를 나타내는 객체 user도 특정한 행동을 할 수 있다.

// 메서드 생성 

// 객체 프로퍼티에 할당된 함수를 메서드(method)라 부른다.
user.sayHi = function() {
    alert('안녕하세요.');
};

user.sayHi(); // 안녕하세요.

// 이미 정의된 함수를 이용해 만들기도 한다.

function sayYo() {
    alert('Yo!');
};

user.sayYo = sayYo; // 함수를 값으로 다룰 시 괄호는 필요 없다.

// 메서드 단축 구문

// sayhi: function() {...} 와 동일하게 동작한다.
user = {
    sayHi() { // 기존 객체 덮어쓰기
        alert('Hello');
    }
}

// 메서드와 this

// 메서드 내부에서 this 키워드를 사용하여 객체에 접근한다.

user = {
    sayHi() {
        alert(this.name); // user.name도 가능하다. 복사 시 주의.
    }
};

user.sayHi(); // Yong

// 자유로운 this

// JS에서는 모든 함수에 this가 사용 가능하다. this 값은 런타임에 따라 결정된다.
// 동일한 함수라도 다른 객체에서 호출했다면 this가 참조하는 값이 달라진다.

let admin = { name: 'Admin' };

function sayHi() { // 이전에 선언된 sayHi 덮어쓰기
    alert(this.name);
}

user.f = sayHi;
admin.f = sayHi;

user.f(); // Yong
admin.f(); // admin

// this가 없는 화살표 함수

// 화살표 함수는 고유한 this를 가지지 않는다. 
// 화살표 함수에서 this를 참조 시 화살표 함수가 아닌 평범한 외부 함수에서 this 값을 가져온다.

user = {
    food: 'burger',
    sayHi() {
        let arrow = () => alert(this.food);
        arrow();
    }
};

user.sayHi(); // burger

/*

! 요약

객체 프로퍼티에 저장된 함수를 '메서드'라 한다.
메서드는 객체를 '행동'할 수 있게 해준다.
메서드는 this로 객체를 참조한다.

this값은 런타임에 따라 결정된다.
함수 선언 시 this를 사용할 수 있다. 다만, 호출 전까지 this에는 값이 할당되지 않는다.
함수를 복사해 객체 간 전달할 수 있다.
함수를 객체 프로퍼티에 저장해 obj.method() 같이 메서드 형태로 호출 시 this는 obj를 참조한다.

화살표 함수는 자신만의 this가 없다. 외부에서 값을 가져온다.

*/

// ! 과제

// 객체 리터럴에서 this 사용하기

/*
function makeUser() {
    return {
        name: "John",
        ref: this
    };
};

let user = makeUser();

alert( user.ref.name );  Error
*/
// 메서드를 부른게 아닌, 함수를 불렀기 떄문에 this는 undefined

// 계산기 만들기

let calculator = {
    x: 0,
    y: 0,
    read() {
        this.x = Number(prompt('숫자를 입력해 주세요.','0'));
        this.y = Number(prompt('숫자를 입력해 주세요.','1'));
    },
    sum() {
        return this.x + this.y;
    },
    mul() {
        return this.x * this.y;
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

// 체이닝 

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this; // 객체 자기 자신(ladder)을 반환하여 체이닝.
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function() {
        alert(this.step);
        return this;
    }
};

ladder
    .up() // step +1, 현재 ladder 띄워짐.
    .up() // 띄워진 ladder에서 up메서드 실행
    .down()
    .showStep();


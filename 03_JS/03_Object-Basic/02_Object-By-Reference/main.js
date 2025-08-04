// 객체는 참조에 의해 저장되고 복사된다.
// 원시값은 값 그대로 저장, 할당되고 복사된다.

// 두 개의 독립된 변수에 'Hello' 저장 
let message = 'Hello';
let pharse = message;

// 객체의 동작 방식은 객체가 저장된 '메모리 주소'인 객체에 대한 '참조값'이 저장된다.

// 메모리 내 어딘가 객체 저장. user에는 객체를 '참조' 할 수 있는 값이 저장된다.
let user = { name: 'John'}; 
let admin = user; // 참조값 복사.

admin.name = 'Pete';
alert(user.name); // 'Pete'

// 참조에 의한 비교

// 객체 비교 시 동등 연산자 '==' 와 일치 연산자 '==='는 동일하게 동작한다.
// 피연산자인 두 객체가 동일한 객체인 경우에 참을 반환한다.

alert( user == admin ); // true
alert( user === admin ); // true

let a = {};
let b = {}; // 비어있을뿐, 다른 객체다.
alert( a == b ); // false 

// 객체 복사, 병합과 Object.assign 

user = {
    name: 'Yong',
    age: '23',
};

let clone = {};

// user와 프로퍼티가 완전히 같은 독립적인 객체 생성
for (let key in user) {
    // clone 객체 해당하는 key가 없을 시 생성하고 그곳에 user[key] 값을 할당한다.
    clone[key] = user[key];
}

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// 첫 번째 인수는 목표로 하는 객체. 이어지는 인수부터는 복사하고자 하는 객체. 
// permissions1,2의 프로퍼티를 clone에 복사한다.
// 동일한 이름을 가진 프로퍼티가 있다면 기존 값을 덮어씌운다. 
Object.assign(clone, permissions1, permissions2);

// 반복문 없이 간단히 객체 복사
let cloneObj = Object.assign({}, user);

// 중첩 객체 복사, 깊은 복사(Deep Copy)

user = {
    name: "John",
    sizes: {
    height: 182,
    width: 50
    }
};

// 프로퍼티 안에서 객체를 참조하는 참조 값이 복사된다. 독립된 객체가 아니게 된다.
clone = Object.assign({}, user);

alert( user.sizes === clone.sizes ); // true, 같은 객체입니다.

// structuredClone() 최신 자바스크립트에 추가된 전역 함수. 깊은 복사를 위해 만들어짐

let deepclone = structuredClone(user); // 독립된 객체



// 요약

/*

객체는 참조에 의해 할당되고 복사된다. 변수에는 객체 자체가 아닌, 메모리 상의 주소인 참조가 저장된다.
객체가 할당된 변수를 복사하거나 함수의 인자로 넘길 시 객체가 아닌 객체의 참조가 복사된다.

복사된 참조를 이용한 모든 작업(프로퍼티 추가, 삭제)은 동일한 객체를 대상으로 이뤄진다.

객체의 진짜 복사본을 만들려면 얕은 복사(shallow copy)를 가능하게 해주는 Object.assign()이나
깊은 복사(deep copy)를 가능하게 해주는 structuredClone()을 사용하면 된다. 

*/
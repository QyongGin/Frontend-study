let user = {};

console.log('?.는 앞의 평가 대상이 undefind, null 이라면 평가를 멈추고 undefined를 반환한다.')
console.log( user?.address?.street); // undefined, 에러가 발생하지 않는다.

user = null;

console.log(user?.address); // undefined
console.log(user?.address.street); // undefined

// 단락평가

user = null;
let x = 0;

user?.sayHi(x++);
console.log(x + ' user에 값이 없으니 x는 증가하지 않았다.');

// ?.

let user1 = {
    admin() {
        // console.log만 작성하면 출력값만 존재하고 반환값이 없기 때문에 문자열이 출력되고 undefined도 출력한다.
        return '관리자 계정입니다.';
    }
};

let user2 = {};

console.log(user1.admin?.());
console.log(user2.admin?.());

// ?.[] 

user1 = {
    firstName: 'Yong'
};

user2 = null;

let key = 'firstName';

console.log(user1?.[key]); 
console.log(user2?.[key]);
console.log(user1?.[key]?.something?.not?.existing);

// ?.와 delete

user1 = {
    name: 'Kim',
};

console.log(user1.name);

delete user1?.name; // user1이 존재한다면 name 프로퍼티 삭제

console.log(user1.name);
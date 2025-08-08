# 옵셔널 체이닝(Optional Chaining)

옵셔널 체이닝 '?.' 을 사용하면 프로퍼티가 없는 중첩 객체를 에러 없이 안전하게 접근할 수 있다.

## 옵셔널 체이닝이 필요한 이유

여러 명의 사용자 중 몇 명은 주소 정보가 없다. 이때 ```user.address.street```를 사용해 주소 정보에 접근하면 에러가 발생한다.

```js
let user = {}; // 주소 정보가 없는 사용자
alert(user.address.street); // TypeError: Cannot read property 'street' of undefined
```

또는 JS를 사용해 페이지에 존재하지 않는 요소에 접근해 요소의 정보를 가져오려 하면 문제가 발생한다.

```js
// querySelector(...) 호출 결과가 null인 경우 에러 발생
let html = document.querySelector('.my-element').innerHTML;
```

## 옵셔널 체이닝의 등장

``?.`` 은 ``?.`` '앞'의 평가 대상이 ``undefined``나 ``null``이면 평가를 멈추고 ``undefined``를 반환한다. 

## 옵셔널 체이닝을 남용하지 않는다.

``?.`` 는 존재하지 않아도 괜찮은 대상에만 사용해야 한다. 

사용자 주소를 다루는 예시에선 논리상 ``user``는 반드시 있어야 하는데 ``address``는 필수값이 아니다.
그러니 ``user.address?.street``를 사용하는게 바람직하다.

## ``?.`` 앞의 변수는 꼭 선언되어야 한다.

```js
// ReferenceError: user is not defined
user?.address 
```
옵셔널 체이닝은 선언이 완료된 변수를 대상으로만 동작한다.

## 단락 평가

``?.`` 는 왼쪽 평가대상에 값이 없으면 즉시 평가를 멈춘다. 이를 단락 평가(short-circuit)라 부른다.

```js
let user = null;
let x = 0;

user?.sayHi(x++); // 아무 일도 일어나지 않는다.

alert(x); // 0
```

## ``?.()`` 와 ``?.[]``

``?.``은 연산자가 아니다. ``?.``은 함수나 대괄호와 함께 동작하는 특별한 문법 구조체(syntax construct)이다.

```js
// 존재 여부가 확실치 않은 함수를 호출할 때 사용하기

let user1 = {
    admin() {
        alert('관리자 계정입니다.');
    }
};

let user2 = {};

user1.admin?.(); // 관리자 계정입니다.
user2.admin?.();
```

``?.()``를 사용해 ``admin``의 존재 여부를 확인한다. ``user2``에는 ``admin``이 정의되어 있지 않아도 메서드를 호출하면 에러 없이 그냥 평가가 멈춘다.

``.``대신 대괄호 ``[]``를 사용해 객체 프로퍼티에 접근하는 경우에 ``?.[]``를 사용해도 된다. ``?.[]``를 사용해도 객체 존재 여부가 확실치 않은 경우에 안전하게 프로퍼티를 읽는다.

```js 
let user1 = {
    firstName: 'Yong'
};

let user2 = null; // user2는 권한이 없는 사용자.

let key = 'firstName';

alert(user1?.[key]); // Yong
alert(user2?.[key]); // undefined

alert(user1?.[key]?.somthing?.not?.existing); // undefind
```

``?.``은 ``delete``와 조합해 사용하기도 한다.
```js
delete user?.name; // user가 존재한다면 user.name을 삭제하라.
```

## 요약
옵셔널 체이닝 문법 ``?.``은 세 가지 형태로 사용한다.

1. ``obj.prop`` - ``obj``가 존재하면 ``obj.prop``을 반환하고 아니라면 ``undefined``를 반환한다.
2. ``obj?.[prop]`` - ``obj``가 존재하면 ``obj[prop]``을 반환하고 아니라면 ``undefined``를 반환한다.
3. ``obj?.method()`` - ``obj``가 존재하면 ``obj.method()``를 호출하고 아니라면 ``undefined``를 반환한다.

``?.`` 왼쪽 평가 대상이 ``null``이나 ``undefined``인지 확인하고 아니라면 평가를 계속 진행한다.

``?.``를 계속 연결해서 체인을 만들면 중첩 프로퍼티들에 안전하게 접근한다.
``?.``은 왼쪽 평가 대상이 없어도 괜찮은 경우에만 선택적으로 사용해야 한다.
꼭 있어야 하는 값인데 없는 경우에 사용하면 프로그래밍 에러를 쉽게 찾지 못한다.
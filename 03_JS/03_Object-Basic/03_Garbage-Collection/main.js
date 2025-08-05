/*
가비지 컬렉션

JS는 눈에 보이지 않는 곳에서 메모리 관리 수행.
원시값, 객체, 함수 등 모든 것은 메모리를 차지한다. 

가비지 컬렉션 기준

JS는 도달 가능성(reachability)라는 개념을 통해 메모리 관리 수행.
도달 가능한(reachable)값은 어떻게든 접근하거나 사용할 수 있는 값. 
도달 가능한 값은 메모리에서 삭제되지 않는다.
현재 함수의 지역 변수와 매개변수, 전역 변수 등등.
이런 값은 루트(root)라고 부른다.

루트가 참조하는 값이나 체이닝으로 루트에서 참조할 수 있는 값은 도달 가능한 값.

가비지 컬렉터는 모든 객체를 모니터링하고 도달하지 못하는 객체는 삭제한다.
*/

let user = {
    name: 'Yong'
};

// 전역 변수 user는 {...} 객체를 참조한다. 

user = null;

// 이제 {...} 객체를 참조하는 변수는 없다. 즉, 도달하지 못하는 상태다.
// 가비지 컬렉터가 {...} 객체에 저장된 데이터를 삭제하고 메모리에서 삭제한다.

function marry(man, woman) {
    man.wife = woman;
    woman.husband = man;

    return {
        father: man,
        mother: woman
    }
}

let family = marry({
    name: 'Yong'
},  {
    name: 'Ann'
});

/*
return 값을 받으면

family = {
    father: { 
        name: 'Yong', 
        wife: {
            name: 'Ann',
            husband: //father 객체
            }
        },

    mother: { 
        name: 'Ann',
        husband: {
            name: 'Yong',
            wife: //mother 객체 
            }
        }    
}
*/

// family 객체는 father 객체를 참조하지 않음. mather 객체 또한 마찬가지.
// 아무도 참조하지 않는 father 객체는 제거된다.
delete family.father;
delete family.mother.husband;

// family 객체 전부 삭제
family = null;

/*
내부 알고리즘

'mark-and-sweep': 가비지 컬렉션의 기본 알고리즘

1. 가비지 컬렉터는 루트(root) 정보를 수집하고 이를 ‘mark(기억)’ 합니다.
2. 루트가 참조하고 있는 모든 객체를 방문하고 이것들을 ‘mark’ 합니다.
3. mark 된 모든 객체에 방문하고 그 객체들이 참조하는 객체도 mark 합니다. 한번 방문한 객체는 전부 mark 하기 때문에 같은 객체를 다시 방문하는 일은 없습니다.
4. 루트에서 도달 가능한 모든 객체를 방문할 때까지 위 과정을 반복합니다.
5. mark 되지 않은 모든 객체를 메모리에서 삭제합니다.

! 요약

가비지 컬렉션은 엔진이 자동으로 수행하므로 개발자는 이를 억지로 실행하거나 막지 못한다.
객체는 도달 가능한 상태일 때 메모리에 남는다.
참조된다고 해서 도달 가능한 게 아니다. 서로 연결된 객체들도 도달하지 못할 수 있다.
*/
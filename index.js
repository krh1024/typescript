// 스트링으로 지정 시, 반드시 문자만...넣어야한다
let time = "1";
// boolean 타입도 1,0으로 안된다. 반드시 true or false 이다
let k = true;
// 객체도 마찬가지로 타입을 객체처럼 지정할 수 있다.
let t = { name: "kim" };
// 단, 객체 내 타입명 옆에 ?를 붙이면 해당속성이 옵션이라고 인식되어
// 해당속성이 없어도 에러를 내지 않는다.
let a = {};
// 유니온타입이라고 해서 let 변수명 = :string | number = 123; 라고 하면
// 해당 변수가 스트링으로도 올 수 있고 넘버로도 올 수 있다
let 변수명 = "123";
let b = 1;
// 함수타입검사는 다음과 같다. 소괄호 및 중괄호 사이는 리턴값의 타입이다.
function asdf(props) {
    return props * 2;
}
let john = [1, false];
let c = { name: "kim", age: "15", 3: "ㅏ" };
class User {
    constructor(name) {
        this.name = name;
    }
}

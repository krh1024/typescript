// 스트링으로 지정 시, 반드시 문자만...넣어야한다
let time :string = "1";

// boolean 타입도 1,0으로 안된다. 반드시 true or false 이다
let k :boolean = true;

// 객체도 마찬가지로 타입을 객체처럼 지정할 수 있다.
let t :{name:string} = { name: "kim" };
// 단, 객체 내 타입명 옆에 ?를 붙이면 해당속성이 옵션이라고 인식되어
// 해당속성이 없어도 에러를 내지 않는다.
let a :{name?:string} = {  };

// 유니온타입이라고 해서 let 변수명 = :string | number = 123; 라고 하면
// 해당 변수가 스트링으로도 올 수 있고 넘버로도 올 수 있다
let 변수명 :string | number = "123";

// 타입명을 변수처럼 저장하여 가져다가 사용할 수도 있다.
// 보통 타입변수의 첫 문자는 대문자로 사용한다.
type Kfc = string|Number;
let b :Kfc = 1;


// 함수타입검사는 다음과 같다. 소괄호 및 중괄호 사이는 리턴값의 타입이다.
function asdf (props :number) :number {
    return props * 2;
}

// 배열은 다음과 같다. 객체나 배열 모두 추가되는 값에 대한 타입이 없다면 에러난다.
// 배열방식을 tuple(튜플)타입이라고 한다.
type Member = [number, boolean ];
let john :Member = [1, false];

// 아래 타입의 경우, 글자로 된 모든 object 속성의 타입은 스트링이어야 함.
type abc = {
    [key :string] : string 
}
let c :abc = { name: "kim", age: "15", 3: "ㅏ" }

class User {
    name :string;
    constructor(name :string) {
        this.name = name;
    }
}
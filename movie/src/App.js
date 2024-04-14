import { useState } from 'react';
import './App.css';

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onDelete = (index) => {
    setToDos(toDos.filter((item, todoIndex) => index !== todoIndex));
    };
  const onSubmit = (event) => {
    event.preventDefault(); // form특성상 새로고침 해주는 것을 방지하는 것, value정보 기억하게 해주려고 쓴 느낌?
    if(toDo === "") {
      return; // 함수 종료
    }
    setToDo(""); // input창 초기화, 수정할땐 todo=""이런식으론 수정하면 안 댐, 꼭 함수를 사용해서 수정해야함
    setToDos(currentArray => [toDo, ...currentArray]); // todo는 입력창 입력값 value
  }; // setTodos는 todo값들(value)을 배열에 넣어주는 함수느낌, currnetArray는 비어있는 []느낌 이 두개가 합쳐지는 것
  console.log(toDos);
  return <div> 
    <h1>My To Dos ({toDos.length})</h1> 
    <form onSubmit={onSubmit}>
    <input 
    onChange={onChange}
    value={toDo}
    type='text' 
    placeholder='Write your to do...'/>
    <button>Add To Do</button>
    </form>
    <hr/>
    <ul>
    {toDos.map((item, index) => <li key={index}>{item}<button onClick={() => onDelete(index)}>❌</button></li> )} 
    </ul>
    
  </div>; // map함수는 배열안의 요소들을 바꾸고 그 바뀐 새로운 배열을 가지고 싶을 떄 사용
}
// ['hellow', 'are', 'how', 'you', 'are', 'there'].map(() => ":)") // 하면 :) 6개 생성됨
// map()의 괄호안에는 하나의 array에 있는 item을 내가 원하는 무엇이든지로 바꿔줄 수 있고 그것은 새로운 array로 반환됨
// ['hellow', 'are', 'how', 'you', 'are', 'there'].map((item) => item.toUpperCase)//  모두 대문자로 바뀐 새로운 배열 출력
export default App;

// const food = [1,2,3,4]
// const foods = [6, ...food]; 이렇게하면 가볍게 합쳐짐

// map() 함수
// -> 배열을 가지고 있을 때 각각의 element들을 바꿀 수 있게 해줌map() 은 ()에 함수를 넣을 수 있는데 배열의 모든 item에 대해 실행됨
// 즉 배열에 6개의 item이 있다면 6번 함수가 실행됨
// 그리고 그 함수로부터 내가 return한 값은 새로운 배열에 들어가게 함
// [‘a’, ‘b’, ‘c’, ‘d’, ‘e’, ‘f’].map(() => “:)”)
// -> [‘:)’, ‘:)’, ‘:)’, ‘:)’, ‘:)’ ‘:)’] 인 새 배열을 만들어줌
// 다만 기존의 배열에 접근할 수 없게됨
// 그러나 map은 함수의 첫 번째 argument로 현재의 item을 가지고 올 수 있음
// map(item) -> item이나 원하는 어떤 변수명을 넣으면 item자체를 리턴하는 것도 가능
// map((item) => item.toUpperCase())
// 로 하면 item이 대문자로 바뀐 새로운 배열은 만들어줌

// 리액트는 기본적으로 list에 있는 모든 item을 인식하기 때문에 key를 넣어 고유하게 만들어줘야함
// map의 첫 번째 argument는 값이고 두번째는 index 즉 숫자를 의미함
// 그래서
// {toDos.map((item, index) => {item})}
// 만들어줌
// 즉,
// {{item},{item},{item}...}
// 배열을 만들어 각자 고유의 key를 가지게 함
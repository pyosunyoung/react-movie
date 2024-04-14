import { useEffect, useState } from 'react';
import Movie from './components/MovieC';
import { BrowserRouter as Router, Switch, Route, Routes} from "react-router-dom";
import Home from "./routes/Home";
import Detail from './routes/Detail';
function App() {
  return <Router>
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/movie/:id" element={<Detail />} />
  </Routes>
  </Router>;

}// map쓸때는 고유값인 key를 무조건 붙여야 에러가 안 뜸
//switch는 route를 찾는 컴포넌트인데 route는 여기{}중괄호 부분 의미함, switch기능은 또 한번에 하나의 route만 렌더링 하기 위함임 
// http://localhost:3000/{movies/123} route를 찾으면 컴포넌트를 렌더링한다.
//2개의 Route를 만들건데 하나는 유저가 홈화면으로 갈 때 사용할 route
//paht="/" 유저가 이 경로에 있으면 우리는 home Route를 렌더링 해줄것
//나머지는 detail홈페이지로 이동
// 영화 제목을 눌렀을떄 detail페이지로 이동하는 구문을 만들고 싶다
//원래 아는 방식인 a태그를 이용해서 한다면 detail페이지로 들어갔을 때 
//브라우저가 새로고침이 되어지는 불필요한 로딩이 발생한다.
//그것을 막기위해서 또 좋은 컴포넌트를 router dom은 제공해준다.
//그 컴포넌트는 Link컴포넌트다. 브라우저 새로고침없이 유저를 다른페이지로 이동시켜줌
export default App;
//"react-router-dom"는 url을 관리하는 컴포넌트라고 보면 됨
//이제 app.js즉 movie.js는 router를 render하는 작업을 할것
//router는 url을 보고있는 component고

//<Route path="/movie/:id">  이렇게 해주면
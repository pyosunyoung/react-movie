import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]); // 초기값을 비워두면 undefined라 다른 곳 (예로 h1에서 coins.length같은데서 오류 발생함)
  const [money, setMoney] = useState(0);
  const [getcoin, setGetCoin] = useState(0);
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then((response) => response.json()) // coin데이터 api 이용해서 출력
      .then((json) => {
        setCoins(json);
        setLoading(false);
        
      }); // 모든 데이터는 json에 들어있다. 그것을 setcoin에 넘겨줌
  }, []);
  const onChange = (event) => setMoney(event.target.value);
  const onSelect = (event) => {
    setGetCoin(event.target.value); // 0, 1 출력
  }
  const reset = () => setMoney(0);
  return ( // 로딩중이라면 (length)값 숨기고, 로딩이 끝나면 length값 출력함
    <div> 
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1> 
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={onSelect}>
          <option >
            select coin
          </option>

          {coins.map((coin) => (
            <option key={coin.id} value={coin.quotes.USD.price}>
              {coin.name} ({coin.symbol}):${coin.quotes.USD.price}
            </option>
          ))}
        </select>
        
      )}
      
      <div>
        <input 
        onChange={onChange}
        value={money}
        type='text' 
        placeholder='BTC'>
        </input>
      </div>
      <div>
        <input 
        value={money * getcoin}
        type='text' 
        placeholder='USD'
        disabled="true"
        ></input>
      </div>
      <button onClick={reset}>리셋</button>
      
    </div>
    
  ); //위는 키를 이미 주어져서 따로 index와 key를 입력 안 해도 된다.
}

export default App;

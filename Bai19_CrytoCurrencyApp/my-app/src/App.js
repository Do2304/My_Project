import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [crypto, setCrypto] = useState([]);
  useEffect(()=>{
    Axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
      .then(res => {
        setCrypto(res.data)
      })
      .catch((err)=>{
        console.error('Loi roi',err)
      })
  },[])

  return (
    <div className="App">
      <h1>All Cryptocurrencies</h1>
      <input placeholder="Search..."
        onChange={e => setSearch(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Symbol</td>
            <td>market_cap</td>
            <td>Price</td>
            <td>total_volume</td>
          </tr>
        </thead>
        <tbody>
         {
          crypto
            .filter((val)=> val.name.toLowerCase().includes(search.toLowerCase()))
            .map((val) =>(
              <>
                <tr>
                  <td className="logo">
                    <img src={val.image} width='50px'/>
                    <p>{val.name}</p>
                  </td>
                  <td className="symbol">{val.symbol}</td>
                  <td className="market_cap">₹{val.market_cap}</td>
                  <td className="price_1">₹{val.current_price.toFixed(2)}</td>
                  <td className="total_volume">{val.total_volume}</td>
                </tr>
              </>
            ))
         }
        </tbody>
      </table>
    </div>
  );
}

export default App;
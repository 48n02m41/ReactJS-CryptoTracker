import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";
import Currency from "./Currency";

function App() {
  const [search, setSearch] = useState("");
  const [cryptocoins, setCryptoCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=90&page=1&sparkline=false"
      )
      .then((res) => {
        setCryptoCoins(res.data);
        //console.log(res.data)
      })
      .catch((error) => console.log(error));
  }, []);

  const filteredCryptoCoins = cryptocoins.filter((cryptocoin) =>
    cryptocoin.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="container">
      <div className="mb-3">
        <div className="form-floating searchbar">
          <input
            type="text"
            placeholder="Search"
            onChange={handleChange}
            className="form-control form-control-lg"
            id="input1"
          />
          <label for="input1">Search currencies</label>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Image</th>
            <th scope="col">Symbol</th>
            <th scope="col">M. Cap</th>
            <th scope="col">Price</th>
            <th scope="col">Percent Change</th>
            <th scope="col">Volume</th>
          </tr>
        </thead>
        <tbody>
          {filteredCryptoCoins.map((crypto) => {
            return (
              <Currency
                key={crypto.id}
                cryptoname={crypto.name}
                cryptoimage={crypto.image}
                cryptosymbol={crypto.symbol}
                cryptomarketcap={crypto.market_cap}
                cryptoprice={crypto.current_price}
                cryptopercentchange={crypto.price_change_percentage_24h}
                cryptovolume={crypto.total_volume}
              ></Currency>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;

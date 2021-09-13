import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';


function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  const [cryptocoins, setCryptoCoins] = useState([]);

  useEffect(() => {

    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=90&page=1&sparkline=false')
    .then(res => {
      setCryptoCoins(res.data);
      //console.log(res.data)
    })
    .catch(error => console.log(error));
  }, []);



  return (
    <div className="App">
      <h1>Stuff</h1>
    </div>
  );
}

export default App;

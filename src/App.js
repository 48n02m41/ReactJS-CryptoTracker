import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';


function App() {

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

  const filteredCryptoCoins = cryptocoins.filter(cryptocoin =>
    cryptocoin.name
    .toLowerCase()
    .includes(search.toLowerCase())
  );

  const handleChange = e => {
    setSearch(e.target.value);
  }

  return (
    
<div className='toplevel'>

  <div className='searchbar'>
    <h1 className='text'>Search currencies</h1>

    <form>
      <input type="text" placeholder="Search" className="input" />
    </form>

  </div>

</div>

  );
}

export default App;

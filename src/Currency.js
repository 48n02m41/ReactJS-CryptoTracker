import React from "react";

const Currency = ({
  cryptoname,
  cryptoimage,
  cryptosymbol,
  cryptoprice,
  cryptovolume,
  cryptopercentchange,
  cryptomarketcap,
}) => {
  return (
    <div className="crypto-container">
      <div className="crypto-row">
        <div className="crypto">
          <img className="img-fluid" src={cryptoimage} alt="cryptoimage" />
          <h1>{cryptoname}</h1>
          <p className="crypto-symbol">{cryptosymbol}</p>
        </div>

        <div className="crypto-data">
          <p className="crypto-price">€{cryptoprice}</p>
          <p className="crypto-volume">€{cryptovolume.toLocaleString()}</p>
          <p className="crypto-percent-change">
            {cryptopercentchange.toFixed(2)}%
          </p>
          <p className="crypto-marketcap">
            Market Cap: €{cryptomarketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Currency;

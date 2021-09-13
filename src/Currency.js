import React from "react";

const Currency = ({
  cryptoname,
  cryptoimage,
  cryptosymbol,
  cryptoprice,
  cryptovolume,
  cryptopercentchange,
}) => {
  return (
    <div className="crypto-container">
      <div className="crypto-row">
        <div className="crypto">
          <img src={cryptoimage} alt="cryptoimage" />
          <h1>{cryptoname}</h1>
          <p className="crypto-symbol">{cryptosymbol}</p>
        </div>

        <div className="crypto-data">
          <p className="crypto-price">€{cryptoprice}</p>
          <p className="crypto-volume">€{cryptovolume.toLocaleString()}</p>
          <p className="crypto-percent-change">
            {cryptopercentchange.toFixed(2)}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Currency;

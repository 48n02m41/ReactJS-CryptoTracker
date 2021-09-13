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
    <tr>
      <img className="img-fluid" src={cryptoimage} alt="cryptoimage" />
      <td>{cryptoname}</td>
      <td className="crypto-symbol">{cryptosymbol}</td>

      <td className="crypto-price">€{cryptoprice}</td>
      <td className="crypto-volume">€{cryptovolume.toLocaleString()}</td>
      <td className="crypto-percent-change">
        {cryptopercentchange.toFixed(2)}%
      </td>
      <td className="crypto-marketcap">
        Market Cap: €{cryptomarketcap.toLocaleString()}
      </td>
    </tr>
  );
};

export default Currency;

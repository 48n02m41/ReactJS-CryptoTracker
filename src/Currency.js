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
      <td>
        <img className="img-fluid" src={cryptoimage} alt="cryptoimage" />
      </td>
      <td>{cryptoname}</td>
      <td className="crypto-symbol">{cryptosymbol.toUpperCase()}</td>

      <td className="crypto-price">€{cryptoprice}</td>
      <td className="crypto-volume">€{cryptovolume.toLocaleString()}</td>
      <td className="crypto-percent-change">
        <div
          className={cryptopercentchange > 0 ? "text-success" : "text-danger"}
        >
          {cryptopercentchange.toFixed(2)}%
        </div>
      </td>
      <td className="crypto-marketcap">€{cryptomarketcap.toLocaleString()}</td>
    </tr>
  );
};

export default Currency;

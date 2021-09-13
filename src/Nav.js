import React from "react";

const Nav = () => {
  return (
    <div>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a
            className="nav-link"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/48n02m41"
          >
            GitHub
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/48n02m41"
          >
            Twitter
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;

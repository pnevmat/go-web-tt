import React from 'react';

export default function Header() {
  return (
    <>
      <h2>
        <svg use="./images/icons/logo.svg"></svg>
        <div>
          <span>Finance</span>
          <span>Ledger</span>
        </div>
      </h2>
      <nav>
        <ul>
          <li>
            <a href="#0">Home</a>
          </li>
          <li>
            <a href="#1">About</a>
          </li>
          <li>
            <a href="#2">Cases</a>
          </li>
          <li>
            <a href="#3">Blog</a>
          </li>
          <li>
            <a href="#4">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

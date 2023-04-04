import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: silver;
  }

  h1 {
    font-size: 2.5rem;
    margin: 1rem 0;
    text-align: center;
    padding: 1rem;
    border-bottom: 2px solid;
    position: sticky;
  }

  h2 {
    font-size: 2rem;
    margin: 1rem 0;
    text-align: center;
  }

  p {
    font-size: 1rem;
    margin: 0.5rem 0;
  }

  .gallery-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
  }

  .spotlight-container {
    text-align: center;
    margin-bottom: 2rem;
  }

  .spotlight {
    text-align: center;
  }

  .list {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .nav-button {
    margin: 1rem;
    padding: 0.5rem;
    border: transparent;
    background-color: silver;
    font-size: 1.2rem;
    transition-duration: 0.1s;
    cursor: pointer;
  }

  .nav-button:hover {
    background-color: black;
    color: white;
  }

  .back-btn {
    margin: 1rem;
    padding: 0.5rem;
    border: transparent;  
    background-color: silver;
    font-size: 1rem;
    transition-duration: 0.1s;
    cursor: pointer;
    font-size: 1.2rem;
  }

  .back-btn:hover {
    background-color: black;
    color: white;
  }

  .details {
    text-align: center;
  }
`;

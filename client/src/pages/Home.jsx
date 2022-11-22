import React from "react";
import "../styles/Home.css";

export default function Home() {
  return (
    <div>
      <div className="container">
        <form className="search">
          <input type="text" placeholder="Enter Zip Code" name="q"/>
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
}

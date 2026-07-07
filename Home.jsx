import React from 'react';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="h-screen w-full bg-transparent text-xl">

      {/* Image */}
      <img
        src="https://lh3.googleusercontent.com/p/AF1QipNwKQU51Hk7at5_dGGCQXBkZhpbrFcWsQVtouGC=s1360-w1360-h1020-rw"
        alt="Jewellery Shop"
        className="h-full w-full object-cover overflow-hidden"
      />
    </div>
  );
}

export default Home;

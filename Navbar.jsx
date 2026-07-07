import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-[40%] flex items-center justify-between px-10 bg-zinc-100">
        <div className="flex flex-col justify-center">
      <h1 className="font-bold text-orange-500 text-4xl">KAKA DAHALE SARAF AND JEWELLERS</h1>
      <h6 className="text-[25px] text-orange-900">
            Trusted Since Generations
          </h6>
          </div>
           <div className="hidden md:flex gap-8 text-lg">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/service">Service</Link>
          <Link to="/collections">Collections</Link>
          <Link to="/contact">Contact</Link>
        </div>
      

    </div>
  );
}
export default Navbar;

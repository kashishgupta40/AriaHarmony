import React from 'react';

function NavBar(){
  return(
         <div className="font-montserrat">
        {/* Navigation Bar */}
        <nav className="flex bg-brown p-4 text-white">
          <label className="logo text-2xl font-bold">Aria Harmony</label>
          <ul className="flex ml-10">
            <li className="mx-5">
              <Link to="/" className="text-lg font-semibold">Home</Link>
            </li>
            <li className="mx-5">
              <Link to="/about" className="text-lg font-semibold">About</Link>
            </li>
            <li className="mx-5">
              <Link to="/program" className="text-lg font-semibold">Program</Link>
            </li>
            <li className="mx-5">
              <Link to="/pricing" className="text-lg font-semibold">Pricing</Link>
            </li>
            
          </ul>
        </nav>
        </div>

        );
        }

        export default NavBar;
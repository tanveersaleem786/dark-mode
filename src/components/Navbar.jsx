import React from 'react';
import { useDarkMode } from "../hooks/useDarkMode";

const Navbar = (props) => {
  const [darkMode, toggleMode] = useDarkMode("darkMode", false);
  // const toggleMode = e => {
  //   e.preventDefault();
  //   setDarkMode(!darkMode);
  // };
  if(darkMode)
  {
    props.setBackground('dark-mode');
  }
  else
  {
    props.setBackground('none');
  }

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;

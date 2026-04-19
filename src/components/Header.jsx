import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
   <header className="absolute top-0 left-0 w-full z-20 bg-black/40 backdrop-blur-sm">
  <div className="mx-auto max-w-[1600px] px-6 flex justify-between items-center p-8 text-white">
      {/* Logo */}
      <h1 className="font-serif text-2xl tracking-wide">H & M</h1>

      {/* Desktop navigation */}
      <nav className="hidden md:flex gap-8 text-sm tracking-widest">
        <Link to="/">START</Link>
        <Link to="/osa">OSA</Link>
        <Link to="/information">FESTINFO</Link>
      </nav>

      {/* Hamburgermeny-knapp (mobil) */}
      <button
  onClick={toggleMenu}
  className="md:hidden p-2 text-2xl"
  aria-label="Meny"
>
  {isOpen ? "✕" : "☰"}
</button>

      {/* Mobilmeny */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-neutral-800 backdrop-blur-lg flex flex-col items-center gap-6 py-6 md:hidden transition-all duration-300">
          <Link to="/" onClick={() => setIsOpen(false)}>
            START
          </Link>
          <Link to="/information" onClick={() => setIsOpen(false)}>FESTINFO
          </Link>
          <Link to="/osa" onClick={() => setIsOpen(false)}>
            OSA
          </Link>
        </div>
      )}
      </div>
    </header>
  );
}

export default Header;
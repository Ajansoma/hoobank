import { useState } from 'react';
import { logo, close, menu } from '../assets';
import { navLinks } from '../constants';
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleMenu = function () {
    setToggleMenu((prev) => !prev);
  };

  const menuEl = navLinks.map((link) => (
    <li key={link.id} className="text-white text-base list-none">
      <a href={`#${link.id}`}>{link.title}</a>
    </li>
  ));
  return (
    <nav className="w-full flex justify-between items-center py-6 navbar relative">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
      <ul className="items-center hidden gap-16 cursor-pointer sm:flex ">
        {menuEl}
      </ul>

      <div className="flex sm:hidden" onClick={handleMenu}>
        {!toggleMenu && (
          <img src={menu} alt="Menu" className="cursor-pointer" />
        )}
        {toggleMenu && (
          <img src={close} alt="Close Menu" className="cursor-pointer" />
        )}
        {toggleMenu && (
          <div className="flex flex-col text-center gap-3 px-4 py-2 min-h-[140px] rounded-xl sidebar bg-black-gradient absolute right-0 top-20 cursor-pointer">
            {menuEl}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

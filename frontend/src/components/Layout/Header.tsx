import { NavLink } from 'react-router-dom';

interface setActiveColorProps {
  isActive: boolean;
}

const setActiveColor = ({ isActive }: setActiveColorProps): string => {
  return `flex items-center font-semibold ${isActive ? 'text-cyan-300' : ''}`;
};

const Header = () => (
  <header className="flex min-h-20 items-center border-b border-solid border-black justify-between">
    <img src="/logo.jpg" alt="Logo" className="h-16 w-24" />
    <h2 className="font-bold text-xl text-cyan-300 mobile:text-xs">
      COOK | COLLECT | CREATE
    </h2>
    <nav className="flex gap-6 text-lg h-12">
      <NavLink to="/" className={setActiveColor}>
        Home
      </NavLink>
    </nav>
  </header>
);

export default Header;

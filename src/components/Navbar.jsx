import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

const Navbar = ({ isScrolled, activeSection, onNavigate }) => {
  const { theme, setTheme } = useTheme();

  const navItems = ['About', 'Experience', 'Skills', 'Education', 'Contact'];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="nav-brand">Ranjith Neela</div>
      <div className="nav-links">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => onNavigate(item.toLowerCase())}
            className={`nav-link ${activeSection === item.toLowerCase() ? 'active' : ''}`}
            aria-current={activeSection === item.toLowerCase() ? 'page' : undefined}
          >
            {item}
          </button>
        ))}
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="theme-toggle"
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

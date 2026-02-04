import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';

const Navbar = ({ isScrolled, activeSection, onNavigate }) => {
  const { theme, setTheme } = useTheme();

  const navItems = ['About', 'Experience', 'Skills', 'Education', 'Contact'];

  return (
    <motion.nav
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      role="navigation"
      aria-label="Main navigation"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-brand">RN</div>
      <div className="nav-links">
        {navItems.map((item, index) => (
          <motion.button
            key={item}
            onClick={() => onNavigate(item.toLowerCase())}
            className={`nav-link ${activeSection === item.toLowerCase() ? 'active' : ''}`}
            aria-current={activeSection === item.toLowerCase() ? 'page' : undefined}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            {item}
          </motion.button>
        ))}
        <motion.button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="theme-toggle"
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;

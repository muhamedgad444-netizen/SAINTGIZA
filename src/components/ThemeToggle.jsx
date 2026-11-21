import { useState, useEffect } from 'react';
import '../theme-toggle.css';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true); // Default dark

  useEffect(() => {
    // Sync state with existing class set by the inline script in index.html
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <div className="checkbox-wrapper-35">
      <input
        value="1"
        name="switch"
        id="theme-switch"
        type="checkbox"
        className="switch"
        checked={!isDark}
        onChange={toggleTheme}
      />
      <label htmlFor="theme-switch">
        <span className="switch-x-text text-foreground">Mode </span>
        <span className="switch-x-toggletext">
          <span className="switch-x-unchecked text-foreground"><span className="switch-x-hiddenlabel">Unchecked: </span>Dark</span>
          <span className="switch-x-checked text-foreground"><span className="switch-x-hiddenlabel">Checked: </span>Light</span>
        </span>
      </label>
    </div>
  );
}


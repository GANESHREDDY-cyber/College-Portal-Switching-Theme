import ThemeSwitcher from "./ThemeSwitcher";
import logo from "../assets/kl-logo.png";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 shadow-md bg-white dark:bg-gray-900 transition-colors">
      <div className="flex items-center gap-3">
        <img src={logo} alt="KL University Logo" className="h-10" />
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">KL Student Portal</h1>
      </div>
      <ThemeSwitcher />
    </header>
  );
};

export default Header;

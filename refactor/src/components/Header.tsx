import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="app-header">
      <h1>My Todo List</h1>
      <ThemeToggle />
    </header>
  );
};

export default Header;

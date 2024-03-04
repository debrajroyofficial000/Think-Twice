import { Link } from "react-router-dom";

function RootLayout() {
  return (
    <div>
      <h1>Brain Booster</h1>
      <h2>Select Level</h2>
      <nav>
        <Link to={"/easy"}>Easy</Link>
        <Link to={"/medium"}>Medium</Link>
        <Link to={"/hard"}>Hard</Link>
      </nav>
    </div>
  );
}

export default RootLayout;

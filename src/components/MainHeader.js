import { Link } from "react-router-dom"; //Link se page refresh/reload nahi hoga welcome/products pe click karne pe

const MainHeader = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/welcome">Welcome</Link>
          </li>
          <li>
            <Link to="/products">Produts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainHeader;

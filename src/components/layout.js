import * as React from "react";
import { Link } from "gatsby";

import "../index.css";

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <nav>
          <h1>
            <Link to="/">
              <em>HOME RICE</em>
            </Link>
            <ul>
              <li>
                <Link to="/tags">Tags</Link>
              </li>
              <li>
                <Link to="/gear">Gear</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </h1>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <nav>
          <h1>
            <Link to="/">
              <em>HOME RICE</em>
            </Link>
          </h1>
        </nav>
      </footer>
    </div>
  );
};

export default Layout;

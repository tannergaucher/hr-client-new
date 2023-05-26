import * as React from "react";
import { Link } from "gatsby";

import styles from "semantic-styles/index.css";
import "../index.css";

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <nav>
          <h1
            className="center text--xl"
            style={{
              marginBlockStart: `var(--space-md)`,
              marginBlockEnd: `var(--space-lg)`,
              fontWeight: `normal`,
            }}
          >
            <Link to="/">
              <em>HOME RICE</em>
            </Link>
          </h1>
        </nav>
      </header>
      <main className="padding">{children}</main>
    </div>
  );
};

export default Layout;

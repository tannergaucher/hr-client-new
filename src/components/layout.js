import * as React from "react";
import { Link } from "gatsby";

// eslint-disable-next-line
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
              marginBlockStart: `var(--space-lg)`,
              marginBlockEnd: `var(--space-lg)`,
              fontWeight: `normal`,
              textShadow: `.33vw .33vw tomato`,
            }}
          >
            <Link
              to="/"
              style={{
                textDecoration: `none`,
              }}
            >
              <em>HOME RICE</em>
            </Link>
          </h1>
        </nav>
      </header>
      <main className="padding">{children}</main>
      <footer
        style={{
          display: `initial`,
        }}
      >
        <nav>
          <h1
            className="center text--xl"
            style={{
              marginBlockStart: `var(--space-lg)`,
              marginBlockEnd: `var(--space-lg)`,
              fontWeight: `normal`,
              textShadow: `.33vw .33vw tomato`,
            }}
          >
            <Link
              to="/"
              style={{
                textDecoration: `none`,
              }}
            >
              <em>HOME RICE</em>
            </Link>
          </h1>
        </nav>
      </footer>
    </div>
  );
};

export default Layout;

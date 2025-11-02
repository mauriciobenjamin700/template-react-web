import { NavLink, Link } from "react-router";

import styles from "./styles.module.css"

export default function Navbar() {
  return (
    <nav id="Navbar" className={styles.navbar}>
      <h1 className={styles.title}>Navbar</h1>
      <ul className={styles.list}>
        <Link to="/home"><li className={styles.item}>Home</li></Link>
        <Link to="/about"><li className={styles.item}>About</li></Link>
        <Link to="/contact"><li className={styles.item}>Contact</li></Link>
      </ul>
      <NavLink to=""
        className={styles.link}
      >
        <button className={styles.button}>Get Started</button>
      </NavLink>
    </nav>
  )
}
import React from "react";
import Styles from "../styles/Navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import Logo from "../images/logo.jpeg";

function Navbar() {
  return (
    <div className={Styles.nav}>
      <div className={Styles.navbar}>
        <div className={Styles.logo}>
          <div className={Styles.logoname}>
            <Link href="/">
              <a className={Styles.link}>
                <h2> アニメ 先輩</h2>
              </a>
            </Link>
          </div>
        </div>
        <div>
          <div>
            <div>Search</div>
          </div>
        </div>
        <div>
          <ul className={Styles.list}>
            <li className={Styles.section}>
              <Link href="/">
                <a className={Styles.link}>Home</a>
              </Link>
            </li>
            <li className={Styles.section}>
              <Link href="/">
                <a className={Styles.link}>Home</a>
              </Link>
            </li>
            <li className={Styles.section}>
              <Link href="/">
                <a className={Styles.link}>Home</a>
              </Link>
            </li>

            <li className={`${Styles.section} ${Styles.signup}`}>
              <Link href="/">
                <a className="">Sign up</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

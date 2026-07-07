"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <Link href="/" className="header-logo">
        <img src="/images/etra-logo.png" alt="ETRA Automotive" />
      </Link>

      <nav className={open ? "header-nav active" : "header-nav"}>
        <Link href="/explorations">EXPLORATIONS</Link>
        <Link href="/studio">STUDIO</Link>
        <Link href="/expertise">EXPERTISE</Link>
        <Link href="/contact">CONTACT</Link>
      </nav>

    <button
         className={open ? "menu-btn open" : "menu-btn"}
         onClick={() => setOpen(!open)}
         >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}
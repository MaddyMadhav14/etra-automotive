"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <Link href="/" className="header-logo">
        <img src="/images/etra-logo.png" alt="ETRA Automotive" />
      </Link>

    <nav className={open ? "header-nav active" : "header-nav"}>
  <Link className={pathname === "/explorations" ? "nav-active" : ""} href="/explorations">EXPLORATIONS</Link>
  <Link className={pathname === "/studio" ? "nav-active" : ""} href="/studio">STUDIO</Link>
  <Link className={pathname === "/expertise" ? "nav-active" : ""} href="/expertise">EXPERTISE</Link>
  <Link className={pathname === "/contact" ? "nav-active" : ""} href="/contact">CONTACT</Link>
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
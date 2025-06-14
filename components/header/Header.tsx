"use client";

import Link from "next/link";
import Image from "next/image";
import Container from "../Container";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", name: "Home" },
  { href: "/about", name: "About" },
  { href: "/features", name: "Features" },
  { href: "/pricing", name: "Pricing" },
  { href: "/testimonials", name: "Testimonials" },
  { href: "/contact", name: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="z-50 sticky top-0 left-0">
      <div className="py-2 px-4 text-center text-[var(--Black)] text-[20px] leading-[24px] font-bold bg-[var(--Volt-Greem)] flex justify-center items-center">
        <Container>🔥  80% Bonus! Refer a friend and get 20% tokens!</Container>
      </div>

      <div
        className={`${
          scrolled
            ? "bg-[var(--Black)] shadow-[0_8px_24px_rgba(0,0,0,0.3)]"
            : ""
        } py-4 px-4 transition duration-500 ease-in-out`}
      >
        <Container>
          <div className="flex items-center justify-between gap-4">
            <Link href="/">
              <Image src="/logo.svg" alt="Logo" width={145} height={48} />
            </Link>
            <nav>
              <ul className="flex items-center gap-[10px]">
                {navItems.map(({ href, name }) => (
                  <li key={href} className="flex">
                    <Link
                      href={href}
                      className={`${
                        pathname === href ? "border-[0.5px]" : "border-[0]"
                      } border-[var(--Neutral-Light)] text-base font-normal leading-normal px-[19px] py-[7px] rounded-[26px]`}
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <button
              className="rounded-[25px] bg-[var(--Volt-Greem)] text-[var(--Black)] text-[18px] font-medium leading-[17px] px-4 py-3 capitalize cursor-pointer
"
              type="button"
            >
              Connect wallet
            </button>
          </div>
        </Container>
      </div>
    </header>
  );
}

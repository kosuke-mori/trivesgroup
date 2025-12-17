"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { name: "Work", href: "#work" },
  {
    name: "Sectors",
    href: "#sectors",
    children: [
      { name: "Technology", href: "#technology" },
      { name: "Healthcare", href: "#healthcare" },
      { name: "Finance", href: "#finance" },
      { name: "Consumer", href: "#consumer" },
    ],
  },
  { name: "About", href: "#about" },
  { name: "Approach", href: "#approach" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="text-2xl font-bold tracking-[0.3em] text-[#161717]">
              TRIVES
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="text-sm font-medium text-[#45494B] transition-colors hover:text-[#161717]"
                >
                  {item.name}
                </Link>
                {item.children && activeDropdown === item.name && (
                  <div className="absolute left-0 top-full mt-2 w-48 rounded-md bg-white py-2 shadow-lg ring-1 ring-black/5">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-[#45494B] hover:bg-[#DBDAD0]/30 hover:text-[#161717]"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open menu</span>
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-6 bg-[#161717] transition-transform ${
                  mobileMenuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-[#161717] transition-opacity ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-[#161717] transition-transform ${
                  mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#DBDAD0] py-4">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block py-3 text-base font-medium text-[#45494B] hover:text-[#161717]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.children && (
                  <div className="pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block py-2 text-sm text-[#ACACA7] hover:text-[#161717]"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}

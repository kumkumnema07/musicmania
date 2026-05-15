"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBranchesOpen, setIsBranchesOpen] = useState(false);
  const [isMobileBranchesOpen, setIsMobileBranchesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
         
          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8 text-white text-xl">
            <Link href="/home" className="hover:text-primary transition">
              Home
            </Link>

            <Link href="/courses" className="hover:text-primary transition">
              Courses
            </Link>
            <Link href="/blog" className="hover:text-primary transition">
              Blog
            </Link>

            <Link href="/about" className="hover:text-primary transition">
              About
            </Link>

            {/* Branches Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsBranchesOpen(!isBranchesOpen)}
                className="flex items-center gap-1 hover:text-primary transition"
              >
                Branches
                <ChevronDown size={16} />
              </button>

              {isBranchesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-black border border-gray-800 rounded-lg shadow-lg">
                  <Link
                    href="/branches/virar"
                    className="block px-4 py-2 hover:bg-primary hover:text-black transition"
                  >
                    Virar Branch
                  </Link>

                  <Link
                    href="/branches/nalasopara"
                    className="block px-4 py-2 hover:bg-primary hover:text-black transition"
                  >
                    Nalasopara Branch
                  </Link>
                  <Link
                    href="/branches/vasai"
                    className="block px-4 py-2 hover:bg-primary hover:text-black transition"
                  >
                    Vasai Branch
                  </Link>
                </div>
              )}
            </div>

            <Link href="/contact" className="hover:text-primary transition">
              Contact
            </Link>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/login"
              className="px-6 py-2 rounded-full bg-primary text-black font-semibold hover:opacity-90 transition"
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="px-6 py-2 rounded-full bg-primary text-black font-semibold hover:opacity-90 transition"
            >
              Join Now →
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-primary"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-black px-6 pb-6 pt-4 space-y-4 text-white">
            <Link href="/" onClick={() => setIsOpen(false)} className="block">
              Home
            </Link>

            <Link
              href="/courses"
              onClick={() => setIsOpen(false)}
              className="block"
            >
              Courses
            </Link>

            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="block"
            >
              About
            </Link>

             <Link
              href="/Blog"
              onClick={() => setIsOpen(false)}
              className="block"
            >
              Blog
            </Link>

            {/* Mobile Branch Dropdown */}
            <div>
              <button
                onClick={() => setIsMobileBranchesOpen(!isMobileBranchesOpen)}
                className="flex items-center justify-between w-full"
              >
                Branches
                <ChevronDown size={16} />
              </button>

              {isMobileBranchesOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link href="/branches/virar" className="block">
                    virar
                  </Link>
                  <Link href="/branches/nalasopara" className="block">
                   nalasopara
                  </Link>
                  <Link href="/branches/vasai" className="block">
                   vasai
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block"
            >
              Contact
            </Link>

            <div className="flex justify-between mt-4">
              <Link
                href="/login"
                className="bg-primary text-black text-center py-2 rounded-lg font-semibold w-1/2 mr-2"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="bg-primary text-black text-center py-2 rounded-lg font-semibold w-1/2"
              >
                Join Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

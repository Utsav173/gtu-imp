"use client";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Link from "next/link";

const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Download",
    href: "/download",
  },
  {
    label: "Old website",
    children: [
      {
        label: "ADUD paper",
        href: "https://7-it-paper.vercel.app/adud-paper/",
      },
      {
        label: "VAR paper",
        href: "https://7-it-paper.vercel.app/var-paper/",
      },
      {
        label: "ISWA paper",
        href: "https://7-it-paper.vercel.app/iswa-paper/",
      },
      {
        label: "CV paper",
        href: "https://7-it-paper.vercel.app/cv-paper/",
      },
      {
        label: "IOT paper",
        href: "https://7-it-paper.vercel.app/iot-paper/",
      },
    ],
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="bg-gray-100 dark:bg-gray-900 py-2 px-4 border-b dark:border-gray-900">
      <div className="flex justify-between items-center">
        <div>
          <Link
            href="/"
            className="text-xl font-semibold text-gray-900 dark:text-white"
          >
            7th Sem IMP
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          {NAV_ITEMS.map((navItem) =>
            navItem.children ? (
              <DesktopDropdownNavItem key={navItem.label} {...navItem} />
            ) : (
              <DesktopNavItem key={navItem.label} {...navItem} />
            )
          )}
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md bg-gray-200 dark:bg-gray-700"
          >
            {isOpen ? (
              <HiX className="w-6 h-6 text-gray-600 dark:text-white" />
            ) : (
              <HiMenu className="w-6 h-6 text-gray-600 dark:text-white" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="mt-4 md:hidden">
          <MobileNav />
        </div>
      )}
    </nav>
  );
};

const DesktopNavItem = ({ label, href }) => {
  return (
    <Link
      href={href}
      className="p-2 font-medium text-gray-600 dark:text-white hover:text-gray-800 dark:hover:text-white"
    >
      {label}
    </Link>
  );
};

const DesktopDropdownNavItem = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="p-2 font-medium text-gray-600 dark:text-white hover:text-gray-800 dark:hover:text-white"
      >
        {label}{" "}
        {isOpen ? (
          <FiChevronUp className="inline-block w-4 h-4 text-gray-600 dark:text-white" />
        ) : (
          <FiChevronDown className="inline-block w-4 h-4 text-gray-600 dark:text-white" />
        )}
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-3 p-2 rounded-lg shadow-lg bg-gray-200 dark:bg-gray-700">
          {children.map((child) => (
            <DesktopSubNav key={child.label} {...child} />
          ))}
        </div>
      )}
    </div>
  );
};

const DesktopSubNav = ({ label, href }) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="block py-2 px-3 rounded-md hover:bg-pink-50 dark:hover:bg-gray-900 text-white text-justify min-w-max"
    >
      {label}
    </Link>
  );
};

const MobileNav = () => {
  return (
    <>
      {NAV_ITEMS.map((navItem) =>
        navItem.children ? (
          <MobileDropdownNavItem key={navItem.label} {...navItem} />
        ) : (
          <MobileNavItem key={navItem.label} {...navItem} />
        )
      )}
    </>
  );
};

const MobileNavItem = ({ label, href }) => {
  return (
    <Link
      href={href}
      className="block py-2 px-4 font-medium text-gray-600 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800"
    >
      {label}
    </Link>
  );
};

const MobileDropdownNavItem = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <div className="flex items-center justify-between py-3 px-4">
        <button
          onClick={toggleMenu}
          className="flex items-center font-medium text-gray-600 dark:text-white"
        >
          {label}{" "}
          {isOpen ? (
            <FiChevronUp className="w-4 h-4 text-gray-600 dark:text-white" />
          ) : (
            <FiChevronDown className="w-4 h-4 text-gray-600 dark:text-white" />
          )}
        </button>
      </div>
      {isOpen && (
        <div className="pl-4 border-l border-gray-200 dark:border-gray-700">
          {children.map((child) => (
            <Link
              key={child.label}
              href={child.href}
              target="_blank"
              className="block py-2 text-sm text-gray-600 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;

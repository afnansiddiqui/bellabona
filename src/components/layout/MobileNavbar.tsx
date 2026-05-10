"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/FallBack/navLinks";
import { ChevronDownIcon } from "@/components/shared/icons/ChevronDownIcon";

export const MobileNavbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Hamburger Toggle Button */}
      <button
        className="flex flex-col items-center justify-center gap-[4px] rounded p-[6px] md:hidden"
        aria-label="Toggle navigation menu"
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen((prev) => !prev)}
      >
        <span
          className={`block h-[2px] w-5 rounded-sm bg-[#024930] transition-all duration-200 ${mobileOpen ? "translate-y-[6px] rotate-45" : ""}`}
        />
        <span
          className={`block h-[2px] w-5 rounded-sm bg-[#024930] transition-all duration-200 ${mobileOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`block h-[2px] w-5 rounded-sm bg-[#024930] transition-all duration-200 ${mobileOpen ? "translate-y-[-6px] -rotate-45" : ""}`}
        />
      </button>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="absolute left-0 top-full w-full border-t border-gray-100 bg-white px-4 py-4 md:hidden">
          <ul className="flex list-none flex-col gap-4 p-0 m-0">
            {NAV_LINKS.map((link) =>
              link.hasDropdown ? (
                <li key={link.href}>
                  <button className="flex w-full items-center justify-between border-0 bg-transparent p-0 text-[16px] font-medium text-[#024930]">
                    {link.label}
                    <ChevronDownIcon />
                  </button>
                </li>
              ) : (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-[16px] font-medium text-[#024930] no-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ),
            )}
          </ul>

          <div className="mt-4 flex flex-col gap-4 border-t border-gray-100 pt-4">
            <Link
              href="#booking"
              onClick={() => setMobileOpen(false)}
              className="flex w-full items-center justify-center rounded-full bg-[#024930] px-5 py-3 text-[14px] font-medium text-white transition-opacity duration-100 hover:opacity-90"
            >
              Book free testing
            </Link>

            <div className="flex items-center justify-between">
              <Link
                href="#download-menu"
                className="text-[15px] text-[#024930] underline underline-offset-4"
              >
                Download menu
              </Link>
              {/* EN|DU mobile */}
              <div className="flex items-center rounded-md border border-gray-200 bg-gray-100 p-[3px]">
                <button className="rounded border border-gray-100 bg-white px-3 py-1 text-[13px] font-semibold text-gray-900 shadow-sm">
                  EN
                </button>
                <button className="rounded px-3 py-1 text-[13px] font-medium text-gray-500 transition-colors duration-100 hover:text-gray-900">
                  DU
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

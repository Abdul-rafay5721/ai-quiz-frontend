import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { CommandIcon, Facebook, Instagram, LogOut, Youtube } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    < footer className="bg-gray-800 text-white py-8" >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/people/AboutScripturecom/61569304509501/"
              className="text-gray-400 hover:text-white"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://www.youtube.com/channel/UC7qp-03w06uXbi94Gy5Oocg"
              className="text-gray-400 hover:text-white"
              aria-label="Youtube"
            >
              <Youtube className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/faqs"
                className="text-gray-400 hover:text-white transition"
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                href="/privacy-policy"
                className="text-gray-400 hover:text-white transition"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/terms-and-conditions"
                className="text-gray-400 hover:text-white transition"
              >
                Terms and Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Copyright Section */}
        <div>
          <Image
            src="/Images/logo-new.png"
            alt="Bible Scripture Logo"
            width={220}
            height={70}
            className="rounded"
          />
          {/* <p className="text-gray-400">
            About Scripture
          </p> */}
        </div>
      </div>
      {/* Divider */}
      <div className="mt-8 border-t border-gray-700 text-center pt-4">
        <p className="text-sm text-gray-400">
          © 2024 About Scripture Website. All rights reserved.
        </p>
      </div>
    </footer >
  );
}

export function FooterButtons() {
  return (
    <>
      <Link
        href="/logout"
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        <LogOut className="h-[0.8rem] w-4 mr-2 text-primary fill-current" />
        Log out
      </Link>
    </>
  );
}

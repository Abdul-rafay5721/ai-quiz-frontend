
"use client";
import { ModeToggle } from "@/components/theme-toggle";
import {
  CommandIcon,
  Power,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Search from "./search";
import Anchor from "./anchor";
import { SheetLeftbar } from "./leftbar";
import { SheetClose } from "@/components/ui/sheet";
import { useAppDispatch, useAppSelector } from "@/hook/redux.hook";
import Image from "next/image";

const donateLink = process.env.NEXT_PUBLIC_DONATE_LINK;

export const NAVLINKS = [
  // {
  //   title: "Documentation",
  //   href: `/docs${page_routes[0].href}`,
  // },
  {
    title: "Store",
    href: "/store",
  },
  {
    title: "Studies",
    href: "/scripture/what-is-solo-scriptura",
  },
  {
    title: "About Us",
    href: "/about",
  },
  {
    title: "Contact Us",
    href: "/contact",
  },
  {
    title: "Donate",
    href: donateLink || '/',
  },


];

export function Navbar() {
  const token = useAppSelector((state: any) => state.auth.token);
  const user = useAppSelector((state: any) => state.auth.user);
  const totalCartCount = useAppSelector((state: any) => state.cart.totalQuantity);
  return (
    <nav className="w-full border-b h-16 sticky top-0 z-50 bg-background">
      <div className="sm:container mx-auto w-[95vw] h-full flex items-center justify-between md:gap-2">
        <div className="flex items-center gap-5">
          <SheetLeftbar />
          <div className="flex items-center gap-6">
            <div className="sm:flex hidden">
              {/* <Logo /> */}
              <h1 className="font-bold text-3xl" >AI Quiz</h1>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="flex ml-2.5 sm:ml-0 items-center gap-3">
              {!token ?
                <Link href={"/login"} className="text-sm font-medium">Login</Link>
                :
                <>
                  <Link href="/login" className="text-sm font-medium hidden sm:flex"> {user.userName}<Power size={20} className=" ml-1 " /> </Link>
                </>
              }
              <div className="hover:bg-gray-100 p-2 rounded cursor-pointer relative" >
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      {/* <CommandIcon className="w-6 h-6 text-muted-foreground" strokeWidth={2} /> */}
      <Image
        src="/Images/logo-new.png"
        alt="Bible Scripture Logo"
        width={180}
        height={70}
        className="rounded"
      />
      {/* <h2 className="text-md font-bold font-code">About Scripture</h2> */}
    </Link>
  );
}

export function NavMenu({ isSheet = false }) {
  return (
    <>
      {NAVLINKS.map((item) => {
        const Comp = (
          <Anchor
            key={item.title + item.href}
            activeClassName="!text-primary md:font-semibold font-medium"
            absolute
            className="flex items-center gap-1 dark:text-stone-300/85 text-stone-800"
            href={item.href}
          >
            {item.title}
          </Anchor>
        );
        return isSheet ? (
          <SheetClose key={item.title + item.href} asChild>
            {Comp}
          </SheetClose>
        ) : (
          Comp
        );
      })}
    </>
  );
}

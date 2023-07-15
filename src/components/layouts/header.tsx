import Link from "next/link";

import { siteConfig } from "@/config/site";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Icons } from "@/components/icons";
import { MainNav } from "@/components/layouts/Navbar";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./theme-toggle";
// import { MobileNav } from "@/components/layouts/mobile-nav";

interface User {
  firstName: string;
  lastName: string;
  imageUrl: string;
  username: string;
  emailAddresses: string;
}

interface SiteHeaderProps {
  user: User | null;
}

export function SiteHeader({ user }: SiteHeaderProps) {
  const initials = `${user?.firstName?.charAt(0) ?? ""} ${
    user?.lastName?.charAt(0) ?? ""
  }`;
  //   const email =
  //     user?.emailAddresses?.find((e) => e.id === user.primaryEmailAddressId)
  //       ?.emailAddress ?? "";
  const email = null;
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center ">
        <MainNav items={siteConfig.mainNav} />
        {/* <MobileNav
          mainNavItems={siteConfig.mainNav}
          sidebarNavItems={dashboardConfig.sidebarNav}
        /> */}
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <ModeToggle />
            <Link href="/signin">
              <button className="bg-theme p-2 text-white hover:opacity-90 rounded-full px-5 font-semibold text-sm">
                Login
              </button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

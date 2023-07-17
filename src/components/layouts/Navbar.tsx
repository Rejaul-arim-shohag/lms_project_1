"use client";

import * as React from "react";
import Link from "next/link";
import type { MainNavItem } from "@/types/types";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Icons } from "@/components/icons";

interface MainNavProps {
  items?: MainNavItem[];
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="hidden gap-10  lg:flex w-full z-50">
      <Link
        aria-label="Home"
        href="/"
        className="hidden items-center space-x-2 lg:flex justify-start"
      >
        <Icons.setting className="w-8 h-8" aria-hidden="true" />
        <span className="hidden font-bold lg:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <NavigationMenu className="items-center  w-full ">
        <NavigationMenuList>
          {items
            ? items.map((item) =>
                item?.items ? (
                  <NavigationMenuItem key={item.title}>
                    {item.items.length > 0 ? (
                      <>
                        <NavigationMenuTrigger className="h-auto capitalize">
                          {item.title}
                        </NavigationMenuTrigger>
                      </>
                    ) : (
                      <Link href={`${item.href}`} legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          {item.title}
                        </NavigationMenuLink>
                      </Link>
                    )}

                    {item.items.length > 0 ? (
                      <>
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {item.items.length > 0
                              ? item.items.map((item) => (
                                  <ListItem
                                    key={item.title}
                                    title={item.title}
                                    href={item.href}
                                  >
                                    {item.description}
                                  </ListItem>
                                ))
                              : null}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : null}
                  </NavigationMenuItem>
                ) : null
              )
            : null}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={String(href)}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline border transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent  focus:text-accent-foreground ",
            className
          )}
          {...props}
        >
          <div className="flex items-start justify-start ">
            <div className=" mx-2 p-2 rounded-md bg-background">
              <Icons.check />
            </div>

            <div>
              <div className="text-sm font-medium leading-none">{title}</div>
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                {children}
              </p>
            </div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

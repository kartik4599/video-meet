"use client";
import Image from "next/image";
import React from "react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { SideBarMenu } from "@/constants";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

const MobileNav = () => {
  const pathName = usePathname();

  return (
    <div className="sm:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Image src={"/icons/hamburger.svg"} alt="" height={35} width={35} />
        </SheetTrigger>
        <SheetContent side={"left"} className="border-none bg-dark-1">
          <SheetClose asChild>
            <Link href={"/"} className="flex items-center gap-1">
              <Image
                src={"/images/logo.png"}
                alt="logo"
                height={60}
                width={60}
              />
              <p className="text-[26px] font-extrabold text-white max-sm:hidden">
                Meet-up
              </p>
            </Link>
          </SheetClose>
          <div className="flex flex-1 flex-col justify-center gap-6 text-white mt-8">
            {SideBarMenu.map(({ label, route, imgUrl }) => {
              const isActive = pathName === route;
              return (
                <SheetClose asChild key={label}>
                  <Link
                    href={route}
                    className={cn(
                      "flex gap-4 items-center p-4 rounded-lg justify-start",
                      isActive && "bg-blue-1"
                    )}
                  >
                    <Image src={imgUrl} alt={label} width={24} height={24} />
                    <p className="text-lg font-semibold">{label}</p>
                  </Link>
                </SheetClose>
              );
            })}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;

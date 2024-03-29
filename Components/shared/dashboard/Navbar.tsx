"use client"

import Image from "next/image"
import React from "react"

import avatar from "@/public/assets/images/default-avatar-male.png"
import Link from "next/link"
import Theme from "./Theme"
import MobileNav from "./MobileNav"
import { IconBell } from "@/public/assets/svgs"

const Navbar = () => {
  return (
    <>
      <nav className="light-border background-lightbox_darkbox fixed top-0 z-10 w-full border-b">
        <div className="flex px-8 py-3">
          <div className="flex flex-1 items-center justify-end gap-6">
            <IconBell className="invert dark:invert-0"/>
            <Theme />
            <div className="flex gap-1">
              <Link href="/profile">
                <Image
                  src={avatar}
                  alt="Avatar"
                  width={50}
                  height={50}
                  className="h-[50px] w-[50px] rounded-full bg-[#1e1b4b] object-contain"
                />
              </Link>
            </div>
            <MobileNav />
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar

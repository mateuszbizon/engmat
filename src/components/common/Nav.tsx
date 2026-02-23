"use client"

import React from 'react'
import Container from '../ui/container'
import Link from 'next/link'
import { Button } from '../ui/button'
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '../ui/navigation-menu'
import NavCard from '../cards/NavCard'
import { NAV_ITEMS } from '@/constants/navItems'
import NavMobile from './NavMobile'
import Image from 'next/image'
import useScroll from '@/lib/hooks/useScroll'
import { PHONE_NUMBER } from '@/constants'
import { LOGO } from '@/constants/images'

function Nav() {
    const { isScrolled } = useScroll({ scrollAmount: 50 })

  return (
    <header className={`h-nav-height fixed top-0 w-full ${isScrolled ? "bg-background-light" : "bg-transparent"} z-40 transition duration-300`}>
        <Container>
            <div className='flex justify-between items-center h-full'>
                <div>
                    <Link href={"/"} title='Strona główna'>
                        <figure className='relative size-15'>
                            <Image src={LOGO.src} alt={LOGO.alt} fill />
                        </figure>
                    </Link>
                </div>
                <nav className='hidden lg:flex'>
                    <NavigationMenu viewport={false}>
                        <NavigationMenuList className='flex gap-0'>
                            {NAV_ITEMS.map(item => (
                                <NavigationMenuItem key={item.label}>
                                    <NavCard item={item} isScrolled={isScrolled} />
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </nav>
                <div className='hidden lg:block'>
                    <Button asChild>
                        <Link href={`/kontakt`}>
                            Zapisuję się
                        </Link>
                    </Button>
                </div>
                <div className='lg:hidden'>
                    <NavMobile />
                </div>
            </div>
        </Container>
    </header>
  )
}

export default Nav
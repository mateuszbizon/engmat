import HeroSubPage from '@/components/sections/HeroSubPage'
import React from 'react'
import { ENGMAT_OWNER } from '@/constants/images'
import Image from 'next/image'
import Container from '@/components/ui/container'

function OfferMathPage() {
  return (
    <>
        <HeroSubPage title='Korepetycje z matematyki' />
        <section className='py-section-padding'>
            <Container>
                <div className='grid lg:grid-cols-2 gap-10 relative'>
                    <div>
                        <figure className='relative max-w-150 aspect-square rounded-3xl mx-auto overflow-hidden lg:sticky lg:top-nav-height'>
                            <Image src={ENGMAT_OWNER.src} alt={ENGMAT_OWNER.alt} fill className='' />
                        </figure>
                    </div>
                    <div className='lg:py-12 space-y-7 text-center lg:text-left'>
                        <h2 className='heading2'>Korepetycje z matematyki</h2>
                        <div className='font-medium space-y-7 little-bigger-text'>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam earum, iusto quos iste dolores molestiae eum possimus debitis explicabo rerum libero ullam sit aliquid, at sequi. Vitae quae necessitatibus impedit.
                            </p>
                            <div className='space-y-2'>
                                <p className='bigger-text font-semibold'>Dla kogo?</p>
                                <ul className='space-y-1'>
                                    <li>Uczniowie szkoły podstawowej</li>
                                    <li>Uczniowie liceum</li>
                                </ul>
                            </div>
                            <div className='space-y-2'>
                                <p className='bigger-text font-semibold'>Forma zajęć</p>
                                <ul className='space-y-1'>
                                    <li>Zajęcia indywidualne</li>
                                    <li>Zajęcia grupowe</li>
                                    <li><strong>Możliwość zajęć online: tak</strong></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    </>
  )
}

export default OfferMathPage
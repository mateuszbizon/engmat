import React from 'react'
import Container from '../ui/container'
import Link from 'next/link'
import { Button } from '../ui/button'
import Image from 'next/image'
import { ECJIP, OFFICE_BG, LOGO_ORLY } from '@/constants/images'
import Shadow from '../ui/shadow'
import AnimatedContent from '../AnimatedContent'

function Hero() {
  return (
    <section style={{ backgroundImage: `url(${OFFICE_BG.src})` }} className='relative py-section-padding lg:h-screen lg:py-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed text-white'>
        <Shadow className='bg-transparent' />
        <Container>
            <div className='flex flex-col justify-center text-center h-full space-y-8 lg:text-left lg:max-w-200'>
                <AnimatedContent distance={50}>
                    <h1 className='heading1'>Centrum Edukacyjne <br /> <span className='bg-primary p-2 rounded-lg text-foreground block w-fit mt-2 mx-auto lg:mx-0'>EngMat</span></h1>
                </AnimatedContent>
                <AnimatedContent delay={0.5} distance={50}>
                    <p className='bigger-text'>
                        Korepetycje i kursy w Zgorzelcu dla dzieci, młodzieży i dorosłych. Zajęcia stacjonarne oraz online, indywidualne i grupowe. Skuteczne wsparcie w nauce, zajęcia kreatywne oraz rozwój kompetencji przyszłości – w tym nauka układania kostki Rubika.
                    </p>
                </AnimatedContent>
                <AnimatedContent delay={1} distance={50}>
                    <div className='flex justify-center lg:justify-start flex-wrap gap-5'>
                        <Button className='text-foreground' asChild>
                            <Link href="/oferta">
                                Sprawdź ofertę
                            </Link>
                        </Button>
                        <Button variant={"outline"} asChild>
                            <Link href="/opinie">
                                Opinie
                            </Link>
                        </Button>
                    </div>
                </AnimatedContent>
                <div className='flex flex-col lg:flex-row items-center gap-8'>
                    {/* <em className='bigger-text'>
                        Posiadamy certyfikat jakości ISO 9001:2015
                    </em> */}
                    <figure className='relative size-30'>
                        <Image src={ECJIP.src} alt={ECJIP.alt} fill />
                    </figure>
                    <figure className='relative size-30'>
                        <Image src={LOGO_ORLY.src} alt={LOGO_ORLY.alt} fill />
                    </figure>
                    <figure className='relative w-75 h-18.75'>
                        <a href="https://www.orlyedukacji.pl/profile-462351-centrum-edukacyjne-engmat" target='_blank'>
                            <Image src="https://www.orlyedukacji.pl/images/medals/462351/laureat300_gold_2_pl.png" alt="Centrum Edukacyjne EngMat - Zgorzelec" title="Centrum Edukacyjne EngMat - Zgorzelec" fill />
                        </a>
                    </figure>
                    {/* <a href="https://www.orlyedukacji.pl/profile-462351-centrum-edukacyjne-engmat" target="_blank"><img src="https://www.orlyedukacji.pl/images/medals/462351/laureat300_gold_2_pl.png" style="width:300px; height:75px; border:0;" alt="Centrum Edukacyjne EngMat - Zgorzelec" title="Centrum Edukacyjne EngMat - Zgorzelec" /></a> */}
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Hero
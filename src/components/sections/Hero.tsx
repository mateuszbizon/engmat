import React from 'react'
import Container from '../ui/container'
import Link from 'next/link'
import { Button } from '../ui/button'
import Image from 'next/image'
import { ECJIP, OFFICE_BG } from '@/constants/images'
import Shadow from '../ui/shadow'

function Hero() {
  return (
    <header style={{ backgroundImage: `url(${OFFICE_BG.src})` }} className='relative py-section-padding lg:h-screen lg:py-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed text-white'>
        <Shadow className='bg-transparent' />
        <Container>
            <div className='flex flex-col justify-center text-center h-full space-y-8 lg:text-left lg:max-w-200'>
                <h1 className='heading1'>Centrum Edukacyjne <br /> <span className='bg-primary p-2 rounded-lg text-foreground block w-fit mt-2 mx-auto lg:mx-0'>EngMat</span></h1>
                <p className='bigger-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit totam obcaecati repellat esse cum qui. Recusandae debitis officia tenetur praesentium molestias veniam dolore, quo provident impedit repellendus amet quia eligendi!</p>
                <div className='flex justify-center lg:justify-start flex-wrap gap-5'>
                    <Button asChild>
                        <Link href="/">
                            Sprawdź ofertę
                        </Link>
                    </Button>
                    <Button variant={"outline"} asChild>
                        <Link href="/">
                            Opinie
                        </Link>
                    </Button>
                </div>
                <div className='flex flex-col lg:flex-row items-center lg:items-start gap-5'>
                    <em className='bigger-text'>
                        Posiadamy certyfikat jakości ISO 9001:2015
                    </em>
                    <figure className='relative size-30'>
                        <Image src={ECJIP.src} alt={ECJIP.alt} fill />
                    </figure>
                </div>
            </div>
        </Container>
    </header>
  )
}

export default Hero
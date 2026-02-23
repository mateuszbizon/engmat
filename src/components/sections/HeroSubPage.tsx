import React from 'react'
import Container from '../ui/container'
import { OFFICE_BG } from '@/constants/images'

type HeroSubPageProps = {
    title?: string
}

function HeroSubPage({ title = "O nas" }: HeroSubPageProps) {
  return (
    <section style={{ backgroundImage: `url(${OFFICE_BG.src})` }} className='py-section-padding lg:py-[calc(theme(padding.section-padding)*2)] relative z-0 bg-cover bg-top bg-no-repeat bg-fixed text-white'>
        <Container>
            <h1 className='heading1 text-center'>{title}</h1>
        </Container>
    </section>
  )
}

export default HeroSubPage
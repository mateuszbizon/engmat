import HeroSubPage from '@/components/sections/HeroSubPage'
import NumbersSection from '@/components/sections/NumbersSection'
import OfferSection from '@/components/sections/OfferSection'
import WhyUsSection from '@/components/sections/WhyUsSection'
import React from 'react'

function OfferPage() {
  return (
    <>
        <HeroSubPage title='Oferta' />
        <OfferSection />
        <NumbersSection />
        <WhyUsSection />
    </>
  )
}

export default OfferPage
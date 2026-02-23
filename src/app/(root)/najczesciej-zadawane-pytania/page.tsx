import FaqSection from '@/components/sections/FaqSection'
import HeroSubPage from '@/components/sections/HeroSubPage'
import React from 'react'

function FaqPage() {
  return (
    <>
        <HeroSubPage title='Najczęściej zadawane pytania - FAQ' />
        <FaqSection />
    </>
  )
}

export default FaqPage
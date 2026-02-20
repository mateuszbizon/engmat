import React from 'react'
import Container from '../ui/container'
import { MessageCircleCheck, NotebookPen, ShieldCheck, Users } from 'lucide-react'

function WhyUsSection() {
  return (
    <section className='py-section-padding'>
        <Container>
            <h2 className='heading2 mb-20 md:mb-25 text-center'>Dlaczego warto wybrać nas?</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-15'>
                <div className='p-5 rounded-2xl bg-background border-2 relative'>
                    <div className='rounded-full p-5 bg-background border-2 absolute -top-10 left-1/2 -translate-x-1/2'>
                        <NotebookPen className='size-10' />
                    </div>
                    <p className='little-bigger-text mt-8 text-center font-medium'>
                        Struktura, nie chaos. Każdy uczeń pracuje według planu
                    </p>
                </div>
                <div className='p-5 rounded-2xl bg-background border-2 relative'>
                    <div className='rounded-full p-5 bg-background border-2 absolute -top-10 left-1/2 -translate-x-1/2'>
                        <Users className='size-10' />
                    </div>
                    <p className='little-bigger-text mt-8 text-center font-medium'>
                        Zespół, nie jedna osoba. EngMat to doświadczona kadra i specjaliści.
                    </p>
                </div>
                <div className='p-5 rounded-2xl bg-background border-2 relative'>
                    <div className='rounded-full p-5 bg-background border-2 absolute -top-10 left-1/2 -translate-x-1/2'>
                        <ShieldCheck className='size-10' />
                    </div>
                    <p className='little-bigger-text mt-8 text-center font-medium'>
                        Jakość potwierdzona standardem. Pracujemy w oparciu o system zarządzania jakością ISO 9001:2015
                    </p>
                </div>
                <div className='p-5 rounded-2xl bg-background border-2 relative'>
                    <div className='rounded-full p-5 bg-background border-2 absolute -top-10 left-1/2 -translate-x-1/2'>
                        <MessageCircleCheck className='size-10' />
                    </div>
                    <p className='little-bigger-text mt-8 text-center font-medium'>
                        Lokalnie i nowocześnie. Zgorzelec + zajęcia online.
                    </p>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default WhyUsSection
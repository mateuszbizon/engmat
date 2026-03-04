import React from 'react'
import Container from '../ui/container'
import { MessageCircleCheck, NotebookPen, ShieldCheck, Users } from 'lucide-react'
import AnimatedContent from '../AnimatedContent'

function WhyUsSection() {
  return (
    <section className='py-section-padding'>
        <Container>
            <AnimatedContent>
                <h2 className='heading2 mb-20 md:mb-25 text-center'>Dlaczego warto wybrać nas?</h2>
            </AnimatedContent>
            {/* <SplitText text='Dlaczego warto wybrać nas?' tag='h2' className='heading2 mb-20 md:mb-25 text-center block' /> */}
            <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-15'>
                <AnimatedContent distance={30}>
                    <div className='why-us-card'>
                        <div className='rounded-full p-5 bg-background border-2 absolute -top-10 left-1/2 -translate-x-1/2'>
                            <NotebookPen className='size-10' />
                        </div>
                        <p className='little-bigger-text mt-8 text-center font-medium'>
                            Struktura, nie chaos. Każdy uczeń pracuje według planu
                        </p>
                    </div>
                </AnimatedContent>
                <AnimatedContent distance={30} delay={0.5}>
                    <div className='why-us-card'>
                        <div className='rounded-full p-5 bg-background border-2 absolute -top-10 left-1/2 -translate-x-1/2'>
                            <Users className='size-10' />
                        </div>
                        <p className='little-bigger-text mt-8 text-center font-medium'>
                            Zespół, nie jedna osoba. EngMat to doświadczona kadra i specjaliści.
                        </p>
                    </div>
                </AnimatedContent>
                <AnimatedContent distance={30} delay={1}>
                    <div className='why-us-card'>
                        <div className='rounded-full p-5 bg-background border-2 absolute -top-10 left-1/2 -translate-x-1/2'>
                            <ShieldCheck className='size-10' />
                        </div>
                        <p className='little-bigger-text mt-8 text-center font-medium'>
                            Jakość potwierdzona standardem. Pracujemy w oparciu o system zarządzania jakością ISO 9001:2015
                        </p>
                    </div>
                </AnimatedContent>
                <AnimatedContent distance={30} delay={1.5}>
                    <div className='why-us-card'>
                        <div className='rounded-full p-5 bg-background border-2 absolute -top-10 left-1/2 -translate-x-1/2'>
                            <MessageCircleCheck className='size-10' />
                        </div>
                        <p className='little-bigger-text mt-8 text-center font-medium'>
                            Lokalnie i nowocześnie. Zgorzelec + zajęcia online.
                        </p>
                    </div>
                </AnimatedContent>
            </div>
        </Container>
    </section>
  )
}

export default WhyUsSection
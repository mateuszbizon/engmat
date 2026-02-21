import React from 'react'
import Container from '../ui/container'
import CountUp from '../CountUp'
import Silk from '../Silk'

function NumbersSection() {
  return (
    <section className='py-section-padding text-white text-center relative z-0'>
        <div className='absolute inset-0 -z-10'>
            <Silk color='#EEAA2D' />
        </div>
        <Container>
            <div className='grid lg:grid-cols-3 gap-x-5 gap-y-10'>
                <div className='flex flex-col gap-5'>
                    <span className='heading3'>+<CountUp from={0} to={200} delay={0.25} /></span>
                    <span className='bigger-text'>zadowolonych klientów</span>
                </div>
                <div className='flex flex-col gap-5'>
                    <span className='heading3'>+<CountUp from={0} to={500} delay={0.25} /></span>
                    <span className='bigger-text'>zadowolonych klientów</span>
                </div>
                <div className='flex flex-col gap-5'>
                    <span className='heading3'>+<CountUp from={0} to={351} delay={0.25} /></span>
                    <span className='bigger-text'>zadowolonych klientów</span>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default NumbersSection
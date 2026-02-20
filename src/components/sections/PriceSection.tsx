import React from 'react'
import Container from '../ui/container'

function PriceSection() {
  return (
    <section className='py-section-padding bg-background-light2'>
        <Container>
            <h2 className='heading2 heading-margin-bottom text-center'>Przyzowite ceny</h2>
            <div className='grid md:grid-cols-2 gap-x-5 gap-y-10 text-center'>
                <div className='p-10 rounded-3xl bg-border2 space-y-5 shadow-2xl'>
                    <p className='bigger-text'>Grupowe</p>
                    <p className='heading3'>od 60 zł</p>
                    <ul className='space-y-3'>
                        <li className='little-bigger-text'>Dlaczego warto</li>
                        <li className='little-bigger-text'>Dlaczego warto</li>
                        <li className='little-bigger-text'>Dlaczego warto</li>
                    </ul>
                </div>
                <div className='p-10 rounded-3xl bg-border2 space-y-5 shadow-2xl'>
                    <p className='bigger-text'>Indywidualne</p>
                    <p className='heading3'>od 100 zł</p>
                    <ul className='space-y-3'>
                        <li className='little-bigger-text'>Dlaczego warto</li>
                        <li className='little-bigger-text'>Dlaczego warto</li>
                        <li className='little-bigger-text'>Dlaczego warto</li>
                    </ul>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default PriceSection
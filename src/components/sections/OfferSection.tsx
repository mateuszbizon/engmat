import React from 'react'
import Container from '../ui/container'
import { Button } from '../ui/button'
import Link from 'next/link'
import { OFFERS } from '@/constants/offers'

function OfferSection() {
  return (
    <section className='py-section-padding'>
        <Container>
            <div className='heading-margin-bottom grid lg:grid-cols-2 gap-10'>
                <h2 className='heading2 text-center lg:text-left'>Korepetycje i wiedza na najwyższym poziomie</h2>
                <p className='little-bigger-text text-center lg:text-right'>
                    EngMat powstało z potrzeby stworzenia miejsca, w którym edukacja ma strukturę, kierunek i realny efekt. To nie są pojedyncze lekcje. To system pracy.
                </p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10'>
                {OFFERS.map(item => (
                    <div key={item.title} className='p-10 rounded-3xl space-y-5 bg-background shadow-xl hover:shadow-2xl hover:-translate-y-3 transition duration-300 flex flex-col'>
                        <h3 className='heading3'>{item.title}</h3>
                        <ul className='little-bigger-text font-medium space-y-3'>
                            {item.list.map(listItem => (
                                <li key={listItem}>{listItem}</li>
                            ))}
                        </ul>
                        <div className='mt-auto'>
                            <Button variant={"link"} size={"link"} asChild>
                                <Link href={`${item.link}`}>
                                    Czytaj więcej {">>"}
                                </Link>
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    </section>
  )
}

export default OfferSection
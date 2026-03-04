import React from 'react'
import Container from '../ui/container'
import { Button } from '../ui/button'
import Link from 'next/link'
import { OFFERS } from '@/constants/offers'
import AnimatedContent from '../AnimatedContent'

function OfferSection() {
  return (
    <section className='py-section-padding overflow-x-clip'>
        <Container>
            <div className='heading-margin-bottom grid lg:grid-cols-2 gap-10'>
                <AnimatedContent direction="horizontal" reverse={true}>
                    <h2 className='heading2 text-center lg:text-left'>Korepetycje i wiedza na najwyższym poziomie</h2>
                </AnimatedContent>
                {/* <SplitText text='Korepetycje i wiedza na najwyższym poziomie' tag='h2' className='heading2 text-center lg:text-left' duration={0.5} /> */}
                <AnimatedContent delay={0.25} direction="horizontal">
                    <p className='little-bigger-text text-center lg:text-right'>
                        EngMat powstało z potrzeby stworzenia miejsca, w którym edukacja ma strukturę, kierunek i realny efekt. To nie są pojedyncze lekcje. To system pracy.
                    </p>
                </AnimatedContent>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10'>
                {OFFERS.map((item, index) => {
                    const delays = [0, 0.5, 1];
                    const delay = delays[index % delays.length];

                    return (
                        <AnimatedContent key={item.title} distance={30} delay={delay}>
                            <div className='p-10 rounded-3xl space-y-5 bg-background shadow-xl hover:shadow-2xl hover:-translate-y-3 transition duration-300 flex flex-col h-full'>
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
                        </AnimatedContent>
                    );
                })}
            </div>
        </Container>
    </section>
  )
}

export default OfferSection
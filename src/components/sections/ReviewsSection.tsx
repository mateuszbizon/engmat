"use client"

import React from 'react'
import Container from '../ui/container'
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from '../ui/carousel'
import { Button } from '../ui/button'
import Link from 'next/link'
import { REVIEWS_LIST } from '@/constants/reviews'
import ReviewCard from '../cards/ReviewCard'

function ReviewsSection() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

  return (
    <section className='bg-background-light2 py-section-padding'>
        <Container>
            <h2 className='heading2 text-center heading-margin-bottom'>Co mowią o nas rodzice i kursanci</h2>
            <Carousel
                opts={{
                    loop: true
                }}
                plugins={[plugin.current]}
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
                className='lg:px-10 mb-10'
            >
                <CarouselContent>
                    {REVIEWS_LIST.map(item => (
                        <ReviewCard key={item.content} review={item} />
                    ))}
                </CarouselContent>
                <CarouselPrevious variant={"default"} className='hidden lg:inline-flex' />
                <CarouselNext variant={"default"} className='hidden lg:inline-flex' />
            </Carousel>
            <div className='flex justify-center'>
                <Button size={"lg"} asChild>
                    <Link href={"https://www.facebook.com/profile.php?id=61559289707603&sk=reviews"} target='_blank'>
                        Wszystkie opinie
                    </Link>
                </Button>
            </div>
        </Container>
    </section>
  )
}

export default ReviewsSection
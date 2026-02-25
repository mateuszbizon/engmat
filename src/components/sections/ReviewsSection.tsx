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
            <div className='flex justify-center flex-wrap gap-5'>
                <Button size={"lg"} asChild>
                    <Link href={"https://www.facebook.com/profile.php?id=61559289707603&sk=reviews"} target='_blank'>
                        Opinie z facebooka
                    </Link>
                </Button>
                <Button size={"lg"} asChild>
                    <Link href={"https://www.google.com/search?client=firefox-b-d&hs=EYkU&sca_esv=aa86132b60f0534c&sxsrf=ANbL-n79Sihn-SGozXpkhk9twaljTVId5w:1772019006589&q=Centrum+Edukacyjne+EngMat&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOf0OGC7cfMx1kl8VdO9ysJ3T-iNVzrSKdw5cN1jX5RmkRLQYk0j2vu_awBr7CpeiHSkojgE%3D&uds=ALYpb_kgbr9WnQ7cqOGSWrVQwMIXLJVrIGtSNmHiKJ7T3ZkrV7MDvUJeCQM-deDsr8-SrcJeeem_OpaN92ZAnw7e0n_ZA7IRZVu7YlCipyB8HtNRb6nw_h77EZ_DwN4x9G5A7zIgPwaA&sa=X&ved=2ahUKEwiw8LCbxfSSAxWSIRAIHXR-AioQ3PALegQIGxAE&biw=1536&bih=739&dpr=1.25"} target='_blank'>
                        Opinie z google
                    </Link>
                </Button>
            </div>
        </Container>
    </section>
  )
}

export default ReviewsSection
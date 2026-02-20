import React from 'react'
import { CarouselItem } from '../ui/carousel'
import { Quote } from 'lucide-react'
import { Review } from '@/types'

type ReviewCardProps = {
    review: Review
}

function ReviewCard({ review }: ReviewCardProps) {
  return (
    <CarouselItem>
        <div className='flex flex-col items-center text-center gap-8'>
            <Quote className='size-8 rotate-12' />
            <p className='bigger-text'>
                {review.content}
            </p>
            <span className='bigger-text font-normal'>
                {review.name}
            </span>
        </div>
    </CarouselItem>
  )
}

export default ReviewCard
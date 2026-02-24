import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { EKIPA, OFFICE_BG } from '@/constants/images'

function CtaSection() {
  return (
    <section>
        <div className='grid lg:grid-cols-2'>
            <div style={{ backgroundImage: `url(${OFFICE_BG.src})` }} className='p-10 flex flex-col justify-end space-y-8 z-0 bg-cover bg-center bg-no-repeat text-white lg:min-h-150'>
                <h2 className='heading2'>Dołącz do EngMat</h2>
                <p className='little-bigger-text'>
                    Gotowi na rozpoczęcie przygody w EngMat? Zadzwoń lub napisz. Ustalimy najlepszą formę zajęć.
                </p>
                <div>
                    <Button className='text-foreground' asChild>
                        <Link href={"/kontakt"}>
                            Zapisz się na zajęcia
                        </Link>
                    </Button>
                </div>
            </div>
            <figure className='relative bg-black w-full aspect-video lg:aspect-auto'>
                <Image src={EKIPA.src} alt={EKIPA.alt} fill className='object-contain' />
            </figure>
        </div>
    </section>
  )
}

export default CtaSection
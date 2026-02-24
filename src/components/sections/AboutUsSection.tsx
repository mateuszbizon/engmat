import React from 'react'
import Container from '../ui/container'
import Image from 'next/image'
import { ENGMAT_OWNER } from '@/constants/images'

function AboutUsSection() {
  return (
    <section className='py-section-padding'>
        <Container>
            <div className='grid lg:grid-cols-2 gap-10 relative'>
                <div>
                    <figure className='relative max-w-150 lg:max-w-none aspect-square rounded-3xl mx-auto overflow-hidden lg:sticky lg:top-nav-height'>
                        <Image src={ENGMAT_OWNER.src} alt={ENGMAT_OWNER.alt} fill className='' />
                    </figure>
                </div>
                <div className='lg:py-12 space-y-7 text-center lg:text-left'>
                    <h2 className='heading2'>Poznajmy się</h2>
                    <div className='font-medium space-y-7 little-bigger-text'>
                        <p>
                            Cześć! Jestem Magda – właścicielka EngMat i kobieta, która twierdzi, że kawa to jej grupa krwi ☕ EngMat to moje edukacyjne „dziecko”, które buduję od lat z sercem, pasją i wiarą, że dobra relacja z uczniem to klucz do sukcesu. To przestrzeń, w której matematyka spotyka się z językiem angielskim, a edukacja opiera się na relacji, zaufaniu i zrozumieniu.
                        </p>
                        <p>
                            Matematyka to moja miłość. Angielski – mój kochanek (tak żartuję, ale coś w tym jest 😉). Uczę wszystkich – od uczniów szkoły podstawowej po dorosłych, którzy chcą „dogadać się z życiem” po angielsku lub ogarnąć liczby.
                        </p>
                        <p>
                            W 2023 roku zostałam Nauczycielką Roku, ale moim największym sukcesem są te momenty, słyszę: „Dzięki Pani uwierzyłem, że potrafię!”, albo po prostu: „Dałam radę.” Prywatnie? Jestem mamą dorosłego już Huberta, posiadaczką trzech futrzaków 🐈‍🐈🐈 Uwielbiam dobrą książkę, projektowanie wnętrz i wieczory z filmem, który pozwala złapać oddech. I cały czas uczę się czegoś nowego – od uczniów, od życia, od siebie.
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default AboutUsSection
import React from 'react'
import Container from '../ui/container'
import { Button } from '../ui/button'
import Link from 'next/link'

function OfferSection() {
  return (
    <section className='py-section-padding'>
        <Container>
            <div className='heading-margin-bottom grid lg:grid-cols-2 gap-10'>
                <h2 className='heading2 text-center lg:text-left'>Korepetycje i wiedza na najwyższym poziomie</h2>
                <p className='little-bigger-text text-center lg:text-right'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita suscipit sit nemo voluptatem quisquam, atque modi consequatur.
                </p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10'>
                <div className='p-10 rounded-3xl space-y-5 bg-background shadow-xl hover:shadow-2xl hover:-translate-y-3 transition duration-300'>
                    <h3 className='heading3'>Matematyka</h3>
                    <p className='little-bigger-text'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, voluptatem? Assumenda accusamus debitis optio blanditiis inventore, est impedit sequi asperiores at aliquam, modi nobis dolorum quia doloremque fugiat cumque quibusdam!
                    </p>
                    <div>
                        <Button variant={"link"} size={"link"} asChild>
                            <Link href={"/"}>
                                Czytaj więcej {">>"}
                            </Link>
                        </Button>
                    </div>
                </div>
                <div className='p-10 rounded-3xl space-y-5 bg-background-dark shadow-xl hover:shadow-2xl hover:-translate-y-3 transition duration-300'>
                    <h3 className='heading3'>Matematyka</h3>
                    <p className='little-bigger-text'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, voluptatem? Assumenda accusamus debitis optio blanditiis inventore, est impedit sequi asperiores at aliquam, modi nobis dolorum quia doloremque fugiat cumque quibusdam!
                    </p>
                    <div>
                        <Button variant={"link"} size={"link"} asChild>
                            <Link href={"/"}>
                                Czytaj więcej {">>"}
                            </Link>
                        </Button>
                    </div>
                </div>
                <div className='p-10 rounded-3xl space-y-5 bg-background shadow-xl hover:shadow-2xl hover:-translate-y-3 transition duration-300'>
                    <h3 className='heading3'>Matematyka</h3>
                    <p className='little-bigger-text'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, voluptatem? Assumenda accusamus debitis optio blanditiis inventore, est impedit sequi asperiores at aliquam, modi nobis dolorum quia doloremque fugiat cumque quibusdam!
                    </p>
                    <div>
                        <Button variant={"link"} size={"link"} asChild>
                            <Link href={"/"}>
                                Czytaj więcej {">>"}
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default OfferSection
import React from 'react'
import Container from '../ui/container'
import { MapPin, Phone } from 'lucide-react'
import { PHONE_NUMBER } from '@/constants'

function MapSection() {
  return (
    <section className='pt-section-padding'>
        <Container>
            <h2 className='heading2 heading-margin-bottom text-center'>Skontaktuj się z nami</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 mb-10'>
                <div className='bg-background rounded-3xl p-10 flex flex-col items-center text-center gap-8'>
                    <MapPin className='size-10' />
                    <p className='little-bigger-text font-medium'>
                        Bohaterów II Armii Wojska Polskiego 12, 59-900 Zgorzelec (Gerda), gabinety 114 i 107
                    </p>
                </div>
                <div className='bg-background rounded-3xl p-10 flex flex-col items-center text-center gap-8'>
                    <Phone className='size-10' />
                    <p className='bigger-text font-bold'>
                        {PHONE_NUMBER}
                    </p>
                </div>
                <div className='bg-background rounded-3xl p-10 flex flex-col items-center text-center gap-8'>
                    <MapPin className='size-10' />
                    <p className='little-bigger-text font-medium'>
                        Lubańska 9a, 59-900 Zgorzelec, gabinet 2.18
                    </p>
                </div>
            </div>
        </Container>
        {/* <GoogleMap lat={51.1586499032813} lng={15.016006810317492} className='max-h-150' /> */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2502.304495953451!2d15.012734515445446!3d51.15817552311078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8634552ff1684f59%3A0x89ffdefa6ae8ec56!2sCentrum%20Edukacyjne%20EngMat!5e0!3m2!1sen!2spl!4v1771666920752!5m2!1sen!2spl" className='w-full aspect-video max-h-150' allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </section>
  )
}

export default MapSection
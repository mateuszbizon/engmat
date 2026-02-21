import React from 'react'
import Container from '../ui/container'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'

function FaqSection() {
  return (
    <section className='py-section-padding bg-white'>
        <Container>
            <h2 className='heading2 heading-margin-bottom text-center'>Najczęściej zadawane pytania</h2>
            <Accordion
                type="single"
                collapsible
                defaultValue="shipping"
                className="max-w-xl mx-auto"
            >
                <AccordionItem value="shipping">
                    <AccordionTrigger>Dlaczego ceny są takiego drogie?</AccordionTrigger>
                    <AccordionContent>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut magni quibusdam deleniti facilis nam harum commodi possimus? Reiciendis earum, consequuntur, placeat obcaecati eligendi voluptatem laborum, consectetur libero fuga dolorum facilis.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="returns">
                    <AccordionTrigger>Dlaczego ceny są takiego drogie?</AccordionTrigger>
                    <AccordionContent>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut magni quibusdam deleniti facilis nam harum commodi possimus? Reiciendis earum, consequuntur, placeat obcaecati eligendi voluptatem laborum, consectetur libero fuga dolorum facilis.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="support">
                    <AccordionTrigger>Dlaczego ceny są takiego drogie?</AccordionTrigger>
                    <AccordionContent>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut magni quibusdam deleniti facilis nam harum commodi possimus? Reiciendis earum, consequuntur, placeat obcaecati eligendi voluptatem laborum, consectetur libero fuga dolorum facilis.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </Container>
    </section>
  )
}

export default FaqSection
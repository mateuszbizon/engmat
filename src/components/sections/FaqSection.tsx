import React from 'react'
import Container from '../ui/container'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import { QUESTIONS } from '@/constants/questions'
import AnimatedContent from '../AnimatedContent'

function FaqSection() {
  return (
    <section className='py-section-padding bg-white'>
        <Container>
            <AnimatedContent>
                <h2 className='heading2 heading-margin-bottom text-center'>Najczęściej zadawane pytania</h2>
            </AnimatedContent>
            <Accordion
                type="single"
                collapsible
                defaultValue={QUESTIONS[0].value}
                className="max-w-xl mx-auto"
            >
                {QUESTIONS.map(item => (
                    <AccordionItem key={item.value} value={item.value}>
                        <AccordionTrigger>{item.question}</AccordionTrigger>
                        <AccordionContent>
                            {item.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </Container>
    </section>
  )
}

export default FaqSection
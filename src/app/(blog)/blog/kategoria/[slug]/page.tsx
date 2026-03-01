import AllCategoryBlogs from '@/components/blog/AllCategoryBlogs'
import Container from '@/components/ui/container'
import React from 'react'

type Props = {
    params: Promise<{ slug: string }>
}

async function CategoryPage({ params }: Props) {
  const { slug } = await params

  return (
    <>
        <section className='py-section-padding lg:py-[calc(theme(padding.section-padding)*2)]'>
            <Container>
                <h1 className='heading1'>Kategoria {slug}</h1>
            </Container>
        </section>
        <section className='pb-section-padding'>
            <Container>
                <AllCategoryBlogs slug={slug} />
            </Container>
        </section>
    </>
  )
}

export default CategoryPage
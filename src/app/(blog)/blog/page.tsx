import AllBlogs from '@/components/blog/AllBlogs'
import { Button } from '@/components/ui/button'
import Container from '@/components/ui/container'
import Link from 'next/link'
import React from 'react'

type Props = {
    searchParams: Promise<{ sort?: "asc" | "desc" }>
}

async function BlogPage({ searchParams }: Props) {
  const { sort = "desc" } = await searchParams

  return (
    <>
        <section className='py-section-padding lg:py-[calc(theme(padding.section-padding)*2)]'>
            <Container>
                <h1 className='heading1'>Wszystkie posty na blogu</h1>
            </Container>
        </section>
        <section className='pb-section-padding'>
            <Container>
                <p className='little-bigger-text mb-2 text-center lg:text-left'>Sortowanie</p>
                <div className='mb-5 flex gap-5 flex-wrap justify-center lg:justify-start'>
                    <Button size={"sm"} asChild>
                        <Link href={`/blog?sort=desc`}>
                            Od najnowszych
                        </Link>
                    </Button>
                    <Button size={"sm"} asChild>
                        <Link href={`/blog?sort=asc`}>
                            Od najstarszych
                        </Link>
                    </Button>
                </div>
                <AllBlogs sort={sort} />
            </Container>
        </section>
    </>
  )
}

export default BlogPage
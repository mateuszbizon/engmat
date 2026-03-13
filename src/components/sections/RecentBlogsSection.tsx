import React, { Suspense } from 'react'
import Container from '../ui/container'
import RecentBlogs from '../blog/RecentBlogs'

function RecentBlogsSection() {
  return (
    <section className='py-section-padding bg-linear-to-br from-background-light via-background-dark to-background'>
        <Container>
            <h2 className='heading2 text-center heading-margin-bottom'>Aktualności</h2>
            <Suspense>
                <RecentBlogs />
            </Suspense>
        </Container>
    </section>
  )
}

export default RecentBlogsSection
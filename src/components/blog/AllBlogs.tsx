import React from 'react'
import BlogCard from '../cards/BlogCard'
import { getAllPosts } from '@/sanity/posts/getAllPosts'

async function AllBlogs() {
    const { posts, success, message } = await getAllPosts()

  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10'>
        {posts.map(item => (
            <BlogCard key={item._id} blog={item} />
        ))}
    </div>
  )
}

export default AllBlogs
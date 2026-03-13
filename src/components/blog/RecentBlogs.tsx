import { getRecentPosts } from '@/sanity/posts/getRecentPosts'
import ErrorMessage from '../messages/ErrorMessage'
import BlogCard from '../cards/BlogCard'

async function RecentBlogs() {
    const { posts, success, message } = await getRecentPosts()

    if (!success) return <ErrorMessage description={message} />

  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10'>
        {posts.map(item => (
            <BlogCard key={item._id} blog={item} />
        ))}
    </div>
  )
}

export default RecentBlogs